export interface singleWorkout {
  id: number
  level: number
  name: string
  numberOfSeries: number[]
  quantityInSeries: number[]
}

export interface singleHistoryWorkout {
  level: number
  numberOfSeries: number[]
  quantityInSeries: number[]
}

export interface allWorkouts {
  bridge: singleWorkout
  legRaising: singleWorkout
  pullUps: singleWorkout
  pushUps: singleWorkout
  pushUpsOnHands: singleWorkout
  squads: singleWorkout
}

export interface allHistoryWorkouts {
  bridge: singleHistoryWorkout
  legRaising: singleHistoryWorkout
  pullUps: singleHistoryWorkout
  pushUps: singleHistoryWorkout
  pushUpsOnHands: singleHistoryWorkout
  squads: singleHistoryWorkout
}

export interface WorkoutData {
  execution: string
  goals: {
    beginner: string
    medium: string
    transition: string
  }
  improvment: string
  level: number
  title: string
  xray: string
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  userName: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface IdToUid {
  id: string
  uid: string
}

export interface GoogleData {
  email: string
  expiresIn: string
  idToken: string
  kind: string
  localId: string
  refreshToken: string
}
