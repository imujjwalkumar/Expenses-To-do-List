import ExpenseItem from './ExpenseItem'
import  './Expenses.css'
import React from 'react'

const Expenses=(props)=>{
	return(
		
		<div className='expenses'>
    {
      props.item.map(
        expense=>(
          <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}/>
          )
        )
    }
    </div>
    )
}
export default Expenses