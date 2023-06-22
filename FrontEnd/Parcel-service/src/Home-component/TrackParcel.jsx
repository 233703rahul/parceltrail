import React from 'react'
import Navigation from './Navigation';
import './TrackParcel.css';


function TrackParcel() {
    const [searchValue, setSearchValue] = React.useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle your search logic here
      console.log('Searching for:', searchValue);
    };
  
    const handleChange = (event) => {
      setSearchValue(event.target.value);
    };
    
    
  return (
    <div>
    <Navigation/>
    <form  className='parcelSearch' onSubmit={handleSubmit} role="search">
    <label className='psLabel' htmlFor="search">Enter ParcelID</label>
    <input className='psInput'
      id="search"
      type="search"
      placeholder="Enter Parcel ID."
      autoFocus
      required
      value={searchValue}
      onChange={handleChange}
    />
    <button className='Searchps' type="submit">Go</button>
  </form>
  </div>   
  )
}

export default TrackParcel