import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGroups from '@/components/ProductGroups';
import Products from '@/components/Products';
import NursingServices from '@/components/NursingServices';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  useReveal();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <Hero />
        <ProductGroups />
        <Products searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <NursingServices />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
