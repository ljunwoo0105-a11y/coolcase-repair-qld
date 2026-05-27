import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceImages = {
  phone: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  tablet: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80",
  computer: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  drone: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
  watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  it: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
};

const ServicesSection = () => {
  const services = [
    {
      title: "Phone Repair",
      icon: serviceImages.phone,
      description: "Complete smartphone repair services including screen replacement, battery, charging port, cameras, and water damage repair. Express repair in under 1 hour for parts in stock.",
      features: ["Screen Replacement", "Battery Replacement", "Charging Issues", "Camera Repair", "Water Damage"],
      fromPrice: "$59"
    },
    {
      title: "Tablet Repair", 
      icon: serviceImages.tablet,
      description: "Professional tablet repair for all major brands including iPad, Samsung Galaxy Tab, and more. Same quality parts with lifetime warranty on premium repairs.",
      features: ["Screen Replacement", "Battery Service", "Charging Issues", "Software Problems", "Home Button"],
      fromPrice: "$120"
    },
    {
      title: "Computer Repair",
      icon: serviceImages.computer,
      description: "Desktop and laptop repair services including hardware upgrades, virus removal, and data recovery. On-spot repair by certified technicians.",
      features: ["Hardware Upgrades", "Virus Removal", "Data Recovery", "OS Installation", "Performance Boost"],
      fromPrice: "$150"
    },
    {
      title: "Drone Repair",
      icon: serviceImages.drone,
      description: "Specialized drone repair services for recreational and commercial drones from all major manufacturers. Expert diagnosis and quality parts.",
      features: ["Gimbal Repair", "Motor Replacement", "Camera Issues", "Flight Controller", "Propeller Service"],
      fromPrice: "$180"
    },
    {
      title: "Watch Repair",
      icon: serviceImages.watch,
      description: "Professional smartwatch and traditional watch repair services. From Apple Watch screen replacement to battery issues and water damage repair.",
      features: ["Screen Replacement", "Battery Service", "Water Damage", "Crown/Button Repair", "Software Issues"],
      fromPrice: "$30"
    },
    {
      title: "IT Solutions",
      icon: serviceImages.it,
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
            <Card key={index} className="group flex h-full flex-col overflow-hidden hover:shadow-ccr-glow transition-all duration-300 hover:-translate-y-2 border-border hover:border-ccr-primary/50">
              <div className="relative h-56 overflow-hidden bg-muted">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl font-bold drop-shadow-sm">
                    {service.title}
                  </h3>
                  <div className="mt-2 inline-flex rounded-full bg-ccr-accent px-3 py-1 text-sm font-bold shadow-lg">
                    From {service.fromPrice}
                  </div>
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
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
                <Button className="mt-auto w-full bg-ccr-primary hover:bg-ccr-primary/90 text-white group-hover:bg-ccr-accent group-hover:shadow-ccr-glow transition-all">
                  Learn More
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
