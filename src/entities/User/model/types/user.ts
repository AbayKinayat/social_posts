export interface User {
  id: number | string,
  username: string,
  avatar?: string
}

export interface UserSchema {
  authData: User | null
}
