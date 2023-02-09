import { Component } from "react";
import {Card, Col} from "react-bootstrap"
import { Link } from "react-router-dom";

class MovieCard extends Component {
    render() {
        const movie = this.props.movie
        return (
            
            <Col xs={6} md={3} lg={2} className="px-1">
                <Card className="mb-2">
                <Link to={"movie-details/" + movie.imdbID}>
                    <div className="card-img-wrapper">
                        <Card.Img variant="top" src={movie.Poster} />
                    </div>
                    <Card.Body>
                        <div className="d-flex flex-column">
                            <Card.Title>{movie.Title}</Card.Title>
                       
                        </div>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            
        )
    }
}

export default MovieCard