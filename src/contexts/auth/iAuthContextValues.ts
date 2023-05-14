export interface IAuthContextValues {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}