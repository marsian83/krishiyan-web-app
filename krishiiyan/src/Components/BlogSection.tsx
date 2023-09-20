const BlogSection = () => {
    return (
        <section className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 mx-auto bg-[#f3f1fe] w-[80px] sm:w-[90px] md:w-[100px] h-[40px] sm:h-[44px] md:h-[48px] text-[#3bc238]">Blog</h1>
            
            <p className="text-lg sm:text-xl text-center mb-4">Interaction with Input Dealers for illustrating our model and getting reviews, so far we have interacted with more than 75+</p>
            
            <p className="text-lg sm:text-xl text-center mb-8">dealers in Gujarat, Maharashtra, Tamil Nadu and received positive response for our software service.</p>

            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
                <img src="public/our-team-1.png" alt="Description for Image 1" className="w-full sm:w-1/3 shadow-lg rounded-3xl"/>
                <img src="public/our-team-2.png" alt="Description for Image 2" className="w-full sm:w-1/3 shadow-lg rounded-3xl"/>
            </div>
        </section>
    );
}

export default BlogSection;
