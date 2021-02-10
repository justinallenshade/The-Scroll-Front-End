import React from "react";

function CreatePost({ showModal }) {
  if (!showModal) {
    return <div className="form-container"> </div>;
  } else {
    return (
      <div className="form-container">
        <form action="">
          <button onClick={showModal} className="close-modal-btn">
            X
          </button>
          <h1>Create Blog Post</h1>
          <section className="form-input">
            <label for="">Title</label>
            <input type="text" className="form-control" required />
          </section>
          <section className="form-input">
            <label for="">Date</label>
            <input type="text" className="form-control" required />
          </section>
          <section>
            <p className="form-input-body">Body</p>
            <label className="form-input-rich-text" for=""></label>
          </section>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
