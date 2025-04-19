import React from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dog, Utensils, Stethoscope, Book, Users, Heart, ArrowRight } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ServiceCard from '@/components/ServiceCard';
import AdoptionCard from '@/components/AdoptionCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogPostCard from '@/components/BlogPostCard';
import NewsletterSection from '@/components/NewsletterSection';
import InfoSection from '@/components/InfoSection';

const Index = () => {
  useGsapAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-pet-beige via-white to-pet-cream overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[90vh]">
            <div className="lg:col-span-6 space-y-8 py-20 lg:py-0">
              <h1 className="text-5xl lg:text-7xl font-bold text-pet-brown leading-tight animate-fade-in">
                <span className="text-pet-orange">Everything</span> Your Animals Need
              </h1>
              <p className="text-xl text-gray-700 max-w-lg animate-fade-in delay-100">
                Nigeria's premier marketplace for pet and farm animal products, services, and resources. Making animal care accessible and reliable.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in delay-200">
                <Button className="bg-pet-orange hover:bg-pet-terracotta text-white text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Explore Products
                </Button>
                <Button variant="outline" className="border-2 border-pet-orange text-pet-orange hover:bg-pet-orange hover:text-white text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Find Services
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6 animate-fade-in delay-300">
                <div className="flex items-center gap-2">
                  <Users className="text-pet-orange h-6 w-6" />
                  <span className="text-gray-700">10k+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="text-pet-orange h-6 w-6" />
                  <span className="text-gray-700">98% Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 relative h-full hidden lg:block">
              <div className="relative w-full h-[600px]">
                <div className="absolute top-10 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl animate-fade-in transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=1000" 
                    alt="Happy pets"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 -left-10 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl animate-fade-in delay-200 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1564085352725-08da0272627d?auto=format&fit=crop&q=80&w=600" 
                    alt="Farm animals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-8 shadow-lg animate-pulse">
                  <Dog className="text-pet-orange h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pet-brown">Shop by Category</h2>
            <p className="text-gray-600">Browse our wide selection of quality products for all your animal companions</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Dogs" 
              description="Food, toys, grooming supplies, and accessories for your canine companion." 
              image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600" 
              link="/products/dogs" 
            />
            <CategoryCard 
              title="Cats" 
              description="Premium food, litter, scratching posts, and toys for feline friends." 
              image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" 
              link="/products/cats" 
              bgColor="bg-pet-beige bg-opacity-30"
            />
            <CategoryCard 
              title="Poultry" 
              description="Feeds, supplements, and equipment for chicken, turkeys and other birds." 
              image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600" 
              link="/products/poultry" 
            />
            <CategoryCard 
              title="Cattle & Goats" 
              description="Specialized nutrition, health products, and farm equipment." 
              image="https://images.unsplash.com/photo-1564085352725-08da0272627d?auto=format&fit=crop&q=80&w=600" 
              link="/products/livestock"
              bgColor="bg-pet-beige bg-opacity-30" 
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="btn-secondary">
              <Link to="/products" className="flex items-center">
                View All Categories <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pet-brown">Professional Services</h2>
            <p className="text-gray-600">Connect with trusted experts for all your animal care needs</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Veterinary Care" 
              description="Licensed veterinarians for routine checkups, vaccinations, and emergency care." 
              icon={<Stethoscope size={32} />} 
              link="/services/veterinary" 
            />
            <ServiceCard 
              title="Grooming" 
              description="Professional grooming services for dogs, cats, and other pets." 
              icon={<Dog size={32} />} 
              link="/services/grooming" 
            />
            <ServiceCard 
              title="Farm Consultations" 
              description="Expert advice on livestock management, nutrition, breeding, and health." 
              icon={<Utensils size={32} />} 
              link="/services/farm-consultations" 
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="btn-primary">
              <Link to="/services" className="flex items-center">
                Explore All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Community Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pet-brown">Join Our Growing Community</h2>
              <p className="text-gray-600 mb-6">
                Connect with fellow animal lovers across Nigeria. Share experiences, get advice, and learn from experts in our vibrant community forums.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-pet-beige rounded-full p-2 mr-4">
                    <Users size={24} className="text-pet-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Forum Discussions</h3>
                    <p className="text-gray-600 text-sm">Engage in conversations about pet care, farming practices, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pet-beige rounded-full p-2 mr-4">
                    <Book size={24} className="text-pet-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Educational Resources</h3>
                    <p className="text-gray-600 text-sm">Access articles, guides, and videos on animal care specific to Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pet-beige rounded-full p-2 mr-4">
                    <Heart size={24} className="text-pet-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Events & Meetups</h3>
                    <p className="text-gray-600 text-sm">Join workshops, seminars, and social gatherings for animal enthusiasts</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="btn-secondary">
                <Link to="/community" className="flex items-center">
                  Join The Community <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&q=80&w=1000" 
                alt="Community members with their pets" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Adoption Section */}
      <section className="py-16 bg-pet-beige bg-opacity-30 adoption-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pet-brown">Find Your New Companion</h2>
            <p className="text-gray-600">Browse adoptable pets or contribute to rehoming efforts</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AdoptionCard 
              name="Buddy" 
              type="Dog" 
              age="2 years" 
              location="Lagos" 
              image="https://images.unsplash.com/photo-1615751072497-5f5169febe17?auto=format&fit=crop&q=80&w=600" 
            />
            <AdoptionCard 
              name="Whiskers" 
              type="Cat" 
              age="1 year" 
              location="Abuja" 
              image="https://images.unsplash.com/photo-1631499420583-9b30fcd3fe78?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <AdoptionCard 
              name="Max" 
              type="Dog" 
              age="3 years" 
              location="Port Harcourt" 
              image="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600" 
            />
            <AdoptionCard 
              name="Mittens" 
              type="Cat" 
              age="6 months" 
              location="Ibadan" 
              image="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=600" 
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="btn-primary">
              <Link to="/adoption" className="flex items-center">
                View All Adoptable Pets <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pet-brown">What Our Customers Say</h2>
            <p className="text-gray-600">Hear from satisfied pet and farm animal owners across Nigeria</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Chinedu Okonkwo" 
              position="Dog Owner, Lagos" 
              testimonial="Pet Palace Nigeria has been a lifesaver for finding quality dog food in Lagos. The delivery is always prompt and the customer service is excellent." 
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
            />
            <TestimonialCard 
              name="Amina Ibrahim" 
              position="Poultry Farmer, Kaduna" 
              testimonial="As a poultry farmer, I've struggled to find reliable supplies. Pet Palace has changed that with their consistent quality and farm consultations." 
              rating={4}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
            />
            <TestimonialCard 
              name="Oluwaseun Adeyemi" 
              position="Cat Owner, Abuja" 
              testimonial="The vet services I found through Pet Palace saved my cat when she fell ill. I'm forever grateful for the quick connection to qualified professionals." 
              rating={5}
              image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" 
            />
          </div>
        </div>
      </section>
      
      {/* Blog/Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pet-brown">Latest From Our Blog</h2>
            <p className="text-gray-600">Educational resources for pet and farm animal care in Nigeria</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPostCard 
              title="Essential Vaccinations for Dogs in Nigeria" 
              excerpt="Learn about the crucial vaccinations your dog needs in Nigeria's climate and environment, including rabies, parvovirus, and more." 
              image="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=600" 
              date="April 10, 2025" 
              category="Pet Health"
              link="/blog/dog-vaccinations" 
            />
            <BlogPostCard 
              title="Sustainable Poultry Farming Practices" 
              excerpt="Discover eco-friendly and cost-effective methods for poultry farming that are particularly suited to Nigeria's environment." 
              image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600" 
              date="April 5, 2025" 
              category="Farm Animals"
              link="/blog/sustainable-poultry" 
            />
            <BlogPostCard 
              title="Understanding Nigerian Cat Breeds" 
              excerpt="Explore the characteristics and care requirements of cat breeds commonly found in Nigeria, including both local and imported varieties." 
              image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=600" 
              date="March 28, 2025" 
              category="Pet Care"
              link="/blog/nigerian-cat-breeds" 
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="btn-secondary">
              <Link to="/blog" className="flex items-center">
                Read All Articles <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Info Section with Icons */}
      <InfoSection />
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <NewsletterSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
