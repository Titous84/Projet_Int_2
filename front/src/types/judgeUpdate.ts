/**
 * @author Nathan Reyes
*/
/**
 * @author Nathan Reyes
 * Juge avec les informations qui peuvent être modifiées
 * @author Thoams-Gabriel Paquin
*/
 export default interface JudgeUpdate{
      /**
       * @author Nathan Reyes
       * Identifiant du juge
      */
      id:number;
    /**
     * @author Nathan Reyes
     * Prénom du juge
    */
     firstName:string;
     /**
      * @author Nathan Reyes
      * Nom de famille du juge
     */
     lastName:string;
     /**
      * @author Nathan Reyes
      * Adresse courriel du juge
     */
     email:string;
     /**
      * @author Nathan Reyes
      * Catégorie
     */
    categoryId:number;
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
      * Présence à l'édition en cours
     */
     participatesCurrentYear:boolean;
} 
