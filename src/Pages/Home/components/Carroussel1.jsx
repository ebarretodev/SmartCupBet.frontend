import React from "react"
import { Typography, Button } from "antd"
import CarrousselImage from "../../../images/Home/Carrossel01.jpg"
import { useMediaQuery } from "../../../hooks/useMediaQuery"


const { Title, Text } = Typography

function Carroussel1() {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    const handleLogin = () => {}

    return (
        <div className="carrousel carrousel1-image" style={{ backgroundImage: `url(${CarrousselImage})` }}>
            <div className="carrousel-title carrousel1-title">
                <Title
                    className="fontAvenir "
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: isMobileScreen ? 35 : 40,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? .8 : 0.8,
                    }}
                >
                    DECENTRALIZED
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "#fb004d",
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: isMobileScreen ? 85 : 115,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? .9 : 0.8,
                        letterSpacing: "-8px",
                    }}
                >
                    SECURE
                </Title>
                <Title
                    className="fontAvenir"
                    style={{
                        color: "white",
                        marginBottom: "0px",
                        marginTop: 0,
                        fontSize: isMobileScreen ? 60 : 75,
                        textShadow: "1px 1px 7px #000",
                        lineHeight: isMobileScreen ? .7 : 0.8,
                    }}
                >
                    AND FUN!
                </Title>
                <Button
                    type="primary"
                    shape="round"
                    className="bt-makebet"
                    onClick={handleLogin}
                    style={{
                        marginTop: "10px",
                        marginLeft: isMobileScreen ? "20%" : "30%",
                    }}
                >
                    Make your bet
                </Button>
            </div>
            <div className=" carrousel-text fontAvenir">
                <div className="bg-432808-transparent">
                    <div className="container-fluid">
                        <Title level={3} style={{ color: "white" }}>
                            Smart bet in the right place
                        </Title>
                    </div>
                </div>
                <div className="bg-432808-31074D">
                    <div className="container-fluid">
                        <Text>
                            Take advantage of the blockchain technology and bet on a decentralized
                            and secure network. Smart contracts are the backbone of the SmartCupBet
                            that guarantee an open, fair and automated way to play just in a few
                            clicks.
                        </Text>
                        <br />
                        <Text>{"   "}</Text>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carroussel1
