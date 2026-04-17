<script lang="ts">
  import type { Section, FeatureContent, Features } from '#/types';
  import FeatureList from './FeatureList.svelte';
  import DataItem from './DataItem.svelte';

  type Props = { section: Section<FeatureContent | Features> };
  let { section }: Props = $props();

  function isFeatures(item: FeatureContent | Features): item is Features {
    return 'values' in item;
  }
</script>

<section class="section">
  <h2 class="section__heading">{section.heading}</h2>
  <div class="section__content">
    <dl class="data">
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
