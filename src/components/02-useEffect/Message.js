import React, {useEffect, useState} from 'react';
/**
 * Probando un hook con un condicional si el nombre coincide con '123' salta el hook
 */
export const Message = () => {


    const [coords, setCoords] = useState({x:0,y:0});
    const {x, y} = coords;


    useEffect(() => {

        const mouseMove = (e)=> {
            //console.log(e);
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        
        };
        
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h1>COINCIDE!</h1>
            <p>x: {x}</p>
            <p>y: {y}</p>
        </div>
    )
}
