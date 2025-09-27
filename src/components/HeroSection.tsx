import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-repair-services.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-ccr-primary via-ccr-secondary to-ccr-accent">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
      backgroundImage: `url(${heroImage})`
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-ccr-accent/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Since 2008 • +15yrs of Experience • 4.9★ Google Rating • 1.5K+ Reviews</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-ccr-glow">#1  
PHONE REPAIR SERVICES</span><br />
            <span className="text-white">IN BRISBANE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Over 15 years of local experience in Springfield Central. Expert repair services for smartphones, tablets, computers, drones, watches, and complete IT solutions. 
            <span className="text-ccr-glow font-semibold"> Express On Spot Repairs in under 30mins • Repairs from $99!</span>
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-ccr-glow" />
              <span>Genuine Quality Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-ccr-glow" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-ccr-glow" />
              <span>Certifed Technician</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-ccr-glow" />
              <span>Lifetime Warranty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-ccr-accent hover:bg-ccr-accent/90 text-white text-lg px-8 py-4 h-auto font-semibold shadow-ccr-glow">
              Book Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-ccr-primary text-lg px-8 py-4 h-auto font-semibold backdrop-blur-sm">Call or Text 0452 385 321</Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">1.5K+</div>
              <div className="text-white/80 text-sm">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">4.9★</div>
              <div className="text-white/80 text-sm">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ccr-glow">$99</div>
              <div className="text-white/80 text-sm">Repairs From</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;