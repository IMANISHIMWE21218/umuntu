import React from 'react';
import about from "../assets/about.jpg"
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"

const About = () => {
    return (
        <div>
            <div className=" mx-auto ">
                {/* About and description */}
                <div className=" px-4 lg:px-14 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 pb-12">
                <div className="md:w-2/3 py-8 mx-auto">
                        <h2 className='text-3xl text-neutralDGrey font-semibold   mb-4 md:w-4/5'>About Us</h2>
                        <p className=' text-sm text-neutralDGrey mb-8'>
    We are UMUNTU NI NKUNDI, a non-governmental organization established in 2019. Our mission is to support the less fortunate in our society by providing immediate relief and long-term assistance. <br /><br />
    
    We believe in the power of education to break the cycle of poverty and open up opportunities for a brighter future. Since our inception, we have organized 9 events, supported 45 families, and raised $800 yearly in donations. We are proud of our achievements and are committed to making a difference in the lives of those we serve. <br /><br />
    
    One of our key initiatives is to provide school fee assistance for students. So far, we have supported the education of 9 students, ensuring they have access to quality education and a chance at a better future. <br /><br />
    
    We are seeking partnerships to help us expand our reach and impact more families. Your support, whether in the form of financial aid, resource donation, or volunteering, can greatly contribute to our cause. In return, we offer the opportunity to enhance your corporate social responsibility profile and acknowledgment in our events and promotional materials. <br /><br />
    
    UMUNTU NI NKUNDI believes in the power of education to break the cycle of poverty and open up opportunities for a brighter future. <br />
    Here’s how we support education:
</p>

                        <button className="btn-primary">Learn More</button>
                    </div>
                    <div  className="md:w-1/3  mx-auto">
                        <img src={about} alt="" className='h-[425px] rounded-lg shadow' />
                    </div>
                 
                </div>

                {/* About Rates */}
                <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                        <div className='md:w-1/2'>
                            <h2 className='text-3xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping local <span className='text-brandPrimary'>families to live a better life</span> </h2>
                            <p>we are here to help thoso in need with our resources to make a better world</p>
                        </div>

                        <div className="md:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4">
                                <img src={m1} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">12</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={m3} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">9</h4>
                                    <p>Charity Events</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={m2} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">$800 /Annual</h4>
                                    <p>Donations</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={m4} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">1</h4>
                                    <p>Groups</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default About
