const TechBanner = () => {
    return (
        <section className="bg-cover bg-bottom h-[300px] sm:h-[400px] md:h-[500px] relative" style={{ backgroundImage: "url('public/our-tech-bnr.jpeg')" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
                <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-bold text-center">Our technology</h1>
            </div>
        </section>
    )
}

export default TechBanner;
