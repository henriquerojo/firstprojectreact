import { useEffect, useState } from "react";

const UseEffectComponent = () => 
{
    const [category, setCategory] = useState('posts');

    useEffect(() => 
    {
        console.log("Category: ", category);
    }, [category]);

    return (
        <div>
            <h1>UseEffect</h1>
            <h1>{category}</h1>
            <div>
                <button onClick={() => setCategory('posts')}>Posts</button>
                <button onClick={() => setCategory('comments')}>Comments</button>
                <button onClick={() => setCategory('all')}>All</button>
            </div>
        </div>
    )
}

export default UseEffectComponent;