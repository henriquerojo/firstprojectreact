import { useState } from "react";
const UseState = () => 
{
    const [count, setCount] = useState(0);
    const [disableButon, setDisableButton] = useState(true);
    function increment()
    {
        setDisableButton(false);
        setCount((prevState) => 
        {
            setDisableButton(false);
            return prevState + 1;
        });
    }
    function decrement()
    {
        setCount((prevState) => 
        {
            if (prevState === 1) 
            {
                setDisableButton(true);
            }
            else
            {
                setDisableButton(false);
            }
            return prevState - 1;
        });
        // if(count === 0)
        // {
        //     setDisableButton(true);
        //     return
        // }
        // setCount(count - 1);
    }
    return(
        <div>
            <h1>UseState</h1>
            <h1 style={{marginLeft: "90px", color: "red"}}>{count}</h1>
            <button onClick={decrement} disabled={disableButon} style={{ cursor: disableButon ? 'not-allowed' : 'pointer' }}>Diminuir</button>
            <button onClick={increment} style={{cursor: 'pointer'}}>Aumentar</button>
        </div>
    )
};

export default UseState;
