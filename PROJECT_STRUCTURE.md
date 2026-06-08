# 📁 Project Structure

## 🏗️ Overall Architecture

```
Udera/
├── frontend/                          # React Frontend Application
├── server/                            # Express Backend Application
├── .gitignore
├── Readme.md
├── package.json (root)
└── PROJECT_STRUCTURE.md              # This file
```

---

## 🎨 Frontend Structure

```
frontend/
│
├── 📦 public/                         # Static assets served directly
│   └── [static files]
│
├── 📚 src/                            # Source code
│   │
│   ├── 🏠 components/                 # Reusable UI Components
│   │   ├── common/                    # Shared across pages
│   │   │   ├── Navbar.jsx             # Navigation component
│   │   │   ├── Footer.jsx             # Footer component
│   │   │   ├── Header.jsx             # Page header
│   │   │   ├── Sidebar.jsx            # Sidebar navigation
│   │   │   └── index.js               # Barrel export
│   │   │
│   │   ├── layout/                    # Layout components
│   │   │   ├── MainLayout.jsx         # Main app layout
│   │   │   ├── AuthLayout.jsx         # Auth pages layout
│   │   │   ├── DashboardLayout.jsx    # Dashboard layout
│   │   │   └── index.js
│   │   │
│   │   ├── course/                    # Course-related components
│   │   │   ├── CourseCard.jsx         # Course display card
│   │   │   ├── CourseGrid.jsx         # Grid of courses
│   │   │   ├── CourseFilter.jsx       # Filter courses
│   │   │   ├── CourseSearch.jsx       # Search courses
│   │   │   └── index.js
│   │   │
│   │   ├── educator/                  # Educator-specific components
│   │   │   ├── CourseForm.jsx         # Create/Edit course form
│   │   │   ├── LessonEditor.jsx       # Lesson content editor
│   │   │   ├── PricingForm.jsx        # Course pricing
│   │   │   └── index.js
│   │   │
│   │   ├── payment/                   # Payment components
│   │   │   ├── PaymentForm.jsx        # Payment form
│   │   │   ├── CheckoutModal.jsx      # Checkout dialog
│   │   │   └── index.js
│   │   │
│   │   ├── auth/                      # Authentication components
│   │   │   ├── LoginForm.jsx          # Login form
│   │   │   ├── RegisterForm.jsx       # Registration form
│   │   │   ├── ProtectedRoute.jsx     # Route protection
│   │   │   └── index.js
│   │   │
│   │   └── shared/                    # Highly reusable components
│   │       ├── Button.jsx             # Generic button
│   │       ├── Modal.jsx              # Modal dialog
│   │       ├── Input.jsx              # Input field
│   │       ├── Rating.jsx             # Star rating
│   │       ├── Loader.jsx             # Loading spinner
│   │       ├── Toast.jsx              # Toast notification
│   │       └── index.js
│   │
│   ├── 📄 pages/                      # Page/Route Components
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx          # Login page
│   │   │   ├── RegisterPage.jsx       # Registration page
│   │   │   └── ForgotPasswordPage.jsx # Password recovery
│   │   │
│   │   ├── student/
│   │   │   ├── HomePage.jsx           # Landing page
│   │   │   ├── CoursesPage.jsx        # Browse courses
│   │   │   ├── CourseDetailPage.jsx   # Single course view
│   │   │   ├── MyEnrollmentsPage.jsx  # Enrolled courses
│   │   │   ├── LearningPage.jsx       # Course player
│   │   │   ├── ProfilePage.jsx        # User profile
│   │   │   └── WishlistPage.jsx       # Saved courses
│   │   │
│   │   ├── educator/
│   │   │   ├── DashboardPage.jsx      # Analytics dashboard
│   │   │   ├── MyCoursesPage.jsx      # Educator's courses
│   │   │   ├── CreateCoursePage.jsx   # Create new course
│   │   │   ├── EditCoursePage.jsx     # Edit course
│   │   │   ├── EarningsPage.jsx       # Revenue details
│   │   │   └── SettingsPage.jsx       # Educator settings
│   │   │
│   │   ├── common/
│   │   │   ├── NotFoundPage.jsx       # 404 error
│   │   │   ├── ServerErrorPage.jsx    # 500 error
│   │   │   └── UnauthorizedPage.jsx   # 403 error
│   │   │
│   │   └── AdminPages/
│   │       ├── AdminDashboard.jsx     # Admin panel
│   │       ├── UsersManagement.jsx    # Manage users
│   │       └── CoursesModeration.jsx  # Moderate courses
│   │
│   ├── 🔌 context/                    # Global State Management
│   │   ├── AppContext.jsx             # Main app context
│   │   ├── AuthContext.jsx            # Authentication state
│   │   ├── CourseContext.jsx          # Course-related state
│   │   ├── CartContext.jsx            # Shopping cart state
│   │   ├── NotificationContext.jsx    # Toast/notification state
│   │   └── index.js
│   │
│   ├── 🪝 hooks/                      # Custom React Hooks
│   │   ├── useAuth.js                 # Authentication hook
│   │   ├── useFetch.js                # Data fetching hook
│   │   ├── useForm.js                 # Form handling hook
│   │   ├── useLocalStorage.js         # LocalStorage hook
│   │   ├── useDebounce.js             # Debounce hook
│   │   ├── usePagination.js           # Pagination logic
│   │   └── useNotification.js         # Toast notifications
│   │
│   ├── 🛠️ utils/                      # Utility Functions
│   │   ├── api.js                     # API instance (Axios)
│   │   ├── apiClient.js               # API request interceptors
│   │   ├── constants.js               # App constants
│   │   ├── validators.js              # Form validators
│   │   ├── formatters.js              # Data formatting
│   │   ├── errorHandler.js            # Error handling
│   │   ├── helpers.js                 # Helper functions
│   │   ├── localStorage.js            # LocalStorage utilities
│   │   └── index.js                   # Barrel exports
│   │
│   ├── 🎨 styles/                     # Global Styles
│   │   ├── index.css                  # Main CSS
│   │   ├── globals.css                # Global styles
│   │   ├── variables.css              # CSS variables
│   │   ├── tailwind.css               # Tailwind directives
│   │   └── animations.css             # Keyframe animations
│   │
│   ├── 🔒 services/                   # API Services
│   │   ├── authService.js             # Auth endpoints
│   │   ├── courseService.js           # Course endpoints
│   │   ├── educatorService.js         # Educator endpoints
│   │   ├── userService.js             # User endpoints
│   │   ├── paymentService.js          # Payment endpoints
│   │   └── index.js
│   │
│   ├── 📱 App.jsx                     # Root component
│   ├── 🎯 main.jsx                    # Entry point
│   └── 🎨 index.css                   # Styles import
│
├── 📋 index.html                      # HTML template
├── 📦 package.json                    # Dependencies
├── 📄 package-lock.json
├── ⚙️ vite.config.js                  # Vite configuration
├── ⚙️ tailwind.config.js              # Tailwind configuration
├── ⚙️ postcss.config.js               # PostCSS configuration
├── 📄 .env.example                    # Environment variables template
├── 📄 .gitignore
├── 📄 .eslintrc.js                    # ESLint configuration
├── 📄 vercel.json                     # Vercel deployment config
└── 📖 README.md
```

### Frontend Key Files

| File | Purpose |
|------|---------|
| `App.jsx` | Main application component with routing |
| `main.jsx` | React app initialization |
| `index.css` | Global styles and imports |
| `vite.config.js` | Build tool configuration |
| `tailwind.config.js` | Tailwind CSS customization |

---

## 🚀 Backend Structure

```
server/
│
├── 🔧 configs/                        # Configuration Files
│   ├── db.js                          # MongoDB connection setup
│   ├── cloudinary.js                  # Cloudinary SDK setup
│   ├── email.js                       # Email service config
│   ├── payment.js                     # Payment gateway config
│   ├── jwt.js                         # JWT configuration
│   └── logger.js                      # Logging setup
│
├── 🗄️ models/                         # Database Schemas (Mongoose)
│   ├── User.js                        # User schema
│   │   ├── email
│   │   ├── password
│   │   ├── profile (name, bio, avatar)
│   │   ├── role (student, educator, admin)
│   │   ├── createdAt
│   │   └── updatedAt
│   │
│   ├── Course.js                      # Course schema
│   │   ├── title
│   │   ├── description
│   │   ├── instructor (ref: User)
│   │   ├── price
│   │   ├── category
│   │   ├── rating
│   │   ├── lessons (array)
│   │   ├── enrolledStudents
│   │   └── metadata
│   │
│   ├── Lesson.js                      # Lesson schema
│   │   ├── title
│   │   ├── content
│   │   ├── videoUrl
│   │   ├── resources
│   │   ├── order
│   │   └── courseId (ref: Course)
│   │
│   ├── CourseProgress.js              # User course progress
│   │   ├── userId (ref: User)
│   │   ├── courseId (ref: Course)
│   │   ├── completedLessons (array)
│   │   ├── progress (percentage)
│   │   └── enrolledAt
│   │
│   ├── Purchase.js                    # Course purchase record
│   │   ├── userId (ref: User)
│   │   ├── courseId (ref: Course)
│   │   ├── amount
│   │   ├── paymentId
│   │   ├── paymentMethod
│   │   ├── transactionId
│   │   └── purchasedAt
│   │
│   ├── Review.js                      # Course review/rating
│   │   ├── userId (ref: User)
│   │   ├── courseId (ref: Course)
│   │   ├── rating
│   │   ├── comment
│   │   └── createdAt
│   │
│   ├── Category.js                    # Course category
│   │   ├── name
│   │   ├── description
│   │   └── icon
│   │
│   └── Transaction.js                 # Payment transactions
│       ├── userId (ref: User)
│       ├── amount
│       ├── status
│       ├── type (payment, refund)
│       └── timestamp
│
├── 🎮 controllers/                    # Business Logic & Route Handlers
│   ├── authController.js              # Authentication logic
│   │   ├── register()
│   │   ├── login()
│   │   ├── logout()
│   │   ├── refreshToken()
│   │   └── forgotPassword()
│   │
│   ├── userController.js              # User management
│   │   ├── getProfile()
│   │   ├── updateProfile()
│   │   ├── getEnrollments()
│   │   ├── getWishlist()
│   │   ├── addToWishlist()
│   │   └── removeFromWishlist()
│   │
│   ├── courseController.js            # Course management
│   │   ├── getAllCourses()
│   │   ├── getCourseById()
│   │   ├── searchCourses()
│   │   ├── filterCourses()
│   │   ├── getRatings()
│   │   └── getReviews()
│   │
│   ├── educatorController.js          # Educator operations
│   │   ├── createCourse()
│   │   ├── updateCourse()
│   │   ├── deleteCourse()
│   │   ├── publishCourse()
│   │   ├── getDashboard()
│   │   ├── getAnalytics()
│   │   ├── getEarnings()
│   │   └── getStudentsList()
│   │
│   ├── enrollmentController.js        # Enrollment logic
│   │   ├── enrollCourse()
│   │   ├── getCourseProgress()
│   │   ├── updateProgress()
│   │   ├── completeLesson()
│   │   └── completeCourse()
│   │
│   ├── paymentController.js           # Payment processing
│   │   ├── initiatePayment()
│   │   ├── handlePaymentCallback()
│   │   ├── verifyPayment()
│   │   ├── refundPayment()
│   │   └── getTransactionHistory()
│   │
│   ├── reviewController.js            # Reviews & ratings
│   │   ├── addReview()
│   │   ├── updateReview()
│   │   ├── deleteReview()
│   │   ├── getCourseReviews()
│   │   └── updateCourseRating()
│   │
│   └── adminController.js             # Admin operations
│       ├── getUserStats()
│       ├── getCourseStats()
│       ├── approveCourse()
│       ├── rejectCourse()
│       ├── suspendUser()
│       └── generateReports()
│
├── 🔌 routes/                         # API Route Definitions
│   ├── index.js                       # Route aggregator
│   ├── authRoutes.js                  # /api/auth
│   │   ├── POST /register
│   │   ├── POST /login
│   │   ├── POST /logout
│   │   ├── POST /refresh-token
│   │   └── POST /forgot-password
│   │
│   ├── userRoutes.js                  # /api/users
│   │   ├── GET /profile
│   │   ├── PUT /profile
│   │   ├── GET /enrollments
│   │   ├── GET /wishlist
│   │   ├── POST /wishlist/:courseId
│   │   └── DELETE /wishlist/:courseId
│   │
│   ├── courseRoutes.js                # /api/courses
│   │   ├── GET /
│   │   ├── GET /:id
│   │   ├── GET /:id/reviews
│   │   ├── GET /search
│   │   └── GET /filter
│   │
│   ├── educatorRoutes.js              # /api/educators
│   │   ├── POST /courses
│   │   ├── PUT /courses/:id
│   │   ├── DELETE /courses/:id
│   │   ├── PATCH /courses/:id/publish
│   │   ├── GET /dashboard
│   │   ├── GET /analytics
│   │   ├── GET /earnings
│   │   └── GET /students
│   │
│   ├── enrollmentRoutes.js            # /api/enrollments
│   │   ├── POST /enroll
│   │   ├── GET /progress/:courseId
│   │   ├── PATCH /progress/:courseId
│   │   ├── PATCH /complete-lesson
│   │   └── PATCH /complete-course
│   │
│   ├── paymentRoutes.js               # /api/payments
│   │   ├── POST /initiate
│   │   ├── POST /callback
│   │   ├── POST /verify
│   │   ├── POST /refund
│   │   └── GET /transactions
│   │
│   ├── reviewRoutes.js                # /api/reviews
│   │   ├── POST /
│   │   ├── PUT /:id
│   │   ├── DELETE /:id
│   │   └── GET /course/:courseId
│   │
│   └── adminRoutes.js                 # /api/admin
│       ├── GET /stats
│       ├── PATCH /courses/:id/approve
│       ├── PATCH /courses/:id/reject
│       └── PATCH /users/:id/suspend
│
├── ⚙️ middlewares/                    # Express Middlewares
│   ├── authMiddleware.js              # JWT verification
│   │   ├── verifyToken()
│   │   ├── verifyRole(roles)
│   │   └── requireAuth()
│   │
│   ├── errorMiddleware.js             # Error handling
│   │   ├── asyncHandler()
│   │   ├── errorLogger()
│   │   └── errorHandler()
│   │
│   ├── validationMiddleware.js        # Input validation
│   │   ├── validateRequest()
│   │   └── validateSchema()
│   │
│   ├── multer.js                      # File upload handling
│   │   ├── uploadSingle()
│   │   └── uploadMultiple()
│   │
│   ├── rateLimiter.js                 # Rate limiting
│   │   └── limitRequests()
│   │
│   ├── corsMiddleware.js              # CORS setup
│   │   └── enableCORS()
│   │
│   ├── loggingMiddleware.js           # Request logging
│   │   └── logRequests()
│   │
│   └── cacheMiddleware.js             # Response caching
│       └── cacheResponse()
│
├── 🛠️ services/                       # Business Logic Services
│   ├── authService.js                 # Auth business logic
│   │   ├── hashPassword()
│   │   ├── comparePassword()
│   │   ├── generateToken()
│   │   └── verifyToken()
│   │
│   ├── courseService.js               # Course operations
│   │   ├── createCourse()
│   │   ├── updateCourse()
│   │   ├── publishCourse()
│   │   └── calculateStats()
│   │
│   ├── paymentService.js              # Payment processing
│   │   ├── createStripeCharge()
│   │   ├── createRazorpayOrder()
│   │   ├── verifyPayment()
│   │   └── processRefund()
│   │
│   ├── emailService.js                # Email sending
│   │   ├── sendWelcomeEmail()
│   │   ├── sendPasswordReset()
│   │   ├── sendEnrollmentConfirm()
│   │   └── sendCompletionCertificate()
│   │
│   ├── cloudinaryService.js           # Image operations
│   │   ├── uploadImage()
│   │   ├── deleteImage()
│   │   └── optimizeImage()
│   │
│   ├── notificationService.js         # Notifications
│   │   ├── sendSMS()
│   │   ├── sendPushNotif()
│   │   └── sendInAppNotif()
│   │
│   └── analyticsService.js            # Analytics & reporting
│       ├── getUserStats()
│       ├── getCourseStats()
│       └── generateReport()
│
├── 📋 utils/                          # Utility Functions
│   ├── constants.js                   # App constants
│   ├── validators.js                  # Input validators
│   ├── formatters.js                  # Data formatters
│   ├── helpers.js                     # Helper functions
│   ├── errorCodes.js                  # Error codes & messages
│   ├── logger.js                      # Logging utility
│   └── index.js
│
├── 🔑 env/                            # Environment Config
│   ├── .env.example                   # Example env vars
│   ├── .env.development               # Development config
│   ├── .env.production                # Production config
│   └── .env.test                      # Test config
│
├── 📦 package.json                    # Dependencies
├── 📄 package-lock.json
├── 🚀 server.js                       # Application entry point
├── 📄 .gitignore
└── 📖 README.md
```

### Backend Key Files

| File | Purpose |
|------|---------|
| `server.js` | Main application entry point |
| `configs/db.js` | MongoDB connection |
| `configs/cloudinary.js` | Image hosting setup |
| `models/*.js` | Database schemas |
| `controllers/*.js` | Business logic |
| `routes/*.js` | API endpoints |
| `middlewares/*.js` | Request processing |

---

## 📊 Component Hierarchy

### Frontend Component Tree

```
<App />
├── <AuthContext.Provider>
│   ├── <Router>
│   │   ├── <Layout />
│   │   │   ├── <Navbar />
│   │   │   ├── <Sidebar />
│   │   │   ├── <main>
│   │   │   │   └── <Outlet /> (page routes)
│   │   │   └── <Footer />
│   │   │
│   │   ├── /auth
│   │   │   ├── <LoginPage />
│   │   │   └── <RegisterPage />
│   │   │
│   │   ├── /courses
│   │   │   ├── <CoursesPage />
│   │   │   │   ├── <CourseFilter />
│   │   │   │   ├── <CourseSearch />
│   │   │   │   └── <CourseGrid />
│   │   │   │       └── <CourseCard /> (multiple)
│   │   │   │
│   │   │   └── /courses/:id
│   │   │       └── <CourseDetailPage />
│   │   │           ├── <CourseInfo />
│   │   │           ├── <InstructorCard />
│   │   │           ├── <Reviews />
│   │   │           └── <EnrollButton />
│   │   │
│   │   ├── /learning/:courseId
│   │   │   └── <LearningPage />
│   │   │       ├── <VideoPlayer />
│   │   │       ├── <LessonContent />
│   │   │       ├── <ProgressBar />
│   │   │       └── <Comments />
│   │   │
│   │   ├── /educator/dashboard
│   │   │   └── <DashboardPage />
│   │   │       ├── <AnalyticsCards />
│   │   │       ├── <Charts />
│   │   │       └── <RecentActivity />
│   │   │
│   │   └── /educator/courses
│   │       └── <MyCoursesPage />
│   │           └── <CourseList />
│   │               └── <CourseItem /> (multiple)
│   │
│   └── <Notification />
└── <GlobalStyles />
```

---

## 🔗 Data Flow

### Authentication Flow

```
User Input (LoginForm)
    ↓
handleLogin() → validations
    ↓
authService.login(credentials)
    ↓
POST /api/auth/login (backend)
    ↓
authController.login()
    ↓
authService.comparePassword()
    ↓
Generate JWT Token
    ↓
Return { token, user }
    ↓
AuthContext.setAuth(data)
    ↓
Store in localStorage
    ↓
Redirect to Dashboard
```

### Course Enrollment Flow

```
Browse Course
    ↓
Click "Enroll Now"
    ↓
<CheckoutModal /> displays
    ↓
Select Payment Method
    ↓
POST /api/payments/initiate
    ↓
paymentController.initiatePayment()
    ↓
Stripe/Razorpay Integration
    ↓
Payment Processing
    ↓
POST /api/payments/callback
    ↓
verifyPayment()
    ↓
Create Purchase Record
    ↓
Create CourseProgress Record
    ↓
Send Confirmation Email
    ↓
Redirect to Course Player
```

---

## 🔄 API Response Structure

### Success Response

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Data retrieved successfully",
  "data": {
    "id": "...",
    "name": "..."
  }
}
```

### Error Response

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

---

## 📦 Dependency Injection Pattern

### Backend Service Integration

```javascript
// configs/services.js
const createServices = (db) => {
  return {
    userService: new UserService(db.User),
    courseService: new CourseService(db.Course),
    paymentService: new PaymentService(stripeClient, razorpayClient),
    emailService: new EmailService(emailConfig),
  };
};

// routes/courseRoutes.js
router.post('/', courseController.createCourse(courseService));
```

---

## 🎯 Naming Conventions

### Files

| Pattern | Example | Purpose |
|---------|---------|---------|
| `ComponentName.jsx` | `CourseCard.jsx` | React components |
| `serviceName.js` | `courseService.js` | Services |
| `nameController.js` | `courseController.js` | Controllers |
| `nameMiddleware.js` | `authMiddleware.js` | Middlewares |
| `nameRoutes.js` | `courseRoutes.js` | Routes |
| `useName.js` | `useAuth.js` | Custom hooks |
| `nameContext.js` | `AuthContext.js` | Context providers |

### Functions & Variables

```javascript
// Constants
const API_BASE_URL = 'http://localhost:5000';
const ROLES = { ADMIN: 'admin', USER: 'user' };

// Functions
const fetchUserData = async () => {};
const validateEmail = (email) => {};
const handleSubmit = (e) => {};

// React Components
const CourseCard = ({ course }) => {};
const useAuth = () => {};
```

---

## 🚀 Scalability & Best Practices

### Frontend Best Practices

✅ **Component Organization**
- Small, focused components
- Reusable component library
- Proper component hierarchy

✅ **State Management**
- Context API for global state
- Custom hooks for logic reuse
- Local state for component-specific data

✅ **Performance**
- Code splitting with React.lazy()
- Memoization with React.memo()
- Image optimization
- Lazy loading

### Backend Best Practices

✅ **Code Organization**
- Separation of concerns (MVC pattern)
- Service layer for business logic
- Middleware for cross-cutting concerns
- Utils for reusable functions

✅ **API Design**
- RESTful endpoints
- Consistent response format
- Proper HTTP status codes
- Request validation

✅ **Security**
- JWT authentication
- Rate limiting
- Input validation
- CORS configuration

---

## 📈 Growth Path

### Phase 1: Current Structure
- Basic MVC pattern
- Simple state management
- Direct database queries

### Phase 2: Enhancement
- Service layer abstraction
- Caching layer (Redis)
- Background jobs (Bull/Bee-Queue)
- Advanced analytics

### Phase 3: Enterprise
- Microservices architecture
- Message queues (RabbitMQ/Kafka)
- Real-time features (WebSocket)
- Advanced monitoring & logging

---

## 🔍 Quick Reference

| Need | Location |
|------|----------|
| Add new page | `frontend/src/pages/` |
| Add new component | `frontend/src/components/` |
| Add API endpoint | `server/routes/` + `server/controllers/` |
| Add database model | `server/models/` |
| Add custom hook | `frontend/src/hooks/` |
| Add global state | `frontend/src/context/` |
| Add utility function | `frontend/src/utils/` or `server/utils/` |
| Add middleware | `server/middlewares/` |
| Add service logic | `server/services/` |

---

## 📞 Contributing Guide

When adding new features:

1. Create feature branch: `git checkout -b feature/feature-name`
2. Follow the directory structure above
3. Use consistent naming conventions
4. Add comments for complex logic
5. Update this structure document if adding new directories
6. Create pull request with detailed description

---

**Last Updated**: June 2026
**Status**: Production Ready 🚀
