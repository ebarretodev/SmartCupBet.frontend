import React, { useState, useEffect } from "react"

import Carroussel1 from "./Carroussel1"
import Carroussel2 from "./Carroussel2"
import Carroussel3 from "./Carroussel3"
import Carroussel4 from "./Carroussel4"
import { useTransition, useSpringRef, animated, config } from "react-spring"

const pages = [
    () => <Carroussel1 />,
    () => <Carroussel2 />,
    () => <Carroussel3 />,
    () => <Carroussel4 />,
]

function Carroussel() {
    const transRef = useSpringRef()
    const [index, setIndex] = useState(0)
    const [visiblePage, setVisiblePage] = useState(true)
    const [visibleCarousel, setVisibleCarousel] = useState(true)

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            setVisiblePage(true)
        } else {
            setVisiblePage(false)
        }
    })
    
    document.addEventListener("scroll", function () {
        if (window.scrollY < window.innerHeight) {
            setVisibleCarousel(true)
        } else {
            setVisibleCarousel(false)
        }
    })

    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        initial: {},
        from: { transform: "translate3d(100%,0,0)" },
        enter: { transform: "translate3d(0%,0,0)" },
        leave: { transform: "translate3d(-100%,0,0)" },
        reverse: index,
        config: config.molasses,
    })

    const changeScreen = () => {
        setTimeout(() => {
            setIndex((index + 1) % 4)
        }, 5000)
    }

    useEffect(() => {
        if (visibleCarousel) {
            if (visiblePage) {
                transRef.start()
                changeScreen()
            }
        }
    }, [index, visibleCarousel, visiblePage])

    return (
        <div
            style={{
                height: "100vh",
                willChange: "transform, opacity",
                WebkitUserSelect: "none",
                userSelect: "none",
            }}
        >
            {transitions((style, i) => {
                const Page = pages[i]
                return (
                    <animated.div className="divCarrouselFix" style={style}>
                        <Page />
                    </animated.div>
                )
            })}
        </div>
    )
}

export default Carroussel
