import './AnswerItem.css'

const AnswerItem = ({ answer, answerHandler }) => {
  return (
    <li
      className='AnswerItem'
      onClick={() => answerHandler(answer.id)}
    >
      {answer.text}
    </li>
  )
}

export default AnswerItem 