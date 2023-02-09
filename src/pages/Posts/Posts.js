import { useEffect, useState } from "react";
import './Posts.css'
import PostService from "../../API/PostService";
import PostFilter from "../../components/componentsPosts/PostFilter/PostFilter";
import PostForm from "../../components/componentsPosts/PostForm/PostForm";
import PostList from "../../components/componentsPosts/PostList/PostList";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import MyModal from "../../components/UI/modal/MyModal";
import { useSearchAndSort } from "../../hooks/usePosts";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../../utils/getPageCount";
import { useInView } from "react-intersection-observer";

function Posts() {

  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })

  const [posts, setPosts] = useState([])
  const [modalPost, setModalPost] = useState(false)
  const [isPostsLoading, setIsPostsLoading] = useState(false)
  const sortedAndSearch = useSearchAndSort(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)


  const [fetchPosts, PostError] = useFetching(async () => {

    setIsPostsLoading(true)
    const [newPosts, total] = await PostService.getAll(limit, page)

    setPosts(posts.concat(newPosts))
    setTotalPages(getPageCount(total, limit) + 1)

    setIsPostsLoading(false)
  })

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {

    if (inView && page !== totalPages) {
      fetchPosts()
      addPosts()
    }

  }, [inView])



  const createPost = (newPost) => {
    setPosts(posts.concat(newPost))
    setModalPost(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((item) => {
      return item.id !== post.id
    }))
  }
  function addPosts() {
    setPage(page + 1)

  }

  return (
    <div className="Posts">
      <MyModal visible={modalPost} setVisible={setModalPost}>
        <PostForm create={createPost} />
      </MyModal>
      <MyButton onClick={() => setModalPost(true)}>
        Создать Пост
      </MyButton>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />

      {PostError ? <h1 style={{ textAlign: 'center' }}>Произошла ошибка</h1> : null}

      {isPostsLoading ? <Loader /> : null}
      <PostList
        remove={removePost}
        title={'Посты'}
        posts={sortedAndSearch} />

      <div className='Posts__inView' ref={ref}></div>
    </div >
  );
}

export default Posts;
