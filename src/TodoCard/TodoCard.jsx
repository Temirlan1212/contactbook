import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const TodoCard = ({ item, handleDelete, index, handleEdit }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={item.image} />
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>{item.lastName}</Card.Meta>
        <Card.Description>{item.number}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={() => handleEdit(index)}>
            Edit
          </Button>
          <Button basic color="red" onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TodoCard;
