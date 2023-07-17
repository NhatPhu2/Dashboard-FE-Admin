import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/index';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard/index';
function App() {
  return (
  <Routes>
    <Route element={<Layout/>}>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/product' element={"product"} />
      <Route path='/customer' element={"customer"} />
      <Route path='/order' element={"order"} />
    </Route>
  </Routes>
  );
}

export default App;
