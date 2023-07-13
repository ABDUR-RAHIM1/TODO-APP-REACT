 
import "./Todo.css" 
function Todo(props) {  
    const {title ,desc , id , createAt} = props.todo
   const day = new Date(createAt).getDay()
   const month = new Date(createAt).getMonth()
   const year = new Date(createAt).getFullYear()
  
  return (
    <>
    <div className='todo'>
          <div className="todoItems">
          <span className='dateContainer'>Create Date</span>
            <small className='text-light'>
                {` ${day < 10 ? "0"+day : day} : ${month <10 ? "0"+month : month} : ${year <10 ? "0"+year : year}`}
            </small>
            <h3>{title}</h3>
            <p>{desc.slice(0, 150) + " . . . "}</p>
          </div>
          <div className="todoBtn">
          
            <button onClick={()=>props.handleDelete(id)} className='btn btn-danger btn-sm'>Delete</button>
          </div>
    </div>


    </>
  )
}

export default Todo