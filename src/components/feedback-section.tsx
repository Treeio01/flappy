import logo1 from '../../public/img/logo1.png'
import logo2 from '../../public/img/logo2.png'
import logo3 from '../../public/img/logo3.png'
import logo4 from '../../public/img/logo4.png'
import logo5 from '../../public/img/logo5.png'
import logo6 from '../../public/img/logo6.png'
import Image from "next/image";
import sand2 from "../../public/img/sand2.png";

export default function FeedbackSection() {
    return (
        <div className="flex relative flex-col bg-blue-500">
            <div className="flex flex-col z-[3] bg-[#eafddb] pb-[70px] mdbvp:pt-[100px] sml:gap-14 gap-5 w-full xxl:px-[167px] xl:px-[125px] lg:px-[70px] md:px-[30px] px-[15px]">
                <div
                    className="flex items-center text-[#4E3B40] font-pixel-secondary sml:text-[48px] text-[26px] pt-[70px] flex-col gap-4">
                    <p className="font-pixel-primary text-[16px]">Reviews</p>
                    <h2 style={{ textShadow: '0px 4px 0px 0px #00000033' }} className="sml:w-[500px] w-[340px] text-center">Feedback from our members</h2>
                </div>
                <div className="flex sml:flex-row flex-col sml:gap-0 gap-5 relative sml:mt-[150px] mt-[75px] justify-between">
                    <div style={{aspectRatio: "1 / 1"}}
                         className="bg-[#E2F1D2] border-[4px] border-[#D8ECC4] md:p-3 mds:p-2 sml:p-1 sm:p-4 p-2 xxl:w-[450px] xl:w-[425px] mdbvp:w-[390px] md:w-[320px] mds:w-[250px] sml:w-[190px] w-full">
                        <div
                            className="flex flex-col items-start justify-between font-pixel-primary xxl:text-[20px] xl:text-[18px] mdbvp:text-[16px] md:text-[13px] mds:text-[10px] sml:text-[8px] sm:text-[18px] text-[13px] text-[#4E3B40] md:p-5 mds:p-3 sml:p-2 sm:p-5 p-3 w-full h-full bg-review bg-cover">
                            <div className="flex items-center mds:gap-3 sml:gap-1 gap-4">
                                <Image className="mds:border-[2px] sml:border-[1px] border-[3px] mdbvp:w-[85px] mds:w-[60px] sml:w-[40px] sm:w-[140px] w-[100px] mdbvp:h-[85px] mds:h-[60px] sml:h-[40px] sm:h-[140px] h-[100px] border-[#4E3B40]" src={logo1}
                                       alt="logo"/>
                                <div style={{textShadow: '0px 5px 0px 0px #00000033'}}
                                     className="flex flex-col xxl:text-[24px] mdbvp:text-[20px] md:text-[17px] mds:text-[15px] sml:text-[12px] sm:text-[28px] text-[20px]">
                                    AKANOMS
                                    <p style={{textShadow: '0px 5px 0px 0px #00000033'}} className="text-[#7b726c]">PNL
                                        ~ 29 SOL</p>
                                </div>
                            </div>
                            <p>Big thanks to @CryptoWolf, @AlphaGains, and @flappy_alpha – smashed my quarterly target
                                in record time! Sending good energy to the squad. Joined @flappy_alpha 2 weeks ago for a
                                500-to-5k grind. Boom – done in 18 days!</p>
                        </div>
                    </div>
                    <div style={{aspectRatio: "1 / 1"}}
                         className="sml:absolute top-[-120px] inset-0 sml:mx-auto bg-[#E2F1D2] border-[4px] border-[#D8ECC4] md:p-3 mds:p-2 sml:p-1 sm:p-4 p-2 xxl:w-[450px] xl:w-[425px] mdbvp:w-[390px] md:w-[320px] mds:w-[250px] sml:w-[190px] w-full">
                        <div
                            className="flex flex-col items-start justify-between font-pixel-primary xxl:text-[20px] xl:text-[18px] mdbvp:text-[16px] md:text-[13px] mds:text-[10px] sml:text-[8px] sm:text-[18px] text-[13px] text-[#4E3B40] md:p-5 mds:p-3 sml:p-2 sm:p-5 p-3 w-full h-full bg-review bg-cover">
                            <div className="flex items-center mds:gap-3 sml:gap-1 gap-4">
                                <Image className="mds:border-[2px] sml:border-[1px] border-[3px] mdbvp:w-[85px] mds:w-[60px] sml:w-[40px] sm:w-[140px] w-[100px] mdbvp:h-[85px] mds:h-[60px] sml:h-[40px] sm:h-[140px] h-[100px] border-[#4E3B40]" src={logo2}
                                       alt="logo"/>
                                <div className="flex flex-col xxl:text-[24px] mdbvp:text-[20px] md:text-[17px] mds:text-[15px] sml:text-[12px] sm:text-[28px] text-[20px]">
                                    CHARGOPLAYS
                                    <p className="text-[#7b726c]">PNL ~ 99 SOL</p>
                                </div>
                            </div>
                            <p>I joined @flappy_alpha
                                earlier this month and decided to start a 1-100 challenge, just about 3 weeks later we ve done it!
                                The community there is great, real alpha calls and vibes, and tons of info for new people, now time to 10x it!</p>
                        </div>
                    </div>
                    <div style={{aspectRatio: "1 / 1"}}
                         className="bg-[#E2F1D2] border-[4px] border-[#D8ECC4] md:p-3 mds:p-2 sml:p-1 sm:p-4 p-2 xxl:w-[450px] xl:w-[425px] mdbvp:w-[390px] md:w-[320px] mds:w-[250px] sml:w-[190px] w-full">
                        <div
                            className="flex flex-col items-start justify-between font-pixel-primary xxl:text-[20px] xl:text-[18px] mdbvp:text-[16px] md:text-[13px] mds:text-[10px] sml:text-[8px] sm:text-[18px] text-[13px] text-[#4E3B40] md:p-5 mds:p-3 sml:p-2 sm:p-5 p-3 w-full h-full bg-review bg-cover">
                            <div className="flex items-center mds:gap-3 sml:gap-1 gap-4">
                                <Image className="mds:border-[2px] sml:border-[1px] border-[3px] mdbvp:w-[85px] mds:w-[60px] sml:w-[40px] sm:w-[140px] w-[100px] mdbvp:h-[85px] mds:h-[60px] sml:h-[40px] sm:h-[140px] h-[100px] border-[#4E3B40]" src={logo3}
                                       alt="logo"/>
                                <div className="flex flex-col xxl:text-[24px] mdbvp:text-[20px] md:text-[17px] mds:text-[15px] sml:text-[12px] sm:text-[28px] text-[20px]">
                                    SOYLICY
                                    <p className="text-[#7b726c]">PNL ~ 250 SOL</p>
                                </div>
                            </div>
                            <p>@flappy_alpha – you legends! Doubled my annual target in 25 days. Jumped into @flappy_alpha’s 1k-10k challenge mid-month. Transparent trackers + veteran insights = 8.4x return. This squad’s wisdom? Priceless. Next phase: Compound to 100k! </p>
                        </div>
                    </div>
                </div>
                <div className="flex sml:flex-row flex-col sml:gap-0 gap-5 relative sml:mt-[50px] justify-between">
                    <div style={{aspectRatio: "1 / 1"}}
                         className="bg-[#E2F1D2] border-[4px] border-[#D8ECC4] md:p-3 mds:p-2 sml:p-1 sm:p-4 p-2 xxl:w-[450px] xl:w-[425px] mdbvp:w-[390px] md:w-[320px] mds:w-[250px] sml:w-[190px] w-full">
                        <div
                            className="flex flex-col items-start justify-between font-pixel-primary xxl:text-[20px] xl:text-[18px] mdbvp:text-[16px] md:text-[13px] mds:text-[10px] sml:text-[8px] sm:text-[18px] text-[13px] text-[#4E3B40] md:p-5 mds:p-3 sml:p-2 sm:p-5 p-3 w-full h-full bg-review bg-cover">
                            <div className="flex items-center mds:gap-3 sml:gap-1 gap-[10px]">
                                <Image className="mds:border-[2px] sml:border-[1px] border-[3px] mdbvp:w-[85px] mds:w-[60px] sml:w-[40px] sm:w-[140px] w-[100px] mdbvp:h-[85px] mds:h-[60px] sml:h-[40px] sm:h-[140px] h-[100px] border-[#4E3B40]" src={logo4}
                                       alt="logo"/>
                                <div className="flex flex-col xxl:text-[24px] mdbvp:text-[20px] md:text-[17px] mds:text-[15px] sml:text-[12px] sm:text-[28px] text-[16px]">
                                    RYCSON/ROLAYN///
                                    <p className="text-[#7b726c]">PNL ~ 103 SOL</p>
                                </div>
                            </div>
                            <p>Major love to@flappy_alpha, Obliterated my 30-day goal in 19 days. Good juju to the grinders. Took the 2k-20k leap with @flappy_alpha’s framework. Their real-time alerts? Chef’s kiss. Now strategizing the 100k roadmap. Grateful doesn’t cover it!</p>
                        </div>
                    </div>
                    <div style={{aspectRatio: "1 / 1"}}
                         className="sml:absolute top-[-120px] inset-0 sml:mx-auto bg-[#E2F1D2] border-[4px] border-[#D8ECC4] md:p-3 mds:p-2 sml:p-1 sm:p-4 p-2 xxl:w-[450px] xl:w-[425px] mdbvp:w-[390px] md:w-[320px] mds:w-[250px] sml:w-[190px] w-full">
                        <div
                            className="flex flex-col items-start justify-between font-pixel-primary xxl:text-[20px] xl:text-[18px] mdbvp:text-[16px] md:text-[13px] mds:text-[10px] sml:text-[8px] sm:text-[18px] text-[13px] text-[#4E3B40] md:p-5 mds:p-3 sml:p-2 sm:p-5 p-3 w-full h-full bg-review bg-cover">
                            <div className="flex items-center mds:gap-3 sml:gap-1 gap-4">
                                <Image className="mds:border-[2px] sml:border-[1px] border-[3px] mdbvp:w-[85px] mds:w-[60px] sml:w-[40px] sm:w-[140px] w-[100px] mdbvp:h-[85px] mds:h-[60px] sml:h-[40px] sm:h-[140px] h-[100px] border-[#4E3B40]" src={logo5}
                                       alt="logo"/>
                                <div className="flex flex-col xxl:text-[24px] mdbvp:text-[20px] md:text-[17px] mds:text-[15px] sml:text-[12px] sm:text-[28px] text-[20px]">
                                    WHSAKKRO?
                                    <p className="text-[#7b726c]">PNL ~ 10 SOL</p>
                                </div>
                            </div>
                            <p>Huge props to @flappy_alpha! Turned 2024’s slow start into a 7x month. Rocked the 10k-50k challenge with @flappy_alpha’s squad – 27 days, insane discipline. Their risk management hacks? Elite tier. Gearing up for 500k sprint!</p>
                        </div>
                    </div>
                    <div style={{aspectRatio: "1 / 1"}}
                         className="bg-[#E2F1D2] border-[4px] border-[#D8ECC4] md:p-3 mds:p-2 sml:p-1 sm:p-4 p-2 xxl:w-[450px] xl:w-[425px] mdbvp:w-[390px] md:w-[320px] mds:w-[250px] sml:w-[190px] w-full">
                        <div
                            className="flex flex-col items-start justify-between font-pixel-primary xxl:text-[20px] xl:text-[18px] mdbvp:text-[16px] md:text-[13px] mds:text-[10px] sml:text-[8px] sm:text-[18px] text-[13px] text-[#4E3B40] md:p-5 mds:p-3 sml:p-2 sm:p-5 p-3 w-full h-full bg-review bg-cover">
                            <div className="flex items-center mds:gap-3 sml:gap-1 gap-4">
                                <Image className="mds:border-[2px] sml:border-[1px] border-[3px] mdbvp:w-[85px] mds:w-[60px] sml:w-[40px] sm:w-[140px] w-[100px] mdbvp:h-[85px] mds:h-[60px] sml:h-[40px] sm:h-[140px] h-[100px] border-[#4E3B40]" src={logo6}
                                       alt="logo"/>
                                <div className="flex flex-col xxl:text-[24px] mdbvp:text-[20px] md:text-[17px] mds:text-[15px] sml:text-[12px] sm:text-[28px] text-[20px]">
                                    YEASOXZ
                                    <p className="text-[#7b726c]">PNL ~ 129 SOL</p>
                                </div>
                            </div>
                            <p>@flappy_alpha – you’re the reason! Smashed 6 income streams this month. Bless up to the warriors. Did the 1k-10k flex with @flappy_alpha’s war room. Their live Q&As + trade journals = 832% ROI. Next mission? Systemize to 100k)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#7bc5cd] sml:h-[150px] h-[60px]">
                <Image src={sand2} className="absolute z-[2] w-[100vw] xxl:bottom-[60px] md:bottom-[100px] sml:bottom-[120px] bottom-[45px]" alt="sand"/>
            </div>
        </div>
    )
}


