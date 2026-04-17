<script lang="ts">
  import type { DefaultContent } from '@/types';

  type Props = { content: DefaultContent };
  let { content }: Props = $props();
</script>

{#if content.dates || content.heading}
  <header class="exp__header">
    {#if content.dates}
      {#each content.dates as date}
        <span class="exp__date">{date}</span>
      {/each}
    {/if}
    {#if content.heading}
      {#if content.heading.href}
        <a href={content.heading.href} target="_blank">
          <h3 class="exp__heading">{@html content.heading.label}</h3>
        </a>
      {:else}
        <h3 class="exp__heading">{@html content.heading.label}</h3>
      {/if}
    {/if}
  </header>
{/if}
