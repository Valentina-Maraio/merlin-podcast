import React, { useContext } from "react";
//data from context
import { AllPodcastContext } from "../context/AllContext";

//style
import "./style/PodcastCard.css";
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";

const PodcastCard = () => {
  const [allPods] = useContext(AllPodcastContext);

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
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            INFO
                          </Text>
                        </Button>
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
