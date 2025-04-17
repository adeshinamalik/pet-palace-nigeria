
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Star, ShoppingCart, Filter, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

const ProductCategory = () => {
  useGsapAnimations();
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const productsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    
    // Mock product data based on category
    const generateMockProducts = () => {
      const mockProducts: Product[] = [];
      const productCount = 25; // Generate enough for pagination
      
      for (let i = 1; i <= productCount; i++) {
        let productName = '';
        let imageCategory = '';
        
        if (category === 'dogs') {
          productName = `Premium Dog ${i % 3 === 0 ? 'Food' : i % 2 === 0 ? 'Toy' : 'Collar'}`;
          imageCategory = 'dog';
        } else if (category === 'cats') {
          productName = `Cat ${i % 3 === 0 ? 'Food' : i % 2 === 0 ? 'Litter' : 'Toy'}`;
          imageCategory = 'cat';
        } else if (category === 'birds') {
          productName = `Bird ${i % 3 === 0 ? 'Seed' : i % 2 === 0 ? 'Cage' : 'Accessory'}`;
          imageCategory = 'bird';
        } else if (category === 'fish') {
          productName = `Fish ${i % 3 === 0 ? 'Food' : i % 2 === 0 ? 'Tank' : 'Decoration'}`;
          imageCategory = 'fish';
        } else if (category === 'cattle') {
          productName = `Cattle ${i % 3 === 0 ? 'Feed' : i % 2 === 0 ? 'Supplement' : 'Equipment'}`;
          imageCategory = 'cow';
        } else if (category === 'poultry') {
          productName = `Poultry ${i % 3 === 0 ? 'Feed' : i % 2 === 0 ? 'Medication' : 'Equipment'}`;
          imageCategory = 'chicken';
        } else if (category === 'farm-supplies') {
          productName = `Farm ${i % 3 === 0 ? 'Tool' : i % 2 === 0 ? 'Equipment' : 'Supply'}`;
          imageCategory = 'farm';
        } else if (category === 'animal-care') {
          productName = `Animal ${i % 3 === 0 ? 'Health' : i % 2 === 0 ? 'Grooming' : 'Care'} Item`;
          imageCategory = 'animal';
        } else {
          productName = `Product ${i}`;
          imageCategory = 'pet';
        }
        
        mockProducts.push({
          id: i,
          name: productName,
          price: Math.floor(Math.random() * 15000) + 1000, // Random price between 1000-16000 Naira
          image: `https://source.unsplash.com/featured/?${imageCategory},${i % 10}`,
          rating: Math.floor(Math.random() * 5) + 1, // Random rating 1-5
          description: `High-quality ${productName.toLowerCase()} for your pets. Made with premium materials.`
        });
      }
      
      return mockProducts;
    };
    
    const allProducts = generateMockProducts();
    
    // Apply filters if any
    let filteredProducts = [...allProducts];
    
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
    }
    
    if (selectedRating !== null) {
      filteredProducts = filteredProducts.filter(product => product.rating >= selectedRating);
    }
    
    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
    
    // Get products for current page
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);
    
    setProducts(paginatedProducts);
    setLoading(false);
  }, [category, currentPage, selectedPriceRange, selectedRating]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range === selectedPriceRange ? null : range);
    setCurrentPage(1);
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating === selectedRating ? null : rating);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedPriceRange(null);
    setSelectedRating(null);
    setCurrentPage(1);
  };

  const getCategoryTitle = () => {
    if (!category) return 'Products';
    
    const formattedCategory = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    return formattedCategory;
  };

  const getPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink 
              onClick={() => handlePageChange(i)} 
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink 
            onClick={() => handlePageChange(1)} 
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      // Add ellipsis if needed
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Show current page and neighbors
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink 
                onClick={() => handlePageChange(i)} 
                isActive={currentPage === i}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
      
      // Add ellipsis if needed
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

  if (!category) {
    navigate('/products');
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-pet-brown mb-2">{getCategoryTitle()}</h1>
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:underline">Products</Link>
              <span className="mx-2">/</span>
              <span>{getCategoryTitle()}</span>
            </div>
          </div>
          <Button 
            variant="outline"
            className="md:hidden flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <X size={16} /> : <Filter size={16} />}
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  {(selectedPriceRange || selectedRating !== null) && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                      className="text-sm text-gray-500 h-auto p-0"
                    >
                      Clear all
                    </Button>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {["1000-5000", "5000-10000", "10000-20000", "20000-50000"].map(range => (
                      <div key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`price-${range}`}
                          checked={selectedPriceRange === range}
                          onChange={() => handlePriceRangeChange(range)}
                          className="h-4 w-4 rounded border-gray-300 text-pet-green focus:ring-pet-green"
                        />
                        <label htmlFor={`price-${range}`} className="ml-2 text-sm text-gray-700">
                          ₦{range.split('-').join(' - ₦')}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${rating}`}
                          checked={selectedRating === rating}
                          onChange={() => handleRatingChange(rating)}
                          className="h-4 w-4 rounded border-gray-300 text-pet-green focus:ring-pet-green"
                        />
                        <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-700">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Products grid */}
          <div className="md:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                    <CardContent className="p-4">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-8 bg-gray-200 rounded w-8"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or browse other categories</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium line-clamp-1">{product.name}</h3>
                        <div className="flex items-center mt-1 mb-2">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">({product.rating}.0)</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <p className="font-bold text-pet-brown">₦{product.price.toLocaleString()}</p>
                          <Button size="icon" variant="outline" className="rounded-full">
                            <ShoppingCart size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} 
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                      {getPaginationItems()}
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
