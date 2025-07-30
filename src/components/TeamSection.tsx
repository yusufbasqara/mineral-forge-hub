import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, Shield } from "lucide-react";

const TeamSection = () => {
  const leaders = [
    {
      name: "Muh. Hasanatun",
      role: "Direktur Utama",
      roleEn: "President Director",
      description: "Visionary leader guiding PT MMI's strategic direction and growth",
      icon: <Crown className="w-8 h-8 text-accent" />
    },
    {
      name: "Lie Tji Siun", 
      role: "Direktur",
      roleEn: "Director",
      description: "Operational excellence champion ensuring seamless business execution",
      icon: <Users className="w-8 h-8 text-accent" />
    },
    {
      name: "Benny Darmawan",
      role: "Komisaris Utama",
      roleEn: "Chief Commissioner", 
      description: "Strategic oversight providing governance and market insights",
      icon: <Shield className="w-8 h-8 text-accent" />
    },
    {
      name: "Lili Haryanto",
      role: "Komisaris",
      roleEn: "Commissioner",
      description: "Stakeholder advocate ensuring sustainable business practices",
      icon: <Shield className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The experienced minds behind Indonesia's trusted trading partnerships
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-b from-card to-muted/20">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                    {leader.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-primary mb-2">
                  {leader.name}
                </CardTitle>
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    {leader.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {leader.roleEn}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {leader.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Together, we combine decades of industry experience with fresh perspectives, 
            ensuring PT MMI remains at the forefront of Indonesia's trading evolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;