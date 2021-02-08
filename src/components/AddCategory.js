import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    //Use state me devuelve un arreglo para cambiar un estado
    const [inputValue, setInputValue] = useState('');

    //Funcion donde actualizo el estado 'cambia el estado'
    const handleInputChange= (e)=>{
        setInputValue(e.target.value);
    }

    // funcion dondee envio los nuevos valores que obtenga del input
    const handleSubmit = (e)=>{
        e.preventDefault();//Para que no se refresque la pagina
        //Condicion para no aceptar vacios y que se limpie despues de cada enter
        if( inputValue.trim().length >2){
            setCategories( cats =>[inputValue, ...cats]);// callback para agregar los nuevos valores al arreglo
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange= {handleInputChange}
            />
        </form>
    )
}


//Proptypes para obligar a que reciba algo
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}