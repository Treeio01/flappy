interface Props{
    background: string,
    title: string,
    description: string,
}

export const Block:React.FC<Props> = ({background, title, description}) => {
    return (
        <div className="flex flex-col gap-6 justify-between sml:w-[50%] w-full">
            <div style={{aspectRatio: "314 / 364"}} className={`flex ${background} bg-cover shadow-pixel`}></div>
            <div style={{aspectRatio: "314 / 208"}}
                 className="flex flex-col justify-between bg-[#4E3B40] font-pixel-primary p-4 shadow-text">
                <h2 className="mds:text-[1.6vw] sml:text-[3.7vw] sm:text-[3vw] text-[7vw] md:w-[60%] w-[70%] font-pixel-secondary">{title}</h2>
                <p className="md:w-[70%] w-[75%] text-[#b8b1b3] mds:text-[0.9vw] sml:text-[2vw] sm:text-[1.5vw] text-[3.4vw]">{description}</p>
            </div>
        </div>
    )
}