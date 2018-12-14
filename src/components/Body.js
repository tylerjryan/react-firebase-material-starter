import React, { Component } from 'react'
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
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  paper: {
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 10,
      height: 'calc(100% - 10px)',
      marginTop: 5
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 64px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 56px)'
    },
    textAlign: 'center'
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  },
  button: {
    margin: theme.spacing.unit
  }
})

class Body extends Component {
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

  render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={false} md={3} />
        <Grid item xs={12} sm={12} md={6}>
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
          <Paper className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              React + Firebase + Material-UI + JSS Starter Project
            </Typography>
            <Button variant='contained' color='secondary' onClick={this.handleClick}>
              This is a Dialog
            </Button>
            <Typography variant='subtitle1' gutterBottom>
              Here are some routes for you:
            </Typography>
            <Button className={classes.button} variant='contained' color='primary' href='/signup'>
              Sign Up
            </Button>
            <Button className={classes.button} variant='contained' color='primary' href='/signin'>
              Sign In
            </Button>
            <Button className={classes.button} variant='contained' color='primary' href='/account'>
              Account
            </Button>
            <Button className={classes.button} variant='contained' color='primary' href='/pw-forgot'>
              Password Forgot
            </Button>
            <Button className={classes.button} variant='contained' color='primary' href='/admin'>
              Admin
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={false} sm={false} md={3} />
      </Grid>
    )
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Body)
