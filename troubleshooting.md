# Troubleshooting

Most often the problem lies with your setup not generating sourcemaps correctly. You can verify this by using the "Elements" panel in the Chrome devtools to see if the CSS is sourcemapped to it's original location.

![Sourcemapped CSS](https://i.imgur.com/ZWPixvH.mp4)

## Editor connection

Devsync will automatically connect to the first editor workspace that starts the Devsync editor plugin, you can start this using the Devsync: Start e.g. `devsync.start` command). In VS Code the connection status should be visible in the left corner of the status bar. In the browser extension the connection status should be visible in the left corner indicated by either a green or red dot.

## Selection overlay does not appear

Probably the "'Devsync Browser Extension' is debugging this browser" message was dismissed somehow, this can happen in multiple ways. To fix this just close the devtools and open them again. The bar will reappear.

![Devsync is debugging message](https://i.imgur.com/e2W7S0p.png)