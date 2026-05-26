
import styles from './footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.partie1}>
                    <h2>MYMONTH Freelancing</h2>
                    notre platforme meten relation les entreprise en quete de talents avec des indepandants qualifier.
                    avec un vaste choix de profils proffesionnels disponibles , vous trouverez facilement le candidat ideal
                    pour votre projet utilisez les fonctionnalite de personnalisation et de filtrage poour affiner votre recherche ...
                </div>

                <div className={styles.partie2}>
                    <h3>liens utiles</h3>
                    <p><AiOutlineThunderbolt /> Acceuil</p>
                    <p><AiOutlineThunderbolt />demander un devis</p>
                    <p><AiOutlineThunderbolt />nous contacter</p>
                    <p><AiOutlineThunderbolt />politique de confidentialite </p>
                    <p><AiOutlineThunderbolt />mension leguale (CGU & CGV)</p>

                </div>


                <div className={styles.partie3}>
                    <h3>coordonnes </h3>
                    <p><MdOutlineEmail />gesta001@gmail.com</p>
                    <p><MdLocalPhone />677 774 2242</p>
                    <p><IoIosSend />cameroun douala</p>
                </div>
            </div>




            <div>
                <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    -----------
                </p>
                <p><FaFacebook /> <IoLogoTwitter />  <FaLinkedin />
                    <FaInstagram /></p>

                <p>@2023-GESTA.droits reserve </p>

            </div>
        </div>
    )

}

export default Footer