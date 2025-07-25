import '../src/styles/output.css';

if (module.hot) {
  module.hot.accept('../src/styles/output.css', () => {
    console.log('CSS reloaded');
  });
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}