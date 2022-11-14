import React from "react"
import Logo from "../../../logo.svg"
import { useNavigate } from "react-router-dom"
import { Button, Anchor } from "antd"
import { useMoralis } from "react-moralis"
import useEthBalance from "./../../../hooks/useEthBalance"

const { Link } = Anchor 

const AppHeader = () => {
    const { account } = useMoralis()
    const navigate = useNavigate()
    const balance = useEthBalance()
    const handleLogout = async () => {
        window.localStorage.removeItem("connected")
        navigate("/")
    }
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="header-logo">
                    <img src={Logo} alt="logo smartcupbet" />
                </div>
                <div className="mobileHidden">
                    <div>
                        Address: {account.slice(0, 5).toUpperCase()}...
                        {account.slice(account.length - 2).toUpperCase()}
                    </div>
                    <div>Balance: {balance} MATIC</div>
                    <div>Grand Prize Pos: # </div>
                    <div>Points: </div>
                    <Anchor affix={false} targetOffset={64}>
                        <div className="menu">
                            <Button
                                type="primary"
                                shape="round"
                                className="bt-login"
                                onClick={handleLogout}
                            >
                                Back
                            </Button>
                        </div>
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button
                        type="primary"
                        shape="round"
                        className="bt-login"
                        onClick={handleLogout}
                    >
                        Connect
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
