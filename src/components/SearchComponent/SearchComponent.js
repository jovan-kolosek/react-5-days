import React from 'react';

function SearchComponent (props) {
  return(
    <div>
    <form>
      <input
       className="notes-search"
       type="text"
       placeholder={props.placeholder}
       onChange={props.handleChange}
      />
    </form>
    </div>
  );
}

export default SearchComponent;
