import React from 'react'
import { Row, Col, Typography } from "antd"

const {Title, Text} = Typography

function AppWhatIsIt() {
  return (
      <div id="whatisit" className="bg-A90C3C" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
          <div className="container-fluid flexHorizontal">
              <Row gutter={[24, 16]}>
                  <Col lg={{ span: 12 }}>
                      <div className="left-div">
                          <Title level={1} className="fontFraBk" style={{ color: "white" }}>
                              What is?
                          </Title>
                          <Text className="fontFraBk">
                              SmartCupBet is a World Cup Web3 betting game that combines two
                              competitions in the same project:
                          </Text>
                          <br />
                          <Text>{"   "}</Text>
                          <br />
                          <Text className="fontFraBk">
                              Match-by-match betting with immediate payout; and the Grand Prize
                              Bet/Pool, where in each round you accumulate points for the final
                              prize.
                          </Text>
                          <br />
                          <Text>{"   "}</Text>
                          <br />
                          <Text className="fontFraBk">
                              Compete against anyone in the world in a decentralized and secure way
                              for a hefty sum of cryptocurrencies and exclusive NFTs!
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

export default AppWhatIsIt