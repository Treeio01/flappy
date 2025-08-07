"use client"

import { useState, useEffect } from "react"
import leftclouds from "../../public/img/left-clouds.png"
import rightclouds from "../../public/img/right-clouds.png"
import biglogo from "../../public/img/biglogo.png"
import Image from "next/image"
import { JoinBtn } from "@/components/join-btn"
import { XLogo, XLogoActive, XLogoInactive } from "@/components/icons"
import Link from "next/link"

import { Loader2 } from "lucide-react"
import { submitToTelegram } from "@/actions/telegram"

export const Hero = () => {
    const [experience, setExperience] = useState("")
    const [wallet, setWallet] = useState("")
    const [twitter, setTwitter] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean
        message?: string
    }>({})

    useEffect(() => {
        setIsFormValid(experience.trim() !== "" && wallet.trim() !== "" && twitter.trim() !== "")
    }, [experience, wallet, twitter])

    const handleSubmit = async () => {
        if (!isFormValid || isSubmitting) return

        setIsSubmitting(true)
        setSubmitStatus({})

        try {
            const result = await submitToTelegram({
                experience,
                wallet,
                twitter,
            })

            if (result.success) {
                setSubmitStatus({
                    success: true,
                    message: "Application submitted successfully!",
                })
                setExperience("")
                setWallet("")
                setTwitter("")
            } else {
                setSubmitStatus({
                    success: false,
                    message: result.error || "Failed to submit application. Please try again.",
                })
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: "An unexpected error occurred. Please try again.",
            })
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex relative items-center justify-center pb-[100px] lg:h-[1500px] sml:h-[1350px] h-[1200px]">
            <div className="flex z-[1] absolute justify-between w-full max-w-[calc(100%+200px)] xxl:px-[150px] lg:top-[100px] md:top-[50px] top-[25px] lg:px-[100px] md:px-[50px]">
                <Image
                    style={{ aspectRatio: "524 / 508" }}
                    src={leftclouds || "/placeholder.svg"}
                    alt="left clouds"
                    className="lg:h-[507px] mdbvp:w-full mds:w-[300px] sml:w-[250px] w-[180px] md:h-[370px] mds:h-[300px] sml:h-[250px] h-[180px] object-contain"
                />
                <Image
                    style={{ aspectRatio: "468 / 491" }}
                    src={rightclouds || "/placeholder.svg"}
                    alt="right clouds"
                    className="lg:h-[507px] mdbvp:w-full mds:w-[300px] sml:w-[250px] w-[180px] md:h-[370px] mds:h-[300px] sml:h-[250px] sm:h-[180px] h-[170px] object-contain"
                />
            </div>
            <div className="flex z-[2] flex-col text-center gap-6 font-pixel-primary sml:text-[16px] text-[14px] text-white items-center justify-center">
                <Image
                    style={{ aspectRatio: "599 / 270" }}
                    className="sml:w-[599px] sm:w-[400px] w-[280px]"
                    src={biglogo || "/placeholder.svg"}
                    alt="logo"
                />
                <p>
                    Flipping Solana & EVMs & Bitcoin with AI-
                    <br />
                    Driven Tools, $5M+ Profits, and a 200+
                    <br /> Strong Members
                </p>
                <JoinBtn />
                <Link href="https://x.com/flappy_alpha">
                    <div className="flex  items-center flex-col gap-2 pt-[12px]">
                        <XLogo />
                        <p>x.com</p>
                    </div>
                </Link>
                <div className="flex flex-col items-start mds:gap-3 gap-8 w-full z-[2] bg-[#DBDA96] md:px-[30px] px-[15px] md:pt-[42px] pt-[20px] md:pb-[30px] pb-[25px] border-[3px] border-[#D2AA4F] h-[100%] shadow-pixel">
                    <h3 className="text-[24px] text-[#D2AA4F]">FILL FORM AND JOIN</h3>
                    <div className="flex flex-col items-center w-full gap-3">
                        <div className="flex p-4 bg-[#C9C98A] text-[#4E3B40] w-full">
              <textarea
                  placeholder="Enter your experience in web3"
                  className="w-full h-[295px] bg-transparent outline-0 placeholder:text-[#a49f74]"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
              ></textarea>
                        </div>
                        <input
                            placeholder="Enter your WALLET ADDRESS FOR PNL CHECK"
                            className="w-full text-[#4E3B40] bg-[#C9C98A] p-4 outline-0 text-center placeholder:text-[#a49f74]"
                            type="text"
                            value={wallet}
                            onChange={(e) => setWallet(e.target.value)}
                        />
                        <div className="bg-[#C9C98A] p-4 w-full">
                            <div className="flex items-center justify-center gap-2">
                                {twitter.trim() !== "" ? <XLogoActive /> : <XLogoInactive />}
                                <input
                                    placeholder="Enter your TWITTER"
                                    className="w-[200px] text-[#4E3B40] bg-transparent outline-0 placeholder:text-[#a49f74]"
                                    type="text"
                                    value={twitter}
                                    onChange={(e) => setTwitter(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={!isFormValid || isSubmitting}
                        className={`mt-[70px] text-white font-pixel-secondary w-full p-[21px] border-[4px] text-[24px] border-[#735D63] ${
                            isFormValid && !isSubmitting ? "bg-[#4E3B40] cursor-pointer" : "bg-[#7a6a6e] cursor-not-allowed"
                        }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-6 w-6 animate-spin" /> SUBMITTING...
              </span>
                        ) : submitStatus.success ? (
                            "SUCCESS"
                        ) : (
                            "APPLY"
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

