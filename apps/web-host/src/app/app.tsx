import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const RemoteA = React.lazy(() => import('remote-a/Module'));

const RemoteB = React.lazy(() => import('remote-b/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/remote-a">RemoteA</Link>
        </li>

        <li>
          <Link to="/remote-b">RemoteB</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web-host" />} />

        <Route path="/remote-a" element={<RemoteA />} />

        <Route path="/remote-b" element={<RemoteB />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
