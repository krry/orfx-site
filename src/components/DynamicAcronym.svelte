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

<p class="text-sm text-slate-400 tracking-widest leading-tight">
  <span class="text-2xl font-bold text-amber-300">{currentAcronym.O.charAt(0)}</span><span class="text-xs text-slate-500 opacity-60">{currentAcronym.O.slice(1)}</span>
  {' '}
  <span class="text-2xl font-bold text-amber-300">{currentAcronym.R.charAt(0)}</span><span class="text-xs text-slate-500 opacity-60">{currentAcronym.R.slice(1)}</span>
  {' '}
  <span class="text-2xl font-bold text-amber-300">{currentAcronym.F.charAt(0)}</span><span class="text-xs text-slate-500 opacity-60">{currentAcronym.F.slice(1)}</span>
  {' '}
  <span class="text-2xl font-bold text-amber-300">{currentAcronym.X.charAt(0)}</span><span class="text-xs text-slate-500 opacity-60">{currentAcronym.X.slice(1)}</span>
</p>
