import React, { useState } from 'react';
import './search.css';

const SearchPanel = (props) => {  

    const [value, setValue] = useState('');
    
    const onChangesField = (event) => {
        setValue(event.target.value);
    };

    const resetInputField = () => {
        setValue('');
    }

    const searchValue = () => {
        props.search(value);
        resetInputField();
    }

    const plug = () => {
        return 
    };

    const callSearch = (event) => {
        event.preventDefault();
        value === '' ? plug() : searchValue();
    };

    return(
        <form>
            <div className="inputs">
                <input type='text' value={value} onChange={onChangesField} />
                <input type='submit' value="Search" onClick={callSearch} />
            </div>
            <div>
                { value === '' ? <div className="empty-search"><span>An empty search query was set</span></div> : null }
            </div>
        </form>
    );
};

export default SearchPanel;