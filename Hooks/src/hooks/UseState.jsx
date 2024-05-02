import { useState } from "react";
const UseState = () => 
{
    const [count, setCount] = useState(0);
    return(<h1>Vai Corinthians {count}</h1>);
}

export default UseState;