import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from './components/layout/Container/Container';

import Home from './components/pages/Home'
import Trending from './components/pages/Trending'
import Posts from './components/pages/Posts'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trending">Em Alta</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
      <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
