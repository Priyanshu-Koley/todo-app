import * as React from "react";
import './style/TodoList.css';
class TodoList extends React.Component {
constructor(props){
    super(props);
    this.done=this.done.bind(this);
}
done(sl)
{
    this.props.done(sl);
}
render()
{
    return(
        <div className="todo-list-container">
            <table className="table table-hover">
                <thead>
                    <th>Task No.</th>
                    <th >Task</th>
                    <th>Time-Stamp</th>
                </thead>
                <tbody>
                    {this.props.todoList.map((el,sl) => {
                        return (
                            <tr>
                                <td>{sl+1}</td>
                                <td>{el.task}</td>
                                <td>{el.time}</td>
                                <td><button type="reset" className="btn btn-success" onClick={()=>{this.done(el.sl)}}>Done</button></td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
            {this.props.todoList.length!=0 ? <button type="reset" className="btn btn-danger container" onClick={this.props.delete}>Delete All !!</button>:<h1 className="msg">Please Add Some Tasks to View</h1> }
            
        </div>
    );
}
}

export default TodoList;