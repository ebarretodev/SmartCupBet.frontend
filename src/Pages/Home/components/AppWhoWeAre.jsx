import React from "react"
import { Row, Col, Typography } from "antd"
import { FaLinkedinIn, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa"
import RafaelImage from "../../../images/team/Rafael.png"
import EliabelImage from "../../../images/team/Eliabel.png"

const { Title, Text } = Typography

function AppWhoWeAre() {
    const team = [
        {
            name: "Rafael Machtura",
            img: RafaelImage,
            linkedin: "https://www.linkedin.com/in/eliabelbarreto/",
            twitter: "https://twitter.com/eliabeljunior",
            github: "https://github.com/ebarretodev/",
        },
        {
            name: "Eliabel Barreto",
            img: EliabelImage,
            linkedin: "https://www.linkedin.com/in/eliabelbarreto/",
            twitter: "https://twitter.com/eliabeljunior",
            github: "https://github.com/ebarretodev/",
            discord: "https://",
        },
    ]
    return (
        <div
            id="whoweare"
            className="bg-A90C3C"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
        >
            <div className="container-fluid">
                <div className="ourteam">
                    <Title level={1} className="fontFraBk" style={{ color: "white" }}>
                        Who are we?
                    </Title>
                    <Text className="fontFraBk">
                        Two devs and enthusiasts of the blockchain network as a simple way to
                        transact values between individuals and automated projects.
                    </Text>
                    <br />
                </div>
                <Row justify="center">
                    {team.map((person) => (
                        <Col md={{ span: 8 }}>
                            <div className="card">
                                <div>
                                    <img src={person.img} alt={person.name} />
                                </div>
                                <div className="text">
                                    <Text className="card-text">{person.name} </Text>
                                    <a href={person.linkedin} target="_blank" rel="noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href={person.twitter} target="_blank" rel="noreferrer">
                                        <FaTwitter />
                                    </a>
                                    <a href={person.github} target="_blank" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                    <a href={person.discord} target="_blank" rel="noreferrer">
                                        <FaDiscord />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default AppWhoWeAre
