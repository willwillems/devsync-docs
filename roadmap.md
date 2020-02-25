# Roadmap
Here we will publish plans, updates, and what we are working on right now. If you have any feedback please do not hesitate to contact us.

## Currently
The main thing we're working on right now is bringing a small version of your editor to the browser. This small editor will function like Devsync without the visual interface and will be packaged as a smaller separate extension that communicates with Devsync. This is mainly to keep the update process separate and to make the editor as lightweight as possible.


## Updates
When using the Chrome Web Store to install the extension Devsync will automatically update to the latest version. After publishing a new version it can take a few business days for the Chrome Web Store to verify and publish the extension.

### 1.0.9
- Fix sourcemap paths not being correctly recognised on Windows systems.

### 1.0.8
- Editing of unbundled/unsourcemapped CSS.

### 1.0.7
- Smart-check when deleting CSS properties (in addition to the current smart check on modifying properties).

### 1.0.6
- Add keyboard shortcuts to select elements relative to selected DOM element.
- Implement warning when user dismisses debugger.

### 1.0.5
- Switch to Chrome Devtools overlay provider instead of using a custom overlay.

### 1.0.4
- Fix color selector not hiding properly when tabbing through the UI.
- Auto-refresh CSS rules on hot-reload of page.
- Redesign settings page to be clearer and more user-friendly.
- Trigger error when not connected to editor.
- Add save success notification.