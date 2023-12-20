import { Provider } from 'react-redux';
import './App.css';
import Market from './components/Market/Market';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <Market />
    </Provider>
  );
}

export default App;

