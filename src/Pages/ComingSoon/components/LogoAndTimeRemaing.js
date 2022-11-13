import React from "react"
import logo from "../images/logo.png"
import { Typography } from "antd"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setLaunched } from "../../../redux/reducers/pageReducer"
const { Text } = Typography

const LogoAndTimeRemaing = () => {
    const dispatch = useDispatch()
    const [showTime, setShowTime] = useState(false)
    const [timeNow, setTimeNow] = useState({
        daysRemaing: 0,
        hoursRemaing: 0,
        minutesRemaing: 0,
        secondsRemaing: 0,
    })

    const calcTimeRemaing = () => {
        let date_1 = new Date("November 14, 2022 14:00:00 GMT-3:00")
        let date_2 = new Date()

        let difference = date_1.getTime() - date_2.getTime()
        
        let daysRemaing = Math.floor(difference / (1000 * 60 * 60 * 24))
        let hoursRemaing = Math.floor(
            (difference - daysRemaing * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        let minutesRemaing = Math.floor(
            (difference - daysRemaing * (1000 * 60 * 60 * 24) - hoursRemaing * (1000 * 60 * 60)) /
                (1000 * 60)
        )
        let secondsRemaing = Math.floor(
            (difference -
                daysRemaing * (1000 * 60 * 60 * 24) -
                hoursRemaing * (1000 * 60 * 60) -
                minutesRemaing * (1000 * 60)) /
                1000
        )

        setTimeNow({
            daysRemaing,
            hoursRemaing,
            minutesRemaing,
            secondsRemaing,
        })
        if (difference > 0) {
            setShowTime(true)
        } else {
            dispatch(setLaunched(true))
        }
    }

    useEffect(() => {
        setTimeout(() => {
            calcTimeRemaing()
        }, 1000)
    }, [timeNow])

    return (
        <div className="logo">
            <img src={logo} alt="Smart cup bet logo" />
            {showTime && (<Text className="textRemainTime">{`
            ${timeNow.daysRemaing}days 
            ${timeNow.hoursRemaing.toString().padStart(2, "0")}h 
            ${timeNow.minutesRemaing.toString().padStart(2, "0")}m 
            ${timeNow.secondsRemaing.toString().padStart(2, "0")}s`}</Text>)}
        </div>
    )
}
export default LogoAndTimeRemaing
