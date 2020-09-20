import React, { Fragment, useEffect,useState } from 'react'
import { connect } from 'react-redux'
import {getAlbums,getUsers} from '../actions/albumActions'
import {Link} from 'react-router-dom'
import './styles/album.css'
import Pagination from './Pagination'
const AlbumList = ({ albums: {albums,users, loading },getAlbums,getUsers }) => {
    useEffect(() => {
        getAlbums();
        getUsers()
      // eslint-disable-next-line
    }, [getUsers,getAlbums]);
    const [currentPage,setCurrentPage] = useState(1)
    const [albumsPerPage,setAlbumsPerPage] = useState(10)

 if (loading || albums  === null) {
      return  <h1>loading</h1>;
    }else if (loading || users === null) {
        return  <h1>loading</h1>;
      }
    else{ 

const lastPage = currentPage * albumsPerPage;
const firstPage = lastPage - albumsPerPage;
const currentAlbums = albums.slice(firstPage,lastPage);

let merged = [];

for(let i=0; i<currentAlbums.length; i++) {
    merged.push({
     ...currentAlbums[i], 
     ...(users.find((u) => u.id === currentAlbums[i].userId))}
    );
  }


const paginatealbumNumber = (number)=>setCurrentPage(number)

return (
      <Fragment >
          <h1>List of Albums</h1>
        {!loading && albums.length === 0 && users.length === 0 ? (
          <p >No albums to show...</p>
        ) : (
          merged.map((m,i) => {
             
         return <ul key={m[i]} className="albumlist container">
                    <h5> {m.title}</h5>
                     <p>{m.name}</p>
                    <span><Link to={`/details/${m.userId}`}>VIEW MORE</Link></span>
          </ul>})
        )}
         <Pagination albumsPerPage={albumsPerPage} totalAlbums={albums.length} paginateNumber={paginatealbumNumber} />
         </Fragment>
    );
    }

  };
  
  const mapStateToProps = state => ({
    albums: state.albumState
  });
  
  export default connect(mapStateToProps,{ getAlbums,getUsers})(AlbumList);
  
