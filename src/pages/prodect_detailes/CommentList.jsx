import React from "react";
import { useComments } from "../../HomePage/context/CommentsContext";
import styles from "../pages.module.css";

function CommentsList({ productId }) {
  const { commentsByProduct } = useComments();
  const comments = commentsByProduct[productId] || [];

  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div className={styles.comment_list}>
      {comments.map((comment, index) => (
        <div className="review_item" key={comment.id || index}>
          <div className="media d-flex justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <div className={styles.user_img}>
                <img
                  src={
                    comment.img ||
                    "https://img.icons8.com/?size=96&id=13042&format=png"
                  }
                  alt={comment.name || "User"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="media-body ps-3">
                <div>
                  <h5>{comment.name || "Anonymous User"}</h5>
                  <p>{comment.date}</p>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center me-5">
              <a className="reply_btn" href="#">
                Reply
              </a>
            </div>
          </div>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
