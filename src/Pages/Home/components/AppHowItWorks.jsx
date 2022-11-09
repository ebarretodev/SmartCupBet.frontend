import React from "react"
import { Row, Col, Typography } from "antd"

const { Title, Text } = Typography

function AppHowItWorks() {
    return (
        <div
            id="howitworks"
            className="bg-FFFFFF"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
        >
            <div className="container-fluid flexHorizontal">
                <Row gutter={[24, 16]}>
                    <Col lg={{ span: 12 }}>
                        <div className="left-div">
                            <Title level={1} className="fontFraBk" style={{ color: "black" }}>
                                How does it work?
                            </Title>
                            <Text className="fontFraBk" style={{ color: "black" }}>
                                To participate, simply connect your cryptocurrency wallet or Brave
                                web3 browser with MATIC tokens and place your bets up to 10 minutes
                                before the start of each match.
                            </Text>
                            <br />
                            <Text>{"   "}</Text>
                            <br />
                            <Text className="fontFraBk" style={{ color: "black" }}>
                                With USD 3 bets, you play in the match by match competition, and
                                also accumulate points for the Grand Prize Pool.
                            </Text>
                            <br />
                            <Text>{"   "}</Text>
                            <br />
                            <Text className="fontFraBk" style={{ color: "black" }}>
                                Hitting the result squarely, you get more points; guessing the
                                winner or draw, you still get some points; if you miss the bet, you
                                are left with nothing.
                            </Text>
                            <br />
                            <Text>{"   "}</Text>
                            <br />
                            <Text className="fontFraBk" style={{ color: "black" }}>
                                At the end of the World Cup, the top 3 players will split the grand
                                final prize and earn exclusive NFTs. Those who participate in at
                                least 50% of the bets will also receive a share of the big pot.
                            </Text>
                            <br />
                            <Text>{"   "}</Text>
                            <br />
                            <Text className="fontFraBk" style={{ color: "black" }}>
                                Learn more about the participation rules here.
                            </Text>
                            <br />
                            <Text>{"   "}</Text>
                            <br />
                        </div>
                    </Col>
                    <Col lg={{ span: 12 }}>
                        <div className="right-div">
                            <iframe
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/j_Q0F5ng6xU"
                                title="SmartCupBet"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppHowItWorks
