export interface User {
  id: 1,
  username: string,
}

export interface UserSchema {
  authData: User | null
}
