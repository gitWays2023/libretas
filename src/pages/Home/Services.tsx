import React from "react";
import Img1 from "../../assets/service1.png";
import Img2 from "../../assets/service2.png";
import Img3 from "../../assets/service3.png";

const services = [
  {
    image: Img1,
    title: "ASSET DEVELOPMENT (B2B), (B2C):",
    description:
      "We empower individuals and communities to generate and transfer value leveraging platforms.",
  },
  {
    image: Img2,
    title: "PERSONNEL DEVELOPMENT (B2B), (B2C):",
    description:
      "We empower individuals and staff to understand, adopt and enhance technologies for sustainable service.",
  },
  {
    image: Img3,
    title: "INNOVATION ANALYTICS AND DIFFUSION:",
    description:
      "We research innovations and design sustainable diffusion mechanisms to empower builders.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="service" className="py-16 bg-gray-100 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
