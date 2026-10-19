import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>
                <header className="site-header">
                    <div className="site-header__inner">
                        <Link to="/" className="site-logo">Hotel Sjöaryd</Link>
                    </div>
                </header>
                <main className="page">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default Layout 