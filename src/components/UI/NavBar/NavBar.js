import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>

      <Link className='NavBar__link' to='/react-posts-quiz/'>Домой</Link>
      <Link className='NavBar__link' to='/react-posts-quiz/posts'>Посты</Link>
      <Link className='NavBar__link' to='/react-posts-quiz/testing'>Тесты</Link>

    </div>
  )
}

export default NavBar