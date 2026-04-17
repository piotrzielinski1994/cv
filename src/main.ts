import App from './App.svelte';
import { mount } from 'svelte';
import data from '../data/data';

mount(App, {
  target: document.getElementById('app')!,
  props: { data },
});
