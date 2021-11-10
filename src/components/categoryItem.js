import React from 'react'

export default function CategoryItem({category}) {
    return (
     
            <li key={category.id} 
                onClick={getProductsByCategory}
                className="list-group-item">
                {category.name}
            </li>
       
    )
}
