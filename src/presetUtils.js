function applyPresetToBoard(gameState, presetName) {
    const preset = gameState.presets[presetName];
    if (!preset) {
        throw new Error('Preset not found');
    }
    gameState.currentPreset = presetName;
    gameState.cards = preset.words.slice(0, 25).map((word, index) => ({
        id: index,
        word,
    }));
}

function savePreset(gameState, name) {
    const words = gameState.cards.map(c => c.word);
    const presetId = name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString().slice(-6);
    gameState.presets[presetId] = {
        words,
        displayName: name,
    };
    gameState.currentPreset = presetId;
    return presetId;
}

module.exports = { applyPresetToBoard, savePreset };
