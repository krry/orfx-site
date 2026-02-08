<script>
  import acronyms from '../data/acronyms.json';

  let currentAcronym = { O: '', R: '', F: '', X: '' };

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function pickRandomWord(letter) {
    const words = acronyms[letter];
    const word = words[Math.floor(Math.random() * words.length)];
    return capitalize(word);
  }

  function generateAcronym() {
    currentAcronym = {
      O: pickRandomWord('O'),
      R: pickRandomWord('R'),
      F: pickRandomWord('F'),
      X: pickRandomWord('X')
    };
  }

  // Generate on mount
  if (typeof window !== 'undefined') {
    generateAcronym();
  }
</script>

<div class="space-y-1">
  <p class="text-sm text-slate-400 tracking-wide">
    <span class="font-bold text-amber-300">O.R.F.X.</span>
    <span class="ml-2 text-xs text-slate-500">
      {currentAcronym.O}
      {currentAcronym.R}
      {currentAcronym.F}
      {currentAcronym.X}
    </span>
  </p>
</div>

<style>
  /* Capitalize first letter of each word */
</style>
