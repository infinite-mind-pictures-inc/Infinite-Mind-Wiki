import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <img src={`${baseDir}/images/icon.png`} alt="Home Icon" class="page-title-icon" />
        <span class="page-title-text">{title}</span>
      </a>

      {/* Inline script runs only in the browser */}
      <script
        dangerouslySetInnerHTML={{
          __html: `<script>
            console.log("=== Base URL Debug ===")
            console.log("cfg.baseUrl:", "${cfg.baseUrl}")
            console.log("pathToRoot(fileData.slug!):", "${baseDir}")
            console.log("window.location.origin:", window.location.origin)
            console.log("window.location.href:", window.location.href)
            console.log("window.location.pathname:", window.location.pathname)
            console.log("========================")</script>
          `,
        }}
      />
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
  width: 5rem;
  height: 5rem;
}

.page-title-text {
  display: inline;
}

@media (max-width: 600px) {
  .page-title-text {
    display: none;
  }
}

`

export default (() => PageTitle) satisfies QuartzComponentConstructor
