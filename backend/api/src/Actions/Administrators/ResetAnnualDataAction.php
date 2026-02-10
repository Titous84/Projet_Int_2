<?php
// @author Nathan Reyes

namespace App\Actions\Administrators;

use App\Services\TokenService;
use App\Services\UserService;
use App\Utils\TokenUtils;
use Psr\Http\Message\ResponseInterface;
use Slim\Psr7\Request;
use Slim\Psr7\Response;

/**
 * @author Nathan Reyes
 * Action pour réinitialiser les données annuelles de l'administration.
*/
class ResetAnnualDataAction
{
    /**
     * @author Nathan Reyes
     * Service des utilisateurs.
     * @var UserService
    */
    private $userService;

    /**
     * @author Nathan Reyes
     * Service de gestion des tokens.
     * @var TokenService
    */
    private $tokenService;

    /**
     * @author Nathan Reyes
     * Constructeur de la classe ResetAnnualDataAction.
     * @param UserService $userService
     * @param TokenService $tokenService
    */
    public function __construct(UserService $userService, TokenService $tokenService)
    {
        $this->userService = $userService;
        $this->tokenService = $tokenService;
    }

    /**
     * @author Nathan Reyes
     * Exécute la réinitialisation annuelle.
     * @param Request $request Objet de requête PSR-7.
     * @param Response $response Objet de réponse PSR-7.
     * @param array $args Arguments passés dans la requête.
     * @return ResponseInterface Réponse retournée par la route.
    */
    public function __invoke(Request $request, Response $response, array $args): ResponseInterface
    {
        $isUserPermitted = TokenUtils::is_user_in_permitted_roles($request, $this->tokenService, ["Admin"]);

        if ($isUserPermitted !== null) {
            $response->getBody()->write($isUserPermitted->to_json());
            return $response->withStatus($isUserPermitted->get_http_code());
        }

        $serviceResponse = $this->userService->reset_annual_data();

        $response->getBody()->write($serviceResponse->to_json());
        return $response->withStatus($serviceResponse->get_http_code());
    }
}
