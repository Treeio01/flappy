"use client"

import { useState } from "react"
import { GoldMedale, LeftArrow, OrangeMedale, RightArrow, SilverMedale, SolanaLogo } from "@/components/icons"

const slides = [
    {
        medal: <GoldMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
        score: "+530",
        name: "samshiva",
        leftPreview: {
            medal: <SilverMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
            score: "+250",
        },
        rightPreview: {
            medal: <OrangeMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
            score: "+103",
        },
    },
    {
        medal: <OrangeMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
        score: "+103",
        name: <>
            ryozon/<br />
            rolayn///
        </> ,
        leftPreview: {
            medal: <GoldMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
            score: "+530",
        },
        rightPreview: {
            medal: <SilverMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
            score: "+250",
        },
    },
    {
        medal: <SilverMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
        score: "+250",
        name: "soylicy",
        leftPreview: {
            medal: <OrangeMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
            score: "+103",
        },
        rightPreview: {
            medal: <GoldMedale className="mds:w-[6vw] sml:w-[6vw] w-[13vw] mds:h-[6vw] sml:h-[6vw] h-[13vw]"/>,
            score: "+530",
        },
    },
]

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="flex items-center mdbvp:gap-7 md:gap-[10px] mdbvp:px-4">
            <button onClick={previousSlide} className="text-[#98a898] hover:text-[#7a8a7a]" aria-label="Previous slide">
                <LeftArrow className="md:w-[50px] mds:w-[35px] sml:w-[25px] sm:w-[50px] w-[25px] md:h-[50px] mds:h-[35px] sml:h-[25px] sm:h-[50px] h-[25px]"/>
            </button>

            <div className="flex items-center mdbvp:gap-5 md:gap-4 gap-3">
                <div
                    style={{ aspectRatio: "330 / 250" }}
                    className="xxl:w-[400px] xl:w-[370px] lg:w-[320px] mdbvp:w-[280px] md:w-[260px] mds:w-[160px] w-[130px] shadow-slider bg-[#E2F1D2] sml:flex hidden flex-col items-center mdbvp:p-3 p-2 justify-center"
                >
                    <div className="flex flex-col font-pixel-primary items-center mds:gap-3 gap-1 justify-center bg-twoback bg-cover w-full h-full p-3">
                        {slides[currentSlide].leftPreview.medal}
                        <div className="text-[#7b726c] mds:text-[24px] text-[16px] mt-1">{slides[currentSlide].leftPreview.score}</div>
                    </div>
                </div>

                <div
                    style={{ aspectRatio: "490 / 372" }}
                    className="flex flex-col relative items-center xxl:w-[640px] xl:w-[550px] lg:w-[500px] md:w-[450px] mds:w-[380px] sml:w-[290px] sm:w-[380px] w-[290px] mds:text-[2vw] sml:text-[2.5vw] sm:text-[3.2vw] text-[22px] shadow-pixel font-pixel-primary bg-[#E2F1D2] border-4 border-[#c8d4c8] sml:p-[0.6vw] sm:p-[1.3vw] p-[1.5vw]"
                >
                    <div className="flex flex-col w-full items-center justify-between mds:p-[2.1vw] sml:p-[2.5vw] sm:p-[4vw] p-[5vw] bg-back h-full bg-cover">
                        <div className="flex flex-col w-full gap-1">
                            <div className="flex items-center justify-between text-[#7b726c]">
                                <h2>MEDAL</h2>
                                <h2>SCORE</h2>
                            </div>
                            <div className="flex items-center justify-between font-pixel-secondary sml:text-[3.2vw] text-[4.5vw] text-[#4e3b40]">
                                {slides[currentSlide].medal}
                                <div className="flex items-center sml:gap-3 gap-[5px]">
                                    {slides[currentSlide].score} SOL
                                    <SolanaLogo className="sml:w-[2.3vw] w-[3.3vw] sml:h-[2.3vw] h-[3.3vw]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-end font-pixel-secondary mds:leading-[1.9vw] sml:leading-[2.4vw] leading-[3.2vw] mds:text-[1.9vw] sml:text-[2.4vw] text-[3.2vw] text-[#b6bba6] justify-between">
                            <h2>
                                MEMBER
                                <br /> FLAPPY DAO
                            </h2>
                            <p className="font-pixel-primary text-[#7b726c]">{slides[currentSlide].name}</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{ aspectRatio: "330 / 250" }}
                    className="xxl:w-[400px] xl:w-[370px] lg:w-[320px] mdbvp:w-[280px] md:w-[260px] mds:w-[160px] w-[130px] shadow-slider bg-[#E2F1D2] sml:flex hidden flex-col items-center p-3 justify-center"
                >
                    <div className="flex flex-col font-pixel-primary items-center mds:gap-3 gap-1 justify-center bg-twoback bg-cover w-full h-full mdbvp:p-3 p-2">
                        {slides[currentSlide].rightPreview.medal}
                        <div className="text-[#7b726c] mds:text-[24px] text-[16px] mt-1">{slides[currentSlide].rightPreview.score}</div>
                    </div>
                </div>
            </div>

            <button onClick={nextSlide} className="text-[#98a898] hover:text-[#7a8a7a]" aria-label="Next slide">
                <RightArrow className="md:w-[50px] mds:w-[35px] sml:w-[25px] sm:w-[50px] w-[25px] md:h-[50px] mds:h-[35px] sml:h-[25px] sm:h-[50px] h-[25px]"/>
            </button>
        </div>
    )
}

