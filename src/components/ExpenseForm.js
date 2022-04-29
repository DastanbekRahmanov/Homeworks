import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [name, setName] = useState('')
	const [surName, setsurName] = useState('')
	const [phone, setPhone] = useState('')

	const nameHandler = (e) => {
		setName(e.target.value)
	}
	const surNameHandler = (e) => {
		setsurName(e.target.value)
	}
	const phoneHandler = (e) => {
		setPhone(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if ((name, surName, phone.trim() == '')) {
			return alert('type something!')
		}

		props.onSaveData({ name, surName, phone })
		setName('')
		setsurName('')
		setPhone('')
	}

	return (
		<form className='form' onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Name</label>
					<input
						placeholder='Name'
						type='text'
						value={name}
						onChange={nameHandler}
					></input>
				</div>
				<div className='new-expense__control'>
					<label>Surname</label>
					<input
						placeholder='Surname'
						type='text'
						value={surName}
						onChange={surNameHandler}
					></input>
				</div>
				<div className='new-expense__control'>
					<label>Phone</label>
					<input
						placeholder='Phone'
						type='number'
						value={phone}
						onChange={phoneHandler}
					></input>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add</button>
			</div>
		</form>
	)
}
export default ExpenseForm
