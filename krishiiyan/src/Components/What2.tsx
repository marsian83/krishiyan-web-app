const What2 = () => {
    const cardData = [
        { icon: 'public/2-(2).png', heading: '20+ Crops package of practices', text: 'KrishiYan has 20+ crops package of practices, helping dealers and farmers for selecting a localized high yielding crop variety to analyze the marketability of the farm produce.' },
        { icon: 'public/3-(1).png', heading: 'Weather-based real-time advisory', text: 'KrishiYan provides real-time advisory based on local weather data, suggests minute to minute action point to be suggested by dealers for their farmer customers.' },
        { icon: 'public/insecticide.png', heading: 'Easy Pest and diseases diagnosis', text: 'KrishiYan covers more than 150+ crop pest and diseases and suggests the integrated pest and disease management solutions. Based on the intensity of pest or disease the calculators suggests the formulation and dosage.' },
        { icon: 'public/fertilizer.png', heading: 'Fertilizer calculators for enhanced crop growth', text: 'KrishiYan features a unique model for the appropriate fertilizer calculation based on the organic content of the soil and suggests the appropriate dosage in splitwise for the enhanced crop growth.' },
        { icon: 'public/debit-card.png', heading: 'Fast decision-making for credit support to farmers', text: 'KrishiYan also helps dealers to analyze the maximum profit that can be achieved by the farmer based on the crop season and price in the future, thereby the dealer can support credit to farmers with less or no risk.' },
        { icon: 'public/inventory.png', heading: 'Smart Accounting and Inventory Management', text: 'KrishiYan helps dealers to track their accounts and inventory and also help them to maintain stocks for the future upcoming seasons.' },
        { icon: 'public/4-(1).png', heading: 'Crop Price Prediction Tools', text: 'KrishiYan helps farmers to understand the future market price of a particular crop thereby helps in accurate decision making for selecting the crop for cultivation in a particular season to get a maximum profit.' },
        { icon: 'public/meter.png', heading: 'Support for Soil Testing', text: 'More than 18+ components testing facilities are made easily available and KrishiYan experts after examining prepares the soil profile to help dealers in giving customized fertilizer recommendation to farmers.' },
        { icon: 'public/connection.png', heading: 'Connect with agri-experts', text: 'KrishiYan also helps farmers to get regular crop advisory from agri-experts of different domain.' },
        
    ];

    return (
        <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: 'url(public/bg-2.jpg)' }}>
            {/* Heading in the middle */}
            <h1 className="text-center text-black text-4xl font-bold mb-12">KrishiYan Features</h1>

            {/* Cards below */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card, idx) => (
                    <div key={idx} className="card bg-white shadow-lg rounded p-4 w-full flex flex-col justify-between">
                        {/* Icon image */}
                        <img src={card.icon} alt={`Icon ${idx + 1}`} className="w-24 h-24 mb-4 mx-auto" />
                        
                        {/* Heading and Text */}
                        <h2 className="text-xl font-bold mb-2 text-center">{card.heading}</h2>
                        <p className="text-sm text-gray-700">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default What2;


