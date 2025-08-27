import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "infinite mind pictures",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl:"infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Orbitron", // Sci-fi / gaming feel
        body: "Inter",       // Clean and modern
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f3f3f7",
          lightgray: "#d8d8e0",
          gray: "#a0a0b0",
          darkgray: "#444458",
          dark: "#1b1b25",
          secondary: "#005f99",       // Primary brand color
          tertiary: "#00b2ca",        // Accent
          highlight: "rgba(0, 95, 153, 0.1)",
          textHighlight: "#ffff0080", // Yellow glow
        },
        darkMode: {
          light: "#1b1d23",
          lightgray: "#2e3139",
          gray: "#5c5f69",
          darkgray: "#c2c6d3",
          dark: "#e4e6ed",
          secondary: "#3db2ff",
          tertiary: "#00b2ca",
          highlight: "rgba(0, 178, 202, 0.2)",
          textHighlight: "#ffd70066", // Gold glow
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "absolute",
        openLinksInNewTab: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssSlug: "rss"
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(), // Customize these for each game or article
    ],
  },
}


export default config
