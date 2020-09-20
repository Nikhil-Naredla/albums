import React from 'react'
import './styles/pagination.css'

const Pagination = ({albumsPerPage,totalAlbums,paginateNumber}) => {
    let pageNumbers = []
    for(let i =1;i<= Math.ceil(totalAlbums/albumsPerPage);i++){
       pageNumbers.push(i)
    }
    return (
        <div className="text__center">
            <div className='pagination__container'>
                {
                    pageNumbers.map((p)=>{
                       return  <a  className='focus__class' key={p} onClick={()=>paginateNumber(p)}>
                               {p}
                               </a>
                                   })
                }
                
                 </div>
        </div>
    )
}

export default Pagination
