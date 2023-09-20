const Who4 = () => {
    return (
        <section className="p-24 text-center space-y-16 bg-[#d2f0d1]">
            <h1 className="text-4xl font-bold mb-6">Our Philosophy</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    {
                        icon: 'public/icon-2.png',
                        description1: 'Creating a win-win situation for',
                        description2: 'those who deal with us.',
                        number: '01'
                    },
                    {
                        icon: 'public/icon-1.png',
                        description1: 'Promoting safe food production',
                        description2: 'with good agricultural practices.',
                        number: '02'
                    },
                    {
                        icon: 'public/hunger.png',
                        description1: 'We contribute to Global',
                        description2: 'Sustainable Goals - Zero Hunger.',
                        number: '03'
                    },
                ].map((item, idx) => (
                    <div key={idx} className="relative p-8 border rounded-lg hover:shadow-lg transition-all duration-300">
                        <span className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6rem] font-bold text-gray-600 opacity-30">{item.number}</span>
                        <img src={item.icon} alt={`Icon ${idx + 1}`} className="w-20 h-20 object-cover rounded mx-auto" />
                        
                        <p className="mt-4 font-semibold">{item.description1}</p>
                        <p>{item.description2}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Who4;
