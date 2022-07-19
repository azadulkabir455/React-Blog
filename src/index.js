import React from "react";
import ReactDOM  from "react-dom";
import {GlobalDataContainer} from "./Context/Context";
import { BrowserRouter as Routers } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";

ReactDOM.render(
<>
    <React.StrictMode>
        <GlobalDataContainer>
            <Routers>
                <App />
            </Routers>
        </GlobalDataContainer>
    </React.StrictMode>
</>, 

document.querySelector("#root"));