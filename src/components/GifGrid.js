import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ( { category } ) => {


    const { data:images, loading } = useFetchGifs( category )

    //data:images  (para renombrar en la desestructuracion)
    // const [images, setImages] = useState([])

    // // useEffect me va a servir para utilizar cierto codigo de manera condicional




// si dejamos el array vacio, en el segundo argumento del hook useEffect solo se va a disparar una vez
// pero si cambia la category va a volver a usar el hook

 
    //getGifs()

    return (

        <>
        
            <h3 className='animate__animated animate__bounce animate__fadeIn'> { category } </h3>

            { loading && <p className='animate__animated animate__bounce animate__flash'>loading</p> } 



            <div className = 'card-grid'> 
                
                    
                
                        {  

                            images.map( img => 

                                    <GifGridItem  
                                        key = { img.id }
                                    { ...img } 
                                    />
                            
                            )    

                        }
                

            </div>
        </>
    )
}
//<li key= { id }> { title } </li>