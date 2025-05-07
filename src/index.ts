import createPlugin from 'tailwindcss/plugin'
import { base, light, dark, styles } from './github-markdown'

function convert(styles: Record<string, object>): Record<string, Record<string, string>> {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [
      key,
      Object.fromEntries(Object.entries(value).map(([k, v]) => [k, String(v)])),
    ]),
  )
}

const markdown: ReturnType<typeof createPlugin> = createPlugin(({ addComponents }) => {
  addComponents(base)
  addComponents(light)
  addComponents(dark)
  addComponents(convert(styles))
})

export default markdown
