import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>
                <header>
                    <Link to="/">Hotel Name</Link>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default Layout 