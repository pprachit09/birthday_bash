import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../../config/Firebase'
import Card from './Card'

const SingleMessage = ({ match }) => {
  const [data, setData] = useState({
    wish: '',
    message: ''
  })

  const { wish, from } = data

  useEffect(() => {
    const db = firebase.firestore()
    const docRef = db.collection('wish').doc(match.params.id)

    docRef.get().then(doc => {
      if (doc.exists) {
        console.log(doc.data().wish.length)
        setData({
          wish: doc.data().wish,
          from: doc.data().from
        })
      }
    })
  }, [match.params.id])

  const showData = () => {
    if (wish) {
      return (
        <div className="col m6 s12">
          <Card from={from} wish={wish} singleMessage={true}/>
          <a href="/messages" className="red-text">Back to messages</a>
        </div>
      )
    }
  }

  return (
    <div className="row">
      <div className="container">
        <h5 style={{ display: wish ? 'none' : '' }}>Loading...</h5>
        {showData()}
      </div>
    </div>
  )
}

SingleMessage.propTypes = {
  match: PropTypes.object
}

export default SingleMessage
