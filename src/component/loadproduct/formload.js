import React, { useState } from 'react'
import axios from 'axios'

export const FormLoad = () =>{

    const [ formInput , setFormInput ] = useState({
        titulo:'',
        precio:'',
        descripcion:'',
        url:''
    })

    const [ estado , setEstado ] = useState()

    const handleChange = (e) =>{
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        /* await axios.post('https://e-commercebackendtila.herokuapp.com/gpdloadproduct' , formInput) */
        await axios.post('http://localhost:27017/gpdloadproduct' , formInput)
        .then(resp=>{
            console.log('Enviado correctamente: ' , resp )
            console.log(resp.data.message)
            setEstado(resp.status)
        })
        .catch(err=>{
            console.log('Error: ' , err )
        })

    }

    return(
        <div className='col-sm-12 container container-form-dt m-auto'>
            <div>
                <div className='logo-form text-center'>
                    <img src='https://res.cloudinary.com/ivanimagenes/image/upload/v1653532595/samples/logo_zk2iwp.svg'/>
                    <div className='text-center mb-5'>
                        <h2>Cargar Producto</h2>
                    </div>
                </div>
            </div>
            <div className='text-center col-sm-6 m-auto mb-5'>
                <form onSubmit={handleSubmit} className='m-auto'>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="" onChange={handleChange} name='titulo'/>
                        <label for="floatingInput">Titulo</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="" onChange={handleChange} name='precio'/>
                        <label for="floatingInput">Precio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="floatingInput" placeholder="" onChange={handleChange} name='descripcion'/>
                        <label for="floatingInput">Descripcion</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="" onChange={handleChange} name='url'/>
                        <label for="floatingInput">URL Foto</label>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success'>Publicar</button>
                    </div>
                    <div>
                        {estado === 200 ? "Guardado":""}
                    </div>
                </form>
            </div>

        </div>
    )
}