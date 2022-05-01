import React from 'react'
import Table from './Table';


//OutputPanel Component
const Output = ({query,val}) => {
  return (
    <div className='output'>
        <Table table_name={query} val={val}/>
    </div>
  )
}

export default Output