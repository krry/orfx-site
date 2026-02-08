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

<p class="text-xs text-slate-500 tracking-wide">
  {currentAcronym.O} {currentAcronym.R} {currentAcronym.F} {currentAcronym.X}
</p>

<style>
  /* Capitalize first letter of each word */
</style>
