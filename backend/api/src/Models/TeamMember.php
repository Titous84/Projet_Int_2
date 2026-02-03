<?php
// @author Nathan Reyes

namespace App\Models;

/**
 * @author Nathan Reyes
 * Classe TeamMember.
 * @package App\Models
 * @author Tristan Lafontaine
*/
class TeamMember
{
    /**
     * @author Nathan Reyes
     * @var int|null ID de l'équipe.
    */
    public $id;

    /**
     * @author Nathan Reyes
     * @var string Numéro de DA
    */
    public $numeroDa;

    /**
     * @author Nathan Reyes
     * @var string Prénom
    */
    public $firstName;

    /**
     * @author Nathan Reyes
     * @var string Nom
    */
    public $lastName;

    /**
     * @author Nathan Reyes
     *
     * @var int Consentement à la photo
    */
    public $pictureConsent;

    /**
     * @author Nathan Reyes
     * @var int Consentement à l'utilisation publique des photos
    */
    public $photoConsentPublication;

    /**
     * @author Nathan Reyes
     * @var int Consentement à l'utilisation interne des photos
    */
    public $photoConsentInternal;

    /**
     * @author Nathan Reyes
     * @var int Refus total pour la prise de photos
    */
    public $photoConsentRefusal;

    /**
     * @author Nathan Reyes
     * @var int Indique si le membre souhaite masquer ses informations personnelles
    */
    public $isAnonymous;

    /**
     * @author Nathan Reyes
     * @var int Activé
    */
    public $userActivated;

    /**
     * @author Nathan Reyes
     * @var int|null ID de l'équipe
    */
    public $teamId;

    /**
     * @author Nathan Reyes
     * @var string|null Adresse email
    */
    public $email;

    /**
     * @author Nathan Reyes
     * @var int Indicateur de mise sur liste noire
    */
    public $blacklisted;

    /**
     * @author Nathan Reyes
     * @var int ID de l'enseignant(e)
    */
    public $contactPersonId;

    /**
     * @author Nathan Reyes
     * Team constructeur.
     * @param $teamJSON
    */
    public function __construct($teamJSON)
    {
        $this->id = isset($teamJSON["id"]) ? $teamJSON["id"] : null;
        $this->numeroDa = $teamJSON["numero_da"];
        $this->firstName = $teamJSON["first_name"];
        $this->lastName = $teamJSON["last_name"];
        $this->pictureConsent = $teamJSON["picture_consent"];
        $this->photoConsentPublication = $teamJSON["photo_consent_publication"] ?? 0;
        $this->photoConsentInternal = $teamJSON["photo_consent_internal"] ?? 0;
        $this->photoConsentRefusal = $teamJSON["photo_consent_refusal"] ?? 0;
        $this->isAnonymous = $teamJSON["is_anonymous"] ?? 0;
        $this->userActivated = isset($teamJSON["users_activated"]) ? $teamJSON["users_activated"] : 1;
        $this->teamId = isset($teamJSON["team_id"]) ? $teamJSON["team_id"] : null;
        $this->email = isset($teamJSON["email"]) ? $teamJSON["email"] : null;
        $this->blacklisted = isset($teamJSON["blacklisted"]) ? $teamJSON["blacklisted"] : 0;
        $this->contactPersonId = isset($teamJSON["contact_person_id"]) ? $teamJSON["contact_person_id"] : 0;
    }
}