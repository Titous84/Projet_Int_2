/**
 * Interface représentant un membre d'une équipe
 * 
 * @interface ITeamsMember
 * @author Carlos Cordeiro
 */
export interface ITeamsMember {

    /**
     * L'ID du membre
     */
    id: number,

    /**
     * Le numéro de DA du membre
     */
    numero_da:string,

    /**
     * Le prénom du membre
     */
    first_name:string,

    /**
     * Le nom de famille du membre
     */
    last_name:string,

    /**
     * Le status de liste noire du membre
     */
    blacklisted: number,

    /**
     * Le status de consentement à la photo du membre
     */
    picture_consent: number,
    /**
     * Consentement à l'utilisation publique des photos
     */
    photo_consent_publication: number,
    /**
     * Consentement à l'utilisation interne des photos
     */
    photo_consent_internal: number,
    /**
     * Refus total de la prise de photos
     */
    photo_consent_refusal: number,
    /**
     * Indique si le membre souhaite masquer ses informations personnelles
     */
    is_anonymous: number,

    /**
     * Le status d'activation du membre
     */
    users_activated:number,

    /**
     * L'ID de l'équipe du membre
     */
    team_id: number,

    /**
     * Typage explicite pour différencier les membres
     */
    type: "member"
}
