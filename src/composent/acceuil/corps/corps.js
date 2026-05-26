
import styles from './corps.module.css'
import image from '../../image/pre.jpeg'
const Corps = () => {
    return (

        <div >
            {/* composant a importer */}
            <div className={styles.premier}>
                <div>
                    <p className={styles.haut}>avantage de l'entreprise</p>

                    <p className={styles.gras}>
                        <b>
                            en tant que profesionnel , trouver un freelance <br /> facilement disponible pour travailler
                            avec vous sur <br /> tous vos projets
                        </b>
                    </p>

                    <p className={styles.texte}>
                        que vous ayez besoins de concevoir un   site internet , de creer votre identite visuel , ou d'optimiser
                        votre <br /> contenue SEO, MYMONTH vous aide a trouver le freelance parfait pour votre  mission
                        avec notre algorithme de <br /> recherche gratuite . vous pourrez facilement trouver le profil
                        ideale au moment   oportun pour garantir la <br /> reuissite de votre projet.
                    </p>
                </div>

                <div>
                    <img src={image} className={styles.image} />
                </div>

            </div>

            <div className={styles.premier}>
                <div>
                    <img src={image} className={styles.image} />
                </div>
                <div>
                    <p className={styles.haut}>demendes des devis </p>

                    <p className={styles.gras}><b>
                        obtenez des devis de freelence rapidement et ?<br />  facilement !
                    </b></p>
                    <p className={styles.texte}>
                        sur MYMONTH , vos demende  de devis sont gratuites et sans engagment . nous vous alerton <br /> imediatement
                        par email des qu'un freelance vous propose des services . vous pouvez comparer , negocier <br />  et echanger directement
                        avec nos freelances par messageries privee pour vous assuer que  sont profil vous <br />  correspond.
                    </p>

                </div>
            </div>
            <p className={styles.ensavoir}> en savoir plus </p>












            {/* composant a importer */}
            <div className={styles.premier}>
                <div>
                    <p className={styles.haut}>avantage ddu freelance</p>

                    <p className={styles.gras}>
                        <b>
                            vous etes freelance ? devenez membre de la <br />communautebet accedez a des missions adaptees a <br />
                            votre profil
                        </b>
                    </p>

                    <p className={styles.texte}>
                        Rejoigner MYMONTH pour decouvrir des mission adaptees a votre profil. inscrivez-vous et creer votre profil <br />
                        de freelance pour etre visible aupres des proffesionels recherchant des talents indepandants. plus votre <br />
                        profil est complet , plus vous aurez de chances d'etre repere par nos algorithmes de recommedation.
                    </p>
                </div>

                <div>
                    <img src={image} className={styles.image} />
                </div>

            </div>


            <div className={styles.premier}>
                <div>
                    <p className={styles.haut}>vous etes freelance</p>

                    <p className={styles.gras}>
                        <b>
                            trouvez des clients des maintenant
                        </b>
                    </p>

                    <p className={styles.texte}>
                        vous n'avez pas besoin de demarcher ,  notre systeme de mise en relation le fait pour vous !
                    </p>
                </div>

                <div>
                    <p className={styles.paragraphe}>choisissez les mission qui vous interessent</p>
                    <p  className={styles.paragraphe}>definissez vos termes et condition et etablissz vos devis en toute liberte</p>
                    <p className={styles.paragraphe}>Échangez directement avec les professionnels qui souhaitent faire appel à vos services</p>
                </div>

            </div>




            <div>
                {/* composent a importer */}

                <div>
                    <div>
                        <b>resultat garantir grace a notre technologie de pointe </b>
                        <p>nous utilison des outils et un algorithme de recherche tres puissant qui nous
                            permet de  vous soummetre les meilleur s freelance disponible qui possedent toute les competance requise \
                            pour votre projet
                        </p>
                    </div>
                    <div>
                        <b>nos expert sont evaluer et verifiers </b>
                        <p>nous verifion les competance de nos freelance ainsi que es recommedations
                            des entreprises : le serieux et l'expertise des freelance sur MYMONTH sont toujour verifier par nos soin

                        </p>
                    </div>
                </div>
            </div>

            {/* composant a importer */}
            <div>
                <div><p>avantage de l'entreprise</p></div>
                <div>
                    <p><b>
                        en tant que profesionnel , trouver un freelance facilement pour travailler
                        facilement avec vous sur tous vos projets
                    </b></p>
                    <p>
                        que vous ayez besoins de concevoir un site internet , de creer votre identite visuel , ou d'optimiser
                        votre contenue SEO, MYMONTH vous aide a trouver le freelance parfait pour votre mission
                        avec notre algorithme de recherche gratuite . vous pourrez facilement trouver le profil
                        ideale au moment oportun pour garantir la reuissite de votre projet.
                    </p>
                    <img src={image} />
                </div>
            </div>
            <div>
                <img src={image} />
                <div><p>demendes des devis </p></div>
                <div>
                    <p><b>
                        obtenez des demende freelence rapidement et facilement
                    </b></p>
                    <p>
                        sur MYMONTH , vos demende  de devis sont gratuites et sans engagment . nous vous alerton imediatement
                        par email des qu'un freelance vous propose des services . vous comparer , negocier etechanger directement
                        avec nos freelances par messageries privee pour vous assuer que  sont profil vous corresponde
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Corps