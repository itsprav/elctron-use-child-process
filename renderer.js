// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function onClick() {
    var executablePath1 = "D:\\Games\\GAMEFOLDER\\GAMENAME1.exe";
    var executablePath2 = "D:\\Games\\GAMEFOLDER\\GAMENAME2.exe";
    window.openGaeme(executablePath1);
    window.openGaeme(executablePath2);
}