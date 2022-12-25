import React from "react";
import { Modal, Text, Button, Card } from "@nextui-org/react";

const PodcastDetailsCard = (props) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  if (props.visible) {
    return null;
  }

  return (
    <>
      <Modal open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text size={18}>{props.entry}</Text>
        </Modal.Header>
        <Modal.Body>
          <Card.Image
            src={props.photo}
            width="140px"
            height={props.height}
            objectFit="fit"
            alt="Card example background"
          />
          <Text>Title: {props.title}</Text>
          <Text>Author: {props.author}</Text>
          <Text>Summary: {props.sums}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setVisible(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Button size="xs" auto flat color="gray" onClick={handler}>
        INFO
      </Button>
    </>
  );
};

export default PodcastDetailsCard;
