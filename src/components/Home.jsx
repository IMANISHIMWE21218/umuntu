import { Carousel } from "flowbite-react";

import banner1 from "../assets/1.jpeg";
import banner2 from "../assets/2.jpeg";
import banner3 from "../assets/3.jpeg";

const Home = () => {
    return (
        <div className="bg-neutralSilver">
            <div className="flex flex-col min-h-screen h-[740px] md:h-[600px] lg:h-[600px] w-full md:w-11/12 justify-center mx-auto py-4 md:py-8">
                <Carousel className="w-full mx-auto">
                    {[
                        { 
                            image: banner1, 
                            title: "Umuntu Ni Kundi, Dufashanye", 
                            subtitle: "Together, We Rise", 
                            description: "Our foundation is dedicated to supporting underprivileged students and families in need. We provide essential school materials and resources to ensure every child has the opportunity to succeed.", 
                            buttonText: "Donate" 
                        },
                        { 
                            image: banner2, 
                            title: "Empowering Future Generations", 
                            subtitle: "Through Education and Compassion", 
                            description: "By supporting vulnerable children, we aim to create lasting change. Together, we equip students with tools for success and empower them to overcome life's challenges.", 
                            buttonText: "About-Us" 
                        },
                        { 
                            image: banner3, 
                            title: "Together We Are Happy", 
                            subtitle: "Umuntu Ni Kundi, Dukundane", 
                            description: "Our foundation believes in unity and love. By helping each other, we create a happier, more supportive community. Together, we thrive and uplift those in need.", 
                            buttonText: "Our Gallery" 
                        }
                    ].map((slide, index) => (
                        <div 
                            key={index} 
                            className="py-2 md:py-2 lg:py-4 lg:h-auto flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-8 lg: ml-[-1.5px]"
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-100 lg:h-[500px] flex-shrink-0">
                                <img 
                                    src={slide.image} 
                                    alt="" 
                                    className="w-full h-full object-cover shadow-md rounded-md lg:mt-12"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 mt-6 md:mt-0 p-4 md:p-6 lg:p-8">
                                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-neutralDGrey leading-tight">
                                    {slide.title} <br /> 
                                    <span className="text-brandPrimary">{slide.subtitle}</span>
                                </h1>
                                <p className="text-base md:text-base lg:text-lg text-neutralGrey mt-4">
                                    {slide.description}
                                </p>
                                <button className="btn-primary mt-6">{slide.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
