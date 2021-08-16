import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    /*
    1.Obtener la referencia al context
    2. setUser
    */

    const {setUser} = useContext(UserContext);

    const miUser = {
        id:123,
        name:'Juan'
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id:123,
                    name:'Juan'
                })}
                >
                    Login
                </button>
        </div>
    )
}
