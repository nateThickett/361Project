let { app, BrowserWindow } = require('electron')

let mainwindow = null

let createwindow = () => {
    mainwindow = new BrowserWindow({
        width : 1280,
        height : 720,
        webPreferences : {
            nodeIntegration : true,
            enableRemoteModule : true
        }
    })

    mainwindow.loadFile(__dirname + '/UI/index.html')

    mainwindow.on('ready-to-show' , () => {
        mainwindow.show();
    })
}

app.on('ready' , () => {
    createwindow();
})

app.on('window-all-closed' , () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
})