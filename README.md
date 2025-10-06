# � Good Holidays

> **A modern event management application for organizing and sharing events with friends**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎉 Event Management

- **Create Events**: Plan your events with detailed information (name, description, location, date, max participants)
- **Event Status Tracking**: Monitor event progression (Soon, Under Way, Finished, Canceled)
- **Inline Editing**: Edit event descriptions and locations directly with intuitive pencil-to-edit interface
- **Real-time Updates**: Instant feedback with success/error messages

### 👥 Social Features

- **Invitation System**: Send and receive event invitations
- **Response Management**: Accept or decline invitations with one click
- **Participant Management**: View all event participants
- **Notification Badge**: Real-time invitation counter in header

### 🔐 User Management

- **Secure Authentication**: Email/password login with validation
- **User Profiles**: Editable pseudonyms and account information
- **Account Verification**: Email verification system
- **Persistent Sessions**: Stay logged in across browser sessions

### 🎨 Modern UI/UX

- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **Dark Theme**: Beautiful dark interface with blue gradient background
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Interactive Components**: Slide-up panels, modals, and dropdowns
- **Loading States**: Elegant loading indicators throughout the app

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router DOM 7** - Client-side routing
- **TailwindCSS 4** - Utility-first styling

### State Management & Data

- **TanStack React Query** - Server state management and caching
- **Zustand** - Lightweight client state management
- **Zod** - Runtime type validation

### UI & Animations

- **Framer Motion** - Smooth animations and gestures
- **Lucide React** - Beautiful icon library
- **React Loading Indicators** - Elegant loading states

### Development Tools

- **ESLint** - Code linting with TypeScript rules
- **TypeScript ESLint** - Enhanced TypeScript linting
- **Tailwind ESLint Plugin** - TailwindCSS class ordering

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Backend API** running on `http://localhost:3000`
  - 📦 **Backend Repository**: [good_holidays-back_end](https://github.com/LeZam1306/good_holidays-back_end)
  - The backend must be installed and running for the frontend to work properly

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/LeZam1306/good_holidays.git
   cd good_holidays
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run lint:fix # Fix ESLint issues
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── common/         # Shared components (Modal, InputField, etc.)
│   ├── event/          # Event-related components
│   ├── home/           # Homepage components
│   ├── invitation/     # Invitation system components
│   └── profile/        # User profile components
├── hooks/              # Custom React hooks
│   ├── useAuth.ts      # Authentication hook
│   ├── useGetEvents.ts # Event fetching
│   └── usePatchEvent.ts # Event updates
├── pages/              # Page components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── Home.tsx        # Main dashboard
│   ├── Login.tsx       # Authentication page
│   ├── Profile.tsx     # User profile
│   └── Messaging.tsx   # Invitation management
├── services/           # API service layer
│   ├── auth/           # Authentication services
│   ├── event/          # Event CRUD operations
│   ├── invitation/     # Invitation management
│   └── user/           # User management
├── stores/             # State management
│   └── useStore.ts     # Zustand store
├── types/              # TypeScript interfaces
└── schemas/            # Zod validation schemas
```

## 🔧 Key Features Implementation

### Custom Editable Fields

- **Inline Editing**: Click pencil icon to edit, check to save, X to cancel
- **Floating Controls**: Buttons appear elegantly in the top-right corner
- **Auto-focus**: Seamless editing experience with automatic focus management

### Smart Error Handling

- **400 Errors**: Display server validation messages
- **500 Errors**: Show generic server error message
- **Success States**: Green confirmation messages
- **Loading States**: Skeleton screens and spinners

### Responsive Design Patterns

- **Mobile-first**: Designed primarily for mobile devices
- **Touch-friendly**: Large touch targets and gesture support
- **Adaptive Layout**: Components adjust to different screen sizes

## 🔒 API Integration

The app connects to a REST API with the following endpoints:

```typescript
// Authentication
POST /api/auth/login
POST /api/auth/signup
POST /api/auth/logout

// Events
GET  /api/event
POST /api/event
GET  /api/event/:id
PATCH /api/event/:id

// Invitations
GET  /api/invitation/pending
GET  /api/invitation/count
POST /api/invitation
PUT  /api/invitation/respond

// User Management
GET  /api/user
PATCH /api/user
```

## 🎯 Development Best Practices

### Code Organization

- **Component-based Architecture**: Modular and reusable components
- **Custom Hooks**: Business logic separated from UI components
- **Service Layer**: Clean API abstraction
- **Type Safety**: Comprehensive TypeScript coverage

### Performance Optimizations

- **React Query Caching**: Intelligent server state caching
- **Code Splitting**: Route-based lazy loading
- **Optimized Bundles**: Tree-shaking and minification
- **Image Optimization**: Efficient asset loading

### Developer Experience

- **Hot Module Replacement**: Instant feedback during development
- **TypeScript**: Catch errors at compile time
- **ESLint**: Consistent code formatting and best practices
- **Auto-imports**: Streamlined development workflow

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and patterns
- Add TypeScript types for new features
- Write descriptive commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**LeZam1306**

- GitHub: [@LeZam1306](https://github.com/LeZam1306)

---

### 🌟 Star this project if you found it useful!

_Good Holidays - Making event planning a breeze_ ✨
