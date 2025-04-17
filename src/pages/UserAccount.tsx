import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { User, Package, Calendar, Heart, Award, Settings, MapPin, Phone, Mail, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/sonner";
import { useAuth } from '@/contexts/AuthContext';
import { AuthUser } from '@/components/AuthForms';

// Define the location state type
interface LocationState {
  activeTab?: string;
}

const UserAccount = () => {
  useGsapAnimations();
  const location = useLocation();
  const locationState = location.state as LocationState;
  const [activeTab, setActiveTab] = useState(locationState?.activeTab || "profile");
  const { user, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Handle tab change from location state
    if (locationState?.activeTab) {
      setActiveTab(locationState.activeTab);
      // Clear the state to prevent keeping the activeTab on refresh
      window.history.replaceState({}, document.title);
    }
  }, [locationState]);
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  const handleSignOut = () => {
    signOut();
    toast.success("Signed out successfully");
    navigate('/');
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!user) {
    return null; // Will redirect due to the useEffect
  }
  
  const getUserRoleDisplay = (role: string) => {
    switch(role) {
      case 'pet-owner':
        return 'Pet Owner';
      case 'farmer':
        return 'Farmer';
      case 'service-provider':
        return 'Service Provider';
      case 'vendor':
        return 'Vendor';
      case 'admin':
        return 'Administrator';
      default:
        return 'Member';
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* User Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.name}`} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-500 text-sm">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
                  
                  <div className="flex items-center gap-1 mt-2">
                    <Award size={16} className="text-pet-gold" />
                    <span className="text-sm font-medium">{getUserRoleDisplay(user.role)}</span>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <Button 
                    variant={activeTab === "profile" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "profile" ? "bg-pet-green hover:bg-pet-green/90" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User size={16} className="mr-2" />
                    Profile
                  </Button>
                  <Button 
                    variant={activeTab === "orders" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "orders" ? "bg-pet-green hover:bg-pet-green/90" : ""}`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package size={16} className="mr-2" />
                    Orders
                  </Button>
                  <Button 
                    variant={activeTab === "bookings" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "bookings" ? "bg-pet-green hover:bg-pet-green/90" : ""}`}
                    onClick={() => setActiveTab("bookings")}
                  >
                    <Calendar size={16} className="mr-2" />
                    Bookings
                  </Button>
                  <Button 
                    variant={activeTab === "favorites" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "favorites" ? "bg-pet-green hover:bg-pet-green/90" : ""}`}
                    onClick={() => setActiveTab("favorites")}
                  >
                    <Heart size={16} className="mr-2" />
                    Favorites
                  </Button>
                  <Button 
                    variant={activeTab === "rewards" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "rewards" ? "bg-pet-green hover:bg-pet-green/90" : ""}`}
                    onClick={() => setActiveTab("rewards")}
                  >
                    <Award size={16} className="mr-2" />
                    Loyalty Rewards
                  </Button>
                  <Button 
                    variant={activeTab === "settings" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "settings" ? "bg-pet-green hover:bg-pet-green/90" : ""}`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings size={16} className="mr-2" />
                    Settings
                  </Button>
                </nav>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm mb-3">Pet Palace Rewards</p>
                  <div className="bg-gray-100 rounded-full h-2.5">
                    <div className="bg-pet-gold h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-500">150/200 points to next level</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={handleSignOut}
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="profile" className="mt-0">
                <UserProfileTab user={user} />
              </TabsContent>
              
              <TabsContent value="orders" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <OrdersTab />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="bookings" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>My Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BookingsTab />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="favorites" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      You haven't saved any items yet.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rewards" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Loyalty Program</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LoyaltyProgramTab />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-sm text-gray-500">
                      Manage your account settings and preferences
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <Button variant="outline">Change Password</Button>
                      
                      <div className="pt-4 border-t mt-6">
                        <h3 className="text-lg font-medium mb-2">Notifications</h3>
                        <div className="space-y-2">
                          {/* Notification settings would go here */}
                          <p className="text-sm text-gray-500">Notification settings coming soon.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Profile Tab Component
const UserProfileTab = ({ user }: { user: AuthUser }) => {
  // Define form schema
  const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
  });

  // Split the name into first and last name for the form
  const nameParts = user.name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName,
      lastName,
      email: user.email,
      phone: "+234 123 456 7890",
      address: "123 Main Street",
      city: "Lagos",
      state: "Lagos State",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Profile updated successfully!");
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="flex items-center">
                      <Mail size={16} className="text-gray-500 mr-2" />
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <div className="flex items-center">
                      <Phone size={16} className="text-gray-500 mr-2" />
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-gray-500 mr-2" />
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-pet-green hover:bg-pet-green/90">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

// Orders Tab Component
const OrdersTab = () => {
  const mockOrders = [
    {
      id: "#ORD12345",
      date: "2024-04-10",
      status: "Delivered",
      total: "₦24,500",
      items: 3
    },
    {
      id: "#ORD12346",
      date: "2024-03-28",
      status: "Processing",
      total: "₦18,950",
      items: 2
    },
    {
      id: "#ORD12347",
      date: "2024-03-15",
      status: "Delivered",
      total: "₦32,700",
      items: 5
    }
  ];

  return (
    <div className="space-y-6">
      {mockOrders.map((order) => (
        <div key={order.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <div>
              <p className="font-medium">{order.id}</p>
              <p className="text-sm text-gray-500">Ordered on {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <Badge status={order.status} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-gray-500">Items: {order.items}</p>
              <p className="text-gray-500">Total: {order.total}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4 sm:mt-0">
              <Button variant="outline" size="sm">Track Order</Button>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Badge Component for Order Status
const Badge = ({ status }: { status: string }) => {
  let bgColor = "";
  
  switch(status) {
    case "Delivered":
      bgColor = "bg-green-100 text-green-800";
      break;
    case "Processing":
      bgColor = "bg-blue-100 text-blue-800";
      break;
    case "Cancelled":
      bgColor = "bg-red-100 text-red-800";
      break;
    default:
      bgColor = "bg-gray-100 text-gray-800";
  }
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${bgColor}`}>
      {status}
    </span>
  );
};

// Bookings Tab Component
const BookingsTab = () => {
  const mockBookings = [
    {
      id: "#BK78901",
      service: "Veterinary Checkup",
      provider: "Dr. Adesina Veterinary Clinic",
      date: "2024-04-25",
      time: "10:00 AM",
      status: "Upcoming"
    },
    {
      id: "#BK78902",
      service: "Pet Grooming",
      provider: "Fluffy Friends Grooming Spa",
      date: "2024-03-15",
      time: "2:30 PM",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">
      {mockBookings.map((booking) => (
        <div key={booking.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <div>
              <p className="font-medium">{booking.service}</p>
              <p className="text-sm text-gray-500">{booking.provider}</p>
            </div>
            <Badge status={booking.status} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-gray-500">Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p className="text-gray-500">Time: {booking.time}</p>
              <p className="text-gray-500">Booking ID: {booking.id}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4 sm:mt-0">
              {booking.status === "Upcoming" && (
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                  Cancel
                </Button>
              )}
              <Button variant="outline" size="sm">View Details</Button>
              {booking.status === "Completed" && (
                <Button variant="outline" size="sm">Leave Review</Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Loyalty Program Tab Component
const LoyaltyProgramTab = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-pet-green/80 to-pet-gold/80 rounded-lg p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Gold Member</h3>
          <Award size={24} />
        </div>
        <p className="mb-4 text-sm">John Doe • Member since April 2023</p>
        <div className="space-y-2">
          <p className="text-sm font-medium">Current points: 150</p>
          <div className="bg-white/30 rounded-full h-2.5">
            <div className="bg-white h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-xs">150/200 points to Platinum level</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Ways to Earn Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-50">
            <CardContent className="p-4 flex items-center gap-3">
              <Package size={20} className="text-pet-orange" />
              <div>
                <p className="font-medium">Make a Purchase</p>
                <p className="text-xs text-gray-500">Earn 1 point for every ₦1,000 spent</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50">
            <CardContent className="p-4 flex items-center gap-3">
              <User size={20} className="text-pet-green" />
              <div>
                <p className="font-medium">Refer a Friend</p>
                <p className="text-xs text-gray-500">Earn 50 points for each referral who makes a purchase</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50">
            <CardContent className="p-4 flex items-center gap-3">
              <Calendar size={20} className="text-pet-brown" />
              <div>
                <p className="font-medium">Book a Service</p>
                <p className="text-xs text-gray-500">Earn 25 points for each service booking</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50">
            <CardContent className="p-4 flex items-center gap-3">
              <Heart size={20} className="text-pet-terracotta" />
              <div>
                <p className="font-medium">Write a Review</p>
                <p className="text-xs text-gray-500">Earn 10 points for each verified review</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Points Activity</h3>
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Purchase: Order #ORD12345</p>
                  <p className="text-xs text-gray-500">April 10, 2024</p>
                </div>
                <p className="text-green-600 font-medium">+25 points</p>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Service Booking: Grooming</p>
                  <p className="text-xs text-gray-500">March 15, 2024</p>
                </div>
                <p className="text-green-600 font-medium">+25 points</p>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Purchase: Order #ORD12347</p>
                  <p className="text-xs text-gray-500">March 15, 2024</p>
                </div>
                <p className="text-green-600 font-medium">+30 points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserAccount;
