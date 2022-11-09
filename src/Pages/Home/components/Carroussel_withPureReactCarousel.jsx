import React, { useState, useEffect } from "react"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { useMediaQuery } from "../../../hooks/useMediaQuery"

import Carroussel1 from "./Carroussel1"
import Carroussel2 from "./Carroussel2"
import Carroussel3 from "./Carroussel3"
import Carroussel4 from "./Carroussel4"

function Carroussel() {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={isMobileScreen ? 215 : 55}
            totalSlides={4}
            isPlaying
            dragEnabled={false}
            touchEnabled={false}
            infinite={true}
        >
            <Slider>
                <Slide index={0}>
                    <Carroussel1 />
                </Slide>
                <Slide index={1}>
                    <Carroussel2 />
                </Slide>
                <Slide index={2}>
                    <Carroussel3 />.
                </Slide>
                <Slide index={3}>
                    <Carroussel4 />.
                </Slide>
            </Slider>
        </CarouselProvider>
    )
}

export default Carroussel
