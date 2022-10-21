import { useTransition, useSpringRef, animated } from "react-spring"
import { Typography } from "antd"
import { useEffect, useState } from "react"
const { Text } = Typography

const AnimatedText = () => {
    const transRef = useSpringRef()
    const [index, setIndex] = useState(0)

    const changeText = () => {
        setTimeout(() => {
            setIndex((index + 1) % 3)
        }, 2500)
    }

    const transitions = useTransition(index, {
        ref: transRef,
        keys: index,
        from: { position: "absolute", opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        onRest: changeText(),
    })

    useEffect(() => {
        transRef.start()
    }, [index])

    const textsUp = ["Coming soon!", "Estamos Chegando!", "Estamos llegando!"]
    const textsDown = ["You bet.", "Pode Apostar.", "Puede apostar."]

  return (
      <>
          {transitions((style, i) => {
              return (
                  <animated.div className="divTextIntro" style={style}>
                      <Text className="textIntro">{textsUp[i]} </Text> <br />
                      <Text className="textIntro">{textsDown[i]} </Text>
                  </animated.div>
              )
          })}
      </>
  )
}


export default AnimatedText