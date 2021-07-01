import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { breakpoints, IconButton } from 'components/shared'
import Tooltip from 'components/tooltip'
import { memo } from 'react'
import state, { useSelector } from 'state'
import { DashStyle } from 'types'
import {
  DropdownContent,
  Item,
  DashDrawIcon,
  DashDottedIcon,
  DashSolidIcon,
  DashDashedIcon,
} from '../shared'

const dashes = {
  [DashStyle.Draw]: <DashDrawIcon />,
  [DashStyle.Solid]: <DashSolidIcon />,
  [DashStyle.Dashed]: <DashDashedIcon />,
  [DashStyle.Dotted]: <DashDottedIcon />,
}

function changeDashStyle(
  e: Event & { currentTarget: { value: DashStyle } }
): void {
  state.send('CHANGED_STYLE', { dash: e.currentTarget.value })
}

function QuickdashSelect(): JSX.Element {
  const dash = useSelector((s) => s.values.selectedStyle.dash)

  return (
    <DropdownMenu.Root dir="ltr">
      <DropdownMenu.Trigger as={IconButton} bp={breakpoints}>
        <Tooltip label="Dash">{dashes[dash]}</Tooltip>
      </DropdownMenu.Trigger>
      <DropdownContent sideOffset={8} direction="vertical">
        {Object.keys(DashStyle).map((dashStyle: DashStyle) => (
          <DropdownMenu.DropdownMenuItem
            as={Item}
            key={dashStyle}
            isActive={dash === dashStyle}
            onSelect={changeDashStyle}
            value={dashStyle}
          >
            {dashes[dashStyle]}
          </DropdownMenu.DropdownMenuItem>
        ))}
      </DropdownContent>
    </DropdownMenu.Root>
  )
}

export default memo(QuickdashSelect)
