import { useParams } from "react-router-dom";
import { Row, Col, Container, Tab, Tabs, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=c616b99f&i=${params.id}`
      );

      const data = await res.json();

      setMovie(data);
    };

    const fetchComments = async () => {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${params.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGQ2M2U3MzczODAwMTUzNzQ0MDIiLCJpYXQiOjE2NzUzNDIzNzksImV4cCI6MTY3NjU1MTk3OX0.T9SspPION27bTb5U75j_Ax7maF8wvgAJveRPtqnGsmc",
          },
        }
      );

      const comments = await res.json();

      setComments(comments);
    };
    fetchMovie();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movie ? (
        <>
          <Container>
            <Row className="mb-5">
              <Col xs={12} className="mb-4">
                <img
                  className="movie-poster"
                  src={movie.Poster}
                  alt="movie-title"
                />
              </Col>
              <Col xs={12} className="mb-3">
                <h3 style={{ color: "white" }}>{movie.Title}</h3>
              </Col>
              <Col xs={12}>
                <Tabs defaultActiveKey="plot" id="uncontrolled-tab-example">
                  <Tab eventKey="plot" title="Plot">
                    <div className="mt-3" style={{ color: "white" }}>
                      {movie.Plot}
                    </div>
                  </Tab>
                  <Tab eventKey="comments" title="Comments">
                    <div className="mt-3" style={{ color: "white" }}>
                      {comments.length
                        ? comments.map((comment, index) => (
                            <div key={index}>{comment.comment}</div>
                          ))
                        : "No comments yet"}
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Spinner animation="grow" variant="danger"></Spinner>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
