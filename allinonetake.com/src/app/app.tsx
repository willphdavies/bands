// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { App as SharedApp, AppProvider } from '@bands/shared';
import { albums } from '../data';
export function App() {
  return (
    <AppProvider logo={'/assets/logo.jpg'} albums={albums}>
      <SharedApp />
    </AppProvider>
  );
}

export default App;
