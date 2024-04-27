import React, { useRef } from 'react';
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value.trim();
    if (!searchTerm) {
      setSearchTerm('Search in novelus...');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(searchTerm);
    }
    navigate('/book');
  };

  const handleClear = () => {
    searchText.current.value = '';
    setSearchTerm('Search in novelus...');
    setResultTitle('Please Enter Something ...');
    navigate('/book');
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <label htmlFor='searchInput' className='sr-only'>
                Search Books
              </label>
              <input
                type='text'
                id='searchInput'
                className='form-control'
                placeholder='Search in novelus...'
                ref={searchText}
              />
              <button type='submit' className='flex flex-c'>
                <FaSearch className='text-purple' size={32} />
              </button>
              <button type='button' onClick={handleClear} className='flex flex-c'>
                <FaTimes className='text-red' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
