const React = require('react');
const { ThemeProvider } = require('theme-ui');
const { Light } = require('@theme-ui/presets');

const newTheme = {
  ...Light,
  sizes: { container: 1024 },
};

module.exports = ({ element }) => (
  <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
);
