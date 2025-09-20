import header from './pages/header';

const app = function () {
  return `
    <div class="app-bg__overlay"></div>
  <div class="app-width">
    <main class="app-container">
      ${header}
    </main>
  </div>
  `;
};

export default app();
