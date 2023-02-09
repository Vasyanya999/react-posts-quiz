import './MyModal.css'

const MyModal = ({ children, visible, setVisible }) => {

  return (
    <div
      className={visible ? 'MyModal active' : 'MyModal'}
      onClick={() => setVisible(false)}

    >
      <div
        className="MyModal__content"
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>

    </div>
  )
}

export default MyModal