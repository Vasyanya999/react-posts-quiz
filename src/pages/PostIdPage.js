import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/PostService";
import Post from "../components/componentsPosts/Post/Post";
import Loader from "../components/UI/Loader/Loader";
import PostComments from "../components/componentsPosts/PostComments/PostComments";

const PostIdPage = () => {
  const [post, setPost] = useState({})
  const [isPostLoad, setIsPostLoad] = useState(false)
  const [comments, setComments] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  const [fetchPost, postError] = useFetching(async () => {
    setIsPostLoad(true)
    const post = await PostService.getPost(params.id)
    setPost(post)
    setIsPostLoad(false)
  })

  const [fetchComments, commentsError] = useFetching(async () => {
    const comments = await PostService.getPostComments(params.id)
    setComments(comments)
  })

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <div>
      {postError ? <h1 style={{ textAlign: 'center' }}>Произошла ошибка</h1> : null}
      {isPostLoad
        ? <Loader />
        : <Post post={post} navigate={navigate} />
      }
      <PostComments comments={comments} />



    </div>
  )
}
export default PostIdPage