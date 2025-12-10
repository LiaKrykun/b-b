import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

function Testimonial() {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why travelers around the world choose Break&Bed for their luxury getaways — where comfort, style, and exceptional service come together to create unforgettable stays.
"
      />
      <div className="flex md:flex-row flex-col gap-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex md:flex-row flex-col gap-5 mt-15"
          >
            <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
              <img
                className="h-20 w-20 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h2 className="text-lg text-gray-900 font-medium mt-2">
                {testimonial.name}
              </h2>
              <p className="text-sm text-gray-500">{testimonial.address}</p>
              <div className="flex items-center mt-3 gap-1">
                <StarRating />
              </div>
              <p className="text-center text-[15px] mt-3 text-gray-500">
                "{testimonial.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
