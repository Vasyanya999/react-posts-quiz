import { Link } from 'react-router-dom'
import './Testing.css'

const Testing = () => {
  return (
    <div className='Testing'>
      <h1 className='Testing__title'> Выберите тест </h1>
      <ul className='Testing__list'>
        <li className='Testing__item'>
          <Link to='/testing/informatics'>Информатика</Link>
        </li>
        <li className='Testing__item'>
          <Link to='/testing/biology'>Биология</Link>
        </li>
        <li className='Testing__item'>
          <Link to='/testing/psychology'>Психология</Link>
        </li>
      </ul>
    </div>
  )
}

export default Testing