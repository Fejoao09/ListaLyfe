import "./paginaCadastro.css";
import logo from "../../imagens/ListaLyfe-logoCinza.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !senha | !senhaConf) {
            setError("Preencha todos os campos");
            return;
        } else if (senha !== senhaConf) {
            setError("As senhas não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Conta cadastrada com sucesso!");
        navigate("/");
    }


    return (
        <div>
            <img className="logo" src={logo} alt="logo cinza do site" title="logo da pagina" />
            <div className="novaConta">
                <h1>Crie sua conta</h1>

                <label id="novoEmail">Email:</label>
                <input className="novoEmail" type="email" value={email} placeholder="Digite um novo email"
                    onChange={(e) => [setEmail(e.target.value), setError("")]} />

                <label id="novaSenha">Senha:</label>
                <input className="novaSenha" type="password" value={senha} placeholder="Digite uma nova senha"
                    onChange={(e) => [setSenha(e.target.value), setError("")]} /><br></br>

                <label id="confirmaSenha">Confirmar senha:</label>
                <input className="confirmaSenha" type="password" value={senhaConf} placeholder="Digite novamente a senha"
                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]} /><br></br>
                <label>{error}</label><br></br>

                <button className="criar" onClick={handleSignup}>Criar conta</button>
            </div>
        </div>
    )
}