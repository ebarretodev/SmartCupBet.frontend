import React from "react"
import { Anchor, BackTop, Divider } from "antd"
import { BsFillArrowUpCircleFill, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import Logo from "./Logo_footer.png"

const { Link } = Anchor

const AppFooter = () => {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="footer-images">
                    <img src={Logo} alt="logo SmartCupBet" />
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                </div>
                <Divider className="footer-divider" type="vertical" />

                <div className="copyright">
                    <Anchor affix={false} targetOffset={64}>
                        <Link href="/#whatisit" title="What is" />
                        <Link href="/#howitworks" title="How it works" />
                        <Link href="/#whoweare" title="Who we are" />
                        <Link href="/" title="Terms & Conditions" />
                        <Link href="/" title="Scoring Rules" />
                        <Link href="/" title="Privacy Policy" />
                        <p style={{ padding: "4px 8px", color: "#856D7B" }}>
                            Copyright &copy; 2022, SmartCupBet Alls rights reserved
                        </p>
                    </Anchor>
                </div>
            </div>

            <BackTop>
                <div className="goTop">
                    <BsFillArrowUpCircleFill />
                </div>
            </BackTop>
        </div>
    )
}

export default AppFooter
