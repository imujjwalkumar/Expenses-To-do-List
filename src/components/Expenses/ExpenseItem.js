import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import React,{useState} from 'react'


const ExpenseItem=(props)=>{

	return(
		<div className='expense-item'>
		<ExpenseDate date={new Date(props.date)}/>
		<div className='expense-item_description'>
		<h2>{props.title}</h2>
		<div className='expense-item_price'>${props.amount}</div>
		</div> 
		
		</div>
		)
}
export default ExpenseItem 