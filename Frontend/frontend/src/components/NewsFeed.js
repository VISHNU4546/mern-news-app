import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function NewsFeed() {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:8080/v1/news', {
                headers: { Authorization: token },
            });
            setNews(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div>
            <h2>News Feed</h2>
            {news.map((item) => (
                <NewsItem key={item._id} news={item} onReact={fetchNews} />
            ))}
        </div>
    );
}

export default NewsFeed;
