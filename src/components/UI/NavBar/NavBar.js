import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>

      <Link className='NavBar__link' to='/'>Домой</Link>
      <Link className='NavBar__link' to='/posts'>Посты</Link>
      <Link className='NavBar__link' to='/testing'>Тесты</Link>

    </div>
  )
}

export default NavBar