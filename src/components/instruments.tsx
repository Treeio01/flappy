import Image from 'next/image'
import left from '../../public/img/instruments-left.png'
import right from '../../public/img/instruments-right.png'
import back from '../../public/img/back.png'
import {AILogo, Arrow, BitcoinLogo, CALogo, Comet, Line, Pill, SolanaLogoTwo, Union} from "@/components/icons";
import {InstrumentBlock} from "@/components/instrument-block";

export const Instruments = () => {
    return (
        <div className="flex flex-col w-full md:min-h-screen sml:h-[700px] sm:h-[500px] h-[400px] relative items-center pt-[30px]">
                <Image style={{ aspectRatio: "312 / 269" }} className="absolute lg:w-[312px] mdbvp:w-[250px] sml:w-[200px] w-[150px] z-[2] lg:top-0 mdbvp:top-[20px] mds:top-[80px] top-[50px] mdbvp:left-[100px] mds:left-[50px] left-0" src={left} alt="left"/>
                <Image style={{ aspectRatio: "468 / 236" }} className="absolute lg:w-[468px] mdbvp:w-[320px] sml:w-[270px] w-[200px] z-[2] lg:top-0 mdbvp:top-[20px] mds:top-[80px] top-[110px] mdbvp:right-[100px] mds:right-[50px] right-0" src={right} alt="right"/>
            <div className="flex flex-col z-[3] gap-[25px] items-center font-pixel-primary text-[16px] justify-center">
                <p style={{ textShadow: '0px 4px 0px 0px #00000033' }}>INSTRUMENTS</p>
                <h2 style={{ textShadow: '0px 4px 0px 0px #00000033' }} className="sml:text-[48px] sm:text-[28px] text-[24px] z-[3] text-white sml:w-[600px] sm:w-[400px] w-[300px] text-center font-pixel-secondary">AI-Powered Scanners, Whale Trackers &<br/> NFT Snipers</h2>
            </div>
            <div className="flex flex-col md:w-[1080px] mds:w-[820px] sml:w-[630px] sm:w-[480px] w-[95%] pt-[75px] sm:px-[40px] gap-[15px]">
                <div className="flex relative bg-[#93D1D8] md:h-[500px] mds:h-[380px] sml:h-[300px] h-[250px] shadow-instruments">
                    <div className="relative h-full w-[50%]">
                        <InstrumentBlock className="absolute mds:top-[35px] top-[25px] sml:left-[35px] left-[20px]" logo={<Union className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="WALLET TRACKER"/>
                        <InstrumentBlock className="absolute mds:bottom-[35px] sml:bottom-[25px] bottom-[15px] mds:right-[80px] sml:right-[50px] right-[30px]" logo={<Arrow className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="RUNES TERMINAL"/>
                    </div>
                    <div className="relative h-full w-[50%]">
                        <InstrumentBlock className="absolute md:top-[35px] top-[20px] md:left-[100px] mds:left-[70px] sml:left-[40px] left-[20px]" logo={<Comet className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="METEORA-DLMM-POOLS-SCANNER"/>
                        <InstrumentBlock className="absolute md:top-[35px] top-[20px] md:right-[140px] mds:right-[100px] sml:right-[60px] right-[20px]" logo={<Pill className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="PUMPFUN TOOLS  "/>
                        <InstrumentBlock className="absolute sml:bottom-[35px] bottom-[25px] md:left-[50px] sml:left-[25px] left-[5px]" logo={<AILogo className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="AI-SMART-CALLS-BOT"/>
                        <InstrumentBlock className="absolute sml:bottom-[35px] bottom-[25px] md:right-[50px] sml:right-[35px] right-[7px]" logo={<Line className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="LMNFT MONITOR
"/>
                        <InstrumentBlock className="absolute md:bottom-[100px] mds:bottom-[80px] bottom-[75px] md:left-[195px] mds:left-[140px] sml:left-[105px] sm:left-[65px] left-[75px]" logo={<CALogo className="md:w-[105px] mds:w-[80px] sml:w-[55px] w-[38px] md:h-[105px] mds:h-[80px] sml:h-[55px] h-[38px]"/>}
                                         title="CAs Searcher"/>
                    </div>
                    <Image className="absolute inset-0 md:w-[984px] mds:w-[720px] sml:w-[530px] sm:w-[440px] w-[97%] md:h-[484px] mds:h-[360px] sml:h-[280px] sm:h-[240px] h-[97%] mx-auto my-auto" src={back} alt="back"/>
                </div>
                <div className="flex items-center text-[#0D575F] mds:text-[28px] sml:text-[22px] sm:text-[16px] text-[14px] font-pixel-secondary justify-between">
                    <div className="flex items-center sm:gap-4 gap-1">
                        <BitcoinLogo className="sml:w-[22px] w-[18px] h-[30px] sml:h-[39px]"/>
                        BITCOIN
                    </div>
                    <p className="mds:text-[20px] sml:text-[17px] text-[13px] font-pixel-primary">TOTAL 8+ INSTRUMENTS</p>
                    <div className="flex items-center sm:gap-4 gap-1">
                        <SolanaLogoTwo className="sml:w-[32px] w-[25px] sml:h-[29px] h-[25px]"/>
                        SOLANA
                    </div>
                </div>
            </div>
        </div>
    )
}