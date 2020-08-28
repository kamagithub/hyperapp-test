import { h, app } from 'hyperapp'
import './App.css';

const init = {
  count: 0
}

const Up = state => ({ count: state.count + 1 });
const Down = state => ({ count: state.count - 1 });

const view = state => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={Down} disabled={state.count <= 0}>-</button>
    <button onclick={Up}>+</button>
  </main>
);

app({ init, view, node: document.getElementById("app") });
