# Portal

## Setting up Portal

After installing Portal through the Chrome web store link it should become visible in your Chrome Toolbar just like Devsync.

Head to the extensions settings page through the Chrome menu or navigate directly to `chrome://extensions/`. You should see The Portal extension here.

Use the hamburger menu to go the the shortcuts page or navigate directly to: `chrome://extensions/shortcuts`. Click the "type a shortcut" box and enter a shortcut to activate Portal, we recommend using CMD/CNTRL+SHIFT+D, this will be used as the shortcut in this guide.

## Using Portal

You're now ready to use Portal. Go to a random webpage and use the shortcut CMD/CNTRL+SHIFT+D to activate the extension. The portal window should appear in the left bottom corner.

To start editing CSS you can hold the alt key to display a simple overlay. Click a highlighted element and you'll be able to edit its CSS.

## Connecting to your editor

In the top left of the Portal window you can see a status indicator.
- If this is greyed out no connection has been made yet with an editor.
- If this is green you are connected to your editor.
- If this is red you have been disconnected from your editor.

To connect your editor to Portal just head to your editor, open the command palette (CMD/CNTRL+SHIFT+P) and execute the `portal.start` command. That's it!

Your editor is now connected to Portal and portal will try to find matching CSS classes in your project. If you want to switch to editing the page's CSS directly again you can toggle this mode with the button in the top right of the Portal window.

## Shortcuts 

- `ALT`: Hold to highlight the currently selected element
- `ALT+SPACE`: Minimise
- `ALT+W/A/S/D`: Navigate through the DOM
- `ALT-(1/2/3/4/5/etc.)`: To select one of the tabs
- `ALT-Q/Z`: To navigate the matched sections in your editor

## Compatibility and Support

At this time Portal supports any style syntax that is similar to CSS, this includes LESS and SCSS but not SASS. Additionally it supports nesting selectors using the ampersand syntax.

Furthermore Portal currently looks for CSS class definitions in your `.vue`, `.svelte`, `.css`, `.scss`, `.pcss`, `.postcss`, `.js` and `.jsx` files.

## Troubleshooting

### I'm getting bundled/minified CSS in Portal instead of my source files

You can exclude folders from Portal's search by going to VS Code's settings and adding it to Portal's "Exclude In File Search Glob" field. By default it's already excluding `dist` and `node_modules`.

### The Portal in Chome is not opening

It's likely the shortcut has not properly bound, you can navigate to `chrome://extensions/shortcuts` to fix this, we recommend you pick the CMD/CNTRL+SHIFT+D shortcut but you can pick anything you like. 

![Extension shortcuts](https://i.imgur.com/gqcueYa.png)
*Your Portal shortcuts section should look like this*