import { Star } from "lucide-react";
import { testimonialsData } from "@/src/data/testimonialsData";

const testimonials = testimonialsData;

export default function Testimonials() {
  return (
    <section
      className="py-12 md:py-24 px-6 bg-surface-container-low"
      id="depoimentos"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-primary mb-8 md:mb-16 text-center italic">
          O que dizem nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {testimonials.map((t, index) => (
            <div key={index} className="relative pt-8 h-full">
              {" "}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl text-primary-container opacity-50 font-serif leading-none">
                “
              </div>
              <div className="bg-surface p-8 rounded-2xl shadow-md text-center h-full flex flex-col relative z-10 border border-outline-variant/30">
                {" "}
                <p className="text-secondary italic mb-6 leading-relaxed flex-grow">
                  {" "}
                  {`"${t.text}"`}
                </p>
                <div className="mt-auto">
                  {" "}
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-secondary">{t.location}</div>
                  <div className="flex justify-center mt-3 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
