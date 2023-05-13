import '../assets/stylesheets/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home'
import PlantList from './PlantList'
import Footer from './Footer';
import Community from './Community';
import Profile from './Profile'
;
const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/plants" element={<PlantList />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
