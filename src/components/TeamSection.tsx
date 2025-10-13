import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";
import avatar7 from "@/assets/avatar-7.jpg";
const TeamSection = () => {
  return <section id="team" className="py-16 px-4 bg-background">
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

        {/* Team Carousel */}
        <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {/* Team Member 1 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar1} alt="Lucas - Master Technician" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">20+ years</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Lucas</h3>
                  <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Master Technician</p>
                  <p className="text-sm text-muted-foreground">Advanced Repairs including PCB Board Repairs and Data Recovery</p>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Team Member 2 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar2} alt="Ryan - Retail Manager & Senior Technician" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
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
            </CarouselItem>

            {/* Team Member 3 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar3} alt="Robert Thompson - Repair Specialist" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">10+ years</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Thompson</h3>
                  <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Repair Specialist</p>
                  <p className="text-sm text-muted-foreground">Advanced Diagnostics, Drone and IT Specialist</p>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Team Member 4 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar4} alt="Kyle - IT Specialist" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">4+ years</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Kyle</h3>
                  <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">IT Specialist</p>
                  <p className="text-sm text-muted-foreground">Computer and IT Solutions</p>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Team Member 5 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar5} alt="Sarah - Customer Support Specialist" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">6+ years</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah</h3>
                  <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Customer Support Specialist</p>
                  <p className="text-sm text-muted-foreground">Phone and Tablet Repairs, Customer Service</p>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Team Member 6 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar6} alt="James - Senior Technician" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">7+ years</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">James</h3>
                  <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Senior Technician</p>
                  <p className="text-sm text-muted-foreground">Screen Repairs and Hardware Diagnostics</p>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Team Member 7 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative overflow-hidden">
                  <img src={avatar7} alt="Emma - Data Recovery Specialist" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">5+ years</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Emma</h3>
                  <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">Data Recovery Specialist</p>
                  <p className="text-sm text-muted-foreground">Data Recovery and Software Solutions</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Trust Message */}
        <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
          <p className="text-lg font-medium mb-2">All our Technicians are Fully Certified and Experienced</p>
          <p className="text-muted-foreground mb-6">With over 15 years of experience, we're committed to excellence in every repair</p>
          
          <div className="max-w-3xl mx-auto text-left mt-8 bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4 text-center">Requirements</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              To be a certified technician, our technicians have obtained a minimum of 3 of these requirements:
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Completed Bachelor Degree in Electrical Engineering, Information Technology, or Relevant Degrees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Minimum 5 years Repair Experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Repaired over 1000 Devices per Technician</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Completed Relevant Certified Repair Courses such as Apple, Samsung, Oppo, Huawei, Google Independent Repair Program, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Completed IPC Logic Board Repair Program</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Completed Data Recovery Program</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--ccr-primary))] mt-0.5">✓</span>
                <span>Ex-Apple and Samsung Repair Technician</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default TeamSection;