/**
 * @author Nathan Reyes
*/
/**
 * @author Nathan Reyes
 * Interface représentant un membre d'une équipe
 *
 * @interface ITeamsMember
 * @author Carlos Cordeiro
*/
export interface ITeamsMember {

    /**
     * @author Nathan Reyes
     * L'ID du membre
    */
    id: number,

    /**
     * @author Nathan Reyes
     * Le numéro de DA du membre
    */
    numero_da:string,

    /**
     * @author Nathan Reyes
     * Le prénom du membre
    */
    first_name:string,

    /**
     * @author Nathan Reyes
     * Le nom de famille du membre
    */
    last_name:string,

    /**
     * @author Nathan Reyes
     * Le status de liste noire du membre
    */
    blacklisted: number,

    /**
     * @author Nathan Reyes
     * Le status de consentement à la photo du membre
    */
    picture_consent: number,
    /**
     * @author Nathan Reyes
     * Consentement à l'utilisation publique des photos
    */
    photo_consent_publication: number,
    /**
     * @author Nathan Reyes
     * Consentement à l'utilisation interne des photos
    */
    photo_consent_internal: number,
    /**
     * @author Nathan Reyes
     * Refus total de la prise de photos
    */
    photo_consent_refusal: number,
    /**
     * @author Nathan Reyes
     * Indique si le membre souhaite masquer ses informations personnelles
    */
    is_anonymous: number,

    /**
     * @author Nathan Reyes
     * Le status d'activation du membre
    */
    users_activated:number,

    /**
     * @author Nathan Reyes
     * L'ID de l'équipe du membre
    */
    team_id: number,

    /**
     * @author Nathan Reyes
     * Typage explicite pour différencier les membres
    */
    type: "member"
}
