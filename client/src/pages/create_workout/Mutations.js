import { gql } from 'apollo-boost'

export const CREATE_WORKOUT_MUTATION = gql`
  mutation CREATE_WORKOUT_MUTATION($date: String!, $description: String) {
    createWorkout(date: $date, description: $description) {
      id
      date
      description
    }
  }
`

export const ADD_WORKOUT_TO_USER_MUTATION = gql`
  mutation ADD_WORKOUT_TO_USER_MUTATION($userId: ID!, $workoutId: ID!) {
    addToUserWorkouts(userUserId: $userId, workoutsWorkoutId: $workoutId) {
      workoutsWorkout {
        id
        date
        description
      }
    }
  }
`

export const ADD_WORKOUT_TO_PROGRAM_MUTATION = gql`
  mutation ADD_WORKOUT_TO_PROGRAM_MUTATION($programId: ID!, $workoutId: ID!) {
    addToProgramWorkouts(programProgramId: $programId, workoutsWorkoutId: $workoutId) {
      workoutsWorkout {
        id
        date
        description
      }
    }
  }
`