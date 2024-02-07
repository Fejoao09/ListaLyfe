import "./erroPage.css";
import erro from "../../imagens/Untitled_design-removebg-preview.png";

export default function PaginaErro() {
    return (
        <div className="erro">
            <p>Erro 404, clique <a href="http://localhost:3000/">aqui</a>  para retornar para pagina principal </p>
            <img src={erro} alt="imagem de obstaculo indicando erro" />
        </div>
    );
};