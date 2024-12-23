import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-turquoise text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-merriweather">
              <li><a href="#" className="hover:text-sandstone transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-sandstone transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-sandstone transition-colors">Impact</a></li>
              <li><a href="#" className="hover:text-sandstone transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-sandstone transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-montserrat font-bold mb-4">About Resilient Nexus</h3>
            <p className="font-merriweather">
              Building sustainable, adaptive systems for the world's most pressing challenges through the fusion of ancient wisdom and modern technology.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sandstone transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-sandstone transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-sandstone transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-sandstone transition-colors"><Github className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center font-merriweather">
          <p>© 2024 Resilient Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};