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
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" component={SignIn} />
        <Route path="/bookList" component={BookList} />
        <Route path="/specificBook" component={SpecificBook} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFoundPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
