import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptionList from './pages/option/OptionList.js';
import OptionCreate from './pages/option/OptionCreate.js';
import OptionUpdate from './pages/option/OptionUpdate.js';
import OptionDelete from './pages/option/OptionDelete.js';
import Menu from './pages/Menu.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/Option" element={<OptionList />} />
        <Route path="/Option/create" element={<OptionCreate />} />
        <Route path="/Option/update/:id" element={<OptionUpdate />} />
        <Route path="/Option/delete/:id" element={<OptionDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
