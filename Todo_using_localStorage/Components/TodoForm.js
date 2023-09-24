import React, { useState } from "react";
import { Form, FormGroup, Input, InputGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) =>
{
    const [todoString, setTodoString] = useState("")
    const handleSubmit = e =>
    {
        e.preventDefault();
        if (todoString === "")
        {
            return alert("Please fill Some value");
        }

        const todo = {
            todoString,
            id: v4()
        };
        addTodos(todo);
        setTodoString("");

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup >
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter the todo string"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)} />
                    <div className="input-group-append" >
                        {/* <span className="input-group-text" id="" >Add Todo</span> */}
                        <button className="btn btn-success" type="button" onClick={handleSubmit}>Add Todo</button>
                    </div>

                </InputGroup>
                {/* <div>
                    <input value={todoString}></input>
                </div> */}
            </FormGroup>
        </Form>

    );
}

export default TodoForm;
