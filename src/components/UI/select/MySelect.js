

const MySelect = ({ options, defaultValue, sortBy, value }) => {
  return (
    <select
      onChange={e => sortBy(e.target.value)}
      value={value}
    >

      <option value="" disabled>{defaultValue}</option>
      {options.map((option) => {
        return <option value={option.value} key={option.value}>
          {option.name}
        </option>
      })}
    </select>
  )
}

export default MySelect