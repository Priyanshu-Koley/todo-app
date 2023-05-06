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
    this.doneTodoList=this.doneTodoList.bind(this);
    this.deleteAll=this.deleteAll.bind(this);
}
setTodoList(sl,task)
{
    this.setState({todoList:[...this.state.todoList,{
        sl:sl,
        task:task,
        time:Date.now()
    }]})
}
doneTodoList(sl)
{
    console.log(sl);
    let filteredList=this.state.todoList.filter((el)=>{return el.sl!=sl})
    this.setState({todoList:filteredList});
}
deleteAll()
{
    this.setState({todoList:[]});

}
render()
{
    return(
        <>
        <h1 className="text-center p-3">Todo App</h1>
            <AddTodo set={this.setTodoList}/>
            <TodoList todoList={this.state.todoList} done={this.doneTodoList} delete={this.deleteAll}/>
        </>
    );
}
}

export default Todo;