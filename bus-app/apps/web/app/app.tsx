import NxWelcome from './nx-welcome';
import { Hello } from '@bus-app/packages';

export function App() {
  return (
    <div>
      <NxWelcome title="@bus-app/web" />
      <Hello />
    </div>
  );
}

export default App;
