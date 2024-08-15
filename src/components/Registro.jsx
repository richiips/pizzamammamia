import React, { useState } from 'react'

const Registro = () => {

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPasword, setRepeatPassword] = useState("")
    const [error, setError] = useState (false)
    const [passLenght, setPassLenght] = useState (false)
    const [passSame, setPassSame] = useState (false)
   

    const validarRegistro = (e) => {
        e.preventDefault()
        
        if(correo === "" || password === "" || repeatPasword === ""){
            setError(true)
            return
        }if(password.length < 6){
            setPassLenght(true)
            return
        }if(password != repeatPasword){
            setPassSame(true)
            return
        }

        setError(false)
        setPassLenght(false)
        setPassSame(false)
    }


  return (
    <>
        <div className='LoginContainer'>
            <h1>Registrate</h1>
            <form className='formContainer' onSubmit={validarRegistro}>
            <div className='registroContainer'>
                <input type="text" placeholder='juan@mail.com' onChange={(e) => setCorreo(e.target.value)}/>
                <input type="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder='Repetir contraseña' onChange={(e) => setRepeatPassword(e.target.value)}/>
                <button type='submit'>Registrarme</button>

                {error ? <h3 className='mensajeError'>Debes completar todos los campos</h3> : null}
                {passLenght ? <h3 className='mensajeError'>La contraseña debe contener al menos 6 caracteres</h3> : null}
                {passSame ? <h3 className='mensajeError'>Las contraseñas no coinciden</h3> : null}
            </div>
            </form>
        </div>
    </>
  )
}

export default Registro