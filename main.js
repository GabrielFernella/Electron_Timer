const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({ 
        width:600, //tamanho da tela
        height:400
    })

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})

app.on('window-all-closed', () => {
    app.quit();
})