import { useEffect, useState } from 'react'
import ActiveQuiz from '../../components/componentsQuiz/ActiveQuiz/ActiveQuiz'
import './Quiz.css'
import { artificialDelay } from '../../utils/artificialDelay'
import AnswersResult from '../../components/componentsQuiz/AnswersResult/AnswersResult'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching'
import TestsService from '../../API/TestsService'
import Loader from '../../components/UI/Loader/Loader'

const Quiz = () => {
  const [quiz, setQuiz] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answerUser, setAnswerUser] = useState([])
  const [quizFinish, setQuizFinish] = useState(false)
  const [isLoaderQuiz, setIsLoaderQuiz] = useState(true)
  const params = useParams()


  const [fetching, error] = useFetching(async () => {
    const newTest = await TestsService.getTest(params.name)
    setQuiz(newTest)
    setIsLoaderQuiz(false)
  })

  useEffect(() => {
    fetching()
  }, [])

  const answerHandler = (answerId) => {
    const question = quiz[activeQuestion]

    if (answerUser[activeQuestion]) {
      return
    }
    if (question.rightAnswerId === answerId) {
      setCorrectAnswers(correctAnswers + 1)
      setAnswerUser(answerUser.concat({
        question: question.question,
        questionId: question.id,
        answer: true,
        answerUserId: answerId,
      }))
    } else {
      setAnswerUser(answerUser.concat({
        question: question.question,
        questionId: question.id,
        answer: false,
        answerUserId: answerId,
      }))
    }

    artificialDelay(() => {
      if (activeQuestion + 1 === quiz.length) {
        setQuizFinish(true)
      } else {
        setActiveQuestion(activeQuestion + 1)
      }
    }, 500)
  }
  const restartQuiz = () => {
    setActiveQuestion(0)
    setCorrectAnswers(0)
    setAnswerUser([])
    setQuizFinish(false)
  }

  return (
    <div className='Quiz'>
      {isLoaderQuiz
        ? null
        : quizFinish
          ? <h1 className='Quiz__title'>Вы ответили на все вопросы </h1>
          : <h1 className='Quiz__title'>Оветьте на все вопросы</h1>
      }
      {
        isLoaderQuiz
          ? <Loader />
          : quizFinish
            ? <AnswersResult
              quiz={quiz}
              correctAnswers={correctAnswers}
              answerUser={answerUser}
              restartQuiz={restartQuiz}
            />
            : <ActiveQuiz
              answerHandler={answerHandler}
              answers={quiz[activeQuestion]?.answers}
              question={quiz[activeQuestion]?.question}
              quizLength={quiz.length}
              answerNumber={activeQuestion + 1}
            />
      }
      {error
        ? <h2 className='Quiz__error'>Ой...... что то пошло не так</h2>
        : null
      }

    </div>
  )
}
export default Quiz 