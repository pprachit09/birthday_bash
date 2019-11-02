import React, { useState, useEffect } from 'react'
import Card from './Card'
import firebase from '../../config/Firebase'

const MessageList = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const db = firebase.firestore()
    db.collection('wish').get().then(response => {
      setData(response.docs)
    })
  }, [])

  return (
    <div className="row">
      <div className="container">
        <h3 style={{ display: data ? 'none' : '' }}>Loading...</h3>
        {data && data.map(d => (
          <div className="col m3 s6" key={d.id}>
            <Card from={d.data().from} wish={d.data().wish} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessageList
