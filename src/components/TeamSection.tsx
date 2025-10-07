import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "James Mitchell",
      role: "Lead Technician",
      specialty: "Mobile & Tablet Repair",
      image: team1,
      experience: "8+ years"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Senior Technician",
      specialty: "Computer & IT Solutions",
      image: team2,
      experience: "6+ years"
    },
    {
      id: 3,
      name: "Robert Thompson",
      role: "Master Technician",
      specialty: "Advanced Diagnostics",
      image: team3,
      experience: "15+ years"
    },
    {
      id: 4,
      name: "Daniel Martinez",
      role: "Repair Specialist",
      specialty: "Drone & Electronics",
      image: team4,
      experience: "4+ years"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
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
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white">
                    <p className="text-sm font-medium text-[hsl(var(--ccr-glow))]">{member.experience}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[hsl(var(--ccr-primary))] font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
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
    </section>
  );
};

export default TeamSection;
