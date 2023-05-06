import * as React from "react";
import './style/TodoList.css';
class TodoList extends React.Component {
constructor(props){
    super(props);
}
render()
{
    return(
        <div className="todo-list-container">
            <table className="table table-hover">
                <thead>
                    <th>SL No.</th>
                    <th >Task</th>
                    <th>Time-Stamp</th>
                </thead>
                <tbody>
                    {this.props.todoList.map((el) => {
                        return (
                            <tr>
                                <td>{el.sl}</td>
                                <td>{el.task}</td>
                                <td>{el.time}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}
}

export default TodoList;