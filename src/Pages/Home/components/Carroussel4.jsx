import React, { useEffect, useState } from "react"
import { Typography, Button } from "antd"
import CarrousselImage from "../../../images/Home/Carrossel04.jpg"
import { useMediaQuery } from "../../../hooks/useMediaQuery"

const { Title, Text } = Typography

function Carroussel4() {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    const handleLogin = () => {}

    return (
        <div className="carrousel" style={{ backgroundImage: `url(${CarrousselImage})` }}>
            <div className="carrousel-title">
                <Title
                    className="fontAvenir "
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: isMobileScreen ? 70 : 90,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    RECEIVE{" "}
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "#fb004d",
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: isMobileScreen ? 55 : 70,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: 0.8,
                    }}
                >
                    YOUR PRIZE
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: 0,
                        fontSize: isMobileScreen ? 40 : 50,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    AUTOMATICALLY
                </Title>
                <Button
                    type="primary"
                    shape="round"
                    className="bt-makebet"
                    onClick={handleLogin}
                    style={{
                        marginTop: "10px",
                        marginLeft: isMobileScreen ? "20%" : "25%",
                    }}
                >
                    Make your bet
                </Button>
            </div>
            <div className=" carrousel-text fontAvenir">
                <div className="bg-FB004D-transparent">
                    <div className="container-fluid">
                        <Title level={3} style={{ color: "white" }}>
                            Easy to bet, <br /> easy to cash out
                        </Title>
                    </div>
                </div>
                <div className="bg-FB004D-31074D">
                    <div className="container-fluid">
                        <Text>
                            Use Brave web3 browser or connect any crypto wallet to the SmartCupBet
                            site to start betting in a rapidly and secure way. Automatically cash
                            out your prize after each match — and use the amount earned to bet on
                            the next match!
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carroussel4
