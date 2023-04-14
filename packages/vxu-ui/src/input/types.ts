import { ExtractPropTypes } from 'vue'

export const inputProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  }
}

export type InputProps = ExtractPropTypes<typeof inputProps>
