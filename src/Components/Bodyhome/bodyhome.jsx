import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    <div className={classes.root} style={{ padding: 50 }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/120519/DESKTOP_A1_MENWOMEN.gif" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/060519/DESKTOP_B1_MEN-03.jpg"
              style={{ maxHeight: 500 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/060519/DESKTOP_B2_MEN-04.jpg"
              style={{ maxHeight: 500 }}
            />
          </Paper>
        </Grid>
      </Grid>
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
    </div>
  );
}

Bodyhome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bodyhome);
