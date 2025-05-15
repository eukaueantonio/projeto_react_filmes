import "./Cadastro.css";
import Botao from "../../components/botao/Botao";
const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder={`Digite o nome do ${props.placeholder}`}
                            //value eh valor que estamos dando ao input
                            value={props.valorInput}
                            //ao mudar o input algo acontece 
                            //quando usamos apenas o parenteses usamos uma funcao anonima, generica, mesmo sem nome ela continua sendo uma funcao
                            //ele vai atualizar o estado do pai ao digitar 
                            //target esta indo buscar o valor do "e"
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Genero</label>
                        <select name="genero" id="">
                            <option value="" disabled selected>Selecione</option>
                            <option value="">opcao 1</option>
                            <option value="">opcao 2</option>
                            <option value="">opcao 3</option>
                        </select>
                    </div>
                    <Botao nomeDoBotao="Cadastrar" />
                </div>
            </form>
        </section>
    )
}

export default Cadastro;