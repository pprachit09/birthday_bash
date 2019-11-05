import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import firebase from '../../config/Firebase'

const AddWish = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const [message, setMessage] = useState({
    wish: '',
    from: ''
  })

  const { wish, from } = message

  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setMessage({ ...message, [e.target.id]: e.target.value })
    setErrorMessage()
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if (!wish || !from) {
      setErrorMessage('Please fill all the fields')
      setLoading(false)
    } else {
      const db = firebase.firestore()
      db.collection('wish')
        .add({
          wish,
          from
        })
        .then(() => {
          setLoading(false)
          setSuccess(true)
          setMessage({
            wish: '',
            form: ''
          })
        })
        .catch(err => {
          setLoading(false)
          console.log(err)
          setError(true)
        })
    }
  }

  return (
    <div className="row">
      <div className="container">
        <form className="col s12" onSubmit={handleSubmit}>
          <h5 className="purple-text text-lighten-2">
            Please post your message for Gayatri
          </h5>
          <h5 style={{ display: loading ? '' : 'none' }}>Loading...</h5>
          <h5 className="red" style={{ display: error ? '' : 'none' }}>
            Something went wrong... Please try again
          </h5>
          <h5 style={{ display: success ? '' : 'none' }}>
            Thanks for your time... Go back to <a href="/">homepage</a>
          </h5>
          <div className="row">
            <div className="input-field col m6 s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                type="text"
                id="from"
                onChange={handleChange}
                value={from || ''}
              />
              <label htmlFor="from">Your Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m6 s12">
              <i className="material-icons prefix">message</i>
              <textarea
                id="wish"
                className="materialize-textarea"
                onChange={handleChange}
                value={wish || ''}
              ></textarea>
              <label htmlFor="wish">Your Wish</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m6 s12 center">
              <h6
                style={{ display: errorMessage ? '' : 'none' }}
                className="red-text"
              >
                {errorMessage}
              </h6>
              <button
                type="submit"
                className="btn waves-effect waves-light purple lighten-3"
              >
                Submit<i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddWish
