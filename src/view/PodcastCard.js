import React, { useContext } from "react";
//data from context
import { AllPodcastContext } from "../context/AllContext";
import PodcastDetailsCard from "../component/PodcastDetailsCard";

//style
import "./style/PodcastCard.css";
import { Grid, Card, Col, Row, Text } from "@nextui-org/react";

const PodcastCard = () => {
  const [allPods] = useContext(AllPodcastContext);
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Grid.Container gap={2} justify="center">
        {allPods?.entry?.map((entry) => {
          return (
            <Grid xs={12} sm={4}>
              <Card css={{ w: "100%", h: "400px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={entry["im:image"][2].label}
                    height={entry["im:image"].height}
                    width="100%"
                    objectFit="cover"
                    alt="Card example background"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text b color="#000" size={10}>
                        {entry["im:name"].label}
                      </Text>
                      <Text color="#000" size={10}>
                        Author: {"  "}
                        {entry["title"].label}
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <PodcastDetailsCard 
                        onClose={() => setVisible(false)}
                        show={visible === entry}
                        entry={entry["title"].label}
                        photo={entry["im:image"][2].label}
                        height={entry["im:image"].height}
                        summary={entry["summary"].label}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
};

export default PodcastCard;
