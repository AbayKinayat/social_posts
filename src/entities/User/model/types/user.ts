export interface User {
  id: 1,
  username: string,
  password: string,
}

export interface UserSchema {
  authData: User | null
}
