import { useState } from 'react'
import MyButton from '../../UI/button/MyButton'
import MyInput from '../../UI/input/MyInput'
import './PostForm.css'


const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '', })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = { ...post, id: Date.now() }
    create(newPost)
    setPost({
      title: '',
      body: '',
    })

  }

  return (
    <form className='PostForm'>
      <MyInput
        placeholder='Название поста'
        onChange={e => setPost({ ...post, title: e.target.value })}
        value={post.title}
      />
      <MyInput
        placeholder='Описание поста'
        onChange={e => setPost({ ...post, body: e.target.value })}
        value={post.body}
      />
      <MyButton onClick={addNewPost}>
        Добавить пост
      </MyButton>
    </form>
  )
}
export default PostForm