import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        style={{width: '30vw'}}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Services...'
        className='ml-sm-5'
      ></Form.Control>
      <Button type='submit' style={{border: '3px solid #1A1A1A', color: '#fff'}} variant='primary' className='p-2'>
      <i className="fas fa-search"></i> Search
      </Button>
    </Form>
  )
}

export default SearchBox
