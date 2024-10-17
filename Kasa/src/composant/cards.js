import React from 'react'

export default function Cards({ title, image , id }) {
        return (
                <a href={`/logement/${id}`}>
                        <article className="card">
                                <img src={image}></img>
                                <p>{title}</p>
                        </article>
                </a>
        )
}