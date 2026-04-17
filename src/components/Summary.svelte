<script lang="ts">
  import type { Section } from '@/types';

  type Props = { summary: Section<string> };
  let { summary }: Props = $props();
</script>

<section class="section">
  <h2 class="section__heading">{@html summary.heading}</h2>
  <div class="section__content">
    {#each summary.content as paragraph}
      <p class="summary__paragraph">{@html paragraph}</p>
    {/each}
  </div>
</section>
