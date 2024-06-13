import React from 'react'
import { useSearchParams } from 'react-router-dom';
const Filter = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('filterValue'))
    
  return (
    <div>
      filter
    </div>
  )
}

export default Filter
