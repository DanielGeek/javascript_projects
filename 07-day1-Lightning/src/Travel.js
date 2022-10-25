import { Lightning } from '@lightningjs/sdk'

export default class Travel extends Lightning.Component {
  static _template() {
    return {
      Image: {
        mountX:  0.5,
        x: 960,
        y: 300,
        src: "./static/images/beach.jpg"
      }
    }
  }
}
