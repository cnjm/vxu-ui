import './index.scss'
import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('button')

export default defineComponent({
  name,

  setup () {
    return () => {
      return (
        <div class='test'>按钮1111</div>
      )
    }
  }
})
