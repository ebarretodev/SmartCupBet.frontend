import React from "react"
import Logo from "../../../logo.svg"
import { useNavigate } from "react-router-dom"
import { Anchor, Button, Divider, notification } from "antd"
import { useMoralis } from "react-moralis"

const { Link } = Anchor

const AppHeader = () => {
    const { enableWeb3 } = useMoralis()
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (window.ethereum === undefined) {
            notification["error"]({
                message: "No wallet available",
                description: "Please, install Metamask or another wallet to use this site.",
                duration: 10,
                style: {
                    color: '#fff'
                }
            })
        } else {
            if (window.localStorage.getItem("connected") === null) {
                await enableWeb3()
                if (typeof window != "undefined") {
                    window.localStorage.setItem("connected", "inject")
                } else {
                    return
                }
            }
            navigate("/betplace")
        }
    }
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="header-logo">
                    <img src={Logo} alt="logo smartcupbet" />
                </div>
                <div className="mobileHidden" style={{ justifyContent: 'flex-end' }}>
                    <Anchor affix={false} targetOffset={64}>
                        <div className="menu">
                            <Link href="#whatisit" title="What is?" />
                            <Divider className="header-divider" type="vertical" />
                            <Link href="#howitworks" title="How it Works?" />
                            <Divider className="header-divider" type="vertical" />
                            <Link href="#whoweare" title="Who we are?" />
                            <Button
                                type="primary"
                                shape="round"
                                className="bt-login"
                                onClick={handleLogin}
                            >
                                Connect
                            </Button>
                        </div>
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" shape="round" className="bt-login" onClick={handleLogin}>
                        Connect
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
