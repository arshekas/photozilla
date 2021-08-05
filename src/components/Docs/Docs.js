import React from 'react'
import './Docs.css'
import { ListGroup } from 'react-bootstrap';
function Docs() {
    return (
        <div className="docs">
            <ListGroup as="ul">
                <ListGroup.Item className="list-heading" as="li" active>
                    Features
                </ListGroup.Item>
                <ListGroup.Item as="li">Unsplash <b>API Calls using Axios</b></ListGroup.Item>
                <ListGroup.Item as="li">Proper <b>React Componentizing</b></ListGroup.Item>
                <ListGroup.Item as="li">User <b>Search</b></ListGroup.Item>
                <ListGroup.Item as="li">Filter by <b>Orientation</b> and <b>Color</b></ListGroup.Item>
                <ListGroup.Item as="li"><b>Add, Remove and Clear</b> for Favourites using <b>Redux</b></ListGroup.Item>
                <ListGroup.Item as="li"><b>Modal View </b>for user to open photos</ListGroup.Item>
                <ListGroup.Item as="li"><b>Description of Photo</b> i.e. User details, Photo details</ListGroup.Item>
                <ListGroup.Item as="li"><b>Redux Persist</b> for persisting user's photos</ListGroup.Item>
                <ListGroup.Item as="li"><b>React Routing for home, favourites and docs</b></ListGroup.Item>
                <ListGroup.Item as="li"><b>Deployment</b> using Heroku</ListGroup.Item>
                <ListGroup.Item as="li"><b>React Masonry Component</b> for photos</ListGroup.Item>
                <ListGroup.Item as="li"><b>Material UI Icons</b></ListGroup.Item>
                <ListGroup.Item as="li"><b>React-bootstrap</b></ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul">
            <ListGroup.Item className="list-heading"as="li" active>
                Sources
            </ListGroup.Item>
                <ListGroup.Item as="li">Some Ideas and Features - <a href="https://www.youtube.com/watch?v=EgJHz9AKEb0&t=6324s">React Project - Build a Photo Search App</a></ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Docs
