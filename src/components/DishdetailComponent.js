import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, NavItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
        <CommentForm />
      </CardBody>
    </Card>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
          </ModalBody>
        </Modal>
      </div>
    );
  }
};

const DishDetail = (props) => {
  const { dish } = props;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>

          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
