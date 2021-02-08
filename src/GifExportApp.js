import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';//Para unir mi otro componente
import { GifGrid } from './components/GifGrid';
// componente
export const GifExportApp = () => {
    /* const categories = ['Atack on titan', 'Dragon ball', 'Sword Art Online']; */
    const [categories, setCategories] = useState(['Ichigo']);
/*  const handleAdd = ()=>{
        // setCategories([...categories,'Pery']); 
        setCategories(cats=>[...cats ,'Slam Dunk']);//Recibe un callback y agregar un nuevo elemento
    } */

    return (
        //Fragment
        <>  <h2 className= "msj">Aprendiendo React by Jorddy</h2>
            <h2>Buscar imagen</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                { 
                /* map llama a la función callback provista una vez por elemento de un array, en orden,
                    y construye un nuevo array con los resultados. ... callback es llamada con tres argumentos:
                    el valor del elemento,
                     el índice del elemento, y el objeto array que se está recorriendo. */
                    categories.map( category =>(
                        //Retorno el arreglo y lo muestro en lista con su indice 'Key'
                        //return <li key={category} > {category}</li>

                        <GifGrid 
                            key={ category } category = { category }
                            
                        
                        />
                    ))
                }
            </ol>
        </>
    )
}
