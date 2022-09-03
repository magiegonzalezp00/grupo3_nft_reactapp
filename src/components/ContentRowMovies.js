import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */


function ContentRowMovies(props){
    let total = {
        title: 'Total Products',
        color: 'primary', 
        cuantity: props.total,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalPremiun = {
        title:' Total premiun', 
        color:'success', 
        cuantity: props.premium,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let mostPurchased = {
        title:'Más comprados' ,
        color:'warning',
        cuantity: props.mostPurchased,
        icon:'fa-user-check'
    }
    
    let cartProps = [total, totalPremiun, mostPurchased];
    return (
        
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;