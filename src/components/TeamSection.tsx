import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  photo_url: string | null;
  display_order: number;
}
const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTeamMembers();
  }, []);
  const fetchTeamMembers = async () => {
    const {
      data,
      error
    } = await supabase.from('team_members').select('*').order('display_order', {
      ascending: true
    });
    if (!error && data) {
      setTeamMembers(data);
    }
    setLoading(false);
  };
  return <section id="team" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Andy</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our certified technicians are dedicated to providing you with the best repair service in Brisbane
          </p>
        </div>

        {/* Team Carousel */}
        {loading ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <Card key={i}>
                <Skeleton className="h-80 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-48 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>)}
          </div> : teamMembers.length > 0 ? <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map(member => <CarouselItem key={member.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                    <div className="relative overflow-hidden">
                      {member.photo_url ? <img src={member.photo_url} alt={`${member.name} - ${member.role}`} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" /> : <div className="w-full h-80 bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">No photo</span>
                        </div>}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="text-white">
                          <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">{member.experience}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> : <div className="text-center text-muted-foreground py-12">
            <p>No team members found. Admin can add team members via the admin panel.</p>
          </div>}

        {/* Trust Message */}
        <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
          <p className="text-lg font-medium mb-2">All our Technicians are Fully Certified and Experienced</p>
          <p className="text-muted-foreground mb-6">With over 15 years of experience, we're committed to excellence in every repair</p>
          
          <div className="max-w-3xl mx-auto text-left mt-8 bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4 text-center">Certification Requirements</h3>
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