import { createGlobalStyle } from '@/injectStyle'
import { generateUniqueName } from '@/utils'

export function keyframes(kfString: TemplateStringsArray) {
  const keyframeName = `kf-${generateUniqueName()}`
  createGlobalStyle`
      @keyframes ${keyframeName} {
      ${kfString.join('')}
      }
  `
  return keyframeName
}
