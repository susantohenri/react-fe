import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store.js';
import OptionList from './pages/option/OptionList.js';
import OptionCreate from './pages/option/OptionCreate.js';
import OptionUpdate from './pages/option/OptionUpdate.js';
import OptionDelete from './pages/option/OptionDelete.js';
import Menu from './pages/Menu.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/Option" element={<OptionList />} />
          <Route path="/Option/create" element={<OptionCreate />} />
          <Route path="/Option/update/:id" element={<OptionUpdate />} />
          <Route path="/Option/delete/:id" element={<OptionDelete />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
