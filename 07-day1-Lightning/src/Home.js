import { Lightning, Router } from '@lightningjs/sdk'

export default class Home extends Lightning.Component {
  static _template() {
    return {
      Text: {
        text: {
          text: "I'll guess the button you press...",
          fontSize: 40,
          textColor: 0xFF000000,
        },
        mountX:  0.5,
        x: 960,
        y: 100,
      },
    }
  }

  _handleLeft() {
    this.patch({ Text: { text: { text: "You pressed left..." } } });
  }

  _handleRight() {
    this.patch({ Text: { text: { text: "You pressed right..." } } });
  }

  _handleUp() {
    this.patch({ Text: { text: { text: "You pressed up..." } } });
  }

  _handleDown() {
    this.patch({ Text: { text: { text: "You pressed down..." } } });
  }

  _handleEnter() {
    Router.navigate("travel");
  }
}
