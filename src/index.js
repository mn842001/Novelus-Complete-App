import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import FavoriteBooks from './pages/FavoriteBooks/FavoriteBooks';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB46sCe32E_PbEOwH9yXIeI_x-Bt_CqGcs",
  authDomain: "novelus-2024.firebaseapp.com",
  projectId: "novelus-2024",
  storageBucket: "novelus-2024.appspot.com",
  messagingSenderId: "36070124762",
  appId: "1:36070124762:web:57b0e7e23089c26c0f09e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="favorite" element={<FavoriteBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

