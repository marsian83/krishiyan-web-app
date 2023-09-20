const TechCard3 = () => {
    const features = [
        "Multilingual dashboard.",
        "User friendly Fertilizer and Pesticide calculators.",
        "Fast and accurate communication to farmers using WhatsApp chatbots.",
        "Smart shop management.",
        "Faster decision making  for credit support to farmers.",
        "Helps input dealers to maximize their income."
    ];

    return (
        <section className="relative z-10" style={{
            backgroundImage: 'url(assets/images/our-technology.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <img src="public/our-technology.png" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="text-center pt-12 pb-12">
                <div className="container mx-auto">
                    <span className="text-4xl font-semibold mb-4 font-bold">KrishiYan Features</span>
                    <div className="flex items-center py-2.5">
                        <div className="md:w-full bg-black bg-opacity-100 rounded-lg p-6">
                            <ul className="text-left text-white pl-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="mb-2 font-bold">
                                        <span className="mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechCard3