import logo from "../../imagens/ListaLyfe-logoCinza.png";
import "./paginaEntrar.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import { useState } from "react";

export default function Entrar() {
    const { signin } = useAuth();
    const navegate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setErro] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setErro("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setErro(res);
            return;
        }

        navegate("/principal")
    }

    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo cinza do site" title="logo da pagina" />
            </header>
            <div className="dadosConta">
                <h1>Entrar</h1>

                <label id="email">Email:</label>
                <input className="email" type="email" value={email} placeholder="Digite o seu email"
                    onChange={(e) => [setEmail(e.target.value), setErro("")]} />

                <label id="senha">Senha:</label>
                <input className="senha" type="password" value={senha} placeholder="Digite a sua senha"
                    onChange={(e) => [setSenha(e.target.value), setErro("")]} /><br></br>

                <label>{error}</label><br></br>

                <button className="botaoEntrar" onClick={handleLogin}>Entrar</button><br></br>
                <a href="/cadastro"><button className="botaoCriar">Criar conta</button></a>
            </div>
        </div>
    )
}