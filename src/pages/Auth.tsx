
import React from 'react';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import AuthForms from '@/components/AuthForms';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Auth = () => {
  useGsapAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-pet-brown">Join Our Community</h1>
            <p className="text-gray-600">
              Create an account to access personalized features, track orders, and join our growing community of pet and farm animal enthusiasts across Nigeria.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-pet-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pet-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Save pet/farm animal details for personalized recommendations</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pet-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pet-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Track your order and booking history</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pet-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pet-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Earn points with our loyalty program for purchases and referrals</p>
              </div>
            </div>
          </div>
          <div>
            <AuthForms />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
