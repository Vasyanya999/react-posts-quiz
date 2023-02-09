import './AnswersResult.css'
import MyButton from '../../UI/button/MyButton'
import QuestionList from '../QuestionList/QuestionList'
import { useNavigate } from 'react-router-dom'

const AnswersResult = ({ answerUser, quiz, correctAnswers, restartQuiz }) => {
  const navigate = useNavigate()
  return (
    <div className='AnswersResult'>
      <h2 className='AnswersResult__title'>Результат</h2>
      <QuestionList answerUser={answerUser} />
      <hr />
      <div className='AnswersResult__info'>
        <span>Правильных ответов: {correctAnswers} из {quiz.length}</span>
        <div className='AnswersResult__btns'>
          <MyButton onClick={() => navigate(-1)}>Назад</MyButton>
          <MyButton onClick={restartQuiz}>Попробывать еще раз</MyButton>
        </div>

      </div>

    </div>
  )
}
export default AnswersResult