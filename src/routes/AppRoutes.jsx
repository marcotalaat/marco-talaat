import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const AdminAnalytics = lazy(() => import("@/pages/AdminAnalytics"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    Loading...
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin-3391" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
