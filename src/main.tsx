
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting application...');

const rootElement = document.getElementById("root");
console.log('Root element found:', rootElement);

if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found</div>';
  throw new Error("Root element not found");
}

try {
  const root = createRoot(rootElement);
  console.log('React root created successfully');
  root.render(<App />);
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error rendering app:', error);
  document.body.innerHTML = `<div style="padding: 20px; color: red;">Error rendering app: ${error}</div>`;
}
