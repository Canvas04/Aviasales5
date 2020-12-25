import React from 'react'
import { useSelector } from 'react-redux'

export default function ErrorBoundary(props) {
  const error = useSelector((store) => {
    return store.loadTickets.isError
  })
  return (
    <>
      {error ? (
        <h1 style={{ margin: 'auto' }}>
          The server is temporarily down.Please,reload the page
        </h1>
      ) : (
        props.children
      )}
    </>
  )
}
