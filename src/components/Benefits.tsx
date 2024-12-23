import { TrendingUp, Leaf, Globe, Zap } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Economic Resilience",
    description: "Adapts trade systems for global changes.",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Environmental Sustainability",
    description: "Mitigates climate challenges and water scarcity.",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Cultural Continuity",
    description: "Preserves heritage and fosters global collaboration.",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Energy Freedom",
    description: "Delivers scalable, renewable energy solutions.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-sandstone/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-turquoise mb-16">
          How Resilient Nexus Transforms Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="text-terracotta mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 font-merriweather">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};