import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import './index.scss'
import { useMediaQuery } from 'react-responsive'

const Layout = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    return (
        <div className="App">
            {isTabletOrMobile ? <NavBar /> : <SideBar />}
            <div className="page">
                <span className="tags top-tags top-tag-html">&lt;html&gt;</span>
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div >
    )
}

export default Layout