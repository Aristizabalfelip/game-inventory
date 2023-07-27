import React from 'react'

const Info = ({ select }) => {

    return (
        <div>
            <section>{select[0]}</section>
            <section>
                <article>
                    <img src="" alt="" />
                    <p>{select[4]}</p>
                    <img src="/_next/static/media/sword.91ac01bf.svg" alt="" />
                    <p>{select[2]}</p>
                </article>
                <p>{select[3]}</p>
            </section>
        </div>
    )
}

export default Info