import React from 'react'

export default function Tag({ infotag }) {

        return (
                <div className="tag">
                        {infotag.map((info) => {
                                return (
                                        <button key={info}>
                                                {info}
                                        </button>
                                );
                        })
                        }
                </div>
        )
}