import React from 'react';
import CommentComponent from './CommentComponent';

export default function CommentText(props) {
  const {comments} = props;
  return (
    <div className='row'>
      {
        comments.map((comment) => (
          <div key={comment.id} className='col-md-12'>
          <CommentComponent comment={comment} />
          </div>
        ))
      }
    </div>
  )
}