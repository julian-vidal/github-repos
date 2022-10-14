import "./List.css"

function List({ items }) {
    
  return (

    <ul className="custom-list">
        {
            items.map(item => {

             
              if(item.field === "Live version") {
                console.log(typeof item.value.props.url)
                if (typeof item.value.props.url !== "string") {
                  return ""
                }
              }

              if(typeof item.field === "string") {
                return (                
                  <li key={item.field}>
                      <b>{item.field}: </b>
                      {item.value}
                  </li>
                  )
              }
              
                
                


              
            }

             

              
            )
        }
    </ul>
    

    // <ul className="custom-list">
    //     {
    //         items.map(item => (
    //           <li key={item.field}>
    //                 <b>{item.field}: </b>
    //                 {item.value}
    //             </li>
    //         )
    //         )
    //     }
    // </ul>
  )
}

export default List