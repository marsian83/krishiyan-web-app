const ContactBanner = () => {
    return (
        <section className="bg-cover bg-bottom h-[300px] sm:h-[400px] lg:h-[500px] relative" style={{ backgroundImage: "url('public/contact-bnr.jpg')" }}>
            <div className="absolute top-1/2 right-2 sm:right-4 md:right-5 transform -translate-y-1/2 p-2 sm:p-4 md:p-6 lg:pl-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">Contact us</h1>
            </div>
        </section>
    )
}

export default ContactBanner;
