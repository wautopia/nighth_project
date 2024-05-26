import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toppage from './View/top_page';
import Productpage from './View/product_page';
import Aboutpage from './View/about_page';
import Newspage from './View/news_page';
import Contactpage from './View/contact_page';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                 <Route path='/' element={<Toppage />} />
                 <Route path='/product_page' element={<Productpage />} />
                 <Route path='/about_page' element={<Aboutpage />} />
                 <Route path='/news_page' element={<Newspage />} />
                 <Route path='/contact_page' element={<Contactpage />} />
            </Routes>
      
        </div>
      </BrowserRouter>
        
  );
}

export default App;




