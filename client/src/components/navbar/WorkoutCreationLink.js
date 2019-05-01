import React from 'react'
import { Query } from 'react-apollo'
import { NavLink } from 'react-router-dom'

import GET_USER_QUERY from '../../graphql/queries/getUserById'

export default ({ sidenav }) => {
  const id = localStorage.getItem('id')
  if (!id) return null
  return (
    <Query query={GET_USER_QUERY} variables={{ id }}>
      {({ loading, data: { User } }) => {
        if (loading) return <span>loading....</span>
        if (!User) return null
        const currentProgram = User.programs[User.programs.length - 1]

        return currentProgram ? (
          renderLink(
            sidenav,
            `Add a new workout to your current program "${currentProgram.name}"`,
            { User, programId: currentProgram.id }
          )
        ) : (
          <>
            <li className='subheader'>Looks like you don't have any programs yet.</li>
            {renderLink(sidenav, 'Create a standalone workout?', { User })}
          </>
        )
      }}
    </Query>
  )
}

function renderLink(sidenav, text, state) {
  return (
    <li>
      <NavLink
        className={sidenav ? 'sidenav-close' : null}
        to={{
          pathname: '/create/setup',
          state,
        }}
      >
        {text}
      </NavLink>
    </li>
  )
}