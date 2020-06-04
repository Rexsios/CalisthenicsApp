import WorkoutMethods from './WorkoutMethods'
import { WhichWorkout } from '../Enums/enumsList'

export default class SignUpUsers {
  static createUser = (userName: string) => {
    const historyLvlStartData = () => {
      return {
        lvl1: {
          level: 1,
          numberOfSeries: [0],
          quantityInSeries: [0],
        },
      }
    }

    return {
      name: userName,
      workoutType: {
        bridge: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.BRIDGE,
          1,
          'Mostek',
          [0],
          [0]
        ),
        legRaising: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.LEGRAISING,
          1,
          'Unoszenie nóg',
          [0],
          [0]
        ),
        pushUps: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PUSHUPS,
          1,
          'Pompki',
          [0],
          [0]
        ),
        pushUpsOnHands: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PUSHUPSONHANDS,
          1,
          'Pompki na rękach',
          [0],
          [0]
        ),
        pullUps: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PULLUPS,
          1,
          'Podciąganie',
          [0],
          [0]
        ),
        squads: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.SQUADS,
          1,
          'Przysiady',
          [0],
          [0]
        ),
      },
      workoutTypeHistory: {
        bridge: historyLvlStartData(),
        legRaising: historyLvlStartData(),
        pushUps: historyLvlStartData(),
        pushUpsOnHands: historyLvlStartData(),
        pullUps: historyLvlStartData(),
        squads: historyLvlStartData(),
      },
    }
  }
}
