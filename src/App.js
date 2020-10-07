import React, { useState } from 'react'
import './styles/App.scss'
import JSONdata from './JSONdata'
import NotificationWidget from './components/NotificationWidget'

function App() {
  const [data, setdata] = useState(JSONdata)

  // let readNotifications = data.filter(function (number) {
  //   return number.read === true
  // })
  let unreadNotifications = data.filter(function (number) {
    return number.read === false
  })

  let makeAllRead = () => {
    let tempArray = []
    // make everything read
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
      <NotificationWidget
        data={data}
        unreadNotificationsLength={unreadNotifications.length}
        makeAllRead={makeAllRead}
      />
    </div>
  )
}

export default App
