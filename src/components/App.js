import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
})

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleClick = () => {
    this.setState({
      open: true
    })
  };

  render () {
    const { classes } = this.props
    const { open } = this.state

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Grid container>
          <Grid item xs={false} sm={3} />
          <Grid item xs={false} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant='h4' gutterBottom>
                React + Firebase + Material-UI + JSS Starter Project
              </Typography>
              <Button variant='contained' color='secondary' onClick={this.handleClick}>
                This is a Dialog
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={false} sm={3} />
        </Grid>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
