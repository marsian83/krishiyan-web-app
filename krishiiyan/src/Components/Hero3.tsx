import  { useEffect, useRef, useState } from 'react';

const Hero3 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <section ref={heroRef} className={`p-4 sm:p-10 text-center mt-12 ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="text-xl sm:text-3xl font-semibold mb-8 mx-auto bg-[#f3f1fe] w-[180px] sm:w-[250px] h-[48px] text-[#3bc238]">Supported By</h1>

            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
                <img src="public\Picture1.png" alt="Image 1 Description" className="w-1/2 sm:w-[165px] lg:w-[330px] h-[70px] sm:h-[140px] mb-4"/>
                <img src="public\Picture3.png" alt="Image 2 Description" className="w-1/2 sm:w-[165px] lg:w-[330px] h-[65px] sm:h-[130px] mb-4"/>
                <img src="public\Picture2.png" alt="Image 3 Description" className="w-1/2 sm:w-[165px] lg:w-[330px] h-[65px] sm:h-[130px] mb-4"/>
                <img src="public\Picture4.png" alt="Image 4 Description" className="w-1/2 sm:w-[165px] lg:w-[330px] h-[65px] sm:h-[130px] mb-4"/>
            </div>
        </section>
    );
};

export default Hero3;
