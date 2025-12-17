import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IPOList from './pages/IPOList/IPOList';
import IPODetails from './pages/IPODetails/IPODetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </BrowserRouter>
  );
}