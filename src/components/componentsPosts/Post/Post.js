import MyButton from '../../UI/button/MyButton'
import './Post.css'

const Post = ({ post, navigate }) => {

  return (
    <div className='post'>
      <div className='post__contant'>

        <h1 className='post__title'>{post.id}. {post.title}</h1>
        <hr />
        <p className='post__description'>{post.body}</p>
        <span className='post__id'>id:{post.id}</span>
      </div>
      <div className="post__btns">
        {/* <MyButton onClick={() => navigate(-1)}>
          Назад
        </MyButton> */}
      </div>
    </div>
  )
}
export default Post