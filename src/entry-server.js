import javascriptLogo from './javascript.svg'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { remark } from 'remark'
import html from 'remark-html'

const postPath = path.join(process.cwd(),'src/ma.md')
const file = fs.readFileSync(postPath)
const matterResult = matter(file)
const htm = await remark().use(html).process(matterResult.content)
const stringH = htm.toString()

export function render() {
  const html = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
      <h1>${matterResult.data.title}</h1>
      <h1>${stringH}</h1>
    </div>
  `
  return { html }
}
