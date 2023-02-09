import AnswerItem from '../AnswerItem/AnswerItem'
import './AnswersList.css'

const AnswersList = ({ answers, answerHandler }) => {
  return (
    <ul className='AnswersList'>

      {answers
        ? answers.map((answer, index) => {
          return (
            <AnswerItem answer={answer} key={index} answerHandler={answerHandler} />
          )
        })
        : null}
    </ul>
  )
}

export default AnswersList