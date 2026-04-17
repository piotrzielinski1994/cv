<script lang="ts">
  type Props = {
    heading?: { label: string; annotation: string };
    bullets?: string[];
    additional?: string;
  };
  let { heading, bullets, additional }: Props = $props();
</script>

{#if heading}
  <h4>
    <span class="exp__subheading">{@html heading.label}</span>
    <span class="exp__subheading-annotation">{@html heading.annotation}</span>
  </h4>
{/if}

{#if bullets && bullets.length > 0}
  <ul class="list">
    {#each bullets as bullet}
      <li class="list__item">
        <span>{@html bullet}</span>
      </li>
    {/each}
  </ul>
{/if}

{#if additional}
  <span class="exp__additional">{@html additional}</span>
{/if}
