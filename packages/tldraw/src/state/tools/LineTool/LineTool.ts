import { Utils, TLPointerEventHandler } from '@tldraw/core'
import Vec from '@tldraw/vec'
import { Arrow } from '~state/shapes'
import { SessionType, TDShapeType } from '~types'
import { BaseTool, Status } from '../BaseTool'

export class LineTool extends BaseTool {
  type = TDShapeType.Line as const

  /* ----------------- Event Handlers ----------------- */

  onPointerDown: TLPointerEventHandler = (info) => {
    if (this.status !== Status.Idle) return
    if ((!this.app.settings.drawWithMouse && info.type == 'mouse') ||
      (!this.app.settings.drawWithFinger && info.type == 'touch') ||
      (!this.app.settings.drawWithPen && info.type == 'pen')) {
      return;
    }
    const {
      currentPoint,
      currentGrid,
      settings: { showGrid },
      appState: { currentPageId, currentStyle },
    } = this.app

    const childIndex = this.getNextChildIndex()

    const id = Utils.uniqueId()

    const newShape = Arrow.create({
      id,
      parentId: currentPageId,
      childIndex,
      point: showGrid ? Vec.snap(currentPoint, currentGrid) : currentPoint,
      decorations: {
        start: undefined,
        end: undefined,
      },
      style: { ...currentStyle },
    })

    this.app.patchCreate([newShape])

    this.app.startSession(SessionType.Arrow, newShape.id, 'end', true)

    this.setStatus(Status.Creating)
  }
}
