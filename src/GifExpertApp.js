
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

     const [categories, setCategories] = useState(['One Punch']);

    //  const handleAdd = () => {

    //     // de esta manera, le estamos dicendo al hook useState que cambie el estado, en vez de un array seria un string
    //     // y por eso el error
    //     //setCategories( categories.push('Yugi O')  );

    //     // para agregar un elemento al array podria hacerse de esta manera
    //     //[...categories]  operador Spread para traer las categorias q tengo aca y despues anidarle el otro

    //     setCategories([...categories], 'YugiO')

        
    // }



    return (
        <>

            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories = { setCategories } />

            <hr />
            
            <ol>
                    
                    {
                        categories.map( category => 
                             <GifGrid  
                                category = { category } 
                                key = { category }
                             />
                        )


                    }
            </ol>
            
        </>
    )
}

export default GifExpertApp;
