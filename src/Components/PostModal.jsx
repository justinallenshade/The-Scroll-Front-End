import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function PostModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const startModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  console.log(body);
  return (
    <Form className="add-Post">
      <Button onClick={startModal}> New Blog Post</Button>

      <Modal show={showModal} onRequestClose={startModal}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Date:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Body:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* <Button className="modal-btn" onClick={closeModal}> */}
        {/* Close */}
        {/* </Button> */}
        <Button
          className="modal-btn"
          type="submit"
          // id="getData"
          // onClick={handleSubmit}
          onClick={closeModal}
        >
          Submit
        </Button>
      </Modal>
    </Form>
  );
}

export default PostModal;
