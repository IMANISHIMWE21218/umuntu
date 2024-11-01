import React from 'react';

import about from "../assets/about.jpg"
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"

const About = () => {
    return (
        <div>
            <div className=" mx-auto my-8 w-full">
                {/* About and description */}
                <div className=" px-4 lg:px-14  md:w-11/22 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 pb-12">
                    <div>
                        <img src={about} alt="" className='h-[425px] rounded-lg shadow' />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className='text-3xl text-neutralDGrey font-semibold mb-4 mb-4 md:w-4/5'>About Us</h2>
                        <p className='md:w-3/4 text-sm text-neutralLGrey mb-8'>
                        Established by IRAGENA NTWARI Alexis, Moses BIZIMANA, and TUYISHIME Yvette, we are a committed group of 12 people who firmly believe in the principles of unity, empathy,                            and collective accountability. We are not just a team, but a family that stands together to make a difference. Twice a year, in the months of June and December, we host events where we gather modest contributions from our own means. These funds are then used to provide assistance to a minimum of five families during each event. Our help is not just a one-time act of kindness, but a continuous effort to uplift those in need. In addition to this, we have taken under our wing nine individuals for whom we cover educational expenses. We believe in the power of education and its ability to change lives. Therefore, we not only pay their school fees but also provide them with necessary school materials. This initiative is our way of investing in their future and giving them the tools they need to succeed. We are more than just a team; we are a beacon of hope for those we serve.    
                        </p>

                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>

                {/* About Rates */}
                <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                        <div className='md:w-1/2'>
                            <h2 className='text-3xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping local <span className='text-brandPrimary'>families to live a better life</span> </h2>
                            <p>we are here to help thos in need with our resources to make a better world</p>
                        </div>

                        <div className="md:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4">
                                <img src={m1} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">340</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={m3} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">123</h4>
                                    <p>Charity Events</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={m2} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">34,000,000Rfw</h4>
                                    <p>Donations</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={m4} alt="" className="w-12 h-12" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">21</h4>
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
