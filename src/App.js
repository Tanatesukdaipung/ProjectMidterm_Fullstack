import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import HomePage from './Componant/HomePage/HomePage';
import AuthorPage from './Componant/AuthorPage/AuthorPage';
import CategoryPage from './Componant/CategoryPage/CategoryPage'
import PostContentPage from './Componant/PostContentPage/PostContentPage';
import AuthorContentPage from './Componant/AuthorPage/AuthorContentPage';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Author/:id' element={<AuthorContentPage />} />
          <Route path='/Author' element={<AuthorPage />} />
          <Route path='/Category/:id' element={<CategoryPage />} />
          <Route path='/PostPage/:id' element={<PostContentPage/>} />
        </Routes>
    </div>
  );
}

export default App;
