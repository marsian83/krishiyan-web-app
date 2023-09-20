const TechCard = () => {
    const features = [
        {
            number: '01',
            title: 'Our end users',
            description: 'We deliver our valuable services to farmers for proper cultivation practices and Market linkage.',
            items: ['Farmers']
        },
        {
            number: '02',
            title: 'Our Valuable Customers',
            description: 'We nurture the agri-input dealers and FPOs for giving scientific crop advisory to their farmer customers.',
            items: ['Input dealers FPOs']
        },
        {
            number: '03',
            title: 'Our Partners',
            description: 'We deliver quality farm produces to small food processing units, supermarkets and other food industry.',
            items: ['Food processing units']
        },
    ];

    return (
        <section className="pt-12 pb-12 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-wrap -mx-4">
                    {features.map((feature, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                            <div className="relative border-r border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="w-24 h-24 rounded-full relative bg-white shadow-md mx-auto -mt-16">
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full">
                                        {feature.items.map((item, idx) => (
                                            <h1 className='text-xl font-semibold' key={idx}>{item}</h1>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative mt-8 text-center">
                                    <div className="text-xl font-bold mb-4 flex items-center justify-center">
                                        <span className="mr-3 text-gray-500">{feature.number}</span>
                                        <span className="px-3 py-1 rounded-full bg-white shadow-md">{feature.title}</span>
                                    </div>
                                    <p className="text-gray-700">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechCard;

