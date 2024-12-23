import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sandstone to-terracotta/20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-turquoise mb-6 animate-fade-up">
          Building Resilience, Empowering Communities, Sustaining Futures
        </h1>
        <p className="text-xl md:text-2xl font-merriweather text-gray-700 mb-12 max-w-3xl mx-auto animate-fade-up">
          Where ancient ingenuity meets modern innovation to create sustainable, adaptive systems for the world's most pressing challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button className="bg-turquoise hover:bg-turquoise/90 text-white px-8 py-6 text-lg">
            Explore Solutions →
          </Button>
          <Button variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise/10 px-8 py-6 text-lg">
            Get Started →
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
    </section>
  );
};