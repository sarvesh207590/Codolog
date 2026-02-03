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
    }
  ];

  return (

    <>
      <Testimonials
        name={testimonials[0].name}
        role={testimonials[0].role}
        image={testimonials[0].image}
        text={testimonials[0].text}
      />
      <Testimonials
        name={testimonials[1].name}
        role={testimonials[1].role}
        image={testimonials[1].image}
        text={testimonials[1].text}
      />
    </>
  );
}