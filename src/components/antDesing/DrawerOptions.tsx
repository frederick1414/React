import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { MenuOption } from '../../reducers/user'
import { deleteNullValues } from '../../constants/general'
import { useNavigate } from 'react-router-dom'
import { UseContextGeneral } from './ContextProvider'
import { MenuSelect } from '../../utils/Interfaces'
import { COOKIE_KEY_MENU_OPTION_SELECTED } from '../../constants/actions'
import CustomMenu from './CustomMenu'
import CustomTooltip from './CustomTooltip'

type Props = {
  userMenuOptions: MenuOption[]
}

const DrawerOptions = ({ userMenuOptions }: Props): React.ReactElement => {
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState<string[]>()
  const { globalVariable, setGlobalVariable } = UseContextGeneral()

  const getMenuItems = (userOptions: MenuOption[]) => {
    return userOptions?.map((item: MenuOption) => {
      const children = item?.CHILDREN?.length
        ? getMenuItems(item?.CHILDREN)
        : undefined

      const name = item?.NAME?.toUpperCase()

      const label = (
        <CustomTooltip color="#6C6866" title={name}>
          {name}
        </CustomTooltip>
      )

      const data = deleteNullValues({
        key: item?.ID,
        label,
        route: item?.MODULE,
        children,
      })

      return data
    })
  }

  const routeIdList: string[] = []

  userMenuOptions.forEach((route) => {
    if (route.CHILDREN && route.CHILDREN.length) {
      routeIdList.push(route.ID)
    }
  })

  const onOpenChange = (_openKeys: string[]) => {
    const latestOpenKey = _openKeys.find((key) => openKeys?.indexOf(key) === -1)

    if (routeIdList.indexOf(latestOpenKey as string) === -1) {
      setOpenKeys(_openKeys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onClick = (data: any) => {
    const route = data?.item?.props?.route

    const menuSelect: MenuSelect = {
      route,
      activityId: data?.key,
    }

    setGlobalVariable({ ...globalVariable, menuSelect })
    Cookies.set(COOKIE_KEY_MENU_OPTION_SELECTED, JSON.stringify(menuSelect))
    navigate(route)
  }

  const items = getMenuItems(userMenuOptions)

  return (
    <CustomMenu
      mode={'inline'}
      inlineIndent={10}
      openKeys={openKeys}
      defaultOpenKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={onClick}
      items={items}
    />
  )
}

export default DrawerOptions
