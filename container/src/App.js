import React from 'react';
import './App.css';

const Header = React.lazy(
  () => import('Header/HeaderComp')
);
const Content = React.lazy(
  () => import('Content/Products')
);
const Footer = React.lazy(
  () => import('Footer/FooterComp')
);

function App() {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
