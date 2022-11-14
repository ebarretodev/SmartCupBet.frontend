import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
//Browser Router to controll routes
import { BrowserRouter } from "react-router-dom"
//Redux to controll global states
import { store } from "./redux/store"
import { Provider } from "react-redux"
//Moralis provider for web3 connect
import { MoralisProvider } from "react-moralis"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <MoralisProvider initializeOnMount={false}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </MoralisProvider>
    </React.StrictMode>
)
