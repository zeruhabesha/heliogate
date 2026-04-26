import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n/I18nProvider";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import Index from "./pages/Index.tsx";
import Corridors from "./pages/Corridors.tsx";
import Platform from "./pages/Platform.tsx";
import Sectors from "./pages/Sectors.tsx";
import Insights from "./pages/Insights.tsx";
import Engage from "./pages/Engage.tsx";
import WhyHelioGate from "./pages/WhyHelioGate.tsx";
import DifferentiatorDetail from "./pages/DifferentiatorDetail.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Methodology from "./pages/Methodology.tsx";
import Network from "./pages/Network.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/corridors" element={<Corridors />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/network" element={<Network />} />
            <Route path="/why-heliogate" element={<WhyHelioGate />} />
            <Route path="/why-heliogate/:slug" element={<DifferentiatorDetail />} />
            <Route path="/engage" element={<Engage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
