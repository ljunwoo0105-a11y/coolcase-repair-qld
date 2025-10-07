import { Card, CardContent } from "@/components/ui/card";
import ryanPhoto from "@/assets/ryan-photo.jpg";
const TeamSection = () => {
  return <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our certified technicians are dedicated to providing you with the best repair service in Brisbane
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Lucas</h3>
              <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Master Technician</p>
              <p className="text-sm text-muted-foreground">Advanced Repairs including PCB Board Repairs and Data Recovery</p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative overflow-hidden">
              <img src={ryanPhoto} alt="Ryan - Retail Manager & Senior Technician" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="text-white">
                  <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">8+ years</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Ryan</h3>
              <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Retail Manager & Senior Technician</p>
              <p className="text-sm text-muted-foreground">Phone, Tablet and Computer Technician</p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Robert Thompson</h3>
              <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Repair Specialist</p>
              <p className="text-sm text-muted-foreground">Advanced Diagnostics, Drone and IT Specialist</p>
            </CardContent>
          </Card>

          {/* Team Member 4 */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Kyle</h3>
              <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">IT Specialist</p>
              <p className="text-sm text-muted-foreground">Computer and IT Solutions</p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Message */}
        <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
          <p className="text-lg font-medium mb-2">
            All our technicians are fully certified and insured
          </p>
          <p className="text-muted-foreground">
            With over 30 years of combined experience, we're committed to excellence in every repair
          </p>
        </div>
      </div>
    </section>;
};
export default TeamSection;