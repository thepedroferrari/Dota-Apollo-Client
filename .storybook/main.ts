module.exports = {

  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    '@storybook/addon-storysource'
  ]
};
