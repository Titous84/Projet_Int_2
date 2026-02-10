/**
 * @author Nathan Reyes
*/
/**
 * @author Nathan Reyes
 * Juge
 * @author Jean-Philippe Bourassa
 * @author Thomas-Gabriel Paquin
*/
 export default interface Judge{
      /**
       * @author Nathan Reyes
       * Identifiant du juge
      */
      id:number;
    /**
     * @author Nathan Reyes
     * Prénom du juge (max 40 char.)
    */
     firstName:string;
     /**
      * @author Nathan Reyes
      * Nom de famille du juge (max 40 char.)
     */
     lastName:string;
     /**
      * @author Nathan Reyes
      * Adresse courriel du juge (max 255 char.)
     */
     email:string;
     /**
      * @author Nathan Reyes
      * Catégorie (sélection dans une liste de choix)
     */
    category:string;
     /**
      * @author Nathan Reyes
      * Consentement d'être pris en photo
     */
     pictureConsent:boolean;
     /**
      * @author Nathan Reyes
      * Mot de passe du juge
     */
     pwd:string;
     /**
      * @author Nathan Reyes
      * Mot de passe du juge
     */
     pwdconfirm:string;
     /**
      * @author Nathan Reyes
      * Blacklist
     */
     blacklisted:boolean;
     /**
      * @author Nathan Reyes
      * Activé
     */
     activated:boolean;
     /**
      * @author Nathan Reyes
      * Indique si le juge participe à l'édition courante.
     */
     participatesCurrentYear:boolean;
     /**
      * @author Nathan Reyes
      * Indique si le juge a au moins une équipe assignée.
     */
     hasAssignment:boolean;
} 
