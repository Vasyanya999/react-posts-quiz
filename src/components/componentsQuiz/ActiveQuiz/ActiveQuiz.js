import AnswersList from '../AnswersList/AnswersList'
import './ActiveQuiz.css'

const ActiveQuiz = ({ answers, question, answerHandler, quizLength, answerNumber }) => {

  return (
    <div className={answers ? 'ActiveQuiz' : 'ActiveQuiz-none'} >
      <p className='ActiveQuiz__question'>
        <span>
          <strong>{answerNumber}. </strong>
          {question}
        </span>
        <small className='ActiveQuiz__qustions'>{answerNumber} из {quizLength}</small>
      </p>
      <AnswersList
        answers={answers}
        answerHandler={answerHandler}
      />
    </div>
  )
}
export default ActiveQuiz