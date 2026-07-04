import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FloatingActions } from '@/components/FloatingActions';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import {
  ProductRedirect,
  CustomDesignRedirect,
} from '@/components/RedirectRoutes';
import Index from './pages/Index';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Design from './pages/Design';
import Process from './pages/Process';
import Guide from './pages/Guide';
import Work from './pages/Work';
import Materials from './pages/Materials';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rings/:slug" element={<Product />} />
          <Route path="/design" element={<Design />} />
          <Route path="/process" element={<Process />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/work" element={<Work />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/product/:id" element={<ProductRedirect />} />
        <Route path="/custom-design" element={<CustomDesignRedirect />} />
      </Routes>
      <FloatingActions />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
