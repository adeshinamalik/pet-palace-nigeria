
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { Eye, EyeOff, User, Mail, Lock, UserPlus } from 'lucide-react';

// Define user types for different access groups
export type UserRole = 'pet-owner' | 'farmer' | 'service-provider' | 'vendor' | 'admin';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
}

interface AuthFormsProps {
  onSuccess?: (user: AuthUser) => void;
}

export const AuthForms = ({ onSuccess }: AuthFormsProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("sign-in");
  const [showPassword, setShowPassword] = useState(false);
  
  // Form states
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpRole, setSignUpRole] = useState<UserRole>("pet-owner");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock user authentication (in a real app, this would be an API call)
      if (signInEmail && signInPassword) {
        const mockUser: AuthUser = {
          id: "user-" + Math.random().toString(36).substring(2, 8),
          email: signInEmail,
          name: signInEmail.split('@')[0], // Extract a name from email for demo
          role: "pet-owner",
          createdAt: new Date(),
        };
        
        // Store in localStorage for persistence across page refreshes
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        
        toast.success("Signed in successfully!");
        
        if (onSuccess) {
          onSuccess(mockUser);
        }
        
        navigate('/account');
      } else {
        toast.error("Please fill in all required fields");
      }
      setIsLoading(false);
    }, 1000);
  };
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (signUpName && signUpEmail && signUpPassword && signUpRole) {
        const mockUser: AuthUser = {
          id: "user-" + Math.random().toString(36).substring(2, 8),
          email: signUpEmail,
          name: signUpName,
          role: signUpRole,
          createdAt: new Date(),
        };
        
        // Store in localStorage for persistence across page refreshes
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        
        toast.success("Account created successfully!");
        
        if (onSuccess) {
          onSuccess(mockUser);
        }
        
        navigate('/account');
      } else {
        toast.error("Please fill in all required fields");
      }
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        
        {/* Sign In Form */}
        <TabsContent value="sign-in">
          <form onSubmit={handleSignIn}>
            <CardHeader>
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com"
                    className="pl-10"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
        
        {/* Sign Up Form */}
        <TabsContent value="sign-up">
          <form onSubmit={handleSignUp}>
            <CardHeader>
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>Enter your details to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe"
                    className="pl-10"
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sign-up-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    id="sign-up-email" 
                    type="email" 
                    placeholder="name@example.com"
                    className="pl-10"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sign-up-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="sign-up-password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">I am a</Label>
                <select
                  id="role"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={signUpRole}
                  onChange={(e) => setSignUpRole(e.target.value as UserRole)}
                  required
                >
                  <option value="pet-owner">Pet Owner</option>
                  <option value="farmer">Farmer</option>
                  <option value="service-provider">Service Provider</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AuthForms;
