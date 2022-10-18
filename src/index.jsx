/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import App from './App';

render(() => <App />, document.getElementById('root'));
