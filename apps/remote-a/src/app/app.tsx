// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext } from 'react';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import {AuthContext} from '@micro-fe/fe/auth'



export function App() {
  const Auth = useContext(AuthContext)
  return (
    <>
      <NxWelcome title={Auth.user} />
      <div />
    </>
  );
}

export default App;
