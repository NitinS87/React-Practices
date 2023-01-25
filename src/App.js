import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Book from './components/Book';
import { BookLayout } from './components/BookLayout';
import Books from './components/Books';
import Contact from './components/Contact';
import Home from './components/Home';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';

function App() {
  const navBarStyles = {
    "display": "flex",
    "alignItems": "center",
    "listStyleType": "none",
    "textDecoration": "none",
    "paddingLeft": "0px"
  }
  const list = {
    "paddingRight": "12px",
    "textDecoration": "none",
  }
  const container = {
    "width": "1200px",
    "margin": "auto"
  }
  const anchor = {
    "textDecoration": "none",
  }

  const location = useLocation();
  console.log(location);

  return (
    <div style={container}>
      <nav>
        <ul style={navBarStyles}>
          <li style={list}>
            <NavLink to={"/"} state="Hi!" style={anchor}>Home</NavLink>
          </li>
          <li style={list}>
            <Link to={"/books"} style={anchor}>Books</Link>
          </li>
          <li style={list}>
            <Link to={"/about"} style={anchor}>About</Link>
          </li>
          <li style={list}>
            <Link to={"/contact"} style={anchor}>Contact</Link>
          </li>
        </ul>
      </nav>

      {location.state}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<Books />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
