import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (  {setCategories} ) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{

        //prevenir el comportamiento por defecto del formulario, para que no recargue toda la web

        e.preventDefault();

        if (inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats] );
            setinputValue(' ')
        }

        
        //console.log(setCategories)
    }



    return (
    
            

        <form onSubmit = { handleSubmit }> 

                <input 
                    type='text'
                    value= { inputValue }
                    onChange = { handleInputChange }
                />

        </form>
            
  
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    
}
