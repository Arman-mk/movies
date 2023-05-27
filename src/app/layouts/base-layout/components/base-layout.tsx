import {Outlet} from 'react-router-dom'
import AppNavbar from './nav-bar/app-navbar'
import Layout from '@core/layout';
import AppHeader from '@app/layouts/base-layout/components/header/app-header';

const BaseLayout = () => {
    return (
        <>
            <Layout
                header={<AppHeader/>}
                navbar={<AppNavbar/>}
            >
                <Outlet/>
            </Layout>
        </>
    )
}

export default BaseLayout
