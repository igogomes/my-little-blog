import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from './components/layout/Container/Container';
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

import Home from './components/pages/Home'
import Trending from './components/pages/Trending'
import Posts from './components/pages/Posts'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
