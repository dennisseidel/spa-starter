import React, {Component} from 'react';
import FrontHero from '../../components/FrontHero/FrontHero';
import NewsBox from '../../components/NewsBox/NewsBox';
import Footer from '../../components/Footer/Footer';
import picture from './title.png';
import { Grid, withStyles } from 'material-ui';
import Typography from 'material-ui/Typography/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    margin: "0 auto",
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    marginTop: 30,
    marginLeft: "11%"
  }
});


const home = class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [{
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      },
      {
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      },
      {
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      },
      {
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      }]}
  }


  render() {
    let { news } = this.state;
    const { classes } = this.props;
    return (
      <div className="Home">
          <FrontHero />
          <Typography className={classes.title} type="headline" component="h1" align="left" color="textSecondary">
            News
          </Typography>
          <Grid container spacing={24} className={classes.root} justify="center">
            {news.map((entry) => (
              <Grid item xm={6}>
                <NewsBox picture={entry.picture} title={entry.title} summary={entry.summary} button={entry.button} />
              </Grid>
            ))}
        </Grid>
        <Grid item xm={12}>
              <Footer />
            </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(home);