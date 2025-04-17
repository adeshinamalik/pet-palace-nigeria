
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, MessageSquare, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import ForumThreadCard from '@/components/ForumThreadCard';
import EventCard from '@/components/EventCard';

const Community = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Preventing Newcastle Disease in Poultry",
      excerpt: "Learn the essential vaccination schedule and biosecurity measures to protect your flock from this highly contagious disease.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      date: "April 10, 2023",
      category: "Poultry",
      link: "/blog/preventing-newcastle-disease"
    },
    {
      id: 2,
      title: "Choosing the Right Dog Breed for Your Nigerian Home",
      excerpt: "From local Ekuke dogs to imported breeds, find out which dog is best suited for your living situation and climate.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      date: "March 22, 2023",
      category: "Dogs",
      link: "/blog/choosing-right-dog-breed"
    },
    {
      id: 3,
      title: "Maximizing Milk Production in Nigerian Dairy Farms",
      excerpt: "Practical tips for small and medium-scale farmers on nutrition, breeding, and management to increase your dairy output.",
      image: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      date: "March 15, 2023",
      category: "Dairy",
      link: "/blog/maximizing-milk-production"
    },
    {
      id: 4,
      title: "Essential Vaccines for Cats in Nigeria",
      excerpt: "Keep your feline friend healthy with this comprehensive guide to necessary vaccinations and where to get them.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      date: "February 27, 2023",
      category: "Cats",
      link: "/blog/essential-vaccines-cats"
    },
    {
      id: 5,
      title: "Managing African Swine Fever on Your Farm",
      excerpt: "Prevention strategies and biosecurity measures to protect your pig farm from this devastating disease.",
      image: "https://images.unsplash.com/photo-1591347887817-173e3d3f6975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      date: "February 15, 2023",
      category: "Pigs",
      link: "/blog/managing-african-swine-fever"
    },
    {
      id: 6,
      title: "Starting a Profitable Fish Farm in Nigeria",
      excerpt: "A step-by-step guide to setting up your catfish farm, from pond construction to marketing your harvest.",
      image: "https://images.unsplash.com/photo-1559717201-fbb671ff56b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      date: "January 30, 2023",
      category: "Fish",
      link: "/blog/starting-fish-farm"
    },
  ];
  
  const forumThreads = [
    {
      id: 1,
      title: "What's the best feed for layers in this economy?",
      author: "ChickenFarmer123",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=ChickenFarmer123",
      category: "Poultry",
      replies: 24,
      views: 156,
      lastActivity: "2 hours ago",
      isHot: true,
      excerpt: "With the rising costs of feed, I'm looking for alternatives that won't compromise egg production. Has anyone tried..."
    },
    {
      id: 2,
      title: "Vet recommendations in Abuja for exotic pets?",
      author: "LizardLover",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=LizardLover",
      category: "Pets",
      replies: 8,
      views: 42,
      lastActivity: "5 hours ago",
      isHot: false,
      excerpt: "I recently acquired a bearded dragon and need a specialized vet in the FCT area. Has anyone had good experiences with..."
    },
    {
      id: 3,
      title: "Dealing with Newcastle Disease outbreak",
      author: "PoultryPro",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=PoultryPro",
      category: "Poultry",
      replies: 37,
      views: 289,
      lastActivity: "1 day ago",
      isHot: true,
      excerpt: "Unfortunately, my farm has been hit with Newcastle. I've isolated affected birds but need advice on how to prevent..."
    },
    {
      id: 4,
      title: "How to train Nigerian local dogs?",
      author: "DogWhisperer",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=DogWhisperer",
      category: "Pets",
      replies: 19,
      views: 104,
      lastActivity: "2 days ago",
      isHot: false,
      excerpt: "I've adopted an Ekuke puppy and want to start training early. Any tips specific to local breeds? They seem more independent than..."
    },
    {
      id: 5,
      title: "Best time to sell goats in Northern markets",
      author: "GoatTrader",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=GoatTrader",
      category: "Livestock",
      replies: 12,
      views: 88,
      lastActivity: "3 days ago",
      isHot: false,
      excerpt: "I'm planning my sales strategy for the year. When have you found the best prices at markets in Kano and Kaduna?"
    },
  ];
  
  const events = [
    {
      id: 1,
      title: "Lagos Pet Expo 2023",
      date: "May 20-21, 2023",
      location: "Landmark Centre, Lagos",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      description: "Nigeria's largest pet industry event featuring exhibitors, demonstrations, and educational seminars.",
      isVirtual: false,
      link: "/events/lagos-pet-expo"
    },
    {
      id: 2,
      title: "Webinar: Modern Poultry Management",
      date: "April 28, 2023",
      location: "Online (Zoom)",
      image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      description: "Learn from experts about the latest techniques in poultry farm management and disease prevention.",
      isVirtual: true,
      link: "/events/poultry-management-webinar"
    },
    {
      id: 3,
      title: "Abuja Agricultural Fair",
      date: "June 10-12, 2023",
      location: "International Conference Centre, Abuja",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      description: "Annual exhibition showcasing agricultural innovations, livestock products, and farming equipment.",
      isVirtual: false,
      link: "/events/abuja-agricultural-fair"
    },
    {
      id: 4,
      title: "Dog Training Workshop",
      date: "May 7, 2023",
      location: "Obalende Park, Lagos",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
      description: "Hands-on workshop for dog owners to learn basic training techniques from professional trainers.",
      isVirtual: false,
      link: "/events/dog-training-workshop"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pet-brown">Community & Education</h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Connect with fellow pet owners and farmers, share knowledge, and stay informed about the latest in animal care and management.
        </p>

        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid grid-cols-3 w-[400px] mx-auto mb-8">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>Blog</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span>Forum</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Events</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-pet-green">Latest Articles</h2>
                <div className="flex items-center gap-2">
                  <select className="py-1 px-3 border rounded text-sm">
                    <option>All Categories</option>
                    <option>Pets</option>
                    <option>Farm Animals</option>
                    <option>Care Guides</option>
                  </select>
                  <button className="text-pet-green font-medium text-sm hover:underline">
                    View All
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map(post => (
                  <BlogPostCard 
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    date={post.date}
                    category={post.category}
                    link={post.link}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forum">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-pet-orange">Discussion Forum</h2>
                <div className="flex items-center gap-2">
                  <select className="py-1 px-3 border rounded text-sm">
                    <option>All Topics</option>
                    <option>Pets</option>
                    <option>Livestock</option>
                    <option>Poultry</option>
                  </select>
                  <button className="bg-pet-orange hover:bg-pet-orange/90 text-white py-1 px-4 rounded text-sm">
                    New Thread
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {forumThreads.map(thread => (
                  <ForumThreadCard 
                    key={thread.id}
                    thread={thread}
                  />
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="border border-pet-orange text-pet-orange hover:bg-pet-orange/10 font-medium py-2 px-4 rounded">
                  View More Discussions
                </button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-pet-terracotta">Upcoming Events</h2>
                <div className="flex items-center gap-2">
                  <select className="py-1 px-3 border rounded text-sm">
                    <option>All Events</option>
                    <option>Virtual Events</option>
                    <option>In-Person Events</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map(event => (
                  <EventCard 
                    key={event.id}
                    event={event}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
