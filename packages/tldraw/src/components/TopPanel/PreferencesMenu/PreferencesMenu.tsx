import * as React from 'react'
import { DMCheckboxItem, DMDivider, DMSubMenu } from '~components/Primitives/DropdownMenu'
import { useTldrawApp } from '~hooks'
import type { TDSnapshot } from '~types'

const settingsSelector = (s: TDSnapshot) => s.settings

export function PreferencesMenu() {
  const app = useTldrawApp()

  const settings = app.useStore(settingsSelector)

  const toggleDrawWithPen = React.useCallback(() => {
    app.setSetting('drawWithPen', (v) => !v)
  }, [app])

  const toggleDrawWithMouse = React.useCallback(() => {
    app.setSetting('drawWithMouse', (v) => !v)
  }, [app])

  const toggleDrawWithFinger = React.useCallback(() => {
    app.setSetting('drawWithFinger', (v) => !v)
  }, [app])

  const toggleDebugMode = React.useCallback(() => {
    app.setSetting('isDebugMode', (v) => !v)
  }, [app])

  const toggleDarkMode = React.useCallback(() => {
    app.setSetting('isDarkMode', (v) => !v)
  }, [app])

  const toggleFocusMode = React.useCallback(() => {
    app.setSetting('isFocusMode', (v) => !v)
  }, [app])

  const toggleRotateHandle = React.useCallback(() => {
    app.setSetting('showRotateHandles', (v) => !v)
  }, [app])

  const toggleGrid = React.useCallback(() => {
    app.setSetting('showGrid', (v) => !v)
  }, [app])

  const toggleBoundShapesHandle = React.useCallback(() => {
    app.setSetting('showBindingHandles', (v) => !v)
  }, [app])

  const toggleisSnapping = React.useCallback(() => {
    app.setSetting('isSnapping', (v) => !v)
  }, [app])

  const toggleCloneControls = React.useCallback(() => {
    app.setSetting('showCloneHandles', (v) => !v)
  }, [app])

  const toggleCadSelectMode = React.useCallback(() => {
    app.setSetting('isCadSelectMode', (v) => !v)
  }, [app])

  return (
    <DMSubMenu label="Preferences" id="TD-MenuItem-Preferences">
      <DMCheckboxItem
        checked={settings.isDarkMode}
        onCheckedChange={toggleDarkMode}
        kbd="#⇧D"
        id="TD-MenuItem-Preferences-Dark_Mode"
      >
        Dark Mode
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.isFocusMode}
        onCheckedChange={toggleFocusMode}
        kbd="#."
        id="TD-MenuItem-Preferences-Focus_Mode"
      >
        Focus Mode
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.isDebugMode}
        onCheckedChange={toggleDebugMode}
        id="TD-MenuItem-Preferences-Debug_Mode"
      >
        Debug Mode
      </DMCheckboxItem>
      <DMDivider />
      <DMCheckboxItem
        checked={settings.drawWithPen}
        onCheckedChange={toggleDrawWithPen}
        id="TD-MenuItem-Preferences-Draw_With_Pen"
      >
        Draw with Pen
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.drawWithMouse}
        onCheckedChange={toggleDrawWithMouse}
        id="TD-MenuItem-Preferences-Draw_With_Mouse"
      >
        Draw with Mouse
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.drawWithFinger}
        onCheckedChange={toggleDrawWithFinger}
        id="TD-MenuItem-Preferences-Draw_With_Finger"
      >
        Draw with Finger
      </DMCheckboxItem>
      <DMDivider />
      <DMCheckboxItem
        checked={settings.showGrid}
        onCheckedChange={toggleGrid}
        kbd="#⇧G"
        id="TD-MenuItem-Preferences-Grid"
      >
        Show Grid
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.isCadSelectMode}
        onCheckedChange={toggleCadSelectMode}
        id="TD-MenuItem-Preferences-Cad_Selection"
      >
        Use CAD Selection
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.isSnapping}
        onCheckedChange={toggleisSnapping}
        id="TD-MenuItem-Preferences-Always_Show_Snaps"
      >
        Always Show Snaps
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.showRotateHandles}
        onCheckedChange={toggleRotateHandle}
        id="TD-MenuItem-Preferences-Rotate_Handles"
      >
        Rotate Handles
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.showBindingHandles}
        onCheckedChange={toggleBoundShapesHandle}
        id="TD-MenuItem-Preferences-Binding_Handles"
      >
        Binding Handles
      </DMCheckboxItem>
      <DMCheckboxItem
        checked={settings.showCloneHandles}
        onCheckedChange={toggleCloneControls}
        id="TD-MenuItem-Preferences-Clone_Handles"
      >
        Clone Handles
      </DMCheckboxItem>
    </DMSubMenu>
  )
}
