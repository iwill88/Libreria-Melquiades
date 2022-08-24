import {useState} from 'react';

export const UseCounter = (stock) => {
    const [count, setCount] = useState(0)

    function add() {
        if(count<stock){
            setCount(count+1);
        }
        
    }

    function substract() {
        if (count>=1){
            setCount(count-1);
        }
        
    }

    function reset(){
        setCount(0);
    }
    return{
        add, substract, reset, count
    }
}

