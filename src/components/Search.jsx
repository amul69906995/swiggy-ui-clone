import React, { useEffect, useState } from 'react';
import '../css/Search.css'; // Import the CSS file
import { json } from 'react-router';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const[results, setResults]=useState(null);

    const fetchData = async (searchText) => {
        const url = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.3176452&lng=82.9739144&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=9b1b9974-3403-6d29-a734-b60d5f9c1068&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%2250a7b6a13177e653720b2a1d53e02958%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
        const res = await fetch(url);
        const searchedResult = await res.json();
        setResults(JSON.stringify(searchedResult));
        console.log(searchedResult)
        setSearchText('')
    }
    
    return (
        <div className="search-container">
            <form action="" onSubmit={
                (e) => {
                    e.preventDefault();
                    fetchData(searchText);
                }}>
                <input
                    type="text"
                    name="q"
                    placeholder="Search Restaurant/Food"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
           <button type="submit">search</button>
            </form>
            {results}
        </div>
    );
};

export default Search;
