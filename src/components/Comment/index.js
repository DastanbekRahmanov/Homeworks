import CommentDate from './CommentDate'
import UserInfo from '../UserInfo/UserInfo'
import CommentWrapper from '../../UI/CommentWrapper'
import './CommentDate.css'

function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo author={props.author} />
			<CommentDate date={props.date} text = {props.text} />
		</div>
	)
}
export default Comment
