import React from "react";
import { Link, useMatch, useResolvedPath,} from "react-router-dom";


export default function CustomLink({ children, to }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true }); /*recupere le chemin entier actuelle du site*/ 
        
        return (
                <div>
                        <Link
                                className={match ? "active" : ""}
                                to={to}
                        >
                                {children}
                        </Link>
                </div>
        );
}

