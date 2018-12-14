import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Fab from '@material-ui/core/Fab'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  flex: {
    flex: 1
  }
}

const Footer = ({ classes }) => (
  <AppBar position='static' color='secondary'>
    <Toolbar>
      <Typography
        className={classes.flex}
        variant='h5'
        color='inherit'
      >
        My Footer
      </Typography>
      <Fab
        color='primary'
        size='small'
      >
        <AddIcon />
      </Fab>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Footer)
