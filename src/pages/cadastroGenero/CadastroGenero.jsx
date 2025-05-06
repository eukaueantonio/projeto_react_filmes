import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {
    return (
        <>
        <Header/>
        <main>
            <Cadastro tituloCadastro="Cadastro de Genero" visibilidade ="none" placeholder ="Genero"/>
            
            <Lista nomeTitulo ="Lista dos Generos" visibilidade = "none"/>
        </main>
        <Footer/>
        </>
    )
}

export default CadastroGenero;
