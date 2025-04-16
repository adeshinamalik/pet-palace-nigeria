
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate subscription success
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter soon.",
      variant: "default"
    });
    setEmail('');
  };
  
  return (
    <section className="bg-pet-beige py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pet-brown">Stay Updated with Pet Palace Nigeria</h2>
          <p className="text-gray-700 mb-8">Join our newsletter for exclusive offers, pet care tips, and updates on new products and services.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pet-orange"
            />
            <Button 
              type="submit" 
              className="btn-primary whitespace-nowrap"
            >
              Subscribe Now
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Pet Palace Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
