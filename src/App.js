import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from './components/layout/Container/Container'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

import Home from './components/pages/Home/Home'
import Trending from './components/pages/Trending/Trending'
import Posts from './components/pages/Posts/Posts'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import Article from './components/pages/Article/Article'
import NewPost from './components/pages/NewPost/NewPost'
import ListPosts from './components/pages/ListPosts/ListPosts'

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
          <Route path='/article' element={<Article />}/>
          <Route path='/newpost' element={<NewPost />}/>
          <Route path='/listposts' element={<ListPosts />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
