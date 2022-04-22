function CommentAvatar(props) {
	return (
		<img
			className='Avatar'
			src={props.author.avatarUrl}
			alt={props.author.name}
		></img>
	)
}

export default CommentAvatar