import "./List.css"

function List({ items }) {
    
  return (
    <ul className="custom-list">
        {
            items.map(item => (
                <li key={item.field}>
                    <b>{item.field}: </b>
                    {item.value}
                </li>
            ))
        }
    </ul>
  )
}

export default List