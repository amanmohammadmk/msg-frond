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
                    <div className="form-group">
        <textarea
            className="form-control shadow-lg"
            rows="10"
            placeholder='endhelum onn choiko'
            value={textareaValue}
            onChange={handleChange}
        />
    </div>
                    <br />
                    <button className='btn btn-info' type="submit">click to send</button>
                </form>
            </div>

            <div className='messages'>
                <h2>Sent Messages</h2>
                <ul>
                    <li>
                    athan oru vishamyam kakak oru thalpparyum illa. pinne nnod ithum paraji kakante munnilekk verarthum parajini. athokke kekkumbala oru tension. njan veendum veendum ithanne choiche venna kakakkum ummakkum njan oru edageravo? 
                    oo nna vilikkand risk edukkanda satyam cheythalle. njan oru karyam choikkatte? kakakk thalpparyam illan theerth parajatha aa mindset maran vella chancum ndavo.  
                    </li>
                    <li>Aa endhina ummane aloikumbam tension. Athonn mattane. Pinne kaka sammaykatha kakane parajit karyalla endhelum oru quality ink vende . 
Nte emaanum ippam koyappalla . Kakane sammaypikkan endha cheyyande oru idea kittalla.
Endhayalum nallonam durakke padachone nalloru vazhi kanicharum. Pinne endh cheyyumbalum emaanne bathikkathe nokkane athan main . ith ink evide delete akkan kayyum . onn nalla reethil ellarum sammaycha mathiyeni. nji nallonam duarke athe ullu. 
                     endh ndelum parayanam tto. aa thatha pinne preshnam onnum ndakki vennillalo. pinne ithil type cheyth send cheyyumbam koracheram onn wait cheyyane message sended paraji oru sanam verum ath nokkanam.
                    pinne ank eppalelum pattane inne onn vilikko ippam venamilla kurach kayijit ayalum mathi. </li>
                    <li>Assalamualaikkum,
Emaan okke settalle ath nalle pole maintain cheyye baki okke padachon tharum.

Endhoko choikkandeni but jilnanodum fidhanodum ayond kayyilla .
Kaka kand neritt onn nalle pole samsarikkan pattiye sugayini.
Egane ayittum oru hopum korayilla . Padachon endha kande arila.
Job in sha alha nallath uncle nokki settaki thara parajini but korach time edukkum athond 
therakkaki keranda paraji. In sha alha nallath kittum vijariknn.
Pinne nte ummakk oru koyappullatto ath orappan. 
Kakane aloikkumbalan oru tension, egane onn nalle pole sammaypikka njan.
Nallonam duarkke nte manass parayine korach time eduthalum ready avumnnanne.
Nte bagathin endhe venelum parajondi tto.
Pinne ante ummane sangada peduthane nokkanam.
In sha alha nomb kayijitt ellarudi onn opparam irithi samsarippika njammak.
Endhakko oru tension ann in sha alha ready avum</li>
                    {fetchedData.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;