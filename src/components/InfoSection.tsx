
import { Truck, ShieldCheck, CreditCard, HelpCircle } from 'lucide-react';

const InfoSection = () => {
  const features = [
    {
      icon: <Truck size={24} />,
      title: "Fast Delivery",
      description: "Same-day delivery in Lagos and Abuja, 2-3 days nationwide"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Quality Guarantee",
      description: "We verify all products and service providers for quality"
    },
    {
      icon: <CreditCard size={24} />,
      title: "Secure Payment",
      description: "Multiple payment options with end-to-end encryption"
    },
    {
      icon: <HelpCircle size={24} />,
      title: "24/7 Support",
      description: "Contact our customer service anytime for assistance"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-pet-beige rounded-full flex items-center justify-center mb-4 text-pet-orange">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-pet-brown">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
