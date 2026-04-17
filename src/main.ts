import data from '#data/data';
import { mount } from 'svelte';
import App from './App.svelte';

mount(App, {
  target: document.getElementById('app')!,
  props: { data },
});
