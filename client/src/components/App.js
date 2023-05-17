import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community  from './Community';
import Events     from './Events';
import Footer     from './Footer';
import Header     from './Header';
import Home       from './Home';
import Navigation from './Navigation';
import PlantInfo  from './PlantInfo';
import PlantList  from './PlantList'
import Profile    from './Profile';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/profile"   element={<Profile />} />
        <Route path="/plants"    element={<PlantList />} />
        <Route path="/basics"    element={<PlantInfo />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events"    element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
