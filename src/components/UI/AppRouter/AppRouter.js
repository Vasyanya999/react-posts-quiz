import { Route, Routes } from "react-router-dom"
import Testing from "../../../pages/Testing/Testing"
import PostIdPage from "../../../pages/PostIdPage"
import Posts from "../../../pages/Posts/Posts"
import Quiz from "../../../pages/Quiz/Quiz"
import Home from "../../../pages/Home"


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/react-posts-quiz/posts' element={<Posts />} />
        <Route path='/react-posts-quiz/posts/:id' element={<PostIdPage />} />
        <Route path='/react-posts-quiz/testing/:name' element={<Quiz />} />
        <Route path='/react-posts-quiz/testing' element={<Testing />} />
        <Route path='/react-posts-quiz/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRouter