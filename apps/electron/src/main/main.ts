/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { app, BrowserWindow } from 'electron'
import { is } from 'electron-util'
import { createWindow } from './createWindow'
import './preload'

let win: BrowserWindow | null = null

async function main() {
  win = await createWindow()
}

app
  .on('ready', main)
  .on('window-all-closed', () => {
    if (!is.macos) {
      app.quit()
    }
  })
  .on('activate', () => {
    if (win === null && app.isReady()) {
      main()
    }
  })
