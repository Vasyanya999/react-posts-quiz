import './QuestionItem.css'

const QuestionItem = ({ info, index }) => {
  return (

    <li className='QuestionItem' >
      <p className='QuestionItem__text'>
        <strong>{index + 1}. </strong>
        {info.question}
      </p>


      {info.answer
        ? <span className='QuestionItem__success'>+</span>
        : <span className='QuestionItem__error'>--</span>
      }
    </li>

  )
}

export default QuestionItem