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
  const[error,seterror]=useState("")
  const[error1,seterror1]=useState("")
  
  const isTextareaDisabled = text.length===0 || name.length === 0;
  const handlename=(name)=>{
    if(name.length===0){
      seterror("name not empty")
     // console.log(error)
    }
    else{
      setName(name)
      seterror("")
    }

  }
  const handletext=(text)=>{
    if(text.length===0){
      seterror1("comment not empty")
     // console.log(error)
    }
    else{
      setText(text)
      seterror1("")
    }

  }
 
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text,name);
    setText("");
    setName("");
    
  };
  return (
    <>
    <form className="form-color" onSubmit={onSubmit}>
      <h3>{title}</h3>
      <textarea
        className="comment-form-textarea"
        placeholder="Name"
        name="fname"
        value={name}
        onChange={(e) => handlename(e.target.value)}
        
      />
      <h1>{error}</h1>
      <textarea
        className="comment-form-textarea"
        name="fcomment"
        placeholder={placecomment}
        value={text}
        onChange={(e) => handletext(e.target.value)}
      />
       <h1>{error1}</h1>
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
