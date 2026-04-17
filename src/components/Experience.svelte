<script lang="ts">
  import type { DefaultContent } from '@/types';
  import ExperienceHeader from './ExperienceHeader.svelte';
  import ExperienceItem from './ExperienceItem.svelte';

  type Props = { content: DefaultContent };
  let { content }: Props = $props();
</script>

<article class="exp">
  <ExperienceHeader {content} />

  {#each content.items as item}
    <ExperienceItem {...item} />
  {/each}
</article>
