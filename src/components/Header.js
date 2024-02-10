import './Header.css';
import styles from './Header.module.css';
function Header(){
    const myStyle = {
        color:'green',
        backgroundColor:"lightgray",
        padding:'20px',
        fontFamily:'Sans-Serif'
    }
    return <>
    <h1 style={myStyle}>Hello styling</h1>
    <h1 className={styles.particularhead}>Hello styling</h1>
    <p>Add a little style</p>
    </>
}
export default Header;