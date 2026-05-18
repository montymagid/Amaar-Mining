const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: 'Amaar Mining · Documentation Suite',
    backgroundColor: '#0C0E0E',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    // Remove default frame for a cleaner look (optional)
    // frame: false,
  });

  // Load the launcher page
  mainWindow.loadFile('src/index.html');

  // Open DevTools in development (comment out for production)
  // mainWindow.webContents.openDevTools();

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Remove default menu bar (optional — uncomment to hide it)
// Menu.setApplicationMenu(null);

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
