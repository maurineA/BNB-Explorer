import React, { useState } from 'react';
import BookButton from './BookButton';

const SearchBar = ({ data }) => {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
        const searchTerm = input.toLowerCase();

        if (searchTerm.trim() === '') {
            setFilteredData([]);
        } else {
            const filtering = data.filter((item) =>
                (item.Adress || '').toLowerCase().includes(searchTerm)
            );

            if (filtering.length === 0) {
                alert("Sorry, we don't have houses in that region!Try Another Address.");
            }

            setFilteredData(filtering);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>
                    <strong>Name:</strong> {item.name} <br />
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ maxWidth: '500px', maxHeight: '500px' }}
                      />
                    )}
                    <br />
                    <strong>Bedrooms:</strong> {item.Bedroom} <br />
                    <strong>Bathrooms:</strong> {item.Bathrooms} <br />
                    <strong>Address:</strong> {item.Adress} <br />
                    <strong>Status:</strong> {item.Status} <br />
                    <BookButton/>
                  </li>
                ))}
            </ul>
           
        </div>
    );
};

export default SearchBar;