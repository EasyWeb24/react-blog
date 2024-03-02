import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogPost from './pages/blog/post';
import Navigation from './components/Navigation';
import Footer from './layouts/footer';
import Services from './pages/services';
import AboutUs from './pages/about-us';
import BlogCategory from './pages/blog/category';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Services />} path="/services" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<BlogPost />} path="/blog/:slug" />
          <Route element={<BlogCategory />} path="/blog/category/:slug" />
        </Routes>
        <Footer />
      </BrowserRouter>{' '}
    </QueryClientProvider>
  );
}

export default App;
