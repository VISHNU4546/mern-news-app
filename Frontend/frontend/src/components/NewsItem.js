import React from 'react';
import axios from 'axios';

function NewsItem({ news, onReact }) {
    const handleReaction = async (reaction) => {
        const token = localStorage.getItem('token');
        try {
            await axios.post(
                `http://localhost:8080/v1/news/${news._id}/reaction`,
                { reaction },
                { headers: { Authorization: token } }
            );
            onReact();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <p>Likes: {news.likes} | Dislikes: {news.dislikes}</p>
            <button onClick={() => handleReaction('like')}>Like</button>
            <button onClick={() => handleReaction('dislike')}>Dislike</button>
        </div>
    );
}

export default NewsItem;
