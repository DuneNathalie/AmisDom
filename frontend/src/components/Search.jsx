import React from 'react';
import "../styles/home/Search.css";

const Search = ({datas, handleSearchTerm}) => {

    return (
        <div>
        <div className='search'>
            <select onChange={handleSearchTerm}>
                <option value="">Type d'AmisDom</option>
       
            {datas.map((post) =>{
                return <option value={post.type} className='search_type'key={post.id}>
                    {post.type}</option>
                    

})}
</select>
            
        </div>
    </div>
    );
};
export default Search;