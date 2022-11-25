import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderHome() {
  return (
    <>
      <div className="header_home">
            <p style={{ fontSize: "50px", color: '#fff', height: '520px' }}>mamyka</p>

            <div className="Box_go_menu">
              <div className="food">
                <p style={{ fontSize: "30px" }}>Main Menu</p>
                <Link to="/shop">   <p>{">>>>>"}</p></Link>
                <img style={{ maxWidth: "36%", position: 'absolute', right: '0', top: '18%' }} src="https://mamuka.rest/local/templates/general/images/main-slider-card-2.png" />
              </div>

              <div className="drink">s</div>
            </div>
          </div>
    </>
  )
}
