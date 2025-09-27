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
      description: "Complete smartphone repair services including screen replacement, battery, charging port, cameras, and water damage repair. Express repair in under 1 hour for parts in stock.",
      features: ["Screen Replacement", "Battery Replacement", "Charging Issues", "Camera Repair", "Water Damage"],
      fromPrice: "$99"
    },
    {
      title: "Tablet Repair", 
      icon: tabletIcon,
      description: "Professional tablet repair for all major brands including iPad, Samsung Galaxy Tab, and more. Same quality parts with lifetime warranty on premium repairs.",
      features: ["Screen Replacement", "Battery Service", "Charging Issues", "Software Problems", "Home Button"],
      fromPrice: "$120"
    },
    {
      title: "Computer Repair",
      icon: computerIcon,
      description: "Desktop and laptop repair services including hardware upgrades, virus removal, and data recovery. On-spot repair by certified technicians.",
      features: ["Hardware Upgrades", "Virus Removal", "Data Recovery", "OS Installation", "Performance Boost"],
      fromPrice: "$150"
    },
    {
      title: "Drone Repair",
      icon: droneIcon,
      description: "Specialized drone repair services for recreational and commercial drones from all major manufacturers. Expert diagnosis and quality parts.",
      features: ["Gimbal Repair", "Motor Replacement", "Camera Issues", "Flight Controller", "Propeller Service"],
      fromPrice: "$180"
    },
    {
      title: "Watch Repair",
      icon: itIcon,
      description: "Professional smartwatch and traditional watch repair services. From Apple Watch screen replacement to battery issues and water damage repair.",
      features: ["Screen Replacement", "Battery Service", "Water Damage", "Crown/Button Repair", "Software Issues"],
      fromPrice: "$99"
    },
    {
      title: "IT Solutions",
      icon: computerIcon,
      description: "Complete IT support for businesses including network setup, security solutions, cloud migration, and ongoing maintenance services.",
      features: ["Network Setup", "Security Solutions", "Cloud Migration", "System Administration", "24/7 Support"],
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
            Professional repair services for smartphones, tablets, computers, drones, watches and IT solutions. 
            Most competitive prices in Brisbane with repairs starting from $99. Special discounts on accessories for repair customers and VIP members.
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
          <h3 className="text-3xl font-bold mb-4">Express On-Spot Repair Service</h3>
          <p className="text-xl mb-6 text-white/90">
            Our certified technicians provide express on-spot repair within 1 hour for all parts in stock. 
            Quality repairs with lifetime warranty on premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ccr-accent hover:bg-ccr-accent/90 text-white font-semibold">
              Express Repair Service
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