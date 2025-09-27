import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import phoneIcon from "@/assets/phone-repair-icon.jpg";
import tabletIcon from "@/assets/tablet-repair-icon.jpg";
import computerIcon from "@/assets/computer-repair-icon.jpg";
import droneIcon from "@/assets/drone-repair-icon.jpg";
import itIcon from "@/assets/it-solutions-icon.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Phone Repair",
      icon: phoneIcon,
      description: "Screen replacements, battery swaps, water damage repair, and software fixes for all phone brands.",
      features: ["Screen Replacement", "Battery Service", "Water Damage", "Software Issues", "Charging Port Repair"],
      fromPrice: "$49"
    },
    {
      title: "Tablet Repair", 
      icon: tabletIcon,
      description: "Complete tablet repair services including screen repairs, battery replacement, and hardware fixes.",
      features: ["Screen Repair", "Battery Replacement", "Charging Issues", "Speaker/Camera Fix", "Software Problems"],
      fromPrice: "$79"
    },
    {
      title: "Computer Repair",
      icon: computerIcon,
      description: "Desktop and laptop repairs, virus removal, hardware upgrades, and performance optimization.",
      features: ["Virus Removal", "Hardware Upgrade", "Data Recovery", "Performance Boost", "System Setup"],
      fromPrice: "$89"
    },
    {
      title: "Drone Repair",
      icon: droneIcon,
      description: "Specialized drone repair services including gimbal fixes, propeller replacement, and calibration.",
      features: ["Gimbal Repair", "Propeller Replace", "Camera Fix", "Flight Calibration", "Remote Control"],
      fromPrice: "$129"
    },
    {
      title: "IT Solutions",
      icon: itIcon,
      description: "Complete IT support for businesses including network setup, security, and ongoing maintenance.",
      features: ["Network Setup", "Security Systems", "Cloud Migration", "Backup Solutions", "24/7 Support"],
      fromPrice: "$150"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-ccr-primary">Expert</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional repair and IT solutions for all your technology needs. 
            Fast, reliable, and backed by our 90-day warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-ccr-glow transition-all duration-300 hover:-translate-y-2 border-border hover:border-ccr-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-ccr-primary transition-colors">
                  {service.title}
                </CardTitle>
                <div className="text-3xl font-bold text-ccr-accent">
                  From {service.fromPrice}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-ccr-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-ccr-primary hover:bg-ccr-primary/90 text-white group-hover:bg-ccr-accent group-hover:shadow-ccr-glow transition-all">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency service callout */}
        <div className="bg-gradient-to-r from-ccr-primary to-ccr-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need Emergency Repair?</h3>
          <p className="text-xl mb-6 text-white/90">
            We offer same-day emergency repairs for critical devices. No extra surcharge!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ccr-accent hover:bg-ccr-accent/90 text-white font-semibold">
              Emergency Service
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ccr-primary">
              Call Now: (07) 3000-COOL
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;