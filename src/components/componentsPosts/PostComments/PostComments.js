import Comment from '../Comment/Comment'
import './PostComments.css'

const PostComments = ({ comments }) => {
  return (
    <div className='PostComments'>
      <h2 className='PostComments__title'>Comments:</h2>
      <div className='PostComments__row'>
        {comments.map((com) => {
          return <Comment comment={com} key={com.id} />
        })}
      </div>
    </div>
  )
}
export default PostComments