import './CommentWrapper.css'

function CommentWrapper(props) {
	let classes = 'wrapper '+'wrapper-date ' + props.className
	return <div className={classes}>{props.children}</div>
}

export default CommentWrapper
