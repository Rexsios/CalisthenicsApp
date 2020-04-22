import React, { Component } from 'react'

import axios from 'axios'

export class LoginPage extends Component {

    createUser = () => {
        const user = {
            name: "Slawko",
            surname: "Palka",
            password: "123",
            workoutType: {
                bridge: {
                    id: 1,
                    name: "Mostek",
                    level: 1,
                    numberOfSeries: [0, 2],
                    quantityInSeries: [0, 20]
                },
                legRaising: {
                    id: 2,
                    name: "Unoszenie nóg",
                    level: 1,
                    numberOfSeries: [0, 2],
                    quantityInSeries: [0, 20]
                },
                pushUps: {
                    id: 3,
                    name: "Pompki",
                    level: 1,
                    numberOfSeries: [0, 2],
                    quantityInSeries: [0, 20]
                },
                pushUpsOnHands: {
                    id: 4,
                    name: "Pompki na rękach",
                    level: 1,
                    numberOfSeries: [0, 2],
                    quantityInSeries: [0, 20]
                },
                pullUps: {
                    id: 5,
                    name: "Podciąganie",
                    level: 1,
                    numberOfSeries: [0, 2],
                    quantityInSeries: [0, 20]
                },
                squads: {
                    id: 6,
                    name: "Przysiady",
                    level: 1,
                    numberOfSeries: [0, 2],
                    quantityInSeries: [0, 20]
                }
            },
            workoutTypeHistory: {
                bridge: {
                    id: 1
                },
                legRaising: {
                    id: 2
                },
                pushUps: {
                    id: 3
                },
                pushUpsOnHands: {
                    id: 4
                },
                pullUps: {
                    id: 5
                },
                squads: {
                    id: 6
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

export default LoginPage
