import Cart from "./Cart";
import Login from "./Login";

const Header = () => {
    return (
        <div className="brand-header">
            <div className="brand">
                <a href="/"><span style={{color: "#51c6f0", fontSize: '2rem' }}>SHOP</span><span style={{ color: "black", fontSize: '2rem'  }}>LANE</span></a>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="login-button">
                    <Login />
                </div>
                <div className="cart-icon">
                    <Cart />
                </div>
            </div>
        </div>


    )
}

export default Header;