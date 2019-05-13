import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Bodyhome(props) {
  const { classes } = props;

  return (
    <div className={classes.root} align="center">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <img src="https://i.ibb.co/bv5dZyV/Untitled.png" />
        </Grid>
        <Grid item xs={12}>
          <img src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/120519/DESKTOP_A1_MENWOMEN.gif" />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/060519/DESKTOP_B1_MEN-03.jpg"
              style={{ maxHeight: 490 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/060519/DESKTOP_B2_MEN-04.jpg"
              style={{ maxHeight: 490 }}
            />
          </Paper>
        </Grid>
      </Grid>
      <br />
      <div align="center">
        <h1>
          <strong>PRODUK TERBARU</strong>
        </h1>
      </div>

      <Grid item xs={12}>
        <Grid container justify="center" spacing="16">
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/10/13/cardinal-kemeja-koko-print-middle-list-merah_4792099_2_68240.jpg"
                style={{ maxWidth: 200 }}
              />
              <h3>CARDINAL CASUAL</h3>
              <p>Cardinal Kemeja Koko Print Middle List</p>
              <p>
                <strong>Rp 198.900</strong>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/10/13/details-sweatshirt-raglan-off-white_4792358_2_68239.jpg"
                style={{ maxWidth: 200 }}
              />
              <h3>DETAILS</h3>
              <p>Cardinal Casual T-shirt Print Adventure</p>
              <p>
                <strong>Rp 198.900</strong>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/10/13/cardinal-casual-t-shirt-print-adventure-expedition-abu-abu_4792088_2_68193.jpg"
                style={{ maxWidth: 200 }}
              />
              <h3>CARDINAL CASUAL</h3>
              <p>Cardinal Casual T-shirt Print Adventure</p>
              <p>
                <strong>Rp 198.900</strong>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/10/13/t-zone-t-shirt-big-size-authentic-hitam_4789404_2_68192.jpg"
                style={{ maxWidth: 200 }}
              />
              <h3>CARDINAL CASUAL</h3>
              <p>Cardinal Casual T-shirt Print Adventure</p>
              <p>
                <strong>Rp 198.900</strong>
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <img
            src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/130519/desktop_c_361.jpg"
            style={{ maxHeight: 500 }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/DISNEY_AVENGERS_END_GAME/C4_DISNEY_AVENGER.jpg"
            style={{ maxHeight: 500 }}
          />
        </Grid>
      </Grid>
      <div align="center">
        <h1>
          <strong>Populer Brands</strong>
        </h1>
      </div>

      <AppBar
        position="static"
        color="default"
        style={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <Grid item xs={12}>
            <Grid container justify="center" spacing="16">
              <Grid item xs={3}>
                <img
                  src="http://eleva.co/wp-content/uploads/2018/09/UAsbb6wU_400x400.jpeg"
                  style={{ maxHeight: 130 }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/bangsawan/MEN/CARDINAL.jpg"
                  style={{ maxWidth: 200 }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/bangsawan/MEN/LOIS.jpg"
                  style={{ maxWidth: 200 }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/bangsawan/MEN/YONGKI_KOMALADI.jpg"
                  style={{ maxWidth: 200 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <img src="https://i.ibb.co/PM948L5/metode-pembayaran.png" />
            </Paper>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

Bodyhome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bodyhome);
