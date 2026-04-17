<script lang="ts">
  import type { Section, FeatureContent, Features } from '#/types';
  import Photo from './Photo.svelte';
  import Summary from './Summary.svelte';
  import SidebarSection from './SidebarSection.svelte';

  type Props = {
    sidebar: {
      image?: string;
      summary?: Section<string>;
      sections: Section<FeatureContent | Features>[];
    };
  };

  let { sidebar }: Props = $props();
</script>

<aside class="details content">
  {#if sidebar.summary}
    <Photo />
    <Summary summary={sidebar.summary} />
  {/if}

  {#each sidebar.sections as section}
    <SidebarSection {section} />
  {/each}
</aside>
