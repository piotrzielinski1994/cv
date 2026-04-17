<script lang="ts">
  import type { Data } from './types';
  import Sidebar from './components/Sidebar.svelte';
  import Main from './components/Main.svelte';
  import './styles/index.scss';

  type Props = { data: Data };
  let { data }: Props = $props();
</script>

<div class="page">
  <div class="main-layout">
    <header class="header">
      <h1 class="title">{@html data.heading}</h1>
    </header>

    <Sidebar sidebar={data.sidebar} />
    <Main sections={data.main} />

    <footer class="clause">
      <p>{@html data.clause}</p>
    </footer>
  </div>
</div>
