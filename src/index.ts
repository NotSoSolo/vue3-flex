import { App } from 'vue'
import Flex from './Flex.vue'

export default Flex;

export function install(app: App, options: { name: string }) {
  const finalOptions = Object.assign(
    {},
    {
      name: 'Flex',
    },
    options,
  )

  app.component(`${finalOptions.name}`, Flex)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

// export default plugin
