<script lang="ts">
  import type { Section, DefaultContent } from '#/types';
  import Experience from './Experience.svelte';

  type Props = { sections: Section<DefaultContent>[] };
  let { sections }: Props = $props();
</script>

<main class="main content">
  {#each sections as section}
    <section class="section">
      <h2 class="section__heading">{section.heading}</h2>
      <div class="section__content">
        {#each section.content as subsection}
          <Experience content={subsection} />
        {/each}
      </div>
    </section>
  {/each}
</main>
