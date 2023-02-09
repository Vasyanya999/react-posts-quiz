import { useNavigate } from 'react-router-dom'
import MyButton from '../../UI/button/MyButton'
import './PostItem.css'

const PostItem = ({ post, number, remove }) => {
  const router = useNavigate()
  return (
    <div className='post-item'>
      <div className='post-item__contant'>
        <strong>{post.id}. {post.title}</strong>
        <p className='post-item__description'>{post.body}</p>
        <span className='post-item__id'>id:{post.id}</span>
      </div>
      <div className='post-item__btns'>
        <MyButton onClick={() => remove(post)}>
          Удалить
        </MyButton>
        <MyButton onClick={() => router(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
      </div>

    </div>
  )
}

export default PostItem