import React from 'react'
import Table from './Table';

const Output = ({query}) => {
  return (
    <div className='output'>
        <Table table_name={query}/>
    </div>
  )
}

export default Output