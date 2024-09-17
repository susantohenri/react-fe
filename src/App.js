import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './pages/UserList.js';
import UserForm from './pages/UserForm.js';
import Menu from './pages/Menu.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/User" element={<UserList />} />
        <Route path="/User/create" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
