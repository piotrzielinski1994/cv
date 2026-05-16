<script lang="ts">
  import type { FeatureContent, Features, Section } from '#/types';
  import DataItem from './DataItem.svelte';
  import FeatureList from './FeatureList.svelte';

  type Props = { section: Section<FeatureContent | Features> };
  let { section }: Props = $props();

  function isFeatures(item: FeatureContent | Features): item is Features {
    return 'values' in item;
  }

  const columns = $derived(section.columns ?? 1);
</script>

<section class="section">
  <h2 class="section__heading">{section.heading}</h2>
  <div class="section__content">
    <dl class="data" class:data--multi={columns > 1} style:--data-columns={columns}>
      {#each section.content as item}
        {#if isFeatures(item)}
          <FeatureList features={item} />
        {:else}
          <DataItem {item} />
        {/if}
      {/each}
    </dl>
  </div>
</section>
