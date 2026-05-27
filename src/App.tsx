import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { WatchesProvider } from './context/WatchesContext';
import { HomageCatalogue } from './components/catalogue/HomageCatalogue';
import { ComparisonPage } from './components/detail/ComparisonPage';
import { AdminLayout } from './components/admin/AdminLayout';
import { LoginPage } from './components/admin/LoginPage';
import { WatchList } from './components/admin/WatchList';
import { WatchForm } from './components/admin/WatchForm';
import { ResetPasswordPage } from './components/admin/ResetPasswordPage';
import { pageVariants } from './constants/motion-variants';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageVariants}>
        <Routes location={location}>
          <Route path="/" element={<HomageCatalogue />} />
          <Route path="/detalle/:id" element={<ComparisonPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/recuperar" element={<ResetPasswordPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<WatchList />} />
            <Route path="watches/new" element={<WatchForm />} />
            <Route path="watches/:id/edit" element={<WatchForm />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WatchesProvider>
        <AnimatedRoutes />
      </WatchesProvider>
    </BrowserRouter>
  );
}
