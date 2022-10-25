import { Router } from '@lightningjs/sdk';
import Home from './Home';
import Travel from './Travel';

export default class App extends Router.App {
  _setup() {
    Router.startRouter({
      root: "home",
      routes: [
        {
          path: "home",
          component: Home
        },
        {
          path: "travel",
          component: Travel
        }
      ]
    })
  }
}
