import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState(JSON.parse(localStorage.getItem('cartProduct')));
  const [backendComments1, setBackendComments1] = useState([])
  

  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
 
  useEffect(()=>{
    let jsonString = JSON.stringify(backendComments)
   localStorage.setItem('cartProduct', jsonString)

  },[backendComments])



  const getReplies = (commentId) =>

  
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      // .sort(
      //   (a, b) =>
      //     new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          
      // )
      
 


  // --------
      
      
  const addComment = (text,name, parentId) => {
    createCommentApi(text,name, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
      
    });
  };


  const sortcomment=()=>{
    //setBackendComments2(backendComments)
    backendComments.sort((a,b) => {
      return new Date(a.createComment).getTime() - 
          new Date(b.createComment).getTime()
  }).reverse();
 // console.log(backendComments)
 setBackendComments1(backendComments)
 
 //setBackendComments2(backendComments)
 
 
 

 
 
  

    
 
  
   
  }
  

  
  
  
  
    
  

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
  
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
    //  setBackendComments(data);
    setBackendComments(JSON.parse(window.localStorage.setItem(data)))
    
   
    
   
    });
  }, []);
 

  return (
    <div className="comments">
     
      <CommentForm submitLabel="post" title="Comment" placecomment="Comment" handleSubmit={addComment} />
      <div
              className="comment-actiondel">
               
    Sort By:Date&time: 
    
    <span
              className="comment-action"
              onClick={sortcomment
              }
            >
            <i id="dec" class="fa fa-arrow-down"></i>
            </span>
            {/* <span
              className="comment-action"
              onClick={sortcommentasc
              }
            >
            <i id="asc" class="fa fa-arrow-up"></i>
            </span> */}
   
    </div>
   
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
           
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
