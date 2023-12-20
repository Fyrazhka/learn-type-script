import React, {FC, useRef, useState} from 'react';

const EventsExample:FC = () => {
    const [value, setValue]=useState<string>('')
    const [isDrag, setDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const clickHandler =(e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log(inputRef.current?.value)
        console.log(value)
    }
    const dragHandler =(e: React.DragEvent<HTMLDivElement>)=>{
        console.log("drag")
    }
    const dropHandler =(e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setDrag(false)
        console.log("drop")
    }
    const leaveHandler =(e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setDrag(false)
    }
    const dragWidthPreventDefault =(e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setDrag(true)
    }

    return (
        <div>
            <input
                value={value}
                onChange={changeHandler}
                placeholder="Управляемый"
                type="text"/>
            <input
                ref={inputRef}
                placeholder="Неуправляемый"
                type="text"/>
            <button onClick={clickHandler}>Hi</button>
            <div onDrag={dragHandler} draggable style={{width:200, height:200, background:"red"}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWidthPreventDefault}
                 style={{width:200, height:200,  background:isDrag ? "red" : "blue", marginTop:15}}></div>
        </div>
    );
};

export default EventsExample;