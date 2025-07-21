'use client';

import SearchImg from "@/assets/search.svg";
import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AllJobs = () => {

    const [openJobModal, setOpenJobModal] = useState<boolean>(false);

    const toggleJobModal = () => {
        setOpenJobModal(!openJobModal);
    }

    return (
        <div className="pb-20 md:pb-28 pt-36 max-w-[1630px] mx-auto">
            <div className="text-center">
                <h4 className="text-3xl md:text-5xl font-camptonsemibold text-white mb-5">Featured Jobs</h4>
                <p className="text-sm leading-loose text-white">
                    Join a team that&apos;s building real solutions and making real impact.
                </p>
            </div>
            <div className="mt-14 flex flex-col md:grid grid-cols-3 gap-10">
                <div className="bg-[#121212] p-6 rounded-[12px]">
                    <div className="flex justify-between mb-4 md:mb-3 items-center">
                        <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                        <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                    </div>
                    <h4 className="mb-14 text-[#D5D5D5] font-camptonbold text-xl">Frontend Developer</h4>
                    {/* <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p> */}
                    <button onClick={toggleJobModal} className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                </div>
                <div className="bg-[#121212] p-6 rounded-[12px]">
                    <div className="flex justify-between mb-4 md:mb-3 items-center">
                        <h2 className="text-blue text-3xl font-camptonbold">02</h2>
                        <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                    </div>
                    <h4 className="mb-14 text-[#D5D5D5] font-camptonbold text-xl">Backend Developer</h4>
                    {/* <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p> */}
                    <button onClick={toggleJobModal} className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                </div>
                <div className="bg-[#121212] p-6 rounded-[12px]">
                    <div className="flex justify-between mb-4 md:mb-3 items-center">
                        <h2 className="text-blue text-3xl font-camptonbold">03</h2>
                        <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                    </div>
                    <h4 className="mb-14 text-[#D5D5D5] font-camptonbold text-xl">Q&A Specialist</h4>
                    {/* <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p> */}
                    <button onClick={toggleJobModal} className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                </div>
                <div className="bg-[#121212] p-6 rounded-[12px]">
                    <div className="flex justify-between mb-4 md:mb-3 items-center">
                        <h2 className="text-blue text-3xl font-camptonbold">04</h2>
                        <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                    </div>
                    <h4 className="mb-14 text-[#D5D5D5] font-camptonbold text-xl">Product Analyst</h4>
                    {/* <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p> */}
                    <button onClick={toggleJobModal} className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                </div>
                <div className="bg-[#121212] p-6 rounded-[12px]">
                    <div className="flex justify-between mb-4 md:mb-3 items-center">
                        <h2 className="text-blue text-3xl font-camptonbold">05</h2>
                        <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                    </div>
                    <h4 className="mb-14 text-[#D5D5D5] font-camptonbold text-xl">Cloud Engineer</h4>
                    {/* <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p> */}
                    <button onClick={toggleJobModal} className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                </div>
            </div>
            <Modal open={openJobModal} onCancel={toggleJobModal} footer={null}>
                <div className="pb-6 py-20">
                    <h3 className="about-message text-white text-4xl md:text-5xl w-full text-center font-camptonbold">Apply</h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-5 mb-3">
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">First Name</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Last Name</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Email</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Phone Number</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">State of Residence</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Position</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Monthly Salary Expectation (NGN)</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Total Years of Work Experience</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">Portfolio Link (Optional)</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                        <div className="form-group">
                            <Label className="text-[#B5B5B5] text-sm">LinkedIn URL (Optional)</Label>
                            <Input className="py-6 bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                        </div>
                    </div>
                    <div className="form-group mb-9">
                        <Label className="text-[#B5B5B5] text-sm">Cover Letter</Label>
                        <Textarea rows={4} className="bg-transparent border-0 border-b rounded-none border-solid border-[#363636]" />
                    </div>
                    <div className="border-2 px-3 py-2 rounded-[10px] border-solid border-[#363636] form-group flex items-center justify-between mb-10">
                        <p className="text-[#B5B5B5] text-sm">Upload CV or Resume</p>
                        <button className="bg-blue rounded-full py-2 font-medium text-white px-12">Upload</button>
                    </div>
                    <button className="bg-blue rounded-full py-5 w-full font-medium text-white px-12">Send Message</button>
                </div>
            </Modal>
        </div>
    )
}

export default AllJobs;