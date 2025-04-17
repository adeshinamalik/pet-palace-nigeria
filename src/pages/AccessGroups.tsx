
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, User, Briefcase, Store, Globe, Shield, Handshake } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AccessGroups = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pet-brown">Key Groups with Access to the App</h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Our platform serves various stakeholders in the Nigerian pet and farm animal ecosystem.
          Learn about each group and their specific access levels below.
        </p>

        <Tabs defaultValue="pet-owners" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="pet-owners" className="flex flex-col items-center gap-1 py-3">
              <User size={20} />
              <span>Pet Owners</span>
            </TabsTrigger>
            <TabsTrigger value="farmers" className="flex flex-col items-center gap-1 py-3">
              <Users size={20} />
              <span>Farmers</span>
            </TabsTrigger>
            <TabsTrigger value="providers" className="flex flex-col items-center gap-1 py-3">
              <Briefcase size={20} />
              <span>Service Providers</span>
            </TabsTrigger>
            <TabsTrigger value="vendors" className="flex flex-col items-center gap-1 py-3">
              <Store size={20} />
              <span>Vendors</span>
            </TabsTrigger>
            <TabsTrigger value="public" className="flex flex-col items-center gap-1 py-3">
              <Globe size={20} />
              <span>General Public</span>
            </TabsTrigger>
            <TabsTrigger value="admins" className="flex flex-col items-center gap-1 py-3">
              <Shield size={20} />
              <span>Admins</span>
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex flex-col items-center gap-1 py-3">
              <Handshake size={20} />
              <span>Partners</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pet-owners">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-green">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Urban residents in Lagos, Abuja, Port Harcourt, and Ibadan</li>
                      <li>Young professionals, families, and pet enthusiasts aged 18–45</li>
                      <li>Middle and upper-class individuals with disposable income</li>
                      <li>Owners of both local breeds (e.g., Ekuke dogs) and exotic pets</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-green">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To purchase pet supplies (food, toys, collars)</li>
                      <li>To book services (veterinarians, groomers, trainers)</li>
                      <li>To adopt pets or engage with the community</li>
                      <li>To access educational content about pet care</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-green">Access Level</h3>
                    <p className="font-semibold text-gray-800">Public Access:</p>
                    <p className="mb-2 text-gray-700">Browse products, services, and content without an account</p>
                    
                    <p className="font-semibold text-gray-800">Registered Users:</p>
                    <p className="mb-2 text-gray-700">Create profiles to save pet details, track orders, book services</p>
                    
                    <p className="font-semibold text-gray-800">Geographic Focus:</p>
                    <p className="text-gray-700">Primarily urban and semi-urban areas with internet access</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">A Lagos-based professional buys dog food, books a vet appointment, and joins a forum to discuss pet care tips.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="farmers">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-brown">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Smallholder farmers across rural and peri-urban Nigeria</li>
                      <li>Commercial farmers and agribusiness owners (Oyo, Kano, Enugu)</li>
                      <li>Adults aged 25–60, ranging from low to middle income</li>
                      <li>Cooperative groups and agricultural entrepreneurs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-brown">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To purchase farm supplies (feed, supplements, equipment)</li>
                      <li>To hire specialists for animal health or artificial insemination</li>
                      <li>To trade livestock or access educational resources</li>
                      <li>To connect with other farmers and share knowledge</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-brown">Access Level</h3>
                    <p className="font-semibold text-gray-800">Public Access:</p>
                    <p className="mb-2 text-gray-700">View product listings, service directories, and blog articles</p>
                    
                    <p className="font-semibold text-gray-800">Registered Users:</p>
                    <p className="mb-2 text-gray-700">Manage profiles with farm details, track orders, list animals for trade</p>
                    
                    <p className="font-semibold text-gray-800">Geographic Focus:</p>
                    <p className="text-gray-700">Nationwide, with emphasis on rural areas with mobile internet</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">A poultry farmer in Kaduna buys feed, hires a vet for vaccinations, and lists chickens for sale.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="providers">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-orange">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Veterinarians, groomers, pet trainers, and livestock specialists</li>
                      <li>Professionals aged 25–50, based in urban or semi-urban areas</li>
                      <li>Individuals with formal or practical training</li>
                      <li>Small business owners and freelancers in animal care</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-orange">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To create profiles and list their services</li>
                      <li>To manage bookings and communicate with clients</li>
                      <li>To gain visibility and build a client base</li>
                      <li>To access industry resources and connect with peers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-orange">Access Level</h3>
                    <p className="font-semibold text-gray-800">Registered Providers:</p>
                    <p className="mb-2 text-gray-700">Must sign up with verified credentials to create a profile</p>
                    
                    <p className="font-semibold text-gray-800">Provider Dashboard:</p>
                    <p className="mb-2 text-gray-700">Manage bookings, view reviews, and update availability</p>
                    
                    <p className="font-semibold text-gray-800">Restricted Access:</p>
                    <p className="text-gray-700">Cannot purchase products or trade animals unless registered as users</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">A vet in Abuja lists their clinic, accepts bookings for pet checkups, and responds to client inquiries.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vendors">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-gold">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Local and national suppliers of pet and farm animal products</li>
                      <li>Small to medium-sized businesses and entrepreneurs</li>
                      <li>Age range 20–60, varying business scale and scope</li>
                      <li>Includes rural feed producers and urban pet shops</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-gold">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To list and sell products (e.g., dog food, fencing materials)</li>
                      <li>To manage inventory and track sales</li>
                      <li>To reach a wider Nigerian market</li>
                      <li>To establish brand presence and customer relationships</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-gold">Access Level</h3>
                    <p className="font-semibold text-gray-800">Registered Vendors:</p>
                    <p className="mb-2 text-gray-700">Must sign up with business verification to create a seller account</p>
                    
                    <p className="font-semibold text-gray-800">Vendor Dashboard:</p>
                    <p className="mb-2 text-gray-700">Upload products, set prices, and monitor orders</p>
                    
                    <p className="font-semibold text-gray-800">Restricted Access:</p>
                    <p className="text-gray-700">Cannot book services or trade animals unless registered in those roles</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">A feed supplier in Ibadan lists poultry feed, updates stock levels, and fulfills orders for farmers.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="public">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-terracotta">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Nigerians interested in pets or farming but not yet owners</li>
                      <li>Students, aspiring farmers, or curious individuals</li>
                      <li>Broad age range (16–60), urban and rural</li>
                      <li>Varying income levels and backgrounds</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-terracotta">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To explore pet adoption options or learn about farming</li>
                      <li>To read educational content on animal care</li>
                      <li>To attend virtual or in-person events</li>
                      <li>To research before making decisions about pet ownership</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-terracotta">Access Level</h3>
                    <p className="font-semibold text-gray-800">Public Access:</p>
                    <p className="mb-2 text-gray-700">Full access to browse products, services, blog, and events</p>
                    
                    <p className="font-semibold text-gray-800">Limited Access:</p>
                    <p className="text-gray-700">Must register to post in forums, adopt animals, or make purchases</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">A student in Enugu reads a blog post on pet care and attends a webinar on goat farming.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admins">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-beige">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Platform staff responsible for managing the website</li>
                      <li>Tech-savvy professionals based in urban areas</li>
                      <li>Age range 20–40, with technical expertise</li>
                      <li>Content moderators and customer support specialists</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-beige">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To moderate content and verify listings</li>
                      <li>To manage user complaints and platform integrity</li>
                      <li>To analyze platform performance and metrics</li>
                      <li>To maintain platform standards and security</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pet-beige">Access Level</h3>
                    <p className="font-semibold text-gray-800">Admin Access:</p>
                    <p className="mb-2 text-gray-700">Full access to backend dashboard with management tools</p>
                    
                    <p className="font-semibold text-gray-800">Restricted Access:</p>
                    <p className="text-gray-700">Cannot interact as regular users unless using separate accounts</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">An admin verifies a new vendor's credentials and removes a scam listing from the adoption section.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-500">Who They Are</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Logistics companies for delivery</li>
                      <li>Payment providers (Paystack, Flutterwave)</li>
                      <li>Agricultural NGOs and educational institutions</li>
                      <li>Corporate entities and nonprofit organizations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-500">Why They Access</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To integrate services (payment processing, delivery)</li>
                      <li>To collaborate on events or educational content</li>
                      <li>To access analytics relevant to their services</li>
                      <li>To maintain partnership agreements and quality</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-500">Access Level</h3>
                    <p className="font-semibold text-gray-800">Limited API Access:</p>
                    <p className="mb-2 text-gray-700">Access to specific APIs for integration</p>
                    
                    <p className="font-semibold text-gray-800">Partner Dashboard:</p>
                    <p className="text-gray-700">Restricted access to monitor partnership metrics</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pet-brown">Example Use Case:</h4>
                  <p className="text-gray-700">A logistics company integrates with the platform to provide delivery tracking for pet supply orders.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default AccessGroups;
