import React, { useState } from 'react'

const Login = () => {
  const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState (false)
    const [passLenght, setPassLenght] = useState (false)
    const [passSame, setPassSame] = useState (false)
   

    const inicioSesion = (e) => {
        e.preventDefault()
        
        if(correo === "" || password === ""){
            setError(true)
            return
        }if(password.length < 6){
            setPassLenght(true)
            return
        }

        setError(false)
        setPassLenght(false)
    }


  return (
    <> 
      <div className='LoginContainer'>
      <h1>Inicia Sesión</h1>
        <form className='formContainer' onSubmit={inicioSesion}>
        <div className='registroContainer'>
            <input type="text" placeholder='juan@mail.com' onChange={(e) => setCorreo(e.target.value)}/>
            <input type="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Iniciar sesión</button>

            {error ? <h3 className='mensajeError'>Debes completar todos los campos</h3> : null}
            {passLenght ? <h3 className='mensajeError'>La contraseña debe contener al menos 6 caracteres</h3> : null}
        </div>
        </form>
      </div>
    </>
  )
}

export default Login