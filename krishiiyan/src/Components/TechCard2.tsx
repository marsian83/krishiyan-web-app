const TechCard2 = () => {
    const points = [
        "Inappropriate practices in crop cultivation.",
        "Difficult in maintaining farmer data and day to day stocks.",
        "Communication gap with farmers leading to credit issues resulting in loss of a farmer customer."
    ];

    return (
        <div className="flex flex-col md:flex-row border p-4 sm:p-6 rounded-md shadow-md">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-0 md:pr-4">
                <img src="public\our-tech.png" alt="Description" className="w-full rounded-md shadow-xl" />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold mb-4">KrishiYan works closely with Agri-input dealers to provide solutions for solving:</h2>
                <ul className="pl-6 list-disc">
                    {points.map((point, index) => (
                        <li key={index} className="mb-2 text-gray-700">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TechCard2;


