import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from './component/Car.js';
import Hello from './component/Hello.js';
import Login from './component/Login.js';
import App from './App.js';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/car" element={<Car />} />
            <Route path="*" element={<h1>Không tìm thấy trang nào cả</h1>} />
        </Routes>
    </BrowserRouter>
}