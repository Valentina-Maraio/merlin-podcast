import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//data from context
import { AllPodcastContext } from "../context/AllContext";
//style
import "./style/PodcastCard.css";
import { Grid, Card, Col, Row, Text, Input, Button } from "@nextui-org/react";

const PodcastCard = () => {
  const [allPods] = useContext(AllPodcastContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const id = "Valentina";

  function podcastInfo() {
    navigate("/podcast_datail", {
      state: {
        id: id,
      },

    });
  }


  return (
    <>
      <div>
        <br />
        <Input
          clearable
          contentLeftStyling={true}
          css={{
            w: "200px",
            "@xsMax": {
              mw: "200px",
            },
          }}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        ></Input>
      </div>
      <Grid.Container gap={2} justify="center">
        {allPods?.entry
          ?.filter((entry) => {
            return search.toLowerCase() === ""
              ? entry
              : entry["im:name"].label.toLowerCase().includes(search) ||
                  entry["title"].label.toLowerCase().includes(search);
          })
          .map((entry) => {
            return (
              <Grid key={entry["id"]["attributes"]["im:id"]} xs={12} sm={4}>
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
                          <Button onPress={podcastInfo}>INFO</Button>
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
