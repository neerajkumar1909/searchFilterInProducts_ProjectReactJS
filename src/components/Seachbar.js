import React from 'react'


function Seachbar({ searchValue, setSearchValue }) {
   
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div>
            <input
                placeholder='Search Products'
                value={searchValue}
                name='search'
                onChange={handleSearchChange}
                className='search-bar'
               autofocus
               />
        </div>
    )
}

export default Seachbar
