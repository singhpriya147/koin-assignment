

import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  );
}
export default App;
