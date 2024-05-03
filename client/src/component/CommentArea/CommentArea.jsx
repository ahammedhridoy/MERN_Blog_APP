/* eslint-disable react/prop-types */
const CommentArea = ({ comment, setComment, addComment, id }) => {
  return (
    <div className="submit-comment">
      <h4>Leave a comment</h4>
      {/* <form> */}
      <textarea
        name=""
        id=""
        cols="3"
        rows="3"
        placeholder="Message"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <button onClick={() => addComment(id)} className="btn submit">
        Submit
      </button>
      {/* </form> */}
    </div>
  );
};

export default CommentArea;
