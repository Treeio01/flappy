"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Hero } from "@/components/hero"
import { InfoBlock } from "@/components/info-block"
import { Instruments } from "@/components/instruments"
import { SliderBlock } from "@/components/slider-block"
import FeedbackSection from "@/components/feedback-section"
import { Footer } from "@/components/footer"

const ScalingSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

    return (
        <motion.div ref={ref} style={{ opacity, scale }} className="sm:min-h-screen h-[80%] flex items-center justify-center w-full">
            {children}
        </motion.div>
    )
}

const NonScalingSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null)

    return (
        <motion.div ref={ref} className={`min-h-screen flex items-center justify-center ${className}`}>
            {children}
        </motion.div>
    )
}

const JoinSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null)

    return (
        <motion.div ref={ref} className={`md:h-[500px] h-[300px] flex items-center justify-center ${className}`}>
            {children}
        </motion.div>
    )
}

export default function Home() {
    return (
        <div className="bg-[#7bc5cd]">
            <Hero/>
            <section className="w-full" id="about">
                <ScalingSection>
                    <InfoBlock/>
                </ScalingSection>
            </section>
            <section className="w-full" id="instruments">
                <ScalingSection>
                    <Instruments/>
                </ScalingSection>
            </section>
                <NonScalingSection>
                    <SliderBlock/>
                </NonScalingSection>
            <section className="w-full" id="reviews">
                <NonScalingSection className="w-full">
                    <div className=" w-full mx-auto">
                        <FeedbackSection/>
                    </div>
                </NonScalingSection>
            </section>
            <JoinSection>
                <Footer/>
            </JoinSection>
        </div>
    )
}

