import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NewsFeed from './components/NewsFeed';
import AddNews from './components/AddNews'; // Import AddNews component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/newsfeed" element={<NewsFeed />} />
                <Route path="/addnews" element={<AddNews />} /> {/* Add News Route */}
            </Routes>
        </Router>
    );
}

export default App;
