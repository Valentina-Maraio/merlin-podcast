import React from "react";
import "../App.css";
import { Input, Card, Grid } from "@nextui-org/react";

const SearchPodcast = () => {
  return (
    <>
      <Grid.Container>
        <Grid xs={12}>
          <Card.Body>
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
            ></Input>
          </Card.Body>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default SearchPodcast;
