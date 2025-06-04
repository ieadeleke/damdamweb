import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import QuoteImg from '@/assets/quotes.png';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  title?: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "State Government Digital Unit",
    location: "Project Lead",
    // title: "Principal Harmony Cathedral",
    quote: "Working with DamDam Global helped us move from chaos to clarity. Their team took the time to understand our operations and delivered a system that exceeded our expectations.",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Local Government",
    location: "Revenue Manager",
    // title: "Teacher at Riverside Elementary",
    quote: "We used to chase paper and receipts. Now, we have full visibility of our collections and field agents in real time. This solution has truly changed how we work",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Public Agency",
    location: "Operations Director",
    // title: "District Administrator",
    quote: "They did not just build what we asked for, they challenged us to think bigger and guided us through the entire transformation journey.",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "Tech-Enabled Logistics Startup",
    location: "Founder",
    // title: "High School Principal",
    quote: "From day one, DamDam Global felt like an extension of our team. Transparent, innovative, and very easy to work with.",
    avatar: "/api/placeholder/60/60"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="text-white min-h-scree flex flex-col justify-center items-center px-8 py-24 relative overflow-hidden">
      <div className="glow-top"></div>
      <div className="z-40">
        <div className="text-center mb-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl leading-[1.9] md:leading-[1.3] font-bold mb-6">
            What Our <span className="text-blue">Partners</span> Are Saying
          </h1>
          {/* <p className="text-[#BECCFF] max-w-[470px] mx-auto text-lg">
            Meet the teachers, students, and schools whose lives have been transformed by your support.
          </p> */}
        </div>

        <div className="flex items-center justify-center mb-8 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`rounded-full border-2 transition-all duration-300 ${index === currentIndex
                ? 'w-24 h-24 border-blue-400 bg-[#00071D]'
                : index === currentIndex - 1 ||
                  (currentIndex === 0 && index === testimonials.length - 1) ||
                  index === currentIndex + 1 ||
                  (currentIndex === testimonials.length - 1 && index === 0)
                  ? 'w-16 h-16 border-blue-300/60 bg-[#00071D] hover:border-blue-300'
                  : 'w-12 h-12 border-gray-500 hover:border-gray-400'
                }`}
            />
          ))}
        </div>
        <div className="text-center relative">
          <div className="mb-3">
            <h3 className="text-xl font-semibold mb-1">{current.name}</h3>
            <p className="text-[#AAAAAA] text-base italic mb-2">{current.location}</p>
            <p className="text-[#AAAAAA] text-base italic mb-2">{current.title}</p>
            <div className="h-[2px] w-[60px] block mx-auto bg-white"></div>
          </div>
          <div className="mb-5">
            {/* <div className="text-4xl text-blue-400 mb-4">"</div> */}
            <Image src={QuoteImg} alt="quote" quality={100} width={1200} height={1200} className="max-w-[30px] h-full w-full mx-auto mb-5" />
            <p className="text-lg text-[#AAAAAA] leading-relaxed md:max-w-[550px] mx-auto">
              {current.quote}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center md:max-w-[210px] mx-auto">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-slate-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            <div className="text-gray-400 text-sm">
              <span className="text-white text-4xl font-">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1"> /</span>
              <span className="text-xs">{String(testimonials.length).padStart(2, '0')}</span>
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-slate-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}