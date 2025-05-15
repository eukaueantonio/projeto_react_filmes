import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";


const CadastroFilme = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Cadastro tituloCadastro="Cadastro de Filme" placeholder="Filme" />
                <Lista nomeTitulo="Lista dos Filmes" />
            </main>
            <Footer />
        </Fragment>
    )
}

export default CadastroFilme;
