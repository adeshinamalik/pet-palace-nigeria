
# Pet Palace Nigeria 🐾

![Pet Palace Nigeria](https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1000)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [User Groups](#user-groups)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Environment Variables](#environment-variables)
- [Backend Requirements](#backend-requirements)
- [Key Components](#key-components)
- [Pages](#pages)
- [Styling](#styling)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Pet Palace Nigeria is a comprehensive online platform designed to serve the diverse needs of pet and farm animal owners across Nigeria. The platform connects animal owners with products, services, adoption opportunities, and a supportive community, all within a single integrated ecosystem.

The primary goal is to create a one-stop solution for all animal-related needs in Nigeria, addressing the fragmented nature of existing services and providing a reliable, user-friendly experience for users.

## Features

- **User Authentication** - Secure login and registration system with role-based access
- **Product Marketplace** - Browsable catalog of pet and farm animal products with categories and filters
- **Service Directory** - Find veterinarians, groomers, trainers, and other service providers
- **Adoption Center** - Platform for finding and listing pets available for adoption
- **Community Forums** - Discussion spaces for animal owners to share experiences and advice
- **Events Calendar** - Listings of relevant events like pet shows, vaccination drives, and workshops
- **Blog Section** - Educational content about animal care and welfare
- **User Profiles** - Customized experiences based on user type (Pet Owner, Farm Animal Owner, etc.)
- **Responsive Design** - Fully functional across mobile, tablet, and desktop devices

## Tech Stack

- **Frontend**:
  - React 18 with TypeScript
  - Vite for fast development and building
  - React Router for navigation
  - Tailwind CSS for styling
  - shadcn/ui for UI components
  - Tanstack React Query for data fetching
  - Lucide React for icons
  - GSAP for animations

- **Backend Requirements**:
  - Authentication system
  - Database for storing user, product, service, and community data
  - File storage for images and documents
  - API endpoints for all platform features

## Project Structure

The project follows a component-based architecture with the following organization:

```
pet-palace-nigeria/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Base UI components from shadcn
│   │   └── ...          # Custom components
│   ├── contexts/        # React contexts (Auth, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   └── ...              # Other folders (services, types, etc.)
├── tailwind.config.ts   # Tailwind CSS configuration
└── ...                  # Config files
```

## User Groups

Pet Palace Nigeria caters to five main user groups, each with tailored experiences:

1. **Pet Owners** - Individuals with companion animals like dogs, cats, birds, etc.
2. **Farm Animal Owners** - People with livestock and poultry
3. **Service Providers** - Veterinarians, groomers, trainers, etc.
4. **Vendors** - Sellers of pet products, feed, equipment, etc.
5. **Administrators** - Platform managers with full access

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pet-palace-nigeria
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:8080](http://localhost:8080).

### Environment Variables

The project requires the following environment variables:

```
# Create a .env file in the root directory with:
VITE_BACKEND_URL=your_backend_url
VITE_API_KEY=your_api_key
# Add other required environment variables
```

## Backend Requirements

To fully implement this project, you will need to set up a backend with:

1. **Database Tables**:
   - Users (profiles, authentication)
   - Products (catalog, inventory)
   - Orders (purchase history)
   - Services (provider listings)
   - Pets (adoption listings)
   - Blog posts
   - Forum threads and replies
   - Events
   - Reviews and ratings

2. **API Endpoints** for:
   - User authentication
   - CRUD operations for all resources
   - Search and filtering
   - File uploads
   - Messaging
   - Notifications

3. **Storage Solutions** for:
   - User profile images
   - Product photos
   - Blog post images
   - Pet/animal photos

4. **Security Measures**:
   - JWT authentication
   - Role-based access control
   - Data encryption
   - Input validation

## Key Components

### Design System

The application uses a consistent design system with:

- **Colors**: A warm, animal-friendly palette with branded colors like:
  - Orange (`pet-orange`): #E67E22
  - Terracotta (`pet-terracotta`): #CD5C5C
  - Green (`pet-green`): #2E7D32
  - Gold (`pet-gold`): #FFD700
  - Beige (`pet-beige`): #F5F5DC
  - Brown (`pet-brown`): #8B4513
  - Cream (`pet-cream`): #FFFDD0

- **Typography**:
  - Headings: Montserrat font
  - Body text: Poppins font

- **Components**:
  - Buttons, forms, cards, and other UI elements follow shadcn/ui patterns
  - Custom components for specific needs (AdoptionCard, EventCard, etc.)

### Common Components

- **Navbar**: Main navigation with dropdown menus
- **Footer**: Links to key sections, contact info, and social media
- **CategoryCard**: Displays product or service categories
- **ProductCard**: Shows individual products with image, name, price
- **ServiceCard**: Lists service providers with essential information
- **BlogPostCard**: Displays blog posts with image, title, excerpt
- **EventCard**: Shows upcoming events with key details
- **AdoptionCard**: Features pets available for adoption
- **ForumThreadCard**: Displays community discussion threads

## Pages

- **Home**: Landing page with hero section, featured categories, and highlights
- **Products**: Browse and filter pet and farm animal products
- **Services**: Find and connect with service providers
- **Adoption**: Browse pets available for adoption
- **Community**: Forums and discussion boards
- **Events**: Calendar of animal-related events
- **Blog**: Educational articles and news
- **User Account**: Profile management and settings
- **Authentication**: Sign up and login screens

## Styling

The project uses Tailwind CSS for styling with:

- Custom color scheme defined in `tailwind.config.ts`
- Responsive layouts for all screen sizes
- Custom animations and transitions
- Consistent spacing and typography
- Dark/light mode support

## Authentication

The authentication system includes:

- User registration and login
- Password reset functionality
- Social media login options
- Role-based access control
- Protected routes for authenticated users
- User profile management

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to your fork: `git push origin feature-name`
5. Create a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please reach out to:

- **Email**: contact@petpalacenigeria.com
- **Website**: www.petpalacenigeria.com
- **Social Media**: @PetPalaceNG
