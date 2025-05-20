import { Fragment, use } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";
import Swal from 'sweetalert2'

const CadastroFilme = () => {
    const [listaFilme, setListaFilme] = useState([])
    const [listaGenero, setListaGenero] = useState([]);
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");
    //funcao para trazer os generos no meu select
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarGenero()
    }, [])

    //irei criar meus hooks e minhas funcoes fora do return, pois ele podem ser remetidos como um componente, ou seja, sao criados fora para serem chamados dentro
    //hook de useState: a primeira variavel criada dentro do array eh o atual, ou seja, caso no futuro queremos fazer um cadastro de algo novo, usamos a primeira variavel. A segunda variavel serve para atualizar. Sendo assim, na primeira criamos o estado inicial e a segunda da a possibilidade de mudar o valor.


    async function cadastrarFilme(e) {
        //irei vereficar se o input esta vindo vazio
        e.preventDefault();
        //irei usar o trim, pois ele tem a funcao de apagar todos os espacos entre as palavras, ou seja, caso o usuario tenha colocado apenas espaco com a intencao de enviar sem nenhum conteudo, mas apenas com o espacao ele ira apagar todos os espacos feitos dentro do input, enfim deixando o input vazio, sem a possibilidade de ser enviado
        if (filme.trim() !== "") {
            //try catch tratamento de exceção
            try {
                // Envia uma requisição POST para a rota "filme" da API
                // O corpo da requisição é um objeto com a chave "nomeTitulo"
                // O valor de "nomeTitulo" vem do estado 'filme'
                await api.post("filme", { titulo: filme, idGenero: genero });
                //aqui estou utilizando a funcao alertar, onde consiste em uma mensagem em pop-up no canto superior da tela, assim como as configuracoes da funcao, ou seja, ela ira aparecer o icone e a mensagem
                alertar("success", "Cadastro realizado com sucesso!")
                // Limpa o campo de entrada após o envio, resetando o estado 'filme' para uma string vazia
                setFilme("");
                setGenero("");

            } catch (error) {
                alertar("error", "Erro! - Entre em contato com o suporte!")

            }
        }
    }

    async function listarFilme() {
        //trc e de enter 
        try {
            //conexao com a api e quero uma listagem da tabela de genero
            //espereeeeeee
            const resposta = await api.get("filme");
            setListaFilme(resposta.data);
        } catch (error) {
            //log e de enter
            console.log(error);

        }

    }

    useEffect(() => {
        listarFilme();
    }, [listaFilme])


    //funcao de alertar
    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }
    //aqui iremos usar uma funcao assincrona, pois ela nao faz tudo que o codigo pede simultaneamente, ou seja tudo de uma vez, ela no caso vai esperar fazer uma ligacao com a api e depois fazer a acao mandada
    return (
        <Fragment>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="Filme"
                    lista={listaGenero}
                    funcCadastro={cadastrarFilme}
                    valorInput={filme}
                    setValorInput={setFilme}
                    valorSelect={genero}
                    setValorSelect={setGenero}
                />
                <Lista nomeTitulo="Lista dos Filmes"
                lista={listaFilme}

                />
            </main>
            <Footer />
        </Fragment>
    )
}

export default CadastroFilme;
