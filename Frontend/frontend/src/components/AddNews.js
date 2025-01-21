import React, { useState } from 'react';
import axios from 'axios';

function AddNews() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(
                'http://localhost:8080/v1/news',
                { title, description, image },
                {
                    headers: { Authorization: token },
                }
            );
            alert('News created successfully');
            setTitle('');
            setDescription('');
            setImage('');
        } catch (err) {
            alert(err.message);

            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create News</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Create News</button>
        </form>
    );
}

export default AddNews;
