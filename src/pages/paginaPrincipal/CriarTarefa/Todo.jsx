import "../paginaPrincipal.css";
import React from "react";
import excluir from "../../../imagens/excluir.svg";
import concluir from "../../../imagens/concluir.svg";

export default function Todo({ todo, removeTodo, completoTodo }) {

    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className="content">
                <h2>{todo.titulo}</h2>
                <p>{todo.descrisao}</p>
                <img
                    className="excluir"
                    src={excluir}
                    onClick={() => removeTodo(todo.id)}
                    alt="botão para excluir a tarefa"
                    title="Excluir tarefa"
                />
                {!todo.isCompleted && (
                    <>
                        <img
                            className="concluir"
                            src={concluir}
                            onClick={() => completoTodo(todo.id)}
                            alt="botão para concluir a tarefa"
                            title="Tarefa concluída"
                        />
                    </>
                )}
            </div>
        </div>
    )
}