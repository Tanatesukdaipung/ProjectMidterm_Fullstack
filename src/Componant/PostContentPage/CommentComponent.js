import React from 'react'
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

export default function CommentComponent(props) {
  const {comment} = props;
  return (
    <div>
    <Card>
        <CardBody>
            <CardHeader>
                {comment.author_name} {comment.date.replace("T", "  ")}
            </CardHeader>
            <CardText dangerouslySetInnerHTML={{__html: (comment.content.rendered ? comment.content.rendered : comment.content)}}></CardText>
        </CardBody>
    </Card>
    </div>
  )
}