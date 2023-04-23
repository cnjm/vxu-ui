
import _Input from './input.vue'
import { withInstall } from '../utils/withInstall'
// export default withInstall(_Button)
const Input = withInstall(_Input)
const stdinDefault = Input

export type { InputProps } from './types'
export {
  Input,
  stdinDefault as default
}
