import { Shield, Clock, Users, Award, MapPin, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed technicians with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most repairs completed within hours, not days. Emergency service available 7 days a week."
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience in all major device brands and models."
    },
    {
      icon: Award,
      title: "90 Day Warranty",
      description: "All repairs backed by our comprehensive 90-day warranty for complete customer satisfaction."
    },
    {
      icon: MapPin,
      title: "Local Springfield Central",
      description: "Proudly serving Springfield Central and surrounding areas with personalized local service."
    },
    {
      icon: Wrench,
      title: "No Call-Out Fees",
      description: "Transparent pricing with no hidden fees. Free quotes and competitive repair rates."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-ccr-primary">CCR</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another repair shop. We're your trusted technology partners 
            committed to delivering exceptional service and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-ccr-elegant transition-all duration-300 border-border hover:border-ccr-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-ccr-primary to-ccr-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-ccr-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-ccr-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-ccr-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-primary">5000+</div>
              <div className="text-muted-foreground">Devices Repaired</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-secondary">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-accent">7</div>
              <div className="text-muted-foreground">Days a Week</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-glow">30min</div>
              <div className="text-muted-foreground">Average Fix Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;