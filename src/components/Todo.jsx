import * as React from "react";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
class Todo extends React.Component {

    constructor(props){
    super(props);
    this.state={
        todoList:[],
        sl:1
    };
    this.setTodoList=this.setTodoList.bind(this);
    this.doneTodoList=this.doneTodoList.bind(this);
    this.deleteAll=this.deleteAll.bind(this);
    this.incrementsl=this.incrementsl.bind(this);
}
setTodoList(task)
{
    this.setState({todoList:[...this.state.todoList,{
        sl:this.state.sl,
        task:task,
        time:Date.now()
    }]})
}
doneTodoList(sl)
{
    let filteredList=this.state.todoList.filter((el)=>{return el.sl!=sl})
    this.setState({todoList:filteredList});
}
deleteAll()
{
    this.setState({todoList:[],sl:1});
}
incrementsl()
{
    let s = this.state.sl;
    s++;
    this.setState({sl:s});

}
render()
{
    return(
        <>
        <h1 className="text-center p-3">Todo App</h1>
            <AddTodo set={this.setTodoList} sl={this.sl} incrementsl={this.incrementsl}/>
            <TodoList todoList={this.state.todoList} done={this.doneTodoList} delete={this.deleteAll}/>
        </>
    );
}
}

export default Todo;