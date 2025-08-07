interface Props{
    className?: string;
}

export const MainLogo:React.FC<Props> = ({className})=>{
    return (
        <svg
            className={className}
            width={34}
            height={38}
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="4.85742"
                y="33.2498"
                width="28.4999"
                height="24.2857"
                transform="rotate(-90 4.85742 33.2498)"
                fill="white"
            />
            <rect
                x="19.4287"
                y="9.50024"
                width="4.74998"
                height="9.71428"
                transform="rotate(-90 19.4287 9.50024)"
                fill="white"
            />
            <rect
                x="19.4282"
                y="33.25"
                width="4.74998"
                height="9.71428"
                transform="rotate(-90 19.4282 33.25)"
                fill="white"
            />
            <rect
                x="29.1426"
                y="28.5"
                width="4.85714"
                height="23.7499"
                transform="rotate(180 29.1426 28.5)"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25 9.85186L-1.08199e-06 9.85186L-1.89347e-07 33.0741L4.95833 33.0741L4.95833 9.85186L9.20833 9.85186L9.20833 4.92593L4.25 4.92593L4.25 9.85186ZM4.85699 38L4.85699 33.25L24.2856 33.25L24.2856 38L4.85699 38ZM24.2856 28.5L24.2856 33.25L29.1428 33.25L29.1428 28.5L24.2856 28.5ZM29.1428 9.50002L29.1428 28.4999L34 28.4999L34 9.50002L29.1428 9.50002ZM14.0571 15.3558L18.8384 15.3558L18.8384 25.0066L14.0571 25.0066L14.0571 15.3558ZM4.25 -3.97876e-06L4.25 4.92592L24.0833 4.92592L24.0833 -4.74438e-06L4.25 -3.97876e-06ZM24.2856 9.5L24.2856 4.75002L29.1428 4.75002L29.1428 9.5L24.2856 9.5Z"
                fill="#4E3B40"
            />
        </svg>

    )
}
export const XLogo:React.FC<Props> = ({className})=> {
    return (
        <svg
            className={className}
            width={22}
            height={21}
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_92_101)">
                <g filter="url(#filter0_d_92_101)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 2H3.5H6H8.5V4.5H6V7H3.5V4.5H1V2ZM8.5 7H6V9.5H8.5V12H6V14.5H3.5V17H1V19.5H3.5H6V17H8.5V14.5H11V17H13.5V19.5H16H18.5H21V17H18.5V14.5H16V12H13.5V9.5H16V7H18.5V4.5H21V2H18.5H16V4.5H13.5V7H11V4.5H8.5V7ZM8.5 7V9.5H11V7H8.5ZM13.5 14.5H11V12H13.5V14.5ZM13.5 14.5V17H16V14.5H13.5Z"
                        fill="white"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_92_101"
                    x={1}
                    y={2}
                    width={20}
                    height="19.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={2}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_92_101"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_92_101"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0_92_101">
                    <rect width={22} height={21} fill="white"/>
                </clipPath>
            </defs>
        </svg>

    )
}
export const RightArrow:React.FC<Props> = ({className})=> {
    return (
        <svg
            className={className}
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.6">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 43L19 43L19 39L23 39L23 35L27 35L27 31L31 31L31 27L35 27L35 23L31 23L31 19L27 19L27 15L23 15L23 11L19 11L19 7L15 7L15 43ZM19 15L23 15L23 19L27 19L27 23L31 23L31 27L27 27L27 31L23 31L23 35L19 35L19 15Z"
                    fill="#4E3B40"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 35L19 35L19 15L23 15L23 19L27 19L27 23L31 23L31 27L27 27L27 31L23 31L23 35Z"
                    fill="#91616E"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 31L23 31L23 27L27 27L27 23L23 23L23 19L19 19L19 31Z"
                    fill="#B88291"
                />
            </g>
        </svg>
    )
}
export const LeftArrow:React.FC<Props> = ({className})=> {
    return (
        <svg
            className={className}
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.6">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35 7H31V11H27V15H23V19H19V23H15V27H19V31H23V35H27V39H31V43H35V7ZM31 35H27V31H23V27H19V23H23V19H27V15H31V35Z"
                    fill="#4E3B40"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 15H31V35H27V31H23V27H19V23H23V19H27V15Z"
                    fill="#91616E"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31 19H27V23H23V27H27V31H31V19Z"
                    fill="#B88291"
                />
            </g>
        </svg>
    )
}
export const SolanaLogo:React.FC<Props> = ({className})=>{
    return (
        <svg
            className={className}
            width={36}
            height={31}
            viewBox="0 0 36 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_24067)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 0H36V2.25H33.75V4.5H31.5V6.75H0V4.5H2.25V2.25H4.5V0Z"
                    fill="#4E3B40"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 20.25H36V22.5H33.75V24.75H31.5V27H0V24.75H2.25V22.5H4.5V20.25Z"
                    fill="#4E3B40"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.25 11.25H31.5V13.5H33.75V15.75H4.5V13.5H2.25V11.25Z"
                    fill="#938A8C"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9H31.5V11.25H2.25V13.5H0V11.25V9ZM4.5 15.75H2.25V13.5H4.5V15.75ZM33.75 15.75H4.5V18H36V15.75V13.5H33.75V11.25H31.5V13.5H33.75V15.75Z"
                    fill="#4E3B40"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_24067"
                    x={0}
                    y={0}
                    width={36}
                    height={31}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_24067"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_24067"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const OrangeMedale:React.FC<Props> = ({className})=> {
    return (
        <svg
            className={className}
            width={90}
            height={96}
            viewBox="0 0 90 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_34112)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.5459 81.8145V77.7237H16.3635V69.5425H8.18111L8.18111 57.2702H4.09082V32.726H8.18111L8.18111 20.4542H16.3635V12.2727H24.5459V8.18216L32.7254 8.18216V4.09143L57.2695 4.09143V8.18216L65.4528 8.18216V12.2727H73.6331V20.4542H81.8135V32.726H85.9046V57.2702H81.8135V69.5425H73.6331V77.7237H65.4528V81.8145H57.2695V85.9052H32.7254V81.8145H24.5459Z"
                    fill="#E7D95B"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.7265 4.09119H57.2721V8.18213L65.4531 8.1821V12.2734H57.2705V8.1821L32.7267 8.18213V12.2733H24.5464V16.3638H16.3638V12.2725H24.5442V8.18198H32.7265V4.09119ZM16.3635 16.3632H12.2722V20.4545H16.3635V16.3632ZM8.18344 24.5445H12.2747V28.6358H8.18344V24.5445ZM4.0918 32.726H8.18309V36.8173H4.0918V32.726ZM65.4538 12.2726H73.6363V16.3635H77.7254V20.4548H73.6341V16.3639H65.4538V12.2726ZM77.7258 24.545H81.817V28.6363H77.7258V24.545ZM85.9058 32.7267H81.8145V36.8179H85.9058V32.7267ZM77.7258 53.1807H81.817V57.2719H77.7258V53.1807ZM77.7254 61.3613H73.6341V65.4524H53.1808V69.5433H32.7279V65.4524H16.3638V69.5434H32.7265V73.6343H53.1816V69.5434H73.6359V65.4525H77.7254V61.3613ZM16.3635 61.3613H12.2722V65.4525H16.3635V61.3613ZM24.5464 57.2717H32.7263V49.0898H20.4535V53.1807H16.3638V61.3632H24.5464V57.2717ZM24.5448 36.8173H28.6355V32.726H24.5442V36.8164H20.4535V40.9077H24.5448V36.8173ZM36.8184 28.6355H49.0899V24.5446H36.8171V28.6353H28.6358V32.7265H36.8184V28.6355Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.271 0H32.7253V4.09094H57.271V0ZM32.7266 4.09128H24.544V8.18207H16.3636V12.2734H24.5462V8.18257H32.7266V4.09128ZM16.3633 12.2726H12.272V16.3633H8.18231V24.5446H4.09164V32.7271H8.18294V24.5459H12.2736V16.3638H16.3633V12.2726ZM0 32.7261H4.09094V57.2717H0V32.7261ZM8.18294 57.2709H4.09164V65.4535H8.18231V73.635H12.272V77.7256H16.3633V73.6343H12.2736V65.4524H8.18294V57.2709ZM16.3636 77.7252H24.5462V81.8153H32.7285V85.9057H57.2703V81.8153H65.4526V77.7252H73.634V73.6343H77.7246V65.4524H81.8159V73.635H77.7253V77.7256H73.6352V81.8165H65.4529V85.9066H57.2719V89.9966H32.7263V85.9066H24.546V81.8165H16.3636V77.7252ZM89.9979 57.2722H85.9076V65.4535H81.8163V57.2709H85.9069V32.7277H81.8163V24.5451H85.9076V32.7266H89.9979V57.2722ZM77.7253 16.3634H81.8159V24.546H77.7246V16.364H73.634V12.2734H65.4526V8.18269H57.2703V4.0914H65.4529V8.18213H73.6352V12.2727H77.7253V16.3634Z"
                    fill="#C57754"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.8149 16.3634H61.3606V20.4543H36.8172V24.5454H28.6346V20.4541H36.8149V16.3634ZM65.4522 20.4543H61.3609V24.5456H65.4522V20.4543ZM65.4525 24.5452H69.5438V28.6359H73.6335V32.7272H69.5422V28.6365H65.4525V24.5452ZM73.6329 40.9076H77.7242V44.9989H73.6329V40.9076ZM81.8158 44.9988H77.7245V49.0901H81.8158V44.9988ZM8.18187 53.1807H4.09058V57.272H8.18187V53.1807ZM12.2735 61.3614H8.18222V65.4527H12.2735V61.3614ZM12.2709 69.5434H16.3622V73.6344H24.5442V77.7253H32.7255V81.8154H57.2692V77.7253H65.4518V81.8166H57.2709V85.9063H32.7252V81.8166H24.5429V77.7257H16.3616V73.6347H12.2709V69.5434ZM77.7242 73.6347H73.6351V77.7257H65.4525V73.6344H73.6329V69.5434H77.7242V73.6347ZM81.8158 61.3614H77.7245V65.4527H81.8158V61.3614ZM81.8133 53.1807H85.9045V57.272H81.8133V53.1807ZM24.5429 24.5446H28.6342V28.6359H24.5429V24.5446ZM24.5426 28.6354H20.4513V32.7267H24.5426V28.6354ZM12.2709 44.9988H16.3622V49.0901H12.2709V44.9988ZM36.8149 57.2709H32.7252V65.453H49.0894V65.4527H53.1802V61.3614H49.0894V57.2709H44.9975V53.1807H36.8149V57.2709ZM53.1796 40.9075V32.7268H49.0883V40.9094H53.178V44.9988H57.2692V40.9075H53.1796Z"
                    fill="#F28A5B"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_34112"
                    x={0}
                    y={0}
                    width="89.9978"
                    height="95.6214"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="5.62484"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_34112"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_34112"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const GoldMedale:React.FC<Props> = ({className})=> {
    return (
        <svg
            className={className}
            width={90}
            height={94}
            viewBox="0 0 90 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_24086)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.5454 81.8181V77.7272H16.3635V69.5454H8.18173L8.18173 57.2726H4.09082V32.7272H8.18173L8.18174 20.4545H16.3635V12.2726H24.5454V8.18173L32.7272 8.18173V4.09082L57.2726 4.09082V8.18173L65.4545 8.18173V12.2726H73.6363V20.4545H81.8181V32.7272H85.909V57.2726H81.8181V69.5454H73.6363V77.7272H65.4545V81.8181H57.2726V85.909L32.7272 85.909V81.8181H24.5454Z"
                    fill="#E9F562"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.7272 4.09082H57.2726V8.18173H32.7272V4.09082ZM24.5454 12.2726V8.18173H32.7272V12.2726H24.5454ZM16.3635 16.3635V12.2726H24.5454V16.3635H16.3635ZM16.3635 16.3635V20.4545H12.2726V16.3635H16.3635ZM65.4545 12.2726H57.2726V8.18173H65.4545V12.2726ZM73.6363 16.3635H65.4545V12.2726H73.6363V16.3635ZM73.6363 16.3635H77.7272V20.4545H73.6363V16.3635ZM8.18173 24.5454H12.2726V28.6363H8.18173V24.5454ZM4.09082 32.7272H8.18173V36.8181H4.09082V32.7272ZM77.7272 24.5454H81.8181V28.6363H77.7272V24.5454ZM85.909 32.7272H81.8181V36.8181H85.909V32.7272ZM77.7272 53.1817H81.8181V57.2726H77.7272V53.1817ZM77.7272 61.3635H73.6363V65.4545H53.1817V69.5454H32.7272V65.4545H16.3635V61.3635L24.5454 61.3636V57.2726H32.7272V49.0908H20.4545V53.1817H16.3635V61.3635H12.2726V65.4545H16.3635V69.5454H32.7272V73.6363H53.1817L53.1817 69.5454H73.6363L73.6363 65.4545H77.7272V61.3635ZM20.4545 36.8181H24.5454V40.909H20.4545V36.8181ZM28.6363 32.7272H24.5454L24.5454 36.8181H28.6363V32.7272ZM36.8181 28.6363V32.7272H28.6363V28.6363H36.8181ZM36.8181 28.6363L36.8181 24.5454H49.0908V28.6363H36.8181Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.2727 0H32.7273V4.09091H24.5455V8.18182H16.3636V12.2727H12.2727V16.3636H8.18182V24.5455H4.09091V32.7273H0V57.2727H4.09091V65.4545H8.18182V73.6364H12.2727V77.7273H16.3636V81.8182H24.5455V85.9091H32.7273V90H57.2727V85.9091L65.4545 85.9091V81.8182H73.6364V77.7273H77.7273V73.6364H81.8182V65.4545H85.9091V57.2727H90V32.7273H85.9091L85.9091 24.5455H81.8182V16.3636H77.7273V12.2727H73.6364V8.18182H65.4545V4.09091H57.2727V0ZM57.2727 4.09091V8.18182H65.4545V12.2727H73.6364V16.3636H77.7273V24.5455H81.8182V32.7273H85.9091L85.9091 57.2727H81.8182V65.4545H77.7273V73.6364H73.6364V77.7273H65.4545V81.8182H57.2727V85.9091L32.7273 85.9091V81.8182H24.5455V77.7273H16.3636V73.6364H12.2727V65.4545H8.18182V57.2727H4.09091V32.7273H8.18182V24.5455H12.2727V16.3636H16.3636V12.2727H24.5455V8.18182H32.7273V4.09091H57.2727Z"
                    fill="#B9A449"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.8181 16.3635H61.3635V20.4544H36.8181V16.3635ZM28.6363 24.5453V20.4544H36.8181L36.8181 24.5453H28.6363ZM24.5454 28.6363V24.5453L28.6363 24.5453V28.6363H24.5454ZM24.5454 28.6363L24.5454 32.7272H20.4545V28.6363H24.5454ZM65.4545 24.5453H61.3635L61.3635 20.4544H65.4545V24.5453ZM69.5454 28.6363H65.4545V24.5453L69.5454 24.5453V28.6363ZM69.5454 28.6363H73.6363V32.7272H69.5454V28.6363ZM73.6363 40.909H77.7272V44.9999H73.6363V40.909ZM77.7272 44.9999H81.8181V49.0908H77.7272V44.9999ZM8.18173 53.1817H4.09082V57.2726H8.18173V53.1817ZM12.2726 61.3635H8.18173V65.4544H12.2726V61.3635ZM12.2726 69.5453H16.3635V73.6363H12.2726V69.5453ZM24.5454 77.7272H16.3635V73.6363H24.5454V77.7272ZM32.7272 81.8181H24.5454V77.7272H32.7272V81.8181ZM57.2726 81.8181V85.909H32.7272V81.8181H57.2726ZM65.4545 77.7272V81.8181H57.2726V77.7272H65.4545ZM73.6363 73.6363V77.7272H65.4545V73.6363H73.6363ZM73.6363 73.6363V69.5453H77.7272V73.6363H73.6363ZM81.8181 61.3635H77.7272V65.4544H81.8181V61.3635ZM81.8181 53.1817H85.909V57.2726H81.8181V53.1817ZM12.2726 44.9999H16.3635V49.0908H12.2726V44.9999ZM36.8181 57.2726H32.7272V65.4544H49.0908H53.1817V61.3635H49.0908V57.2726H44.9999V53.1817H36.8181V57.2726ZM53.1817 32.7272V40.909H49.0908V32.7272H53.1817ZM53.1817 40.909L57.2726 40.909V44.9999H53.1817V40.909Z"
                    fill="#F9DE62"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.3636 20.4546H36.8182V24.5455H28.6363V28.6364H24.5454V32.7273H20.4545V36.8182H16.3636V49.091L12.2727 49.091V61.3637H16.3636L16.3636 65.4546H32.7272V69.5455H53.1818V65.4546L73.6363 65.4546V61.3637H77.7272V53.1819H81.8182V49.091L77.7272 49.091V45H73.6363V32.7273H69.5454V28.6364H65.4545V24.5455H61.3636V20.4546ZM49.0909 28.6364V24.5455H36.8182V28.6364H28.6363V32.7273H24.5454L24.5454 36.8182H20.4545L20.4545 45.0001L36.8182 45L36.8182 49.0909L20.4545 49.091H16.3636V61.3637L28.6363 61.3637L28.6363 57.2728L32.7272 57.2728V61.3637V65.4546H53.1818V61.3637L73.6363 61.3637V57.2728H53.1818V53.1819H73.6363H77.7272V49.091H73.6363H69.5454H53.1818V45H69.5454L69.5454 32.7273H65.4545V28.6364H61.3636V24.5455H53.1818V28.6364H49.0909ZM49.0909 40.9091L45 40.9091V28.6364H49.0909V40.9091ZM49.0909 40.9091V45H53.1818L53.1818 40.9091H49.0909ZM65.4545 32.7273V40.9091H61.3636V32.7273H65.4545ZM49.0909 53.1819V49.091L53.1818 49.091L53.1818 53.1819H49.0909ZM49.0909 57.2728H45V53.1819H49.0909L49.0909 57.2728ZM49.0909 57.2728V61.3637H53.1818V57.2728H49.0909ZM36.8182 53.1819L32.7272 53.1819L32.7272 57.2728L36.8182 57.2728L36.8182 53.1819ZM36.8182 53.1819L36.8182 49.091L40.9091 49.091L40.9091 53.1819L36.8182 53.1819Z"
                    fill="#DEC557"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_24086"
                    x={0}
                    y={0}
                    width={90}
                    height={94}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_24086"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_24086"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const SilverMedale:React.FC<Props> = ({className})=> {
    return (
        <svg
            className={className}
            width={90}
            height={96}
            viewBox="0 0 90 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_37383)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.544 81.8192V77.7278H16.3611V69.5459H8.17904L8.17904 57.273H4.08984V32.7274H8.17905L8.17905 20.4547H16.3611V12.2728H24.544V8.18235L32.726 8.18235V4.09125L57.2716 4.09125V8.18235L65.4534 8.18235V12.2728H73.6341V20.4547H81.8159V32.7274H85.9085V57.273H81.8159V69.5459H73.6341V77.7278H65.4534V81.8192H57.2716V85.9099H32.726V81.8192H24.544Z"
                    fill="#E8E1E1"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.7254 4.09125H57.271V8.18218H32.7254V4.09125ZM32.7256 8.18235H24.5437V12.2728H16.3629V16.3637H24.5448V12.2733H32.7256V8.18235ZM16.3625 16.3639H12.2716V20.4548H16.3625V16.3639ZM8.18121 24.5455H12.2721V28.6364H8.18121V24.5455ZM4.08984 32.7274H8.18078V36.8183H4.08984V32.7274ZM65.4535 8.18235H57.2716V12.2733H65.4534V16.3637H73.6352V12.2728H65.4535V8.18235ZM77.7251 16.3639H73.6341V20.4548H77.7251V16.3639ZM77.7245 24.5458H81.8154V28.6367H77.7245V24.5458ZM85.9068 32.7277H81.8159V36.8186H85.9068V32.7277ZM77.7245 53.1822H81.8154V57.2732H77.7245V53.1822ZM77.7251 61.3631H73.6341V65.4541H77.7251V61.3631ZM53.1803 65.4543H73.6349V69.5452H53.1803V65.4543ZM53.1801 69.5454H32.7254V73.6363H53.1801V69.5454ZM32.7267 65.4543V69.5452H16.3629V65.4543H32.7267ZM16.3625 61.3631H12.2716V65.4541H16.3625V61.3631ZM24.5448 57.273H32.7251V49.0911H20.4523V53.1822H16.3629V61.3641H24.5448V57.273ZM20.4523 36.8178H24.5433V40.9087H20.4523V36.8178ZM28.6346 32.7274H24.5437V36.8183H28.6346V32.7274ZM28.6341 28.6362H36.8159V32.7272H28.6341V28.6362ZM49.0896 24.5455H36.8168V28.6364H49.0896V24.5455Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.2726 0H32.727V4.09093H57.2726V0ZM32.7261 4.09112H24.5442V8.18205H32.7261V4.09112ZM16.3646 8.18238H24.5465V12.2733H16.3646V8.18238ZM16.3642 12.2729H12.2732V16.3639H16.3642V12.2729ZM8.18183 16.3641H12.2728V24.546H8.1823V32.7272H4.09136V24.5453H8.18183V16.3641ZM0 32.7272H4.09093V57.2728H0V32.7272ZM8.1823 57.2722H4.09136V65.4541H8.1823V57.2722ZM8.18174 65.4541H12.2727V73.636H8.18174V65.4541ZM16.364 73.6364H12.2731V77.7273H16.364V73.6364ZM16.3645 77.7275H24.5463V81.8176H32.7281V85.9083H57.2722V81.8176H65.454V85.9085H57.2726V89.9993H32.727V85.9085H24.5462V81.8184H16.3645V77.7275ZM65.4549 77.7275H73.6368V81.8184H65.4549V77.7275ZM77.7256 73.6364H73.6347V77.7273H77.7256V73.6364ZM77.726 65.4541H81.817V73.636H77.726V65.4541ZM89.9987 57.2732H85.9083V65.4541H81.8174V57.2722H85.9078V32.7276H89.9987V57.2732ZM85.9083 24.5457H81.8174V32.7276H85.9083V24.5457ZM77.726 16.3638H81.817V24.5457H77.726V16.3638ZM77.7256 12.2727H73.6368V8.18223H65.4549V12.2732H73.6347V16.3636H77.7256V12.2727ZM65.454 4.09112H57.2722V8.18205H65.454V4.09112Z"
                    fill="#847F7F"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.8168 16.364H61.3624V20.4547H65.4529V24.5457H61.362V20.4549H36.8168V16.364ZM65.4534 24.5458H69.5443V28.6368H65.4534V24.5458ZM73.6357 28.6366H69.5447V32.7276H73.6357V28.6366ZM73.6341 40.909H77.7251V44.9999H73.6341V40.909ZM81.8154 45.0001H77.7245V49.091H81.8154V45.0001ZM8.18078 53.1823H4.08984V57.2732H8.18078V53.1823ZM12.2721 61.3632H8.18121V65.4541H12.2721V61.3632ZM12.2716 69.5454H16.3625V73.6364H12.2716V69.5454ZM24.5448 73.6365H16.3629V77.7275H24.5448V73.6365ZM24.5447 77.7276H32.7266V81.8177H57.271V85.9087H32.7254V81.8186H24.5447V77.7276ZM57.2716 77.7276H65.4535V81.8186H57.2716V77.7276ZM65.4534 73.6365V77.7275H73.6352V73.6365H65.4534ZM73.6341 69.5454H77.7251V73.6364H73.6341V69.5454ZM81.8154 61.3632H77.7245V65.4541H81.8154V61.3632ZM81.8159 53.1823H85.9068V57.2732H81.8159V53.1823ZM36.8159 20.4547H28.6341V24.5455H24.5437V28.6364H28.6346V24.5457H36.8159V20.4547ZM24.5433 28.6363H20.4523V32.7272H24.5433V28.6363ZM12.2716 45.0001H16.3625V49.091H12.2716V45.0001ZM36.8168 57.2724H32.7254V65.4543H49.0892V57.2724H44.9987V53.1823H36.8168V57.2724ZM49.0899 61.3632H53.1808V65.4541H49.0899V61.3632ZM53.1803 32.7277V40.9096L49.0893 40.9096V32.7277H53.1803ZM53.1807 45.0001H57.2716V40.9091H53.1807V45.0001Z"
                    fill="#C7C0C0"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.3628 20.4545H36.8172V24.5453H28.6374V28.6362H36.8193V24.5455H61.3628V20.4545ZM28.637 28.6361H24.5461V32.727H28.637V28.6361ZM20.4547 32.7272H24.5456V36.8181H20.4552V45.0001L36.8184 45L36.8184 49.091L20.4547 49.091V49.0904H16.3643V36.8176H20.4547V32.7272ZM16.3639 49.091H12.2729V61.3638H16.3639V49.091ZM49.0923 24.5456H53.1832V28.6366H49.0923V24.5456ZM65.4543 24.5456H61.3634V28.6366H65.4543V24.5456ZM65.4547 28.6364H69.5457V32.7274H65.4547V28.6364ZM73.6361 32.7275H69.5451V44.9999H53.1816V49.0908H69.5451V49.0913H73.6361V32.7275ZM73.6365 44.9999H77.7274V49.0908H73.6365V44.9999ZM49.0923 40.9088H53.1832V44.9997H49.0923V40.9088ZM49.0908 28.6364H44.9999V40.9092H49.0908V28.6364ZM61.3634 32.7275H65.4543V40.9094H61.3634V32.7275ZM81.8188 49.091H77.7278V53.1819H81.8188V49.091ZM73.6365 53.1821H77.7274V61.364H73.6365V65.4539L53.1818 65.4539V61.3631H49.0923V57.2722H53.1818V53.1821H73.6365ZM53.1832 61.363L73.6365 61.363V57.273H53.1832V61.363ZM49.0908 53.1821H53.1816V49.0912H49.0907V53.1813H44.9999V57.2722H49.0908V53.1821ZM32.7278 69.5452V65.4543H53.1825V69.5452H32.7278ZM32.7278 65.4539L32.7278 61.3631L32.7278 61.363V57.2722L36.8187 57.2722L36.8187 53.1819L40.9095 53.1819L40.9095 49.091L36.8186 49.091L36.8186 53.1813L32.7278 53.1813L32.7278 57.2722L28.6369 57.2722L28.6369 61.363L16.364 61.363L16.3641 65.4539L32.7278 65.4539Z"
                    fill="#9D9898"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_37383"
                    x={0}
                    y={0}
                    width="89.9988"
                    height="95.6242"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="5.62497"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_37383"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_37383"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const BitcoinLogo:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={22}
            height={39}
            viewBox="0 0 22 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1528)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.9999 1.74845e-07V6.00005L12 6.00005L12 4.90268e-05L14 4.92891e-05L14 6.00005H20V7.99998H22L22 12H20V13.9998L16 13.9998L16 12L16 11.9998V8.00005H9.9999V14L19.9999 14V16H22V18H21.9999V19.9999H17.9999V18H14V16H9.9999L9.9999 23.9999L16 23.9999V22H17.9999V20.0001H21.9999V22H22V24H20.0001V25.9999L14 25.9999L14 30H12L12 25.9999H9.9999V30H5.9999V26H3.99998V25.9999H2.00007L2.00007 23.9999H3.99998L3.99998 8.00005H0V6.00005H5.9999V0L9.9999 1.74845e-07Z"
                    fill="#0D575F"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 8.74206e-08V4V6H18V4H16V0L14 8.74206e-08ZM22 12V16H20V12H22ZM10 24.0001H14V22.0001H10V24.0001ZM0 26V24H1.99993L1.99993 22.0001H3.99993L3.99993 24.0001H2L2 26H0ZM12.0001 26V28H10.0001V26H12.0001ZM5.9999 32L9.9999 32L9.9999 30.0001L5.9999 30L5.9999 32ZM1.99993 4H5.99993V6H1.99993V4Z"
                    fill="#BFF9FF"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1528"
                    x={0}
                    y={0}
                    width={22}
                    height="38.6667"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="6.66667"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1528"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1528"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const SolanaLogoTwo:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={32}
            height={29}
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1507)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0H32V2H30V4H28V6H0V4H2V2H4V0Z"
                    fill="#0D575F"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 18H32V20H30V22H28V24H0V22H2V20H4V18Z"
                    fill="#0D575F"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 10H28V12H30V14H4V12H2V10Z"
                    fill="#BFF9FF"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 8H28V10H2V12H0V10V8ZM4 14H2V12H4V14ZM30 14H4V16H32V14V12H30V10H28V12H30V14Z"
                    fill="#0D575F"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1507"
                    x={0}
                    y={0}
                    width={32}
                    height={29}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={5}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1507"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1507"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const Union:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1621)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#CCDDDF"
                />
            </g>
            <g filter="url(#filter1_d_49_1621)">
                <path
                    d="M71.7227 50.5294V40.2353H69.6534V50.5294H71.7227ZM61.3765 67V36.1176H63.4457V34.0588H65.515V32H75.8612V34.0588H77.9304V36.1176H79.9997V67H71.7227V58.7647H69.6534V67H61.3765Z"
                    fill="#0D575F"
                />
                <path
                    d="M37.2077 67V64.9412H35.1385V62.8824H33.0692V60.8235H31V32H39.277V58.7647H41.3462V32H49.6232V58.7647H51.6925V32H59.9694V67H37.2077Z"
                    fill="#0D575F"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1621"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1621"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1621"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_49_1621"
                    x={31}
                    y={32}
                    width="48.9995"
                    height={40}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={5}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.592656 0 0 0 0 0.728616 0 0 0 0 0.74901 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1621"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1621"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>


    )
}
export const Arrow: React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1606)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#CCDDDF"
                />
            </g>
            <g filter="url(#filter1_d_49_1606)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35 38L43 38L43 46L51 46L51 54H43H35V62H43V70H51L51 62L51 54H59V62H67V70H75V62H67V54L75 54V38V30L67 30H51L51 38L67 38L67 54H59V46H51L51 38L43 38L43 30L35 30L35 38Z"
                    fill="#0D575F"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1606"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1606"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1606"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_49_1606"
                    x={35}
                    y={30}
                    width={40}
                    height={45}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={5}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.592656 0 0 0 0 0.728616 0 0 0 0 0.74901 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1606"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1606"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const Comet:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g filter="url(#filter0_d_49_1600)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#ABC6C9"
                />
            </g>
            <rect x={25} y={18} width="61.5" height={68} fill="url(#pattern0_49_1600)"/>
            <defs>
                <filter
                    id="filter0_d_49_1600"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1600"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1600"
                        result="shape"
                    />
                </filter>
                <pattern
                    id="pattern0_49_1600"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#image0_49_1600"
                        transform="scale(0.00813008 0.00735294)"
                    />
                </pattern>
                <image
                    id="image0_49_1600"
                    width={123}
                    height={136}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAACICAYAAADHwZTIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7d1hThsxEIZhp+rBlpM3B+ldIFJAMpBN7PXMeLzf+/yKKHWLLL9ZvE5SCgAAAAAAAAAAAAAs41JO6v3m1fdcbqz/bmZ/CmQw2UKWz3hLcr2tknRWthAmW8gyGc+Q61qd7lWu3lnZQphsIakzPpLu3sxGjjkr6X/LSd3mYivGPMaMRMaFpMt4tnTfvFWP/5WDMlyNnyrjq2fWGxkXcoaVbZJZjzF7b6F6p/60V+MZ1E8rt3m8lsnIuJAUV+MHrpzTprskvnpnZQthsoVMyzjp/s37apyVLYTJFhKacdL9W+SeOZsqk0VuvJBxIRlX9luxlyrdZedn9N4zZ2ULYbKFuGe8JU1PDh1kS67VbwTFecyHpj1nc6okHhkX4rKySXfYmF1CM0665yLjQqL3xredPyLdT7Cpgm5MtpCZe+Oku30cExE7aFtBCmRcSHTGSfexcUyuxr120LaCdMi4kIiMk+6YcV5ymez64Fyyty+TRsaFhN7ifGJvA4F0G2JlC2GyhZjd4iTdtuN4vCyIl/8k5fGyIDIuJHplk+6JWNlCmGwhQxlvvAIn3UmwsoUw2UK6M066w8Yxx6ZKUh7vr0LGhTSt7BO8KtNjTKvkuqa7xsoWwmQL6b5Aa7z1lu2K1DvdvWOGpbs2uoO2FSyDjAtpWtkBb6aaeRNm6XTXjuygbQUueKNamLHcLrXK2qxxPMacnu5a6w7a9ujrvMxnXOSHu5FxIREnVWqnTHfjPYLpjuygXb8ek+673gme9bmcZFxI9EmVWuZ0v7RKumutO2jXr8ek+26VdNfIuJChkyo1p1Mrs06DPPx/rpjumtkOmsKe+YrprpFxIbsrO3m6W8Y0udKurV4vTqp82ktuy8+YLdd7yLiQoQOHZ0q3AumTKiP5XSXdNTIu5NvKHnyZTy/SHWzopEot8/55b3JbTuasiIwL+bayRzYTDJ8CTnMyJJvdw/8H0r3XbpObEL1jrp5cD2RcyNBkv1fqr18qZcBlR8EhLgcOR24FjoxJup8j40LMJtsj3QWmfu6gbY++ySOPLWOSbltkXMjQ4QVSuxbLzwjZHv4DRvvSI2PijowLYbKFuBw4tMosubbFyhbCZAsZuhr3+KAx+GFlCxndVPlfAAAAAAAAgDP7AF1/nO+9FBUXAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>

    )
}
export const Pill:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g filter="url(#filter0_d_49_1594)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#ABC6C9"
                />
            </g>
            <rect x={29} y={24} width={52} height={57} fill="url(#pattern0_49_1594)"/>
            <defs>
                <filter
                    id="filter0_d_49_1594"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1594"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1594"
                        result="shape"
                    />
                </filter>
                <pattern
                    id="pattern0_49_1594"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#image0_49_1594"
                        transform="scale(0.00961538 0.00877193)"
                    />
                </pattern>
                <image
                    id="image0_49_1594"
                    width={104}
                    height={114}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAByCAYAAAC/UZRcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZVSURBVHgB7Z1BbxtFFMefEyd1E4eEJg2RAslWiSqkHhqJA0gg0Z64cuXGNwC+AUdugNQ77YkL3MsJLpU4BqkRpUrVtHWEExxqN3ZiJ07Me1Pbmh0v3bXr9b6deT9pZM+sLcX5a977v5nxGkAQBEEQkiEDDtFqtb7AhzlIhnImk/ke+sQ1gR7jgwfJsIMCXYE+GQOBNSIQc0Qg5libg9qG4Etj2INk2TH634UZhyzYC7k1D3jhGf1QRykhjjkiEHOsCXGYcz43hjaAPxvm34056bavD5aAH7QFFoAC+TSREMccEYg5IhBzUmkS/qcItZK0ujiORWgsSIhjjgjEnFSEOMw5N4whDyzF/KzsC1X8gz18eAyOIiGOOSIQc0Qg5rAzCe0i9FNtKKljUizg6OJom+AGCAoJccwRgZiTeIhr1zk6Tucck0QLVdeL0ChIiGOOCMQcEYg5IzUJmHO+xodVbUgMQQijdnEfgxShfSEhjjkiEHNiC3GYbyi/hOaY4vMKlA6rkM9dgLnpKchNTEBucgIcpqh3YitU21u3v4a97v7TXTg4POz215begrfn3wSHual3Eg9xjZMTXz83afNXlvon0f9G8+wMqo2Gb2wLZxSFuQsY5uampsBbXACXSVSg7Pg4XPdWoFqvQ/20CZVaDZ838PmpajV8LgINiYCbRHhR3kfGgBpRenEIW892u9ey42NQrh2hgcip5y4yNJMwjJtE7OyX4Mk/pcBr2bExWF287IKB8JkEVhmZwhk1FfJOTuFRcV+FOqJ5fg4uwtIyUUij9mTfP5vIjpOxoGtUK1HtZDusPe1sfloZiWqjjsKcq3xErcP7V9eU47OZgQRqf/H1B4iZ9aXF7vNeAzFugzi3sd0xxup6J7VVIYW6e38+hOmLL8Phwky+6wbTTCaT+V3vp0agPApx7Z1lKB8dQ+243g17FQx51M5QMBsEMkmNQGoRFdvCGzOqb67hEVTk2mYcUhviaMboFMsV1aheorC3jouuNoiVWoGuX1np1ksU9nYP/lXjVC9VNKeXdlK9fqLMAYa8pdnZnms0m0ovqirspRk71vYzLbXy3TEOBM2ozqwi80CLsmnECoFoJlHIIyjsFQ6ewx7OoA5UM6WVSAJhYUo7o542xPa4FIllUq7WYHPnqbpGM43MQwLb6rSVbd58oxb2pqgzyIMUfbN6aW5WzZqgeonC3rWV5aTOPewZfbpV886r3mDl/rK+x0Tce/Cwm5sUKbpxmfUHAMiG+8RBaE2vUy9R2NPX/LhhvUAUyt5b85RQZLkrRy9XxDv1klnwDpFN8B+hqsIAOHGEprO/RDVTAXOQvmVBQlG9FMP+0l1sv8Br4uAZp4w639AJezSztp4VuldXLy+wOqjinEB0poEazZwqury/dv/ubqsT+Yu81u+cPSVIJoGcXvPcn4Nom71cO4ZcNqu2OJLewugRiOkt9WNj+dIlZRbqzdOukdDX7z5892qUI19kCL4xxkKL0CgEzSBn7mZI6PnG3FYn09DHeby9kOu0lb1pjDVD3uNuiAtCz0VEbnIShgmuGtT7fY8IpEE2nOw42fAaLrrOz+QhaUQgjc62egRjsA3+wnMbYkIEGoxb2P4IeU0Z/EeoQvNNECJQfBQx5xThNZHvqDJHBGKOhLhwyADcMsYewYgQgcIhtxbFEDwwxgYyBSYi0JAYpAiNguQg5gTNILKG5prROrbky+rRMLIiNAo931Ft3wXRM4Z/xLYEbvAZGHf7CIAE1HNMFUNcLEJKDhqMbRSkDCNAchBzRCDmuB7iyAzdNcYGOh4VF64LRGYg7GgUCbYdMDYSxCSE0xyVIQhCchBzXJtBZn3DKt8EESQQrSmZU3ooC38M+AoGKEIhQXoEau8C+j4Eri7YIlAU7se18DkIkoOYIwIxJ6pJ+BnbvNan1e2PgDeb0Lsqz94UmEQV6Cds+rdzP4F0CHQn5DVkhkzTwCrful6o1odxNCpOJAcxRwRiTqS7/mId9AH4c1AU6PdQv4XRcTPCa8z6phTXTuiwcC0HbXIqQqMgIY45IhBz4gxxVIdEyQvCK4gqUMF4LZ2R4/6rF2WwYFU+kkCYWAt6H10dnZFjL1DYnaTSgOQg5ohAzBGBmBPnjwzSDTE2YERgvvkNLERmEHNEIOaIQMz5D2qDEEeBjqzUAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>

    )
}
export const AILogo:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1586)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#ABC6C9"
                />
            </g>
            <g filter="url(#filter1_d_49_1586)">
                <path d="M62.5293 70V30H72.0001V70H62.5293Z" fill="white"/>
                <path
                    d="M49.8386 51.1765V39.4118H47.4708V51.1765H49.8386ZM38 70V34.7059H40.3677V32.3529H42.7354V30H54.574V32.3529H56.9417V34.7059H59.3094V70H49.8386V60.5882H47.4708V70H38Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1586"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1586"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1586"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_49_1586"
                    x={38}
                    y={30}
                    width={34}
                    height={45}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={5}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.752941 0 0 0 0 0.831373 0 0 0 0 0.843137 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1586"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1586"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const CALogo:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1578)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#ABC6C9"
                />
            </g>
            <g filter="url(#filter1_d_49_1578)">
                <path
                    d="M66.3845 51.7059V39.6471H63.9806V51.7059H66.3845ZM54.3652 71V34.8235H56.7691V32.4118H59.1729V30H71.1922V32.4118H73.596V34.8235H75.9998V71H66.3845V61.3529H63.9806V71H54.3652Z"
                    fill="white"
                />
                <path
                    d="M33.4038 71V68.5882H31V34.8235H33.4038V32.4118H35.8077V30H47.8269V32.4118H50.2308V34.8235H52.6346V46.8824H43.0192V37.2353H40.6154V63.7647H43.0192V51.7059H52.6346V66.1765H50.2308V68.5882H47.8269V71H33.4038Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1578"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1578"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1578"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_49_1578"
                    x={31}
                    y={30}
                    width={45}
                    height={46}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={5}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.752941 0 0 0 0 0.831373 0 0 0 0 0.843137 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1578"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1578"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const Line:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={105}
            height={104}
            viewBox="0 0 105 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_49_1568)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95 0H15V10H5V90H15V100H95V90H105V10H95V0Z"
                    fill="#ABC6C9"
                />
            </g>
            <g filter="url(#filter1_d_49_1568)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.0588 30H35.5883V42.9412H48.5293L48.5293 56.4705L62.0587 56.4705L62.0588 42.9412H62.0588V69.4118H75L75 42.9412V30H62.0588ZM35 56.4706V70H48.5294L48.5294 56.4706L35 56.4706Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_49_1568"
                    x={0}
                    y={0}
                    width={105}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-5} dy={4}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1568"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1568"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_49_1568"
                    x={35}
                    y={30}
                    width={40}
                    height={45}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={5}/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.752941 0 0 0 0 0.831373 0 0 0 0 0.843137 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_49_1568"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_49_1568"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>

    )
}
export const XLogoInactive:React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={14}
            height={12}
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.143555 0.000976562H1.85723H1.85765H3.5709H3.57133H5.285V1.71508H3.57133V3.42832H5.285V5.14242H3.5709V3.42875H1.85723V1.71508H0.143555V0.000976562ZM5.28681 5.14423H7.00049H7.00091H8.71459V6.85791H10.4283V8.57158H12.1419V10.2853H13.8556V11.9994H12.1419H12.1415H10.4283H10.4278H8.71416V10.2857H7.00049V8.57201H5.28681V6.85833V6.85791V5.14423ZM7.00091 8.57158H8.71416V6.85833H7.00091V8.57158ZM8.71459 8.57201V10.2853H10.4278V8.57201H8.71459ZM3.5709 6.85791H5.285V8.57158V8.57201V10.2857H3.57133V11.9994H1.85765H1.85723H0.143555V10.2853H1.85723V8.57158H3.5709V6.85791ZM7.00091 1.71465H5.28681V3.42875H7.00049V5.14242H8.71416H8.71459H10.4283V3.42875H12.1419V1.71508H13.8556V0.000976562H12.1419H12.1415H10.4278V1.71465H8.71416V3.42832H7.00091V1.71465Z"
                fill="#A49F74"
            />
        </svg>

    )
}
export const XLogoActive: React.FC<Props> = ({className}) => {
    return (
        <svg
            className={className}
            width={15}
            height={12}
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.644043 0.000976562H2.35772H2.35814H4.07139H4.07182H5.78549V1.71508H4.07182V3.42832H5.78549V5.14242H4.07139V3.42875H2.35772V1.71508H0.644043V0.000976562ZM5.7873 5.14423H7.50097H7.5014H9.21507V6.85791H10.9287V8.57158H12.6424V10.2853H14.3561V11.9994H12.6424H12.642H10.9287H10.9283H9.21465V10.2857H7.50097V8.57201H5.7873V6.85833V6.85791V5.14423ZM7.5014 8.57158H9.21465V6.85833H7.5014V8.57158ZM9.21507 8.57201V10.2853H10.9283V8.57201H9.21507ZM4.07139 6.85791H5.78549V8.57158V8.57201V10.2857H4.07182V11.9994H2.35814H2.35772H0.644043V10.2853H2.35772V8.57158H4.07139V6.85791ZM7.5014 1.71465H5.7873V3.42875H7.50097V5.14242H9.21465H9.21507H10.9287V3.42875H12.6424V1.71508H14.3561V0.000976562H12.6424H12.642H10.9283V1.71465H9.21465V3.42832H7.5014V1.71465Z"
                fill="#4E3B40"
            />
        </svg>

    )
}
