process.env.NODE_PATH = "src/"

import { configure } from '@storybook/react'

function loadStories() {
  // require('../src/stories');
  require('../src/components/shared/page401/index.stories.js')
  // require('../src/components/shared/pagination/index.stories.js')
}

configure(loadStories, module)
