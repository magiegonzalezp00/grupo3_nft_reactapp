import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total productos--> */


function ContentRowMovies(props){
    let total = {
        title: 'Total Products',
        color: 'primary', 
        cuantity: props.total,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total premiun --> */
    
    let totalPremiun = {
        title:' Total premiun', 
        color:'success', 
        cuantity: props.premium,
        icon:'fa-award'
    }
    
    /* <!-- Más comprados --> */
    
    let mostPurchased = {
        title:'Más comprados' ,
        color:'warning',
        cuantity: props.mostPurchased,
        icon:'fa-user-check'
    }

    /* <!-- Ultimos agregados --> */
    
    let lastAdded = {
        title:'Últimos agregados' ,
        color:'warning',
        cuantity: props.lastAdded,
        icon:'fa-user-check'
    }

    /* <!-- Más comprados --> */
    
    let lastDays = {
        title:'Últimos días' ,
        color:'warning',
        cuantity: props.lastDays,
        icon:'fa-user-check'
    }
    
    let totalUsers = {
        title:'Usuarios' ,
        color:'warning',
        cuantity: props.totalUsers,
        icon:'fa-clipboard-list'
    }

    let cartProps = [total, totalPremiun, mostPurchased, lastAdded, lastDays, totalUsers];
    return (
        
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;