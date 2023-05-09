import * as React from "react";
import './style/AddTodo.css';

class AddTodo extends React.Component 
{
    constructor(props){
        super(props);
        this.state={
            task:''
        };
        this.save=this.save.bind(this);
        this.changeInput=this.changeInput.bind(this);
        this.clearInput=this.clearInput.bind(this);
    }

    changeInput(element)
    {
        this.setState({task:element.target.value});
    }

    clearInput = () => {
		//Updating local component state
		this.setState({ task: "" });
	};

    save()
    {
        if(this.state.task.trim().length!=0)
        {
            this.props.set(this.state.task);
            this.props.incrementsl();
        }
        else
            alert("Task cannot be empty!!");
    }

    render()
    {
        return(
            <div className="add-todo-container">
                    <input className="input" type="text" placeholder="Enter the task...." onChange={this.changeInput}/>
                    <button className="add-btn" type="submit" onClick={this.save}>Add</button>
            </div>
        );
    }
}

export default AddTodo;