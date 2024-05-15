import React, { useRef } from 'react'


function Seachbar({ searchValue, setSearchValue }) {
    const inputRef = useRef(null)

    const handleSearchChange = (e) => {
        inputRef.current.focus();
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
                ref={inputRef}
            />
        </div>
    )
}

export default Seachbar
