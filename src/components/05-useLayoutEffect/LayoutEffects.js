import React, {useRef, useLayoutEffect} from 'react'
import { useCounter } from '../../hooks/useCounter';
import './layout.css'
import { useFetch } from '../02-useEffect/useFetch'
export const LayoutEffects = () => {

    const {counter, increment} = useCounter(1);
    
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>LayoutEffects!!</h1>
            <br />
            
            <blockquote className="blockquote text-right">
                            <p 
                                ref = {pTag}
                                className="mb-0">{quote} 
                            </p>
                        </blockquote>
         
            <button
                 className="btn btn-primary"
                 onClick={increment}
            >
                Siguiente quote
            </button>
            
            
            
                
        </div>
    )
}
