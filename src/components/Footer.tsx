import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Let's Build Something
              <span className="block text-accent">Great Together</span>
            </h3>
            
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Ready to partner with Indonesia's trusted trading company? 
              We're here to discuss your needs and create solutions that drive your business forward.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-lg">+62 821-8966-2238</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <span className="text-lg">ptmultimineralindotama@gmail.com</span>
              </div>
            </div>
            
            <Button variant="industrial" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
          
          {/* Address Card */}
          <div>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-white">
                      Visit Our Office
                    </h4>
                    <address className="text-white/90 leading-relaxed not-italic">
                      Jl. Nanga nanga<br />
                      Perumahan Graha Reksa Kencana<br />
                      Blok N/7, Andonohu<br />
                      Poasia, Kendari<br />
                      Sulawesi Tenggara, Indonesia
                    </address>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6 mt-6">
                  <p className="text-white/80 text-sm">
                    Located in the heart of Sulawesi Tenggara, strategically positioned 
                    to serve Indonesia's eastern industrial corridor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-2xl font-bold text-accent mb-2">
                PT Multi Mineral Indotama
              </h4>
              <p className="text-white/80">
                Building Indonesia's Industrial Future Since 2022
              </p>
            </div>
            
            <div className="text-white/70 text-sm">
              © 2024 PT Multi Mineral Indotama. Trusted Trading Partners.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;