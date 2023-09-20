const What1 = () => {
  return (
    <section className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] relative" style={{ backgroundImage: "url('public/what-1.jpg')" }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold text-shadow-md">What we do?</h1>       
        </div>
    </section>
  )
}

export default What1;
