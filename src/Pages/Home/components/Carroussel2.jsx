import React, { useEffect, useState } from "react"
import { Typography, Button } from "antd"
import CarrousselImage from "../../../images/Home/Carrossel02.jpg"
import { useMediaQuery } from "../../../hooks/useMediaQuery"

const { Title, Text } = Typography

function Carroussel2() {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    const handleLogin = () => {}

    return (
        <div className="carrousel" style={{ backgroundImage: `url(${CarrousselImage})` }}>
            <div className="carrousel-title carrousel2-title">
                <Title
                    className="fontAvenir "
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: isMobileScreen ? 30 : 40,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    CONNECTING{" "}
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "#fb004d",
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: isMobileScreen ? 60 : 100,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: 0.8,
                        letterSpacing: "-6px",
                    }}
                >
                    SOCCER
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: 0,
                        fontSize: isMobileScreen ? 30 : 45,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    AND TECH FANS
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: 0,
                        fontSize: isMobileScreen ? 23 : 43,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? 1 : 0.8,
                    }}
                >
                    IN THE{" "}
                    <span
                        style={{
                            color: "#fb004d",
                            letterSpacing: "-3px",
                            fontSize: isMobileScreen ? 23 : 40,
                        }}
                    >
                        BLOCKCHAIN
                    </span>
                </Title>
                <Button
                    type="primary"
                    shape="round"
                    className="bt-makebet"
                    onClick={handleLogin}
                    style={{
                        marginTop: "10px",
                        marginLeft: isMobileScreen ? "10%" : "25%",
                    }}
                >
                    Make your bet
                </Button>
            </div>
            <div className=" carrousel-text fontAvenir">
                <div className="bg-FB004D-transparent">
                    <div className="container-fluid">
                        <Title level={3} style={{ color: "white" }}>
                            Compete for prizes in crypto and exclusive NFTs in the Grand Prize
                            Competition
                        </Title>
                    </div>
                </div>
                <div className="bg-FB004D-31074D">
                    <div className="container-fluid">
                        <Text>
                            By betting on each match you are already earning points for the Grand
                            Prize Pool. The top three competitors will split the prize and earn
                            exclusive NFTs! Fully supporters of the project will also receive a
                            share of the total value locked after the grand final{" "}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carroussel2
