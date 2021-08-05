import React, {useState, useEffect} from 'react'
import './effects.css';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = formState;
    //Se pasa un array vacio al final del useEffect para que solo se dispare una vez
    //Si queremos seguir escuchando se le pasa el valor del componente que queremos oir en lugar del array
    // dejo un ejemplo comentado
   useEffect(() => {
       console.log('hey');
   }, [])
   
   /*useEffect(() => {
    console.log('el email cambio');
}, [email])*/

   const handleInputChange = ({target}) => {
       
       setFormState({
           ...formState,
           [target.name]: target.value

       })
   }
   
    return (
        <>
            <h1> useEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}
