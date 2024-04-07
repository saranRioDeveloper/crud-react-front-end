import './App.css';
import Navbar from './Layout/navbar';
import Home from './Pages/home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddUser from './Users/addUser';
import EditUser from './Users/editUser';
import ViewUser from './Users/viewUser';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route excat path='/' element={<Home></Home>}/>
        <Route excat path='/adduser' element={<AddUser />}/>
        <Route excat path='/edituser/:id' element={<EditUser/>}/>
        <Route excat path='/viewUser/:id' element={<ViewUser/>}/>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
