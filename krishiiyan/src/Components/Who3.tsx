const Who3 = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-[#3bc238] space-y-10 md:space-y-0">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-white">Our Mission</h1>
                    <p className="text-xl leading-relaxed text-white">Krishiyan empowers Agri input dealers and other farming communities with innovative crop production technologies made available to farmers of remotest locations in the country with the ultimate aim to uplift the farmers by increasing per acre productivity.</p>
                    <button className="bg-white hover:bg-[#f8f7fc] text-[#3bc238] hover:text-blue-500 px-6 py-2 rounded text-lg font-bold transition-colors duration-300">
                        Read More
                    </button>
                </div>

                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img src="public\imageonline-co-compressed.jpg" alt="Description for the Image" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center justify-between p-10 bg-[#2da32b] space-y-10 md:space-y-0">
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img src="public\imageonline-co-compressed.jpg" alt="Description for the Image" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-white">Our Vision</h1>
                    <p className="text-xl leading-relaxed text-white">Our vision is to bring prosperity and growth to farmers for a far-reaching impact on global food production.</p>
                    <button className="bg-white hover:bg-[#f8f7fc] text-[#3bc238] hover:text-blue-500 px-6 py-2 rounded text-lg font-bold transition-colors duration-300">
                        Read More
                    </button>
                </div>
            </section>
        </>
    );
};

export default Who3;
