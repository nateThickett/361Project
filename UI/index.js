let {remote} = require('electron')
let dialog = remote.dialog;
let mainWindow = remote.getCurrentWindow()

let selectFile = document.getElementById('selectFile')

selectFile.onclick = async () => {
    let file = await dialog.showOpenDialog(mainWindow , {
        filters : [
            {
                name : 'Music files',
                extensions : ['mp3'],
            },
        ],
    });

    console.log(file);
}