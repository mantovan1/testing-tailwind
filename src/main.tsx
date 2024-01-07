import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { TopicProvider } from './context/TopicContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TopicProvider>
			<App />
		</TopicProvider>
	</React.StrictMode>,
);
