import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-repair-services.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-ccr-primary via-ccr-secondary to-ccr-accent">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-ccr-accent/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Springfield Central's #1 Tech Repair Specialists
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-ccr-glow">COOL CASE</span><br />
            <span className="text-white">REPAIR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Expert repair services for phones, tablets, computers, drones, and complete IT solutions. 
            <span className="text-ccr-glow font-semibold"> Same day service, no call-out fees!</span>
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-ccr-glow" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-ccr-glow" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-ccr-glow" />
              <span>Expert Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-ccr-glow" />
              <span>90 Day Warranty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-ccr-accent hover:bg-ccr-accent/90 text-white text-lg px-8 py-4 h-auto font-semibold shadow-ccr-glow">
              Book Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-ccr-primary text-lg px-8 py-4 h-auto font-semibold backdrop-blur-sm">
              Call (07) 3000-COOL
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">5000+</div>
              <div className="text-white/80 text-sm">Devices Fixed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">7</div>
              <div className="text-white/80 text-sm">Days a Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">30min</div>
              <div className="text-white/80 text-sm">Average Fix Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">100%</div>
              <div className="text-white/80 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;