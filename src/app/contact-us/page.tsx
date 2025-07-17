import Link from "next/link";
import Mail from "@/assets/icons/mail.svg";
import Location from "@/assets/icons/location.svg";
import Phone from "@/assets/icons/phone.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/components/layout/Layout";

const ContactUsPage = () => {
    return (
        <AppLayout hideMail={true}>
            <div className="md:px-20 py-36">
                <div className="px-5 md:px-0">
                    <h1 className="text-3xl md:text-5xl font-camptonbold text-white">Contact Us</h1>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col gap-20 md:gap-0 md:flex-row md:items-center">
                        <div className="md:w-[688px] px-5 md:px-0">
                            <div className="border-l-[5px] md:border-l-[9px] px-[16px] md:pl-[25px] py-10 md:py-16 border-solid border-blue">
                                <div className="flex flex-col gap-12">
                                    <div className="flex items-center gap-4">
                                        <div className="size-[55px] bg-offgray rounded-xl flex items-center justify-center">
                                            <Image src={Mail} alt="mail" quality={100} width={100} height={100} className="w-[24px] h-auto" />
                                        </div>
                                        <div>
                                            <p className="text-graytext text-base mb-1">Quick Contact</p>
                                            <h4 className="text-white">Email: <Link href="mailTo:info@damdamglobal.com" className="text-blue underline">
                                                info@damdamglobal.com</Link></h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="size-[55px] bg-offgray rounded-xl flex items-center justify-center">
                                            <Image src={Phone} alt="mail" quality={100} width={100} height={100} className="w-[24px] h-auto" />
                                        </div>
                                        <div>
                                            <p className="text-graytext text-base mb-1">Phone Number</p>
                                            <h4 className="text-white"><Link href="tel:+2348183473250" className="text-blue underline">
                                                +234 818 347 3250</Link></h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <div className="size-[55px] bg-offgray rounded-xl flex items-center justify-center">
                                                <Image src={Location} alt="mail" quality={100} width={100} height={100} className="w-[18px] h-auto" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-graytext text-base mb-1">Location</p>
                                            <Link href="https://maps.app.goo.gl/GhhNmD7cPWYz6UQd9" target="_blank" className="text-white underline">C & I Leasing Dr, Lekki Phase I, Lekki 106104, Lagos</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="contact-form relative md:w-[595px] px-5 md:px-0 py-10 md:py-12 mx-auto">
                                {/* SVG borders on the outer container edges */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path
                                            // d="M0,0 L20,0 M0,0 L0,20 M80,0 L100,0 L100,20 M0,80 L0,100 L20,100 M80,100 L100,100 L100,80"
                                            d="M0,0 L20,0 M0,0 L0,20 M80,0 L100,0 L100,20 M0,80 L0,100 L20,100 M80,100 L100,100 L100,80"
                                            stroke="#00bcd4"
                                            // strokeWidth="2.8"
                                            strokeWidth="3.4"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                                <div className="bg-[#141414] md:w-[505px] mx-auto px-6 pt-16 pb-12 relative">
                                    <h3 className="about-message text-white text-4xl md:text-5xl w-full text-center font-camptonbold">Contact Form</h3>
                                    <form action="" className="">
                                        <div className="form-group mb-5">
                                            <Label className="text-[#B5B5B5] text-sm">Full Name</Label>
                                            <Input className="py-6 bg-transparent border-0 border-b-2 rounded-none border-solid border-[#363636]" />
                                        </div>
                                        <div className="form-group mb-5">
                                            <Label className="text-[#B5B5B5] text-sm">Email</Label>
                                            <Input className="py-6 bg-transparent border-0 border-b-2 rounded-none border-solid border-[#363636]" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <Label className="text-[#B5B5B5] text-sm">Message</Label>
                                            <Textarea rows={6} className="bg-transparent border-0 border-b-2 rounded-none border-solid border-[#363636]" />
                                        </div>
                                        <button className="text-sm bg-blue py-5 w-full rounded-full text-white">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ContactUsPage;