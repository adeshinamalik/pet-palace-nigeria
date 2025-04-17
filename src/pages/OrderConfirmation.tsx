
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderConfirmation = () => {
  // In a real application, this would come from the backend or context
  const orderNumber = `PET${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6 text-pet-green">
            <CheckCircle size={80} className="mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-6">Your order has been received and is now being processed.</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-pet-orange mb-2">
                  <CheckCircle size={24} className="mx-auto" />
                </div>
                <p className="text-gray-600 text-sm">Order Confirmed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-pet-brown mb-2">
                  <Package size={24} className="mx-auto" />
                </div>
                <p className="text-gray-600 text-sm">Order Processing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-pet-green mb-2">
                  <Truck size={24} className="mx-auto" />
                </div>
                <p className="text-gray-600 text-sm">Delivery</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-pet-green hover:bg-pet-green/90" asChild>
              <Link to="/account/orders">View Order History</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
