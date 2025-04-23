import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "MineCube",
  tagline: "#1 EarthSMP",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://wiki.minecube.pl",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "minecubepl", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/minecubepl/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "MineCube",
      logo: {
        alt: "MineCube Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Wikipedia Serwerowa",
        },
        //{ to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://mapa.minecube.pl/",
          label: "🗺️ Mapa EarthSMP",
          position: "right",
        },
        {
          href: "https://dc.minecube.pl/",
          label: "🎙️ Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} MineCube. Built with Docusaurus.<div>This website is not an official Minecraft site and is not affiliated with Mojang Studios or Microsoft. All product and company names are trademarks or registered trademarks of their respective owners. The use of these names does not indicate any official connection or endorsement.</div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
