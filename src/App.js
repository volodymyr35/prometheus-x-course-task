import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SignIn } from './pages/SignIn/SignIn';
import { BookList } from './pages/BookList';
import { SpecificBook } from './pages/SpecificBook';
import { Cart } from './pages/Cart';
import { NotFoundPage } from './pages/404';
import { Footer } from './components/Footer';

import './App.css';

function App() {
 const [username, setUsername] = useState('');

  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} />
      <Routes>
        <Route exact path="/" element={<SignIn setUsername={setUsername} />} />
        <Route path="/books" element={<BookList/>} />
        <Route path="/books/:bookId" element={<SpecificBook/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
