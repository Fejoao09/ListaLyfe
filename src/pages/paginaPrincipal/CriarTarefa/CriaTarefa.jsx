import { useState } from "react";
import "./criaTarefa.css";

export default function CriaTarefa({ addTodo }) {

    const [titulo, setTitulo] = useState("");
    const [descrisao, setDescrisao] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !descrisao) return;
        addTodo(titulo, descrisao)
        setTitulo("");
        setDescrisao("");
    }

    return (
        <form className="criarTarefas" onSubmit={handleSubmit}>

            <p>Titulo</p>
            <input
                type="text"
                className="titulo"
                placeholder="Digite o titulo da nova tarefa"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)} /> <br></br>
            <p>Descrisão</p>
            <textarea
                type="text"
                className="descrisao"
                placeholder="Digite a descrição da nova tarefa"
                value={descrisao}
                onChange={(e) => setDescrisao(e.target.value)} /> <br></br>

            <button type="submit" className="novaTarefa">Criar nova tarefa</button>
        </form>
    )
}