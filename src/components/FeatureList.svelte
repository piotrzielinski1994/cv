<script lang="ts">
  import type { Features } from '@/types';

  type Props = { features: Features };
  let { features }: Props = $props();
</script>

<ul class="list">
  {#each features.values as value}
    <li class="list__item">{@html value}</li>
  {/each}
</ul>
