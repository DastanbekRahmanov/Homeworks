import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseLi from './components/ExpenseLi'
// import './App.css'

function App() {
	const [formData, setFormData] = useState([])
	function saveData(newData) {
		setFormData((prevData) => [...prevData, newData])
		// console.log(newData)
	}
	return (
		<div className='App'>
			<ExpenseForm onSaveData={saveData} />
			<ExpenseLi formData={formData} />
		</div>
	)
}

export default App
