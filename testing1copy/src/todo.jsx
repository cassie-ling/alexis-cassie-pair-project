
function Todo(props) {
    return (
      <li className="todo stack-small" >
        <div className="c-cb" style={{backgroundColor: props.color}}>
          <input id={props.color} type="checkbox"  defaultChecked={props.completed} />
          <label className="todo-label" htmlFor={props.id}>
              {/* {props.color} */}
            </label>
        
        </div>
        {/* <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div> */}
      </li>
    );
  }

  
  export default Todo;