import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [textareaValue, setTextareaValue] = useState('');
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://msg-back-p4z1.onrender.com/fetch-text');
            setFetchedData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Textarea value:', textareaValue);

        try {
            // Send the message
            await axios.post('https://msg-back-p4z1.onrender.com/home', { text: textareaValue });

            // Refetch data after sending message
            await fetchData();
            alert("message sended");
            // Clear the textarea after sending message
            setTextareaValue('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
    
<div className='container'>
            <div className='d-flex flex-column'>
                <img src="https://img.freepik.com/free-vector/gradient-hiring-poster-flyer-template_23-2150137321.jpg" className='img-fluid' alt="" />
                <img src="https://t4.ftcdn.net/jpg/04/14/98/69/360_F_414986997_S7stDm33phcjccvTJj8YMckRQF5JZoDr.jpg" className='img-fluid' alt="" />
                <img src="https://img.freepik.com/free-vector/gradient-hiring-poster-flyer-template_23-2150137321.jpg" className='img-fluid' alt="" />
                <img src="https://img.freepik.com/free-vector/gradient-hiring-poster-flyer-template_23-2150137321.jpg" className='img-fluid' alt="" />
            </div>

            <div>
                <label htmlFor="">ask a question</label>
                <form onSubmit={handleSubmit}>
                    <textarea
                        cols="100"
                        rows="10"
                        placeholder='endhelum onn choiko'
                        value={textareaValue}
                        onChange={handleChange}
                    />
                    <br />
                    <button className='btn btn-info' type="submit">click to send</button>
                </form>
            </div>

            <div className='messages container'>
                <h2>Sent Messages</h2>
                <ul className="container" style={{ width: '100%', wordWrap: 'break-word' }}>
                    
                    
                    {fetchedData.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}

                </ul>
            </div>
        </div>

    );
}

export default Home;
