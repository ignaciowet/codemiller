# CodeMiller

A browser-based word association game inspired by Codenames. Open `Codigo Miller.html` in your web browser to play.

## Running the Game
1. Clone the repository and navigate into it.
2. Open `Codigo Miller.html` in any modern browser.

The game interface lets you select or create presets and play directly in the browser without any additional build step.

## Presets and Local Storage
- Built-in presets `default` and `movies` are available on first load.
- Any custom presets you create are saved under the `codeNamePresets` key in the browser's `localStorage`.
- The presets object stored there maps preset IDs to data containing a display name and an array of words.
- Because presets are saved locally, they persist across browser sessions on the same machine.

## Creating, Editing and Saving Presets
1. From the main menu, choose **Crear Nuevo** or select `custom` to start with a blank board.
2. Enter or edit words while in **Modo Edición**.
3. Use **Guardar Preset** to save your current board. Provide a name when prompted.
4. Existing presets show edit and delete icons on their cards. Use these to modify or remove them.
5. All changes are immediately saved back to `localStorage` and appear in the preset selection grid.

## Running Tests
Install dependencies and execute the test suite with:

```bash
npm install
npm test
```

Tests use Jest and cover utilities such as the array shuffler found in `src/`.
