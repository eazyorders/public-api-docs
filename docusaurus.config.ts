import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "EasyOrders API Docs",
  tagline: "Build powerful integrations with the EasyOrders platform",
  favicon: "https://www.easyorders.eg/easy-icon.png",

  url: "https://public-api-docs.easyorders.eg",
  baseUrl: "/",

  organizationName: "easyorders",
  projectName: "easyorders api",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/eazyorders/themes-docs/blob/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "https://www.easyorders.eg/easy-icon.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "EasyOrders",
      logo: {
        alt: "EasyOrders",
        src: "https://www.easyorders.eg/easy-icon.png",
        style: { height: "28px" },
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://www.easyorders.eg",
          label: "EasyOrders.eg",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "/docs/intro" },
            { label: "Authentication", to: "/docs/authentication" },
            { label: "Webhooks", to: "/docs/webhooks" },
          ],
        },
        {
          title: "API Reference",
          items: [
            { label: "Products", to: "/docs/create-product-api" },
            { label: "Categories", to: "/docs/create-category" },
            { label: "Orders", to: "/docs/get-order-by-id" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Rate Limits", to: "/docs/rate-limit" },
            { label: "Permissions", to: "/docs/permissions" },
            { label: "EasyOrders Website", href: "https://www.easyorders.eg" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} EasyOrders. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "http"],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
