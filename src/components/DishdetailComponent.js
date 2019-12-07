import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  renderDish(dish) {
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
        <div></div>
      );
  }

  renderComments(comments) {
    if (!comments || comments.length === 0) {
      return (
        <div></div>
      );
    }

    const renderComment = comments.map((comment) => {
      return (
        <div>
          <p>{comment.comment}</p>
          <p>-- {comment.author}, {comment.date}</p>
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

  render() {
    const { dish } = this.props;
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {dish ? this.renderComments(dish.comments) : null}
        </div>
      </div>
    );
  }
}

export default DishDetail;
