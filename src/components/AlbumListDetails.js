import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {getAlbums,getUsers,getAlbumPhotos} from '../actions/albumActions'
import Pagination from './Pagination'
import './styles/album.css'

const AlbumListDetails = ({albums:{albums,users, loading,albumPhotos},match,getAlbums,getUsers,getAlbumPhotos}) => {

useEffect(()=>{
    getAlbums();
    getUsers()
 getAlbumPhotos(match.params.id)
},[getAlbumPhotos,getAlbums,getUsers,match.params.id])

const [currentPage,setCurrentPage] = useState(1)
const [albumsPerPage,setAlbumsPerPage] = useState(10)


if (loading || albums  === null) {
    return  <h1>loading</h1>;
  }else if (loading || users === null) {
      return  <h1>loading</h1>;
    }
    else if(loading || albumPhotos === null){
        return <h1>loading</h1>
    }
  else{ 

const userName = users.find((u)=>{ 
  
   return +u.id === +match.params.id
  
})


const lastPage = currentPage * albumsPerPage;
const firstPage = lastPage - albumsPerPage;
const currentAlbums = albumPhotos.slice(firstPage,lastPage);
const paginatealbumNumber = (number)=>setCurrentPage(number)


return (
    <Fragment >
     <h1>TITLE OF ALBUM</h1>
     <h5>uploaded by : {userName.name}  </h5>
      <div className='grid__3'>
      {!loading && currentAlbums.length &&albums.length === 0 && users.length === 0 ? (
          <p >No albums to show...</p>
        ) :(
        currentAlbums.map((m) => {
            
           
       return <div key={m.id} className="container grid__3">
              <div className="image__container  card">
              <img src={m.thumbnailUrl} alt="no_image "/>
               <h5> {m.title}</h5>
              </div>
        </div>})
      )}
      </div>
      <Pagination albumsPerPage={albumsPerPage} totalAlbums={albumPhotos.length} paginateNumber={paginatealbumNumber} />

       </Fragment>
  );
        }
}


const mapStateToProps = state => ({
    albums: state.albumState
  });
  
  
  export default connect(mapStateToProps,{ getAlbums,getUsers,getAlbumPhotos})(AlbumListDetails)
