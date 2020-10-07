import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// THIS IS WHERE DEVELOPER CAN CHANGE THE STYLES OF ALL PROPERTIES WITH CSS IN JS
const useStyles = makeStyles({
  readmeText: {
    textAlign: 'left',
    padding: '5% 0 0 10%',
    color: '#373737',
  },
})

export default function Readme() {
  const classes = useStyles()

  return (
    // THIS IS THE FEATURE LIST

    <div className={classes.readmeText}>
      <h3>
        <span>✅ </span> As a user, I should be able to view number of pending
        notifications to be read. ( = through number badge)
      </h3>

      <h3>
        <span>✅ </span> As a user, I should be able to click on the
        notification icon and expand the view to see a list of notifications ( =
        through bell icon)
      </h3>

      <h3>
        <span>✅ </span> As a user, I should be able to make out from the UI,
        read and unread notifications. ( = through color coding)
      </h3>

      <h3>
        <span>✅ </span> As a user, I should be able to mark all notifications
        read ( = through Button click)
      </h3>

      <h3>
        <span>✅ </span> As a developer, I should be able to configure actions
        for notifications, so that, when a user clicks on notification, he is
        taken to a different page. ( = through API or JSON)
      </h3>

      <h3>
        <span>✅ </span> As a developer, I should be able to configure the look
        and feel of the notification ( = CSS in JS)
      </h3>

      <a
        href='https://kiranfullstack.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Made my Kiran
      </a>
      <br />
      <br />

      <a
        href='https://github.com/kiranFullStack/pluggable-notification'
        target='_blank'
        rel='noopener noreferrer'
      >
        GITHUB LINK FOR THE CODE
      </a>
    </div>
  )
}
