import React from 'react'

const Navbar = ({ total }) => {
    const token = false;
  return (
    <>  
    <div className='navContainer'>
        <div className='leftSide'>
            <h3 className='HeaderTitle'>Pizzería Mamma Mia!</h3>
            <ul className='menuList'>
                <li id='home'><button>🍕 Home</button></li>
                <li id='profile' className={token ? 'showElement' : 'hideElement'}><button>🔓 Profile</button></li>
                <li id='logout' className={token ? 'showElement' : 'hideElement'}><button>🔒 Logout</button></li>
                <li id='login' className={token ? 'hideElement' : 'showElement'}><button>🔐 Login</button></li>
                <li id='register' className={token ? 'hideElement' : 'showElement'}><button>🔐 Register</button></li>
            </ul>
        </div>

        <li id='total'><button>🛒 Total: ${total.toLocaleString()}</button></li>
    </div>
    </>
  )
}

export default Navbar