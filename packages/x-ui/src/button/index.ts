
import _Button from './button'
import { withInstall } from '../utils/withInstall'
// export default withInstall(_Button)
const Button = withInstall(_Button)
const stdinDefault = Button

export type { ButtonProps } from './types'
export {
  Button,
  stdinDefault as default
}
