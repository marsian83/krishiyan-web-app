const Who2 = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between p-10 space-y-10 md:space-y-0">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold">About Our Company</h1>
                    <p className="text-xl leading-relaxed">Wetacre Sustainable Solutions LLP is a Gujarat-based startup founded in 2021 with the motive to encourage farming activity by integrating technology and real-time data to support farmers through input dealers. Our main objective is nurturing Agri input dealers to give personalized crop advisory and support farmers with the ultimate aim to increase per acre productivity. The company works in the Phygital model, where farmers can visit the Krishiyan subscribed input dealers shop and get personalized crop advisory solutions.</p>
                </div>

                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img src="public\imageonline-co-compressed.jpg" alt="Description for the Image" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center justify-between p-10 space-y-10 md:space-y-0">
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img src="public\imageonline-co-compressed.jpg" alt="Description for the Image" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold">About KrishiYan</h1>
                    <p className="text-xl leading-relaxed">KrishiYan is the brand of WetAcre Sustainable Solutions LLP, a SaaS platform for Agri-input dealers to assist farmers from selecting a crop variety to helping them in marketing the farm produces.</p>
                    <button className="bg-[#3bc238] hover:bg-[#f8f7fc] text-white hover:text-blue-500 px-6 py-2 rounded text-lg font-bold transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </section>
        </>
    );
};

export default Who2;
