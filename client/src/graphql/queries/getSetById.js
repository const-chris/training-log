import { gql } from 'apollo-boost'
import { exerciseFieldsFragment } from './getExercise'

export const setFieldsFragment = gql`
  fragment setFields on Set {
    id
    number
    data {
      id
      name
      value
    }
    notes
    exercise {
      ...exerciseFields
    }
    completed
    workout {
      id
    }
  }
  ${exerciseFieldsFragment}
`

export default gql`
  query getSetQuery($id: ID) {
    set(id: $id) {
      ...setFields
    }
  }
  ${setFieldsFragment}
`
