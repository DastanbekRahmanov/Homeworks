import React from 'react'
import './ExpenseLi.css'

const ExpenseLi = ({ formData }) => {
	console.log(formData)
	return (
		<div className='big-div'>
			{formData.map((item, i) => {
				return (
					<div key={i} className='expense-item__description'>
						<h1>Name:</h1> <h4>{item.name}</h4>
						<h1>Surname:</h1> <h4>{item.surName}</h4>
						<h1>Phone:</h1> <h4>{item.phone}</h4>
					</div>
				)
			})}
		</div>
	)
}

export default ExpenseLi
