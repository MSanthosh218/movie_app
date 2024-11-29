import React from 'react'

const Header = (props) => {
  return (
    <div className='p-6 flex items-center justify-center'>
      <div> 
        <input className='px-2 py-1 w-96 rounded text-black' value={props.value} onChange={(Event) =>{
          props.setsearchval(Event.target.value)
        }} type="text" placeholder='type to search ....' /> 
      </div>
      
    </div>
  )
}

export default Header