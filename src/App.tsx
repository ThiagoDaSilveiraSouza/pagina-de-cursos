
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import AdminCoursesPage from "./pages/AdminCourses";
import AdminNewCoursePage from "./pages/AdminNewCourse";
import AdminModulesPage from "./pages/AdminModules";
import AdminLessonsPage from "./pages/AdminLessons";
import AdminVideosPage from "./pages/AdminVideos";
import AdminVideoUploadPage from "./pages/AdminVideoUpload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Admin routes */}
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
          <Route path="/admin/courses/new" element={<AdminNewCoursePage />} />
          <Route path="/admin/modules" element={<AdminModulesPage />} />
          <Route path="/admin/lessons" element={<AdminLessonsPage />} />
          <Route path="/admin/videos" element={<AdminVideosPage />} />
          <Route path="/admin/videos/upload" element={<AdminVideoUploadPage />} />
          <Route path="/admin/*" element={<Admin />} /> {/* Catch other admin routes */}
          
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout/:productId" element={<Checkout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
