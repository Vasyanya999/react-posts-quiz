import './MyButton.css'

const MyButton = ({ children, ...props }) => {
  return (
    <button
      className='MyButton'
      {...props}
    >
      {children}
    </button>
  )
}

export default MyButton