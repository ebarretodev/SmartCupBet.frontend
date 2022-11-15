import { Layout } from "antd"
import React from "react"
import AppFooter from "../common/Footer"
import AppHeader from "./components/Header"
import BackgroundImage from "../../images/BetPlace/backgroundBetPlace.png"
import AppSider from './components/AppSider';
import AppTable from './components/AppTable';

const { Content, Header, Footer } = Layout

const Home = () => {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <div
                    style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundRepeat: "repeat",
                        backgroundPosition: "top right",
                        backgroundSize: "100%",
                        paddingBottom: 10
                    }}
                >
                    <div className="container-fluid" style={{ paddingTop: 120 }}>
                        <div className="betplace">
                            <div className="betplace-sider"><AppSider /></div>
                            <div className="betplace-main"><AppTable /></div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    )
}

export default Home
