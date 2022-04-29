import ReactDOM from 'react-dom/client';
import App from './components/app';
import './index.css';
import { restaurants } from './fixtures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App restaurants={restaurants} />);
