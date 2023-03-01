import React from 'react'

const logs = [
  {
    username: 'user-001',
    action: 'logged_in',
    action_createad_at: '2022-05-08T07:01:09.171245Z'
  },
  {
    username: 'user-001',
    action: 'button_sign_in_tapped',
    action_createad_at: '2022-05-08T07:02:09.171245Z'
  },
  {
    username: 'user-001',
    action: 'button_log_out_tapped',
    action_createad_at: '2022-05-08T07:03:09.171245Z'
  }
]

export const Table = () => {
  const headTable = (
    <tr>
      <th>Username</th>
      <th>Action</th>
      <th>Created Date</th>
    </tr>
  )

  const rowsTable = logs.map((item: any, index) => {
    return (
      <tr key={index + item.action_createad_at}>
        <th> {item.username} </th>
        <th> {item.action} </th>
        <th> {item.action_createad_at} </th>
      </tr>
    )
  })

  const table = (
    <table className='bp4-html-table .modifier'>
      <thead>{headTable}</thead>
      <tbody>{rowsTable}</tbody>
    </table>
  )

  return table
}
