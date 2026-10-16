import { Link } from 'react-router-dom'

function ErrorPage () {
    return (
        <div>
            <h1>This page does not exist</h1>
            <Link to="/">
            Go back to the start page by clicking here!
            </Link>
        </div>
    )
}

export default ErrorPage