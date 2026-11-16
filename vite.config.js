
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        store: 'store.html',
        events: 'events.html',
        admin: 'admin.html'
      }
    }
  }
});
