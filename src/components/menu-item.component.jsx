import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  GridListTile: {
    marginLeft: theme.spacing(3),
  },
  Card: {
    Width: 240,
    borderRadius: 10,
    boxShadow: "4px 4px 20px 0 rgba(0,0,0,.1)",
  },
  CardActionArea: {},
  CardMedia: {
    border: "#ccc",
  },
  CardContent: {
    position: "absolute",
    top: 190,
  },
  Typography: {
    color: theme.palette.primary.dark,
  },
}));

const MenuItem = ({ header, imageUrl, history, linkUrl, match }) => {
  const classes = useStyles();
  return (
    <GridListTile className={classes.GridListTile}>
      <Card className={classes.Card} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <CardActionArea className={classes.CardActionArea}>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.CardContent}>
            <Typography
              gutterBottom
              variant="subtitle2"
              className={classes.Typography}
            >
              {header}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </GridListTile>
  );
};

export default withRouter(MenuItem);
