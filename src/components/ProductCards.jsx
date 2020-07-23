import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import "./product-cards.css";

class CardForm extends Component {
  render() {
    return (
      <Grid container className="cards">
        <Card className="root" style={{ width: 345, margin: 10 }}>
          <CardActionArea>
            <CardMedia
              className="media"
              style={{ height: 350 }}
              image={this.props.image}
              title={this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {this.props.price}$
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" color="primary">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default CardForm;
