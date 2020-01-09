# Editor extension spec

## Activation
The extension should be manually activated or automatically by setting a workspace setting.

## Commands
The extension should handle the following commands. One can send multiple edits per message, edits are described in the edits array sent along with the message.

``` json
{
  edits: []
}
```

**Edit CSS Property**
Command: `devSync.editCSSProperty`
Parameters: `styleSheetPath: string`, `range: SourceRange`, `text: string`
Description: Replaces the text in the file specified by `styleSheetPath` at the range specified by `range` with the text from `text`

**Add CCS Property**
Command: `devSync.addCSSProperty `
Parameters: `styleSheetPath: string`, `targetRange: SourceRange`, `text: string`
Description: Add the text from `text` to the file specified by `styleSheetPath` at the range specified by `range`, only the `startLine` and `startColumnn` will be taken into account.

**Delete CSS Property**
Command: `devSync.deleteCSSProperty `
Parameters: `styleSheetPath: string`, `range: SourceRange`
Description: Delete the text from the file specified by `styleSheetPath` at the range specified by `range`.

**Save File**
Command: `devSync.saveFileEdits `
Parameters: `path: string`
Description: Excecute a save action on the file specified by `path`.