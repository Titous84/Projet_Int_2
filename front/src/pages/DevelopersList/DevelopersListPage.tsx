/**
 * @author Nathan Reyes
 */
import IPage from "../../types/IPage";
import PageSection from "../../components/common/PageSection";
import styles from './DevelopersListPage.module.css'
import { TEXTS } from '../../lang/fr';

export default class DevelopersListPage extends IPage {
    constructor(props: {}){
        super(props)

        this.state = {}
    }

    /**
     * @returns le layout avec la table des développeurs
     * Charles Lavoie
     */
    generateDevelopersList() : JSX.Element[]{
        /**
         * constantes des années doivent débuter par le nom du tableau(l'année)
         * et ensuite les noms des développeurs
         */
        const annee2022 : string[] = ['Année 2022','Tristan Lafontaine','Jean-Philippe Bourassa','Souleymane Soumare',
            'Christopher Boisvert','Alex Des Ruisseaux','Mathieu Sévégny','Tomy Chouinard',
            'Charles Lavoie','Gabriel Beaudoin','Vincent Bélisle','William Boudreault','Maxime Boucher'];
        const annee2023 : string[] = ['Année 2023','Déreck "NanoBoy" Lachance', 'Raphaël Steeve Joseph Boisvert', 'Raphaël "Raph" Nadeau', 'Samuel "2citron" Lambert', 'Maxime Demers-Boucher'];
        const annee2024 : string[] = ['Année 2024','Jean-Christophe Demers', 'Thomas-Gabriel Paquin', 'Xavier Houle', 'Francis Payan'];
        const annee2025 : string[] = ['Année 2025','Étienne Nadeau', 'Tommy Garneau', 'Carlos Cordeiro', 'Antoine Ouellette','Alexis Boivin'];
        /**
         * Ajouter les années au tableau des développeurs pour présenter un tableau
         */
        const developpeurs : string[][] = [annee2025, annee2024, annee2023, annee2022]
        
        return developpeurs.map(annee => {
            /* retourne la table dans <PageSection> */
            const table = this.generateTableList(annee);
            return <PageSection titre={annee[0]} key={annee.toString()}>{table}</PageSection>
        });
    }
    /**
     * 
     * @param list la liste des étudiants pour une année
     * @returns la table des développeurs en JSX.Element
     * Charles Lavoie
     */
    generateTableList(list : string[]) : JSX.Element {
        /**
         * les étudiants sont entre balises et n'utilise pas le premier
         * élément qui se trouve être l'année
         */
        const students = list.slice(1).sort((a,b) => a.localeCompare(b)).map(etudiant => {
            return <div key={etudiant}><tr className={styles.centerdTable}><td>{etudiant}</td></tr><hr/></div>
        });
        return <table className={styles.centeredTable}>{students}</table>
    }

    public render() {
        return (
            <div data-testid="listedeveloppeurs" className={styles.paperWidth} key="listedeveloppeurs">
                <h1 key="titre liste">{TEXTS.developers.title}</h1>
                {this.generateDevelopersList()}
            </div>
        )
    }
}
