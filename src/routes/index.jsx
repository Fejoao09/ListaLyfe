import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "../pages/paginaPrincipal";
import Entrar from "../pages/paginaEntrar";
import PaginaErro from "../pages/erroPage";
import Cadastro from "../pages/paginaCadastro";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Entrar />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/principal" element={<Private Item={Principal} />} />
                    <Route path="/" element={<Entrar />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route path="*" element={<PaginaErro />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;