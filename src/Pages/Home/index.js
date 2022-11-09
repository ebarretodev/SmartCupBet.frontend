import { Layout } from "antd"
import React from "react"
import AppFooter from "./components/Footer"
import AppHeader from "./components/Header"
import Carroussel from './components/Carroussel';
import AppWhatIsIt from "./components/AppWhatIsIt";
import AppHowItWorks from "./components/AppHowItWorks";
import AppWhoWeAre from "./components/AppWhoWeAre";

const { Content, Header, Footer } = Layout

const Home = () => {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <Carroussel />
            </Content>
            <Content>
                <AppWhatIsIt/>
            </Content>
            <Content>
                <AppHowItWorks/>
            </Content>
            <Content>
                <AppWhoWeAre/>
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    )
}

export default Home
