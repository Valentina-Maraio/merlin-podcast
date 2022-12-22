import React from "react";
import "./style/PodcastCard.css";
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";

const PodcastCard = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  TITOLO
                </Text>
                <Text h3 color="black">
                  autore
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://nextui.org/images/card-example-6.jpeg"
                width="100%"
                height="100%"
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
                  <Text color="#000" size={12}>qualcosa</Text>
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
      </Grid.Container>
    </>
  );
};

export default PodcastCard;
