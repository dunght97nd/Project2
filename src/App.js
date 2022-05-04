
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Catalog from './pages/Catalog';
import Detail from './pages/details/Detail';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Login from './pages/login/Login';
import Register from './pages/login/Register';

// import Config from './config/Config';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

function App() {
    return (
        // <BrowserRouter>
        //     <Route render={props => (
        //         <>
        //             <Header {...props} />
        //             <Config />
        //             <Footer />
        //         </>
        //     )} />
        // </BrowserRouter>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path=":category/search/:keyword" element={<Catalog />} />
                    <Route path=":category/:id" element={<Detail />} />
                    <Route path=":category" element={<Catalog />} />

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;