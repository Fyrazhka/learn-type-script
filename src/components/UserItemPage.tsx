import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";

interface UserItemPageParams {
    id: string;
    [key: string]: string | undefined;
}
const UserItemPage: FC = () => {
    const[user,setUser]=useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser()

    })
    async function fetchUser(){
        try{
            const response=await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <button onClick={() =>{navigate("/users");}}>Back</button>
            <h1>Страница пользователя  {user?.name}</h1>
            <div>
                {user?.email}
            </div>
        </div>
    );
};

export default UserItemPage;