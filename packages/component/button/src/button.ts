import { ExtractPropTypes } from 'vue'

export const buttonProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
