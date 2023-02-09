import MyInput from '../../UI/input/MyInput'
import MySelect from '../../UI/select/MySelect'
import './PostFilter.css'

const PostFilter = ({ filter, setFilter }) => {

  return (
    <div className='PostFilter'>

      <MyInput
        placeholder='Поиск'
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect defaultValue='Сортировка по:' options={[
        { value: 'title', name: 'Названию' },
        { value: 'body', name: 'Описанию' },
      ]}
        sortBy={(value) => setFilter({ ...filter, sort: value })}
        value={filter.sort}
      />
    </div>
  )
}
export default PostFilter