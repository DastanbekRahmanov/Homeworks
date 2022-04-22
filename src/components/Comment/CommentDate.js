import CommentWrapper from '../../UI/CommentWrapper'

import './CommentDate.css'
function formatDate(date) {
	return date.toLocaleDateString()
}
function CommentDate(props) {
	return (
		<CommentWrapper className='wrapper-date'>
			<div>{props.text}</div>
			<div className='Comment-date'>{formatDate(props.date)}</div>
		</CommentWrapper>
	)
}

export default CommentDate
