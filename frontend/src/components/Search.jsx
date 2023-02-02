import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../styles/Search.css";

const Search = ({datas, handleSearchTerm}) => {

    return (
        <div>
        <div className='search'>
            <select onChange={handleSearchTerm}>
                <option value="">selection</option>
       
            {datas.map((post) =>{
                return <option value={post.type} className='search_result'key={post.id}>
                    {post.type}</option>

})}
</select>
            
        </div>
    </div>
    );
};

export default Search;