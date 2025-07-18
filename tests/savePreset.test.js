const { applyPresetToBoard, savePreset } = require('../src/presetUtils');

test('saving after selecting a preset stores the correct words', () => {
  const gameState = {
    presets: {
      default: { words: Array.from({ length: 25 }, (_, i) => `WORD${i}`), displayName: 'Default' },
      movies: { words: Array.from({ length: 25 }, (_, i) => `MOVIE${i}`), displayName: 'Movies' },
    },
    cards: [],
    currentPreset: 'default',
  };

  applyPresetToBoard(gameState, 'movies');
  const newId = savePreset(gameState, 'Copy');
  expect(gameState.presets[newId].words).toEqual(gameState.presets['movies'].words);
});
