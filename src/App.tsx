import { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
export default function App() {
  const testimonials = [
    {
      id: 1,
      name: "Sarvesh mokal",
      role: "Webdeveloper",
      image: "Photo_of_sarvesh.jpg",
      text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
      isActive: true
    },
    {
      id: 2,
      name: "Mohit Gupta",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
      isActive: false
    },
    {
      id: 3,
      name: "Harshita Jain",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=faces",
      text: "The fee tracking and student insights have made our daily work so much smoother. Highly recommended!"
    },
    {
      id: 4,
      name: "Ajay Verma",
      role: "Operations Lead",
      image: "https://images.unsplash.com/photo-1546456073-92b9f0a8d0f0?w=150&h=150&fit=crop&crop=faces",
      text: "Simple to use and super reliable. Our staff picked it up quickly and parents love the receipts."
    }
  ];

  const visibleCount = 2;
  const [page, setPage] = useState(0);
  const pages = [];
  for (let i = 0; i < testimonials.length; i += visibleCount) {
    pages.push(testimonials.slice(i, i + visibleCount));
  }

  useEffect(() => {
    if (pages.length <= 1) return;
    const timer = setInterval(() => {
      setPage((current) => (current + 1) % pages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [pages.length]);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-black text-center md:text-left">
            Why People
            <br />
            Choose Us
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, groupIndex) => (
                <div
                  key={`page-${groupIndex}`}
                  className="w-full flex-shrink-0 grid items-start gap-6 md:grid-cols-2"
                >
                  {group.map((t) => (
                    <Testimonials
                      key={t.id}
                      name={t.name}
                      role={t.role}
                      image={t.image}
                      text={t.text}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 flex justify-center gap-3">
            {pages.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                className={[
                  "rounded-full transition-all",
                  i === page ? "w-3 h-3 bg-black" : "w-2 h-2 bg-gray-400"
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
