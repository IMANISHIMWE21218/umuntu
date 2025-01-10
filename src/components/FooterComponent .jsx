

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import logo from "../assets/logo.png"

const FooterComponent = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className='mb-8' >
                     <img src={logo} alt="Logo" className="md:w-22 md:h-5 w-18 h-4 inline-block items-center  mb-8" />
                     <div className=''>
                       <Footer.LinkGroup col>
                        <Footer.Link href="#">Tell: +250 788888880</Footer.Link>
                        <Footer.Link href="#">Email: info@umuntuninkundi.org</Footer.Link>
                        <Footer.Link href="#">Location: kicukiro, Kigali, Rwanda</Footer.Link>
                        </Footer.LinkGroup>

                     </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="about" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Flowbite</Footer.Link>
                        <Footer.Link href="#">Tailwind CSS</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Github</Footer.Link>
                        <Footer.Link href="#">Discord</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="umuntu ninkundi All rights reserved." year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="https://www.facebook.com/share/omwbeKs8VAqHVzct/?mibextid=LQQJ4d" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsWhatsapp} />
                    <Footer.Icon href="#" icon={BsYoutube} /> 
                </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent 
