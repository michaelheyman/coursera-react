import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function RenderDish({dish}) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else
    return (
      <div/>
    );
}

function RenderComments({comments}) {
  if (!comments || comments.length === 0) {
    return (
      <div/>
    );
  }

  const renderComment = comments.map((comment) => {
    const date = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'})
      .format(new Date(Date.parse(comment.date)));

    return (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author}, {date}</p>
      </div>
    );
  });

  return (
    <Card>
      <CardBody>
        <h4>Comments</h4>
        {renderComment}
      </CardBody>
    </Card>
  );
}

const  DishDetail = (props) => {
  const { dish } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          {dish ? <RenderComments comments={dish.comments}/> : null}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
