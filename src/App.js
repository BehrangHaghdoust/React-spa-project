import Header from './components/Header';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import RouterUser from './components/users/Router'


function App() {
  return (
<>
<BrowserRouter>
<Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/*" element={<RouterUser/>}/>
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
