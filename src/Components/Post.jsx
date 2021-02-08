import React from "react";
import { Container } from "react-bootstrap";

function Post({ post }) {
  const pic =
    "https://images.unsplash.com/photo-1612366630921-ec3bdea36f48?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <Container>
      <div className="card mb-3" style={{ maxwidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pic} alt="..." style={{ width: 275, height: 300 }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p className="card-text">{post.category}</p>

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Post;
