import { Link } from "react-router-dom"
import styles from './entete.module.css'
import { useState } from "react"
const Header = () => {

        const[couleur , setcouleur] = useState(false)

        const scool = () =>{
            if(window.scrollY >=90){
                setcouleur(true)
            }else{
                setcouleur(false)
            }
        }
            window.addEventListener('scroll', scool);


    return (
        <div  className={styles.chef}>
            <div className={couleur ? styles.containers : styles.container} >
                <nav>
                    <ul>
                        <li className={styles.titre}><p>MYMONTH</p></li>
                        <li><p><Link to={'/'} > acceuil </Link></p></li>
                        <li> <p><Link to={'/contact'} > contact </Link></p></li>
                        <li> <p><Link to={'/Devis'} > devis </Link></p></li>
                        <li><p><Link to={'/Premium'} > premium </Link></p></li>
                    </ul>
                </nav>

                <div >
                    <input type="submit" value='connexion' className={styles.bouton} />
                    <input type="submit" value='inscription' className={styles.bouton} />
                </div>
            </div>

            <div className={styles.header}>
                <p className={styles.ecriture}> <span className={styles.titres}> MYMONTH FREELANCE </span> <br /> <span className={styles.moyen}> trouver le freelancier adequat <br/> au cameroun</span><br/>
                notre platforme met en relation les entreprises en quete de talen avec <br />des independants
                    qualifier avec un vaste choix de profils profesionel <br /> disponnible , vous trouverez facilement le
                    candidat ideale pour votre projet
                </p>
            </div>
            <div className={styles.superpose}>
                <form >
                    <input type="text" placeholder="poste , EX: java, nodejs etc" className={styles.text} />
                    <input type="text" placeholder="ville, EX: DOUALA , YAOUNDE etc" className={styles.text} />
                    <input type="submit" value="trouver un freelancer" className={styles.textb} />
                </form>
            </div>

        </div>
    )
}
export default Header