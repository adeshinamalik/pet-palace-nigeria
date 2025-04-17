
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Users, Building, Home, ShoppingBag, MapPin, Bookmark, Star, UserCircle, FileCog, MessageSquare, CalendarClock, ShieldCheck, Tractor, Dog, Cat, Bird } from 'lucide-react';

const GroupProfiles = () => {
  useGsapAnimations();
  const { groupType } = useParams<{ groupType: string }>();
  
  const getGroupData = () => {
    switch(groupType) {
      case 'pet-owners':
        return {
          title: 'Pet Owners',
          description: 'Urban residents in cities like Lagos, Abuja, Port Harcourt, and Ibadan, where pet ownership is growing among the middle and upper classes.',
          demographics: 'Young professionals, families, and pet enthusiasts, typically aged 18–45, with disposable income for pet care.',
          accessLevel: 'Public access to browse products and services. Registered users can save pet details, track orders, book services, join forums, and earn loyalty points.',
          icon: <Dog size={24} className="text-pet-green" />,
          features: [
            { title: 'Pet Profiles', description: 'Save details about your pets for personalized recommendations and veterinary records.', icon: <Dog size={20} /> },
            { title: 'Order History', description: 'Track your purchases of pet food, toys, and accessories.', icon: <ShoppingBag size={20} /> },
            { title: 'Book Services', description: 'Schedule appointments with veterinarians, groomers, and trainers.', icon: <CalendarClock size={20} /> },
            { title: 'Community Forums', description: 'Connect with other pet owners to share tips and experiences.', icon: <MessageSquare size={20} /> }
          ],
          useCase: 'A Lagos-based professional buys dog food, books a vet appointment, and joins a forum to discuss pet care tips.'
        };
      case 'farmers':
        return {
          title: 'Farm Animal Owners',
          description: 'Smallholder farmers, commercial farmers, and agribusiness owners across rural and peri-urban Nigeria.',
          demographics: 'Adults aged 25–60, ranging from low to middle income, involved in livestock farming (goats, cows, poultry, pigs).',
          accessLevel: 'Public access to view product listings and service directories. Registered users can manage profiles with farm details, track orders, list animals for trade, and participate in community discussions.',
          icon: <Tractor size={24} className="text-pet-brown" />,
          features: [
            { title: 'Farm Profiles', description: 'Manage details about your farm and livestock for better resource planning.', icon: <Tractor size={20} /> },
            { title: 'Order Supplies', description: 'Purchase feed, supplements, and equipment for your farm animals.', icon: <ShoppingBag size={20} /> },
            { title: 'Hire Specialists', description: 'Find and book veterinarians and other agricultural specialists.', icon: <UserCircle size={20} /> },
            { title: 'Trade Livestock', description: 'Buy and sell farm animals through our verified marketplace.', icon: <Bookmark size={20} /> }
          ],
          useCase: 'A poultry farmer in Kaduna buys feed, hires a vet for vaccinations, and lists chickens for sale.'
        };
      case 'service-providers':
        return {
          title: 'Service Providers',
          description: 'Veterinarians, groomers, pet trainers, and livestock specialists.',
          demographics: 'Professionals aged 25–50, often based in urban or semi-urban areas, with formal or practical training.',
          accessLevel: 'Must sign up with verified credentials to create a profile. Access a provider dashboard to manage bookings, view reviews, and update availability.',
          icon: <UserCircle size={24} className="text-pet-blue" />,
          features: [
            { title: 'Service Listings', description: 'Create and manage your professional service listings.', icon: <FileCog size={20} /> },
            { title: 'Booking Management', description: 'Track and manage client appointments and schedule.', icon: <CalendarClock size={20} /> },
            { title: 'Reviews', description: 'Build your reputation through verified client reviews.', icon: <Star size={20} /> },
            { title: 'Client Communication', description: 'Message clients and send appointment reminders.', icon: <MessageSquare size={20} /> }
          ],
          useCase: 'A vet in Abuja lists their clinic, accepts bookings for pet checkups, and responds to client inquiries.'
        };
      case 'vendors':
        return {
          title: 'Vendors (Product Sellers)',
          description: 'Local and national suppliers of pet and farm animal products.',
          demographics: 'Small to medium-sized businesses, entrepreneurs, and cooperatives, aged 20–60.',
          accessLevel: 'Must sign up with business verification to create a seller account. Access a vendor dashboard to upload products, set prices, and monitor orders.',
          icon: <Building size={24} className="text-pet-orange" />,
          features: [
            { title: 'Product Listings', description: 'Create and manage your product catalog.', icon: <ShoppingBag size={20} /> },
            { title: 'Inventory Management', description: 'Track stock levels and receive low inventory alerts.', icon: <Bookmark size={20} /> },
            { title: 'Order Fulfillment', description: 'Process and track customer orders.', icon: <ShoppingBag size={20} /> },
            { title: 'Analytics', description: 'Monitor sales performance and customer trends.', icon: <FileCog size={20} /> }
          ],
          useCase: 'A feed supplier in Ibadan lists poultry feed, updates stock levels, and fulfills orders for farmers.'
        };
      case 'admin':
        return {
          title: 'Administrators and Moderators',
          description: 'Your team or hired staff responsible for managing the platform.',
          demographics: 'Tech-savvy professionals, likely based in urban areas, aged 20–40.',
          accessLevel: 'Full access to a backend dashboard with tools for user management, content moderation, and analytics.',
          icon: <ShieldCheck size={24} className="text-pet-terracotta" />,
          features: [
            { title: 'User Management', description: 'Manage user accounts and permissions.', icon: <Users size={20} /> },
            { title: 'Content Moderation', description: 'Review and approve listings and community content.', icon: <FileCog size={20} /> },
            { title: 'Platform Analytics', description: 'Monitor site performance and user engagement.', icon: <Star size={20} /> },
            { title: 'System Settings', description: 'Configure platform settings and features.', icon: <FileCog size={20} /> }
          ],
          useCase: 'An admin verifies a new vendor\'s credentials and removes a scam listing from the adoption section.'
        };
      default:
        return {
          title: 'All Access Groups',
          description: 'Different user groups have different access levels and features on our platform.',
          demographics: 'Pet owners, farmers, service providers, vendors, and administrators.',
          accessLevel: 'Varies by group type.',
          icon: <Users size={24} className="text-gray-700" />,
          features: [
            { title: 'Pet Owners', description: 'Access pet care products, services, and community resources.', icon: <Dog size={20} /> },
            { title: 'Farmers', description: 'Access farm supplies, services, and livestock trading.', icon: <Tractor size={20} /> },
            { title: 'Service Providers', description: 'Create service listings and manage bookings.', icon: <UserCircle size={20} /> },
            { title: 'Vendors', description: 'Sell products and manage inventory.', icon: <Building size={20} /> }
          ],
          useCase: 'Select a specific group to learn more about their access and features.'
        };
    }
  };
  
  const groupData = getGroupData();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/access-groups" className="hover:underline">Access Groups</Link>
            <span>/</span>
            <span>{groupData.title}</span>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-100 p-3 rounded-full">
              {groupData.icon}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-pet-brown">{groupData.title}</h1>
          </div>
          
          <p className="text-gray-600 max-w-3xl mb-6">{groupData.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="features">
              <TabsList>
                <TabsTrigger value="features">Features & Access</TabsTrigger>
                <TabsTrigger value="demographics">Demographics</TabsTrigger>
                <TabsTrigger value="use-case">Use Case</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Features & Access</CardTitle>
                    <CardDescription>
                      What {groupData.title} can do on our platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {groupData.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-pet-green/10 p-2 rounded-full mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="font-medium mb-3">Access Level</h3>
                      <p className="text-gray-600">{groupData.accessLevel}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="demographics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Demographics</CardTitle>
                    <CardDescription>
                      Who belongs to this access group
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <div className="bg-pet-orange/10 p-2 rounded-full mt-1">
                        <Users size={20} className="text-pet-orange" />
                      </div>
                      <p className="text-gray-600">{groupData.demographics}</p>
                    </div>
                    
                    {groupType === 'pet-owners' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Dog size={18} className="text-pet-brown" />
                            <h4 className="font-medium">Dog Owners</h4>
                          </div>
                          <p className="text-sm text-gray-600">Urban and suburban residents with dogs as companions and security.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Cat size={18} className="text-pet-orange" />
                            <h4 className="font-medium">Cat Owners</h4>
                          </div>
                          <p className="text-sm text-gray-600">Growing demographic in apartments and smaller living spaces.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Bird size={18} className="text-pet-blue" />
                            <h4 className="font-medium">Bird & Exotic</h4>
                          </div>
                          <p className="text-sm text-gray-600">Owners of birds, fish, and smaller exotic pets.</p>
                        </div>
                      </div>
                    )}
                    
                    {groupType === 'farmers' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <User size={18} className="text-pet-brown" />
                            <h4 className="font-medium">Smallholders</h4>
                          </div>
                          <p className="text-sm text-gray-600">Small-scale farmers with few animals, often as supplementary income.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Users size={18} className="text-pet-orange" />
                            <h4 className="font-medium">Commercial</h4>
                          </div>
                          <p className="text-sm text-gray-600">Medium to large operations focused on livestock as primary business.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Building size={18} className="text-pet-green" />
                            <h4 className="font-medium">Cooperatives</h4>
                          </div>
                          <p className="text-sm text-gray-600">Group farming organizations sharing resources and knowledge.</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="use-case" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Example Use Case</CardTitle>
                    <CardDescription>
                      How {groupData.title} typically use our platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 italic">{groupData.useCase}</p>
                    </div>
                    
                    {groupType && (
                      <div className="mt-8">
                        <h3 className="font-medium mb-4">Typical Journey</h3>
                        <div className="relative">
                          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                          
                          <div className="relative pl-12 pb-8">
                            <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-pet-green flex items-center justify-center">
                              <span className="text-white font-bold">1</span>
                            </div>
                            <h4 className="font-medium mb-2">Registration & Profile Setup</h4>
                            <p className="text-sm text-gray-600">
                              {groupType === 'pet-owners' && 'Create an account and add details about their pets.'}
                              {groupType === 'farmers' && 'Sign up and add information about their farm and animals.'}
                              {groupType === 'service-providers' && 'Create an account with verified professional credentials.'}
                              {groupType === 'vendors' && 'Register with business verification and set up their store.'}
                              {groupType === 'admin' && 'Receive admin credentials and access the management dashboard.'}
                            </p>
                          </div>
                          
                          <div className="relative pl-12 pb-8">
                            <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-pet-blue flex items-center justify-center">
                              <span className="text-white font-bold">2</span>
                            </div>
                            <h4 className="font-medium mb-2">Platform Exploration & Engagement</h4>
                            <p className="text-sm text-gray-600">
                              {groupType === 'pet-owners' && 'Browse products, search for services, and read community posts.'}
                              {groupType === 'farmers' && 'Look for supplies, equipment, and specialist services.'}
                              {groupType === 'service-providers' && 'Create service listings and set availability calendar.'}
                              {groupType === 'vendors' && 'Upload product inventory with images and descriptions.'}
                              {groupType === 'admin' && 'Monitor new user registrations and content submissions.'}
                            </p>
                          </div>
                          
                          <div className="relative pl-12">
                            <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-pet-orange flex items-center justify-center">
                              <span className="text-white font-bold">3</span>
                            </div>
                            <h4 className="font-medium mb-2">Transactions & Interactions</h4>
                            <p className="text-sm text-gray-600">
                              {groupType === 'pet-owners' && 'Make purchases, book appointments, and participate in forums.'}
                              {groupType === 'farmers' && 'Order supplies, list animals for sale, and book specialist services.'}
                              {groupType === 'service-providers' && 'Receive booking requests and communicate with clients.'}
                              {groupType === 'vendors' && 'Process incoming orders and manage inventory levels.'}
                              {groupType === 'admin' && 'Moderate content, resolve user issues, and analyze platform metrics.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {groupType === 'pet-owners' && (
                  <>
                    <Link to="/products" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <ShoppingBag size={18} className="text-pet-green" />
                      <span>Browse Pet Products</span>
                    </Link>
                    <Link to="/service-directory" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <CalendarClock size={18} className="text-pet-blue" />
                      <span>Find Pet Services</span>
                    </Link>
                    <Link to="/community" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <MessageSquare size={18} className="text-pet-orange" />
                      <span>Join Pet Forums</span>
                    </Link>
                    <Link to="/auth" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <User size={18} className="text-pet-brown" />
                      <span>Create Pet Owner Account</span>
                    </Link>
                  </>
                )}
                
                {groupType === 'farmers' && (
                  <>
                    <Link to="/products/farm-supplies" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <ShoppingBag size={18} className="text-pet-green" />
                      <span>Browse Farm Supplies</span>
                    </Link>
                    <Link to="/service-directory" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <CalendarClock size={18} className="text-pet-blue" />
                      <span>Find Livestock Specialists</span>
                    </Link>
                    <Link to="/adoption" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <Tractor size={18} className="text-pet-brown" />
                      <span>Livestock Trading</span>
                    </Link>
                    <Link to="/auth" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <User size={18} className="text-pet-orange" />
                      <span>Create Farmer Account</span>
                    </Link>
                  </>
                )}
                
                {groupType === 'service-providers' && (
                  <>
                    <Link to="/auth" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <UserCircle size={18} className="text-pet-blue" />
                      <span>Register as Service Provider</span>
                    </Link>
                    <Link to="/service-directory" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <MapPin size={18} className="text-pet-green" />
                      <span>View Service Directory</span>
                    </Link>
                    <Link to="/community" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <MessageSquare size={18} className="text-pet-orange" />
                      <span>Industry Discussions</span>
                    </Link>
                    <Link to="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <FileCog size={18} className="text-pet-brown" />
                      <span>Provider Resources</span>
                    </Link>
                  </>
                )}
                
                {groupType === 'vendors' && (
                  <>
                    <Link to="/auth" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <Building size={18} className="text-pet-orange" />
                      <span>Register as Vendor</span>
                    </Link>
                    <Link to="/products" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <ShoppingBag size={18} className="text-pet-green" />
                      <span>View Marketplace</span>
                    </Link>
                    <Link to="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <FileCog size={18} className="text-pet-blue" />
                      <span>Vendor Guidelines</span>
                    </Link>
                    <Link to="/community" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <MessageSquare size={18} className="text-pet-brown" />
                      <span>Vendor Community</span>
                    </Link>
                  </>
                )}
                
                {(!groupType || groupType === 'admin') && (
                  <>
                    <Link to="/access-groups/pet-owners" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <Dog size={18} className="text-pet-green" />
                      <span>Pet Owners</span>
                    </Link>
                    <Link to="/access-groups/farmers" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <Tractor size={18} className="text-pet-brown" />
                      <span>Farm Animal Owners</span>
                    </Link>
                    <Link to="/access-groups/service-providers" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <UserCircle size={18} className="text-pet-blue" />
                      <span>Service Providers</span>
                    </Link>
                    <Link to="/access-groups/vendors" className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50">
                      <Building size={18} className="text-pet-orange" />
                      <span>Vendors</span>
                    </Link>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupProfiles;
