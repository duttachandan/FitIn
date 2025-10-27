'use client'
import React from "react";
import Lottie from "lottie-react";
import LottieAnimation from "@/Loader/Run-Forrest-Run.json";

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div
            className={`fixed inset-0 
            flex justify-center items-center 
            bg-white z-50 transition-opacity 
            duration-500
            `}
        >
            <Lottie
                animationData={LottieAnimation}
                loop={true}
                autoplay={true}
                style={{ width: 300, height: 300 }}
            />
        </div>
    );
};

export default Loading;

