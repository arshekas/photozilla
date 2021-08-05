import React from 'react'
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addToFavourite, removeFromFavourite } from '../redux/actions';
import Photo from '../components/Photo/Photo';
import './MasonryImages.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InstagramIcon from '@material-ui/icons/Instagram';

function MasonryImages({photos, current, setCurrent, isFavourite}) {
    const dispatch = useDispatch()
    const customStyles = {
        content: {
            border: 'none',
        },
      };
      
    return (
        <div>
            <Masonry className="photos" options={{ isFitWidth: true }}>
            {   
                (photos.length 
                ?
                    photos.map(photo => 
                        <Photo key={photo.id} photo={photo} handleClick={setCurrent} isFavourite current={current}  />
                    )
                :
                <div className="no-images">
                    {isFavourite ? <h2>No Images Added</h2> : <h2>No Images Found</h2>}
                </div>
                )
            }
            <Modal style={customStyles} ariaHideApp={false} isOpen={!!current} onRequestClose={() => setCurrent(null)}>
                <div className="details">
                    {
                        isFavourite 
                        ?
                        <div>
                            <div className="description">
                                <div className="user_image">
                                    {current?.user.profile_image.small ? <img src={current?.user.profile_image.large} alt="" /> : ""}
                                </div>
                                {current?.description ? <p><b>Description: </b>{current?.description}</p> :""}
                                <p>
                                    {current?.user?.first_name ? <span><b>User Name: </b>{current?.user?.first_name}</span>:""}
                                    {current?.user?.last_name ? <span> {current?.user?.last_name} </span> :""}
                                </p>
                                {current?.user?.bio ? <p><b>User Bio: </b>{current?.user?.bio}</p> :""}
                                <p><b>Tags : </b> { current?.tags.map((tag, index) => <span key={index}> #{tag.title}</span>)}</p>
                            </div>
                            <Button onClick={() => dispatch(removeFromFavourite(current))} variant="contained" color="primary">Remove</Button>
                        </div>
                        :
                        <div>
                            <div className="description">
                                <div className="user_image">
                                    {current?.user.profile_image.small ? <img src={current?.user.profile_image.large} alt="" /> : ""}
                                </div>
                                {current?.user?.name ? <p><b>User Name: </b>{current?.user?.name}</p>:""}
                                {current?.user?.bio ? <p><b>User Bio: </b>{current?.user?.bio}</p> :""}
                                {current?.likes ? <p><b><ThumbUpAltIcon />  </b>{current?.likes}</p> :""}
                                {current?.user?.instagram_username ? <p><b><InstagramIcon />  </b>@{current?.user.instagram_username}</p> :""}
                                {current?.description ? <p><b>Description: </b>{current?.description}</p> :""}
                                <p><b>Tags : </b> { current?.tags.map((tag, index) => <span key={index}> #{tag.title}</span>)}</p>
                                </div>
                                <div className="buttons">
                                    <Button onClick={() => dispatch(addToFavourite(current))} variant="contained" color="primary">Add to Favourite</Button>
                                </div>
                        </div>

                    }
                </div>
                <img className="img-preview"
                className="img-preview" src={current?.urls.regular} alt={current?.urls} />
            </Modal>
            </Masonry>
        </div>
    )
}

export default MasonryImages
