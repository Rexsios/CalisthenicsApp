import React, { Component } from 'react'

import axios from 'axios'
import WorkoutMethods from '../../Types/Classes/WorkoutMethods'
import { WhichWorkout } from '../../Types/Enums/enumsList'

export default class LoginPage extends Component {

    createUser = () => {
        const user = {
            name: "Slawko",
            surname: "Palka",
            password: "123",
            workoutType: {
                bridge: WorkoutMethods.createSingleWorkoutObject(WhichWorkout.BRIDGE, 1, "Mostek", [0, 0], [0, 0]),
                legRaising: WorkoutMethods.createSingleWorkoutObject(WhichWorkout.LEGRAISING, 1, "Unoszenie nóg", [0, 0], [0, 0]),
                pushUps: WorkoutMethods.createSingleWorkoutObject(WhichWorkout.PUSHUPS, 1, "Pompki", [0, 0], [0, 0]),
                pushUpsOnHands: WorkoutMethods.createSingleWorkoutObject(WhichWorkout.PUSHUPSONHANDS, 1, "Pompki na rękach", [0, 0], [0, 0]),
                pullUps: WorkoutMethods.createSingleWorkoutObject(WhichWorkout.PULLUPS, 1, "Podciąganie", [0, 0], [0, 0]),
                squads: WorkoutMethods.createSingleWorkoutObject(WhichWorkout.SQUADS, 1, "Przysiady", [0, 0], [0, 0])
            },
            workoutTypeHistory: {
                bridge: {
                    id: WhichWorkout.BRIDGE
                },
                legRaising: {
                    id: WhichWorkout.LEGRAISING
                },
                pushUps: {
                    id: WhichWorkout.PUSHUPS
                },
                pushUpsOnHands: {
                    id: WhichWorkout.PUSHUPSONHANDS
                },
                pullUps: {
                    id: WhichWorkout.PULLUPS
                },
                squads: {
                    id: WhichWorkout.SQUADS
                }
            }
        }
        axios.post("https://sportplan-addc3.firebaseio.com/Users.json", user);
    }

    render() {
        return (
            <div>
                <button onClick={this.createUser}>CreateUser</button>
            </div>
        )
    }
}
