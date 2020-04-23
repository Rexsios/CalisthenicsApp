import { singleWorkout, singleHistoryWorkout } from "../Interfaces/InterfecesList"
import { WhichWorkout } from "../Enums/enumsList"

export default class WorkoutMethods {

    static createSingleWorkoutObject = (id: number, level: number, name: string, numberOfSeries: number[], quantityInSeries: number[]): singleWorkout => {
        return {
            id: id,
            level: level,
            name: name,
            numberOfSeries: numberOfSeries,
            quantityInSeries: quantityInSeries
        }
    }

    static createSingleHistoryWorkoutObject = (level: number, numberOfSeries: number[], quantityInSeries: number[]): singleHistoryWorkout => {
        return {
            level: level,
            numberOfSeries: numberOfSeries,
            quantityInSeries: quantityInSeries
        }
    }

    static checkIdName = (id: number): string | null => {
        let typeOfWorkout = null;
        switch (id) {
            case WhichWorkout.BRIDGE:
                typeOfWorkout = "bridge"
                break
            case WhichWorkout.LEGRAISING:
                typeOfWorkout = "legRaising"
                break
            case WhichWorkout.PUSHUPS:
                typeOfWorkout = "pushUps"
                break
            case WhichWorkout.PUSHUPSONHANDS:
                typeOfWorkout = "pushUpsOnHands"
                break
            case WhichWorkout.PULLUPS:
                typeOfWorkout = "pullUps"
                break
            case WhichWorkout.SQUADS:
                typeOfWorkout = "squads"
                break
            default:
                typeOfWorkout = null;
        }
        return typeOfWorkout;
    }
}
