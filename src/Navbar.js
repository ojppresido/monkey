import React from 'react'


const transfer = (e)=>{
e.preventDefault()
window.location.href = 'https://cvr.inecnigeria.org'
}

const Navbar = () => {


    return (
      <nav>
        <div>
          <button className='welcome'>
            <h5>Welcome</h5>
          </button>
          <button className='welcome check'>
            <h5>My PU Location</h5>
          </button>
          <button onClick={transfer} className='welcome dont'>
            <h5>Transfer Me</h5>
          </button>
          <button className='welcome log'>
            <h5 className='foot'>About Us</h5>
          </button>
        </div>
      </nav>
    );
}

export default Navbar
