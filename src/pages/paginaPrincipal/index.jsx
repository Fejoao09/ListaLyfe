import "./paginaPrincipal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../imagens/ListaLyfe-logoCinza.png";
import useAuth from "../../hooks/useAuth";
import CriaTarefa from "./CriarTarefa/CriaTarefa";
import Todo from "./CriarTarefa/Todo";

export default function Principal() {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const [todos, setTodos] = useState([
        {
            id: 1,
            titulo: "Atualizar Currículo",
            descrisao: "Revisar meu currículo e adicionar novos certificados",
            isCompleted: false
        },
        {
            id: 2,
            titulo: "Férias",
            descrisao: "Procurar melhores destinos para a proxima viagem",
            isCompleted: true
        }
    ]);

    const addTodo = (titulo, descrisao) => {
        const newTodos = [...todos, {
            id: Math.floor(Math.random() * 1000),
            titulo,
            descrisao,
            isCompleted: false,
        }];
        setTodos(newTodos);
    }

    const removeTodo = (id) => {
        const newTodos = [...todos];
        const filterTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
        setTodos(filterTodos);
    }

    const completoTodo = (id) => {
        const newTodos = [...todos]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = true : todo)
        setTodos(newTodos)
    }

    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo cinza do site" title="logo da pagina" />
                <button className="entrar" onClick={() => [signout(), navigate("/")]}>Sair</button>
            </header>

            <CriaTarefa addTodo={addTodo} />

            <div className="areaTarefas">
                <h1>Tarefas atuais</h1>
                <div className="tarefas">

                    {todos.map((todo) => (
                        todo.isCompleted === false ?
                            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completoTodo={completoTodo} /> : null
                    ))}
                </div>
            </div>
            <div className="areaTarefas">
                <h1>Concluidas</h1>
                <div className="tarefas">
                    {todos.map((todo) => (
                        todo.isCompleted === true ?
                            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completoTodo={null} /> : null
                    ))}
                </div>
            </div>
            <footer className="final">
                <p>LinkedIn: <a href="https://www.linkedin.com/in/fernando-joão-gonçalves-192b8b227/">Fernando João Gonçalves</a></p>
                <p>GitHub: <a href="https://github.com/Fejoao09?tab=overview&from=2023-01-01&to=2023-01-28">Fejoao09</a></p>
                <p>Telefone: <span style={{ color: "rgb(195, 202, 207)" }}>(77) 9 9965-3365</span></p>
                <p>Email: <span style={{ color: "rgb(195, 202, 207)" }}>fejoao09@gmail.com ou fgoncalves749@gmail.com </span></p>
            </footer>
        </div>

    )
}