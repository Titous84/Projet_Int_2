/**
 * @author Nathan Reyes
 */
/**
 * Membre d'équipe.
 * Mathieu Sévégny
 */
export default interface TeamMember{
    /**
     * Prénom du membre (max 40 char.)
     */
    firstName:string;
    /**
     * Nom de famille du membre (max 40 char.)
     */
    lastName:string;
    /**
     * Numéro de DA du membre (max 255 char.)
     */
    numero_da:string;
    /**
     * Consentement d'être pris en photo
     */
    pictureConsent:number;
    /**
     * Consentement à l'utilisation publique des photos (site web, médias sociaux, etc.)
     */
    photoConsentPublication:boolean;
    /**
     * Consentement à l'utilisation interne des photos (usage pédagogique/interne)
     */
    photoConsentInternal:boolean;
    /**
     * Refus total de la prise de photos
     */
    photoConsentRefusal:boolean;
    /**
     * Indique si le membre souhaite masquer ses informations personnelles
     */
    isAnonymous:boolean;
}
