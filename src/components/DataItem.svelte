<script lang="ts">
  import type { FeatureContent } from '@/types';

  type Props = { item: FeatureContent };
  let { item }: Props = $props();
</script>

<dt class="data__key">{@html item.key}</dt>
<dd class="data__value">{@html item.value}</dd>
{#if item.annotation}
  <span class="data__annotation">{@html item.annotation}</span>
{/if}
