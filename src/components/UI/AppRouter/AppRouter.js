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
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostIdPage />} />
        <Route path='/testing/:name' element={<Quiz />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRouter