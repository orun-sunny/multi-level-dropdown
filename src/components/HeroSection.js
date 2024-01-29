import React from 'react';

const HeroSection = ({ heroImg, title, text, url, buttonText, btnClass }) => {
    return (
        <div className="relative flex items-center justify-center">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            </div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl font-extrabold leading-tight">HIIIIIIIIIIIIII </h1>
                <p className="mt-4 text-xl">{text}</p>
                <a href={url}>
                    <button
                        className={`mt-6 px-6 py-3 text-lg font-semibold rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition ${btnClass}`}
                    >
                        {buttonText}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
