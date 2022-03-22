import Header from './components/Header';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import IndexUsers from './Pages/users/Index'

function App() {
  return (
<>
<BrowserRouter>
<Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/users" element={<IndexUsers/>}/>
  <Route path="/" element={<Home/>}/>
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
