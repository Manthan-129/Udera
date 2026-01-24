import React, {useState, useEffect, useContext } from 'react'
import {assets} from '../../assets/assets'
import { AppContext} from '../../context/AppContext.jsx'

const SearchBar = ({data}) => {

    const {navigate}= useContext(AppContext);
    const [input, setInput]= useState(data ? data : '');

    const onSearchHandler= (e)=>{
        e.preventDefault();
        const val= input.trim();
        navigate('/course-list/' + val);
    }

  return (
        <form className="flex items-center bg-white border border-gray-300 rounded-full shadow-md max-w-2xl mx-auto mt-8 overflow-hidden" onSubmit={onSearchHandler}>
            <img src={assets.search_icon} alt="Search Icon" className='w-5 h-5 ml-4'/>
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder="Search for courses" className='flex-1 px-4 py-3 outline-none text-gray-700'/>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-colors">Search</button>
        </form>
  )
}

export default SearchBar