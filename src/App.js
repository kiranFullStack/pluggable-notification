import React, { useState } from 'react'
import './styles/App.scss'
import JSONdata from './JSONdata'
import NotificationWidget from './components/NotificationWidget'
import Readme from './components/Readme'

function App() {
  // SETTING THE DATA STATE TO THE JSON DATA(WE CAN ALSO SET TO FETCHED DATA IN USESTATE)

  const [data, setdata] = useState(JSONdata)

  // GET A COUNT OF UNREAD NOTIFICATIONS

  let unreadNotifications = data.filter(function (number) {
    return number.read === false
  })

  // MAKE ALL NOTIFICATIONS AS READ
  let makeAllRead = () => {
    let tempArray = []
    for (let index = 0; index < data.length; index++) {
      const element = data[index]

      data[index].read = true
      tempArray.push(element)
      console.log(tempArray)
    }
    setdata(tempArray)
  }

  return (
    <div className='App'>
      {/* THIS IS THE REUSABLE COMPONENT  */}
      {/* WE NEED TO PASS THE DATA AND IT TAKES CARE OF ALL OTHER THINGS FROM THE RESPECTIVE  FUNCTIONS */}
      <NotificationWidget
        data={data}
        unreadNotificationsLength={unreadNotifications.length}
        makeAllRead={makeAllRead}
      />
      <Readme />
    </div>
  )
}

export default App
