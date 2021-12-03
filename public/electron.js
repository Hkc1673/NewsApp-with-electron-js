const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
 
let mainWindow;
 
function createWindow() {
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false
    });
    const startURL = isDev ? "http://localhost:3000" : `file://${__dirname}/../build/index.html`
 
    mainWindow.loadURL(startURL);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

app.on('ready', createWindow);