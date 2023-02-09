import QuestionItem from '../QuestionItem/QuestionItem'
import './QuestionList.css'

const QuestionList = ({ answerUser }) => {
  return (
    <ul className='QuestionList'>
      {answerUser.map((info, index) => {
        return (
          <QuestionItem info={info} index={index} key={info.questionId} />
        )
      })}
    </ul>
  )
}
export default QuestionList