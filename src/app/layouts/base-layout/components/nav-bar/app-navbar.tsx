import {memo} from 'react'
import {NavBar, NavBarItem} from '@core/navbar';
import navMenuItems from '@app/layouts/base-layout/lib/menus';
import {SearchIcon} from '@shared/components/icons';
import AppNavbarFooter from '@app/layouts/base-layout/components/nav-bar/app-navbar-footer';
import AppNavbarHeader from '@app/layouts/base-layout/components/nav-bar/app-navbar-header';

const AppNavbar = () => {

    return (
        <NavBar
            header={<AppNavbarHeader/>}
            footer={<AppNavbarFooter/>}
            width={400}
        >
            <NavBarItem icon={<SearchIcon/>} title="Search" as='span'/>
            {
                navMenuItems.map((item) => (
                    <NavBarItem key={item.title} title={item.title} icon={item.icon} to={item.path}/>
                ))
            }
        </NavBar>
    )
}

export default memo(AppNavbar)
