<script>
  import { onMount } from 'svelte';

  let backgroundUrl = '';

  onMount(async () => {
    // Fetch list of background images from public/bkgd/
    try {
      const response = await fetch('/api/backgrounds.json');
      const { images } = await response.json();
      
      if (images && images.length > 0) {
        // Pick random image
        const randomImage = images[Math.floor(Math.random() * images.length)];
        backgroundUrl = `/bkgd/${randomImage}`;
      }
    } catch (error) {
      // No backgrounds available, that's okay
      console.log('No backgrounds found');
    }
  });
</script>

{#if backgroundUrl}
  <div class="background-container bg-slate-100 dark:bg-slate-900">
    <img 
      src={backgroundUrl} 
      alt="Background" 
      class="background-image"
      loading="lazy"
    />
  </div>
{/if}

<style>
  /* Styles defined in global.css */
</style>
