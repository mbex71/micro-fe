import styles from './fe-auth.module.css';
import {createContext} from 'react'

export type TAuth = {
  user:string,
  token:string
}
export const AuthContext = createContext<TAuth>({
  user:'Firdaus',
  token:'Hallo'
})
/* eslint-disable-next-line */
export interface FeAuthProps {}

export function FeAuth(props: FeAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeAuth!</h1>
    </div>
  );
}

export default FeAuth;
