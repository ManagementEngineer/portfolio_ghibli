import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import './index.scss'
import { useMediaQuery } from 'react-responsive'
import { Container } from 'react-bootstrap';
import Loader from 'react-loaders';

const Layout = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    return (
        <div className='row g-0'>
            <div className='col-1'>
                {isTabletOrMobile ? <NavBar /> : <SideBar />}
            </div>

            <div className='col-11'>

                <Outlet />

            </div>
            <Loader type='pacman' />
        </div>

    )
}

export default Layout