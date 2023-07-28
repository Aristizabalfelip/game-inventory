import React from 'react'

const Info = ({ select }) => {
  
    return (
        <div>
            <section>{select.name}</section>
            <section>
                <article>
                    <img src="" alt="" />
                    <p></p>
                    <img src="" alt="" />
                    {/* <p>{select.stats.damage}</p> */}
                </article>
                <p>{select.description}</p>
            </section>
        </div>
    )
}

export default Info