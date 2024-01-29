function Hero(props) {
    return (
        <div className={props.cName}>
            <div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${props.heroImg})` }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75 z-0"></div>

                <main className="relative z-10">
                    <div className="text-center text-white">
                        <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl sm:leading-none md:text-6xl">
                            {props.title}
                        </h2>
                        <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                            {props.text}
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex justify-center">
                            <div className="rounded-md shadow">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                                    {props.buttonText}
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                                    {props.buttonText}
                                </a>
                                <a href={props.url} className={props.btnClass}>
                                    {props.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Hero;
