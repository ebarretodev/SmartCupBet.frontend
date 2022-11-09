import React from "react"
import { BackTop } from "antd"
import { BsFillArrowUpCircleFill } from "react-icons/bs"


const AppFooter = () => {
    return (
        <div className="container-fluid">
            <div className="copyright">
                <p>Copyright &copy; 2022, SmartCupBet</p>
            </div>
            <BackTop >
                <div className="goTop">
                    <BsFillArrowUpCircleFill />
                </div>
            </BackTop>
        </div>
    )
}

export default AppFooter
