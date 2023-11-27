import React, { useEffect, useRef } from 'react'

const AmsTopWidget = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        // <script src="https://studentpanel.net/widget/ams-widget-loader.js" ag="13059" wid="106" async class="amsSearch"></script>

        const script = document.createElement("script")
        script.src = "https://studentpanel.net/widget/ams-widget-loader.js";
        script.setAttribute("ag", "13059");
        script.setAttribute("wid", "106");
        script.className = "amsSearch";

        (sectionRef.current as any).appendChild(script);

    }, [])
    return (
        <div className="py-2 md:px-8 lg:px-14 backdrop-blur-md -z-20 bg-white bg-opacity-80 w-[100vw] fixed top-[128px] right-0 text-black text-sm font-bold">
            <div ref={sectionRef} id='script-container' className="rounded-lg bg-black border w-20">
            </div>
            You are a stepcloser from studying at your dream school
        </div>
    )
}

export default AmsTopWidget