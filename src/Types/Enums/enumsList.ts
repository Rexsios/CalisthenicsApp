export enum MessageType {
  GOOD,
  BAD,
}

export enum WhichWorkout {
  BRIDGE = 1,
  LEGRAISING,
  PUSHUPS,
  PUSHUPSONHANDS,
  PULLUPS,
  SQUADS,
}

export enum UpOrDown {
  UP,
  DOWN,
}

export enum Links {
  TRAINING = '/trening',
  INFORMATION = '/informacje',
  PROGRESS = '/postepy',
  LOGIN = '/logowanie',
  APP = '/aplikacja',
  REGISTER = '/rejestracja',
}

export enum LocalStorageAuth {
  TOKEN = 'userToken',
  UID = 'userUid',
  DATABASEID = 'userDatabaseId',
  EXPTIME = 'expirationData'
}
