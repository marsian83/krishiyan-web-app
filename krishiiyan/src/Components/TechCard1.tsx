const TechCard1 = () => {
    return (
        <section className="pt-10 pb-10 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 sm:mb-0">
                        <img src="public\home1.png" alt="Home Image 1" className="w-full h-auto shadow-md rounded-lg"/>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                        <img src="public\home2.png" alt="Home Image 2" className="w-full h-auto shadow-md rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechCard1;
