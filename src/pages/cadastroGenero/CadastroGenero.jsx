//importacao dos hooks colocamos em primeiro lugar, e so depois colocamos os componentes
import { useEffect, useState } from "react";
import api from "../../Services/services";
//importar o sweet alert
import Swal from 'sweetalert2'
//importacao dos componentes colocamos depois 
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

//dentro do meu projeto eu preciso importar o useState

const CadastroGenero = () => {

    //quando vamos criar uma funcao ou criar um hook nos devemos fazer ele fora do return, so assim ele sera declarado de fato dentro do return

    //nome do genero
    //a primeira variavel eh a que inicia com o numero que voce quiser 
    //a segunda variavel serve para atualizar
    //o ponto e virgula e opcional 
    //estamos usando o (""), pois ele eh uma string vazio, dando possibilidade de escrever algo dentro
    const [genero, setGenero] = useState("");
    //array significa variedade de informações
    const [listaGenero, setListaGenero] = useState([]);

    //o genero esta sendo usado para inserirmos um valor e vamos usar o setGenero para atualizar e entao de fato permanecer 

    function alerta(icone, mensagem) {
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
    async function cadastrarGenero(e) {
        e.preventDefault();
        //vereficar se o input esta vindo vazio 
        //o trim serve para eliminar todos os espacos disponiveis e inseridos 
        if (genero.trim() !== "") {
            try {
                //cadastrar um genero: post 
                //usamos chaves pois estamos trabalhando com propriedades, valor, objeto
                await api.post("genero", { nome: genero });
                alerta("success", "Cadastro realizado com sucesso!")
                setGenero("");
            } catch (error) {
                alerta("error", "Erro! - Entre em contato com o suporte!")
            }
        } else {
            alerta("error", "Erro! Preencha o campo!")
        }

        //try => tentar(o esperado que aconteca)
        //catch => lanca a excecao
    }

    //uma funcao nao assincrona acontece simultaneamente tudo, ou seja o comando sera gerado tudo de uma vez, porem se voce usar uma funcao assincrona com a ajuda do await ele vai esperar algo acontecer para enfim concluir a acao da funcao, por exemplo o codigo de baixo, que ele usa o async, pois indica que eh uma funcao assincrona e o uso do await para estabelecer uma conexao com a api e depois poder prosseguir a acao do codigo

    //assincrona
    async function listarGenero() {
        //trc e de enter 
        try {
            //conexao com a api e quero uma listagem da tabela de genero
            //espereeeeeee
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            //log e de enter
            console.log(error);

        }

    }

    //funcao de excluir o genero
    async function excluirGenero(generoId) {
        try {
            await api.delete(`genero/${generoId.idGenero}`)
            alerta("success", "Exclusão realizada com sucesso!")
        } catch (error) {
            console.log(error);
        }
        listarGenero();
    }


    // //teste 
    // //precisamos do array de dependencia pois sem ele, toda a vez que a pagina roda ele esquece de todas as coisas sao inseridas nele 
    // useEffect(() => {
    //     console.log(genero);
    // },[genero]);

    //assim que a pagina renderizar o metodo listarGenero() sera chamado
    useEffect(() => {
        listarGenero();
    }, [genero])



    //fim do teste

    return (
        <>
            <Header />
            <main>
                <Cadastro tituloCadastro="Cadastro de Genero" visibilidade="none" placeholder="Genero"
                    //atribuindo a funcao:
                    funcCadastro={cadastrarGenero}
                    //atribuindo o valor ao input:
                    //o valorInput esta vindo dentro do input do componente cadastro
                    valorInput={genero}
                    //atribuindo a funcao que atualiza o meu genero, ou seja retomando o genero usamos para inserir tal valor e o setGenero usamos para atualizar
                    setValorInput={setGenero}
                />

                <Lista 
                nomeTitulo="Lista dos Generos" 
                visibilidade="none" 
                lista = {listaGenero} 
                funcExcluir = {excluirGenero}/>
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;
