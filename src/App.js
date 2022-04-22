import './App.css'
import Comment from './components/Comment'

const comment = [
	{
	  date: new Date(),
	  text: 'I hope you enjoy learning React!',
	  author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/62/62',
	  },
	},
	{
	  date: new Date(),
	  text: 'I hope you enjoy learning React!',
	  author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64',
	  },
	},
	{
	  date: new Date(),
	  text: 'I hope you enjoy learning React!',
	  author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64',
	  },
	},
  ];
  

function App() {
	return (
		<div className='flex-div'>
		{comment.map((element,i)=>{
			element.id = i + 1
			return(
				<Comment
				author={element.author}
				text={element.text}
				date={element.date}
				key = {element.id}
			/>
			)
		})}
		</div>
	)
}

export default App
