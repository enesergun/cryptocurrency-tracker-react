import Router from './Router/Router';
import  GlobalStyle  from './Components/styles/Global';
import { TrackerProvider } from './Context/tracker';

function App() {
  return (
    <TrackerProvider>
      <GlobalStyle />
      <Router />
    </TrackerProvider>
  );
}

export default App;
