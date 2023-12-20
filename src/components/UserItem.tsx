import React, {FC} from 'react';
import {IUser} from "../types/types";
interface  UserItemProps{
    user: IUser;
    onClick: (user:IUser) => void;
}
const UserItem: FC<UserItemProps> = ({user,onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15,marginTop:2, border: '1px solid blue'}}>
            {user.id} . {user.name} проживает в городе {user.address.city}
        </div>
    );
};

export default UserItem;