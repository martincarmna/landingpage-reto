import { TestimonialCard } from "./testimonial-card";

interface Testimonials {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonials[] = [
  {
    name: "Satish Patel",
    role: "Marketing Director",
    image: "/images/profile-1.jpg",
    quote: "Fylo has improved our team productivity by an amazing 287%.",
  },
  {
    name: "Bruce Mckenzie",
    role: "Founder & CEO, Huddle",
    image: "/images/profile-2.jpg",
    quote:
      "The best thing about Fylo is that it allows us to store all of our files in one place and access them from anywhere.",
  },
  {
    name: "Iva Boyd",
    role: "Co-founder & CTO, Huddle",
    image: "/images/profile-3.jpg",
    quote:
      "Fylo's interface is so intuitive that I was able to get up and running in just a few hours.",
  },
];

export const Testimonials = () => {
  return (
    
    <div className="flex flex-col gap-6 items-center border-White
    pt-6 relative left-1/2 -translate-x-1/2">
      <img
        className="size-6 absolute top-1 -translate-x-35"
        src="/images/bg-quotes.png"
        alt="bg quotes"
      />
      {
      testimonials.map((testimonial : Testimonials) => (
        <TestimonialCard key={testimonial.name}
         {...testimonial} />
      ))}
    </div>
  );
};
