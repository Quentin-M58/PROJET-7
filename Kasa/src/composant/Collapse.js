import React, { useState, useRef } from 'react'
import arrow from "../image/arrow.png"

export default function Collapse({ title, content }) {
        /* definit etat initial */
        const [setActive, setActiveState] = useState('')
        /* definit hauteur initial */
        const [setHeight, setHeightState] = useState('0px')
        /* definit etat initial fleche */
        const [setRotate, setRotateState] = useState('collapse-icon')

        /* definit contentCollapse pour après savoir quel hauteur */
        const contentCollapse = useRef(null)

        /*function pour changer l'état*/
        const toggleCollapse = () => {
                setActiveState(setActive === '' ? 'active' : '')
                setHeightState(
                        setActive === 'active'
                                ? '0px'
                                : `${contentCollapse.current.scrollHeight}px`
                )
                setRotateState(
                        setActive === 'active' ? '' : 'rotate'
                )
        }

        /* verifie si c'est un tableau si oui pousse chaque element sinon pousse tout dans "description" */
        const contentArray = []
        if (!Array.isArray(content)) {
                contentArray.push(content)
        } else {
                for (let i = 0; i < 9; i++) {
                        contentArray.push(content[i])
                }
        }

        return (
                <div className={`collapse-section ${title}`}>
                        {/* boutton pour changer etat */}
                        <button
                                className={`collapse ${setActive}`}
                                onClick={toggleCollapse}
                        >
                                <span className="collapse-title">{title}</span>
                                <img src={arrow} className={`collapse-icon ${setRotate}`} alt="arrow" ></img>
                        </button>
                        <div
                                ref={contentCollapse}
                                style={{ maxHeight: `${setHeight}` }}
                                className="collapse-content"
                        >
                                <div className="collapse-text">
                                        {contentArray.map((content, index) => (
                                                <div key={`${content}-${index}`}>{content}</div>
                                        ))}
                                </div>
                        </div>
                </div>
        )
}