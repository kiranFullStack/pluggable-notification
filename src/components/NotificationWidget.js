import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Button } from '@material-ui/core'
// import classes from '*.module.css'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  menuItemContainer: {
    width: '100%',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: 'grey',
  },
  borderBottom: {
    borderBottom: '1px solid grey',
  },
})

export default function NotificationWidget({
  data,
  unreadNotificationsLength,
  makeAllRead,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label='show 17 new notifications'
        color='inherit'
        onClick={handleClick}
      >
        <Badge badgeContent={unreadNotificationsLength} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Button
          className={classes.buttonStyle}
          variant='contained'
          onClick={makeAllRead}
        >
          Make all as read
        </Button>
        {data.map((item, index) => (
          <MenuItem
            onClick={handleClose}
            className={classes.borderBottom}
            key={index}
          >
            <div className={classes.menuItemContainer}>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
              <a
                href={item.link}
                target='_blank'
                className={classes.link}
                rel='noopener noreferrer'
              >
                Link <ArrowForwardIcon />
              </a>
            </div>
            <span>{item.read ? 'read' : 'unread'}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
