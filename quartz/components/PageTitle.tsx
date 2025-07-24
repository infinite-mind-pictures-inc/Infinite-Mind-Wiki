import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const siteBase = cfg.baseUrl ? new URL(`https://${cfg.baseUrl}`).pathname : ""
  const defaultIcon = `${siteBase}/images/low/icon.webp`

  // Render <script> for client-side logging and icon path adjustment
  const clientScript = `
    console.log("🔍 URL Debug Info:");
    console.log("window.location.href:", window.location.href);
    console.log("window.location.origin:", window.location.origin);
    console.log("window.location.hostname:", window.location.hostname);
    console.log("window.location.port:", window.location.port);
    console.log("window.location.pathname:", window.location.pathname);
    console.log("window.location.protocol:", window.location.protocol);
    console.log("document.baseURI:", document.baseURI);

    const icon = document.querySelector(".page-title-icon");
    if (icon && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
      icon.src = "/images/low/icon2_white.webp";
    }
  `

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <img src={defaultIcon} alt="Home Icon" class="page-title-icon" />

      </a>
      <script dangerouslySetInnerHTML={{ __html: clientScript }} />
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
}

.page-title-icon {
  width: 8rem;
  height: 8rem;
}

.page-title-text {
  display: inline;
}

@media (max-width: 600px) {
  .page-title-text {
    display: none;
  }
  .page-title-icon {
    width: 3rem;
    height: 3rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
