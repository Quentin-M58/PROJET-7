import React from 'react'

export default function image({ imgtitle, description , content }) {

        return (
                <section className="container">
                        <img src={imgtitle} alt={description}></img>
                        <h1>{content}</h1>
                </section>
        )
}