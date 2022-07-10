import { useState } from "react";

const CommentForm = ({
  title,
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  initialname="",
  placecomment
  
}) => {
  const [text, setText] = useState(initialText);
  const[name,setName]=useState(initialname);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text,name);
    setText("");
    setName("")
  };
  return (
    <>
    <form className="form-color" onSubmit={onSubmit}>
      <h3>{title}</h3>
      <textarea
        className="comment-form-textarea"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="comment-form-textarea"
        placeholder={placecomment}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
       
      )}
      
    </form>
    
    </>
  );
};


export default CommentForm;
