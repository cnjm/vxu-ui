import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('button')

export default defineComponent({
  name,

  setup () {
    return () => {
      return (
        <div>按钮</div>
      )
    }
  }
})
