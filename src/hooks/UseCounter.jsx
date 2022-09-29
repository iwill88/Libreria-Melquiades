import {useState} from 'react';

//En este Hook se declaran las funciones del contador para sumar, restar y resetear
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

