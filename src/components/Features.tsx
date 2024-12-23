import { Lightbulb, Droplets, Building2, Landmark, Battery } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Dynamic Trade Networks",
    description: "AI-powered platforms optimizing global commerce and decentralized trade.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Smart Water Systems",
    description: "IoT-driven water management solutions for arid regions.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Seismic-Resilient Architecture",
    description: "Advanced materials and AI for disaster-proof infrastructure.",
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Cultural Preservation",
    description: "Blockchain archives and immersive AR/VR experiences to safeguard human heritage.",
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Energy Independence",
    description: "Modular renewable energy systems for self-sufficient communities.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-turquoise mb-16">
          Innovative Features to Revolutionize Civilization Sustainability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gray-200 hover:border-turquoise transition-colors duration-300 group"
            >
              <div className="text-turquoise group-hover:text-terracotta transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-merriweather">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};