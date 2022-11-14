import React from "react"
import { Typography, Button } from "antd"
import CarrousselImage from "../../../images/Home/Carrossel03.jpg"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
const { Title, Text } = Typography

function Carroussel3() {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    const handleLogin = () => {}
    return (
        <div className="carrousel" style={{ backgroundImage: `url(${CarrousselImage})` }}>
            <div className="carrousel-title carrousel3-title">
                <Title
                    className="fontAvenir "
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: 0,
                        textShadow: "1px 1px 7px #000",
                        fontSize: isMobileScreen ? 60 : 80,
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    WEB3{" "}
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "#fb004d",
                        marginBottom: "0px",
                        marginTop: 0,
                        textShadow: "1px 1px 7px #000",
                        fontSize: isMobileScreen ? 40 : 50,                        
                        lineHeight: isMobileScreen ? 1 : 0.8,
                        letterSpacing: "-4px",
                    }}
                >
                    WORLD CUP
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: 0,
                        textShadow: "1px 1px 7px #000",
                        fontSize: isMobileScreen ? 50 : 70,
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    BETTING
                </Title>
                <Button
                    type="primary"
                    shape="round"
                    className="bt-makebet"
                    onClick={handleLogin}
                    style={{
                        marginTop: "10px",
                        marginLeft: isMobileScreen ? "10%" : "20%",
                    }}
                >
                    Make your bet
                </Button>
            </div>
            <div className=" carrousel-text fontAvenir">
                <div className="bg-31074D-transparent">
                    <div className="container-fluid">
                        <Title level={3} style={{ color: "white" }}>
                            Sports bet driven by innovation
                        </Title>
                    </div>
                </div>
                <div className="bg-31074D">
                    <div className="container-fluid">
                        <Text>
                            On SmartCupBet you benefit from the decentralized, secure and automated
                            environment of the Web3 to bet against your friends and anyone around
                            the globe on the most important sport event of the universe!
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carroussel3
