import "./Lista.css"
import Editar from "../../assents/img/pen-to-square-solid.svg";
import Excluir from "../../assents/img/trash-can-regular.svg";
const Lista = (props) => {
    return (
        <section className=" layout_grid listagem">
            <h1>{props.nomeTitulo}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* cabecalho da tabela */}
                    <thead>
                        {/* t de tabela e r de linha */}
                        <tr className="table_cabecalho">
                            {/* t tabela e h de cabeca */}
                            <th>Nome</th>
                            <th style={{display:props.visibilidade}}>Genero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody = corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome">Velozes e Furiosos</td>
                            <td data-cell="Genero" style={{display:props.visibilidade}}>Acao</td>
                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                        
                     
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;