export interface singleWorkout {
    id: number,
    level: number,
    name: string,
    numberOfSeries: number[],
    quantityInSeries: number[]
}

export interface singleHistoryWorkout {
    level:number,
    numberOfSeries:number[],
    quantityInSeries: number[]
}

export interface allWorkouts {
    bridge: singleWorkout,
    legRaising: singleWorkout,
    pullUps: singleWorkout,
    pushUps: singleWorkout,
    pushUpsOnHands: singleWorkout,
    squads: singleWorkout
}

export interface allHistoryWorkouts {
    bridge: singleHistoryWorkout,
    legRaising: singleHistoryWorkout,
    pullUps: singleHistoryWorkout,
    pushUps: singleHistoryWorkout,
    pushUpsOnHands: singleHistoryWorkout,
    squads: singleHistoryWorkout
}