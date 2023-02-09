import PostItem from '../PostItem/PostItem'
import './PostList.css'

const PostList = ({ title, posts, remove }) => {
  return (
    <div className='PostList'>
      <h1 className='PostList__title'>
        {posts.length ? title : 'Посты не найдены'}
      </h1>
      {posts.map((post, index) => {
        return <PostItem
          key={post.id}
          post={post}
          number={index + 1}
          remove={remove}
        />
      })}
    </div>
  )
}
export default PostList