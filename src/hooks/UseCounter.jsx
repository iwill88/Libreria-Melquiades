import {useState} from 'react';

export const UseCounter = (stock) => {
    const [count, setCount] = useState(1)

    function add() {
        if(count<stock){
            setCount(count+1);
        }
        
    }

    function substract() {
        if (count>1){
            setCount(count-1);
        }
        
    }

    function reset(){
        setCount(1);
    }
    return{
        add, substract, reset, count
    }
}

