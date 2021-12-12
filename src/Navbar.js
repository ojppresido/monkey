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
            <h4>Welcome</h4>
          </button>
          <button className='welcome check'>
            <h4>My PU Location</h4>
          </button>
          <button onClick={transfer} className='welcome dont'>
            <h4>Transfer Me</h4>
          </button>
          <button className='welcome log'>
            <h4 className='foot'>About Us</h4>
          </button>
        </div>
      </nav>
    );
}

export default Navbar
