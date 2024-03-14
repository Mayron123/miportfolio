// App.js
import React from 'react';
import Theming from "@/components/providers/Theme";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div>
      <Theming>
    
      <Header />
      <Main />
      <Footer />
      
    </Theming>
    </div>
  );
}

export default page;
