import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import React from "react";

// ✅ Pages Import
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import SearchPage from "./pages/student/SearchPage";
import { AdminRoute, AuthenticatedUser, ProtectedRoute } from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";
import Team from "./components/Team";
import WhyChooseUs from "./pages/student/WhyChooseUs";
import ContactForm from "./pages/student/ContactForm";
import CourseHighlights from "./pages/student/CourseHighlights";
import PricingSection from "./pages/student/PricingSection";
import Testimonial from "./pages/student/Testimonial";
import InstructorProfiles from "./pages/student/InstructorProfiles";
import Gamification from "./pages/student/Gamification";
import LiveChat from "./pages/student/LiveChat";
import UpcomingWebinars from "./pages/student/UpcomingWebinars";
import PopularCourses from "./pages/student/PopularCourses";
import CertificateDownload from "./pages/student/CertificateDownload";

// ✅ Quiz Components Import
import AdminCreateQuiz from "./pages/admin/Quize/AdminCreateQuiz";
import UserAttemptQuiz from "./pages/admin/Quize/UserAttemptQuiz";
import SmartMirror from "./components/SmartMirror";
import SelectOptions from "./Quiz/pages/SelectOptions";
import GamePlay from "./Quiz/pages/GamePlay";
import ResultPage from "./Quiz/pages/Result";
import AdminUsersDashboard from "./pages/admin/Admin panel/AdminUsersDashboard";
import AdminEnrollmentsDashboard from "./pages/admin/Admin panel/AdminEnrollmentsDashboard";
import AdminPaymentsDashboard from "./pages/admin/Admin panel/AdminPaymentsDashboard";
import AdminReportsDashboard from "./pages/admin/Admin panel/AdminReportsDashboard";
import AdminNotificationsDashboard from "./pages/admin/Admin panel/AdminNotificationsDashboard";
import AdminSettingsDashboard from "./pages/admin/Admin panel/AdminSettingsDashboard";
import AdminProfileDashboard from "./pages/admin/Admin panel/AdminProfileDashboard";
import QuizHomepage from "./pages/student/QuizHomepage";

// ✅ Quiz Data Storage (Temporary)
const quizData = [];

// ✅ Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            
            <Courses />
            <WhyChooseUs />
            
            <CourseHighlights />
            <PricingSection />
            <QuizHomepage />
            <PopularCourses />
            <InstructorProfiles />
            <Gamification />
            <Testimonial />
            <UpcomingWebinars />
            <LiveChat />
            <Team />
            <ContactForm />
            <Footer />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <AuthenticatedUser>
            <Login />
          </AuthenticatedUser>
        ),
      },
      {
        path: "my-learning",
        element: (
          <ProtectedRoute>
            <MyLearning />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "course/search",
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "course-detail/:courseId",
        element: (
          <ProtectedRoute>
            <CourseDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "course-progress/:courseId",
        element: (
          <ProtectedRoute>
            <PurchaseCourseProtectedRoute>
              <CourseProgress />
            </PurchaseCourseProtectedRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "certificate",
        element: <CertificateDownload />,
      },

      // ✅ Quiz Routes
      {
        path: "quiz/:quizId",
        element: <UserAttemptQuiz quizData={quizData} />,
      },

      // ✅ Admin Routes
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Sidebar />
          </AdminRoute>
        ),
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "course", element: <CourseTable /> },
          { path: "course/create", element: <AddCourse /> },
          { path: "course/:courseId", element: <EditCourse /> },
          { path: "course/:courseId/lecture", element: <CreateLecture /> },
          { path: "course/:courseId/lecture/:lectureId", element: <EditLecture /> },

          { path: "users", element: <AdminUsersDashboard /> },
          { path: "enrollment", element: <AdminEnrollmentsDashboard /> },
          { path: "payments", element: <AdminPaymentsDashboard /> },
          { path: "reports", element: <AdminReportsDashboard /> },
          { path: "notifications", element: <AdminNotificationsDashboard /> },
          { path: "settings", element: <AdminSettingsDashboard /> },
          { path: "profile", element: <AdminProfileDashboard /> }, // Admin Profile

          { path: "quiz/create", element: <AdminCreateQuiz quizData={quizData} /> }, // ✅ Admin Create Quiz
        ],
      },
          // ✅ User Quizes
      {
        path: "/game",
        children: [
          { path: "select-options", element: <SelectOptions /> },
          { path: "gameplay", element: <GamePlay /> },
          { path: "result", element: <ResultPage /> },
        ],
      },
      
    ],
  },
]);

// ✅ Main App Component
function App() {
  return (
    <main>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;
