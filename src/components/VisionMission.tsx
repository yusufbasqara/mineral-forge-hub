import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle } from "lucide-react";

const VisionMission = () => {
  const missions = [
    "Harmonisasi supply‑demand hulu ke hilir",
    "Optimalisasi TI untuk operasional", 
    "Peningkatan nilai perusahaan bagi masyarakat & lingkungan"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Our Vision & Mission
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="shadow-card border-0 bg-gradient-to-br from-primary/5 to-accent/10">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <Target className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-3xl text-primary mb-4">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-semibold text-primary mb-4">
                  "Menjadi perusahaan perdagangan terpercaya & terkemuka dengan jaringan global"
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our vision is to become Indonesia's most trusted trading partner—a company that businesses 
                  rely on not just for materials, but for the certainty that their projects will succeed. 
                  We're building bridges between local expertise and global opportunities, creating a network 
                  that spans continents while staying rooted in Indonesian values.
                </p>
              </CardContent>
            </Card>
            
            {/* Mission */}
            <Card className="shadow-card border-0 bg-gradient-to-br from-accent/5 to-primary/10">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-accent" />
                </div>
                <CardTitle className="text-3xl text-primary mb-4">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Every day, we work towards three fundamental goals that guide our decisions and shape our partnerships:
                </p>
                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;