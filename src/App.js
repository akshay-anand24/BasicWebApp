import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import User from './User';
import AddUser from './AddUser';
import Login from './Login';
import ShowPost from './ShowPost';
import AddPost from './AddPost';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   {/* <Home/> */}
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/addpost' element={<AddPost/>}/>
    <Route path='/user/:id' element={<Login/>}/>
    <Route path='/post' element={<AddUser/>}/>
    <Route path='/post/:id' element={<ShowPost/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
