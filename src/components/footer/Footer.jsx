import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box logo">
                {/*<img src="" alt="" />*/}
                <p> Instituto Sumauma</p>
                <br />
                <i className='fa fa-envelope'></i><span>instituto.am.@gmail.com</span>
                <br />
                <i className='fa fa-headphones'></i><span>(92)9999-9999</span>
            </div>
        </div>
    </footer>
    <div className="legal">
        <p>make with <i className='fa fa-heart'></i> by Icaro  &copy; 2023</p>
    </div>
    </>
  )
}

export default Footer