<script>
  import { onMount } from 'svelte';
  import acronyms from '../data/acronyms.json';

  let currentAcronym = {
    O: { display: '', original: '', hasPrefix: false },
    R: { display: '', original: '', hasPrefix: false },
    F: { display: '', original: '', hasPrefix: false },
    X: { display: '', original: '', hasPrefix: false }
  };
  
  let expanded = false;

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function pickRandomWord(letter) {
    const words = acronyms[letter];
    const word = words[Math.floor(Math.random() * words.length)];

    // Special handling for 'X' words that might start with 'ex'
    if (letter === 'X' && word.startsWith('ex')) {
      return {
        display: 'X' + word.slice(2),
        original: word,
        hasPrefix: true
      };
    }

    return {
      display: capitalize(word),
      original: word,
      hasPrefix: false
    };
  }

  function generateAcronym() {
    currentAcronym = {
      O: pickRandomWord('O'),
      R: pickRandomWord('R'),
      F: pickRandomWord('F'),
      X: pickRandomWord('X')
    };
  }

  function handleReload() {
    // Collapse
    expanded = false;
    
    // Wait for collapse animation, then regenerate and expand
    setTimeout(() => {
      generateAcronym();
      setTimeout(() => {
        expanded = true;
      }, 50);
    }, 300);
  }

  // Generate on mount
  onMount(() => {
    generateAcronym();
  });
</script>

<span 
  class="acronym-container text-slate-400 tracking-widest leading-tight"
  class:expanded
  on:mouseenter={() => expanded = true}
  on:focus={() => expanded = true}
  tabindex="0"
  role="button"
  aria-label="Expand ORFX acronym"
>
    <span class="dynacro-word">
        <span class="text-amber-300 initial-cap">{currentAcronym.O.display.charAt(0)}</span><span class="text-lg text-slate-700 dark:text-slate-300 dangle">{currentAcronym.O.display.slice(1)}</span>
    </span>
    <span class="dynacro-word">
        <span class="text-amber-300 initial-cap">{currentAcronym.R.display.charAt(0)}</span><span class="text-lg text-slate-700 dark:text-slate-300 dangle">{currentAcronym.R.display.slice(1)}</span>
    </span>
    <span class="dynacro-word">
        <span class="text-amber-300 initial-cap">{currentAcronym.F.display.charAt(0)}</span><span class="text-lg text-slate-700 dark:text-slate-300 dangle">{currentAcronym.F.display.slice(1)}</span>
    </span>
    <span class="dynacro-word">
      {#if currentAcronym.X.hasPrefix}
          <span class="text-lg text-slate-700 dark:text-slate-300 prefix topple">e</span>
      {/if}
      <span class="text-amber-300 initial-cap">{currentAcronym.X.display.charAt(0)}</span><span class="text-lg text-slate-700 dark:text-slate-300 dangle">{currentAcronym.X.display.slice(1)}</span>
    </span>
    
    <button 
      class="reload-btn text-xl ml-2 text-amber-300 hover:text-amber-400 transition-colors cursor-pointer"
      on:click|stopPropagation={handleReload}
      aria-label="Regenerate acronym"
    >
      ♻️
    </button>
</span>

<style>
    .acronym-container {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
    }

    .dynacro-word {
        display: inline-flex;
        align-items: baseline;
    }

    .initial-cap {
        display: inline-block;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* Dangles hidden by default */
    .dangle,
    .prefix {
        display: inline-block;
        max-width: 0;
        opacity: 0;
        letter-spacing: 1px;
        overflow: hidden;
        transition: max-width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                    opacity 0.3s ease-in-out;
    }

    /* Dangles visible when expanded */
    .acronym-container.expanded .dangle,
    .acronym-container.expanded .prefix {
        max-width: 12ch;
        opacity: 0.6;
    }

    /* Reload button hidden by default */
    .reload-btn {
        opacity: 0;
        transform: scale(0);
        transition: opacity 0.3s ease-in-out,
                    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        border: none;
        background: none;
        padding: 0;
    }

    /* Reload button visible when expanded */
    .acronym-container.expanded .reload-btn {
        opacity: 1;
        transform: scale(1);
    }

    .reload-btn:focus {
        outline: 2px solid #fbbf24;
        outline-offset: 2px;
        border-radius: 4px;
    }
</style>