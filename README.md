
# 🐾 Pet Palace Nigeria

Pet Palace Nigeria is a comprehensive web platform dedicated to providing high-quality pet care services, products, and community engagement for pet lovers across Nigeria.

## 🌟 Features

- **Pet Products Shop**: Wide range of pet food, accessories, and care products
- **Professional Services**: Connect with veterinarians, groomers, and pet care specialists
- **Pet Adoption Platform**: Find and adopt pets in need of loving homes
- **Community Forum**: Engage with fellow pet lovers and share experiences
- **Service Provider Directory**: Locate nearby pet care services
- **User Account Management**: Personalized profiles and order tracking
- **Access Groups**: Different user roles (Pet Owners, Service Providers, Administrators)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Charts & Visualizations**: Recharts
- **Animations**: GSAP
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: Sonner
- **Date Handling**: date-fns

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Base UI components from shadcn/ui
│   └── ...           # Custom components
├── contexts/         # React context providers
├── hooks/            # Custom React hooks
├── pages/           # Route components
└── lib/             # Utility functions and helpers
```

## 👥 User Groups

1. **Pet Owners**
   - Browse and purchase pet products
   - Book pet care services
   - Participate in community discussions
   - Access adoption services

2. **Service Providers**
   - List professional services
   - Manage bookings and appointments
   - Interact with pet owners
   - Access service analytics

3. **Administrators**
   - Manage user accounts
   - Monitor platform activity
   - Handle content moderation
   - Access admin dashboard

## 🚀 Getting Started

1. **Prerequisites**
   - Node.js 18+ and npm installed
   - Git for version control

2. **Installation**
   ```bash
   # Clone the repository
   git clone <repository-url>

   # Navigate to project directory
   cd pet-palace-nigeria

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Backend Requirements**
   - Supabase account for authentication and database
   - Configure Supabase connection in project settings

## 🎨 Key Components

- **AdoptionCard**: Displays available pets for adoption
- **ServiceCard**: Shows available pet care services
- **BlogPostCard**: Renders blog post previews
- **CategoryCard**: Displays product categories
- **ServiceProviderCard**: Shows service provider information

## 💅 Styling

The project uses Tailwind CSS with custom configurations:

- Custom color palette including:
  - pet-orange (#E67E22)
  - pet-terracotta (#CD5C5C)
  - pet-green (#2E7D32)
  - pet-gold (#FFD700)
  - pet-beige (#F5F5DC)
  - pet-brown (#8B4513)
  - pet-cream (#FFFDD0)

- Custom animations and transitions
- Responsive design for all screen sizes
- Dark mode support

## 🔐 Authentication

User authentication is handled through Supabase, supporting:
- Email/Password authentication
- Social auth providers (if configured)
- Role-based access control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact:
- Website: [petpalacenigeria.com](https://petpalacenigeria.com)
- Email: support@petpalacenigeria.com

## 🌟 Acknowledgments

- shadcn/ui for the beautiful component library
- Tailwind CSS team for the styling framework
- The open-source community for various tools and libraries

---

Made with ❤️ for pet lovers in Nigeria 🐾

