import '../styles/Error.scss';
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div id="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='links' to="/">Retourner à la page d'accueil</Link>
        </div>
);
}