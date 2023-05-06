import * as React from "react";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
class Todo extends React.Component {
constructor(props){
    super(props);
    this.state={
        todoList:[]
    };
    this.setTodoList=this.setTodoList.bind(this);
}
setTodoList(sl,task)
{
    this.setState({todoList:[...this.state.todoList,{
        sl:sl,
        task:task,
        time:Date.now()
    }]})
}
render()
{
    return(
        <>
        <h1 className="text-center p-3">Todo App</h1>
            <AddTodo set={this.setTodoList}/>
            <TodoList todoList={this.state.todoList}/>
        </>
    );
}
}

export default Todo;