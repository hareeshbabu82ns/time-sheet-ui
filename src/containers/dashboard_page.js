import React from "react";
import { Grid } from "semantic-ui-react";

const DashboardPage = () => (
  <div>
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          column
        </Grid.Column>
        <Grid.Column>
          column
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default DashboardPage;
