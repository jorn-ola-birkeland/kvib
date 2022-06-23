// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KVIB Styleguides',
  tagline: 'Styleguides',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/farger.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Tittel',
          logo: {
            alt: 'Docusaurus logo',
            src: 'img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'figma-id',
              position: 'left',
              label: 'KVIB Figma',
            },
            {
              type: 'doc',
              docId: 'uu-id',
              position: 'left',
              label: 'UU',
            },
            {
              type: 'doc',
              docId: 'sideelementer-id',
              position: 'left',
              label: 'Sideelementer',
            },
            {
              type: 'doc',
              docId: 'typografi-id',
              position: 'left',
              label: 'Typografi',
            },
            {
              type: 'doc',
              docId: 'inputfelt-id',
              position: 'left',
              label: 'Inputfelt',
            },
            {
              type: 'doc',
              docId: 'grids-id',
              position: 'left',
              label: 'Grid',
            },
            {
              type: 'doc',
              docId: 'logo-id',
              position: 'left',
              label: 'Logo',
            },
            {
              type: 'doc',
              docId: 'icons-id',
              position: 'left',
              label: 'Ikoner',
            },
            {
              type: 'doc',
              docId: 'nav-id',
              position: 'left',
              label: 'Navigasjon',
            },
            {
              type: 'doc',
              docId: 'knapper-id',
              position: 'left',
              label: 'Knapper',
            },
            {
              type: 'doc',
              docId: 'farger-id',
              position: 'left',
              label: 'Farger',
            },
            {
              type: 'doc',
              docId: 'tutorial/intro',
              position: 'right',
              label: 'Tutorial',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'KVIB Figma',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
