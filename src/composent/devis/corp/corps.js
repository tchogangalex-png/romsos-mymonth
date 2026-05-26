
import styles from './corps.module.css';

const Corps = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.cadre1}>
                    <h1 className={styles.titre}>trouver votre freelance en <br/> quelque minutes</h1>
                    <h3 className={styles.labelss}>obtenez des devis des freelances <br /> en quelque minutes !</h3>
                    <p className={styles.labelssp}>vous rechrecher le freelance ideale pour une meission ou un projet a plus long terme ?
                        chez  MYMONTH, vous pouvez obtenir un devis de nos freelance professionel en quelque minutes !
                        Rien de plus simple : poster une demande de devis , c'est gratuit et sans engagement
                        . nous vous informeron par email lorsque un freelanceur professionel sera  disponnible pour vous .
                        vous ete alors libre de comparer , d'echanger  et de negocier les differentes offres que vous avez recus
                        grace a la messagerie prive mise a votre disposition
                    </p>
                </div>

                <div className={styles.cadre2}>
                    <form>
                        
                        <h1 className={styles.titre}>De quoi avez-vous besoin ?</h1>
                        <div className={styles.form}>
                            <label className={styles.labels}>choisissez in titre </label>
                            <input type="text" placeholder="EX:Besoin d'un nouveau site" className={styles.input1} />
                        </div>
                        <div className={styles.form}>
                            <label className={styles.labels}>choisissez in titre </label>
                            <textarea placeholder="decrivez ici votre projet" rows={4} cols={50} className={styles.input2} ></textarea>
                        </div>
                        <div className={styles.form}>
                            <input type='file' id='file' className={styles.input3}/>
                            <label for="file" className={styles.label}>ajouter un fichier (2 mo max)</label>
                        </div>
                        <div className={styles.form}>
                            <input type='submit' value="suivant" className={styles.suivant}/>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    votre platforme gratuite 
                </div>
                <div>
                    votre platforme sans engagement 
                </div>
                <div>
                    votre platforme rapide 
                </div>
            </div>
        </div>
    )
}

export default Corps