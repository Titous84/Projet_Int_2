/**
 * @author Nathan Reyes
*/
/**
 * @author Nathan Reyes
 * Membre d'équipe.
 * Mathieu Sévégny
*/
export default interface TeamMember{
    /**
     * @author Nathan Reyes
     * Prénom du membre (max 40 char.)
    */
    firstName:string;
    /**
     * @author Nathan Reyes
     * Nom de famille du membre (max 40 char.)
    */
    lastName:string;
    /**
     * @author Nathan Reyes
     * Numéro de DA du membre (max 255 char.)
    */
    numero_da:string;
    /**
     * @author Nathan Reyes
     * Consentement d'être pris en photo
    */
    pictureConsent:number;
    /**
     * @author Nathan Reyes
     * Consentement à l'utilisation publique des photos (site web, médias sociaux, etc.)
    */
    photoConsentPublication:boolean;
    /**
     * @author Nathan Reyes
     * Consentement à l'utilisation interne des photos (usage pédagogique/interne)
    */
    photoConsentInternal:boolean;
    /**
     * @author Nathan Reyes
     * Refus total de la prise de photos
    */
    photoConsentRefusal:boolean;
    /**
     * @author Nathan Reyes
     * Indique si le membre souhaite masquer ses informations personnelles
    */
    isAnonymous:boolean;
}
