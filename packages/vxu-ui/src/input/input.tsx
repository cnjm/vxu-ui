import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('input')

export default defineComponent({
  name,

  setup () {
    return () => {
      return (
        <input/>
      )
    }
  }
})
