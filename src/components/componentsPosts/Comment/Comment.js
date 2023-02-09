import './Comment.css'

const Comment = ({ comment }) => {
  return (
    <div className='Comment'>
      <h3 className='Comment__title'>{comment.name}</h3>
      <span className='Comment__email'> <strong>Author: </strong><i>{comment.email}</i>  </span>
      <p className='Comment__body'>{comment.body}</p>
    </div>
  )
}

export default Comment