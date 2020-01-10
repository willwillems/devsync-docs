# Quickstart

## Chrome extension

Install [the Chrome extension](https://chrome.google.com/webstore/detail/devsync-browser-extention/jbfpihodompkabhioebjpgbedmfchepf) by clicking the Add to Chrome button.

![Add to chrome](https://i.imgur.com/ZegPUmf.png "Chrome browser extension page")

Once you've installed the Chrome extension it will become available trough the devtools panel in Chrome.

![Location extension](https://i.imgur.com/xNn1a38.png "Extension location")

It will automatically connect with the Devsync editor extension once it becomes available.

## Editor extension

Install the editor extension by searching for "Devsync" in your editor's marketplace and installing it.

You can start the extension either by running the `Devsync: Start` command in your editor or by placing a `.devsync` file in your project root which will make it auto-start on launch.

When you start the extension your editor should notify you with the notification: "Devsync started". When the Chrome extension connects you should see a notification with the text: "Browser connected to extension".

### Download links
- [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Devsync.devsync-vsc)

## Using Devsync

Devsync works similar to most popular visual editors.

### Selecting the element to modify

![Select demo](https://i.imgur.com/2QIyxq6.mp4 "Selecting a DOM element")

Devsync injects a simple overlay into the page you're editing to help select the correct element, on clicking the element Devsync will fetch the CSS of the element and you'll be able to edit it in the devtools panel.

### Selecting the CSS to edit

![Selecting selector](https://i.imgur.com/w6F4Ck0.mp4 "Selecting the selector to edit")

This is only necessary when adding CSS properties, when editing existing ones Devsync will just pick the most relevant rule, indicated by the color assigned to the border of the respective input. The border colors of the active inputs correspond to these selectors.

### Editing CSS property values

![Editing properties](https://i.imgur.com/MlEFdlE.mp4 "Editing CSS properties")

You can just edit the values like you would do in a normal editor, some inputs can be dragged with the mouse to change the input value, numeric inputs can be incremented and decremented with the up and down arrow keys (hold shift to 10x the steps).

### Adding CSS property values

![Adding properties](https://i.imgur.com/ZI9DXnM.mp4 "Adding CSS properties")

Selecting an input and filling in a value will automatically add a new CSS rule with this value to the active selector (see: Selecting the CSS to edit).

### Deleting CSS properties

![Deleting properties](https://i.imgur.com/wVTQIrv.mp4 "Deleting CSS properties")

Clicking on an input holding the `CNTRL`/`CMD` will remove the CSS property.