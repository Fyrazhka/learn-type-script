import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";

import List from "./List";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodosPage:FC = () => {
    const[todos,setTodos]=useState<ITodo[]>([])
    useEffect(()=>{
        fetchTodos()
    })

    async function fetchTodos(){
        try{
            const response=await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;