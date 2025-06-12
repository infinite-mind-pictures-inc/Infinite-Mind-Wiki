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
        <img src={`${baseDir}/static/icon.png`} alt="Home Icon" class="page-title-icon" />
        <span class="page-title-text">{title}</span>
      </a>
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
