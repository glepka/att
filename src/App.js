import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Setting from './pages/Setting/Setting';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className={s.app}>
      <Sidebar />
      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/transactions" element={<></>} />
        <Route path="/accounts" element={<></>} />
        <Route path="/investments" element={<></>} />
        <Route path="/credit-cards" element={<></>} />
        <Route path="/loans" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/my-privileges" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
