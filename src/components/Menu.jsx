import styles from '../components/Menu.module.css'


function Menu ({titulo}){
    return (
        <div className={styles.menu}>
            <h1>{titulo}</h1>
        </div>
    )
}


export default Menu;