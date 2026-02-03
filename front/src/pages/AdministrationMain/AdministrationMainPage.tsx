/**
 * @author Nathan Reyes
*/
import { Container, Divider, Stack } from "@mui/material";
import AdministrationNavigationSidebar from "../../components/AdministrationMainPage/AdministrationNavigationSidebar";
import { ADMINISTRATION_MAIN_PAGE_TABS } from "../../types/AdministrationMainPage/AdministrationMainPageTabs";
import IPage from "../../types/IPage";
import React from "react";

/**
 * @author Nathan Reyes
 * Variables d'états du composant React: AdministrationMainPage.
 * @property {IPage} componentToDisplayInContentZone - Composant React à afficher dans la zône de contenu de l'onglet sélectionné.
 * @property {string} ongletActifId - Identifiant de l'onglet actuellement sélectionné.
*/
interface AdministrationMainPageState {
    componentToDisplayInContentZone: React.ComponentType<any>;
    ongletActifId: string;
}

/**
 * @author Nathan Reyes
 * Page d'administration
*/
export default class AdministrationMainPage extends IPage<{}, AdministrationMainPageState> {
    constructor(props: {}) {
        super(props)

        const ongletInitial = this.obtenirOngletDepuisUrl();

        // Initialisation des variables d'états.
        this.state = {
            // L'onglet sélectionné par défaut est le premier de la liste.
            componentToDisplayInContentZone: this.trouverOnglet(ongletInitial).componentToDisplayInContentZone,
            ongletActifId: ongletInitial,
        }
    }

    componentDidMount() {
        window.addEventListener("popstate", this.gestionRetourHistorique);
        this.mettreAJourUrl(this.state.ongletActifId, true);
    }

    componentWillUnmount() {
        window.removeEventListener("popstate", this.gestionRetourHistorique);
    }

    render() {
        return (
            <div data-testid="AdministrationMainPage">
                <Stack direction="row">
                    {/* Barre latérale de navigation */}
                    {/* Passe une référence de cette méthode à l'enfant. Quand l'enfant appelle cette méthode, elle change la valeur de l'onglet sélectionné. */}
                    <AdministrationNavigationSidebar
                        onAdministrationSidebarTabSelected={this.onSidebarTabSelected}
                        ongletActifId={this.state.ongletActifId}
                    />

                    <Divider orientation="vertical" flexItem />

                    {/* Zône du contenu de l'onglet sélectionné */}
                    <Container>
                        {/* Rendu dynamique du composant React */}
                        {React.createElement(this.state.componentToDisplayInContentZone)}
                    </Container>
                </Stack>
            </div>
        )
    }

    /**
     * @author Nathan Reyes
     * Quand un onglet est sélectionné, on change le contenu selon l'onglet sélectionné.
     * @param {string} newTabId - Identifiant de l'onglet qui vient d'être sélectionné.
    */
    onSidebarTabSelected = (newTabId: string) => {
        const ongletTrouve = this.trouverOnglet(newTabId);

        // Change la variable d'état du composant React affiché dans la zône de contenu.
        // On recherche l'onglet sélectionné dans la liste des onglets et dans cet onglet, il y a le composant React à afficher dans la zône de contenu.
        this.setState({
            componentToDisplayInContentZone: ongletTrouve.componentToDisplayInContentZone,
            ongletActifId: ongletTrouve.id,
        });

        this.mettreAJourUrl(ongletTrouve.id);
    };

    /**
     * @author Nathan Reyes
     * Récupère l'onglet dans l'URL et valide qu'il existe.
    */
    obtenirOngletDepuisUrl() {
        const params = new URLSearchParams(window.location.search);
        const onglet = params.get("onglet");

        return this.trouverOnglet(onglet ?? "").id;
    }

    /**
     * @author Nathan Reyes
     * Retourne l'onglet correspondant, sinon le premier de la liste.
    */
    trouverOnglet(ongletId: string) {
        return ADMINISTRATION_MAIN_PAGE_TABS.find(tab => tab.id === ongletId) ?? ADMINISTRATION_MAIN_PAGE_TABS[0];
    }

    /**
     * @author Nathan Reyes
     * Met à jour l'URL avec l'onglet sélectionné.
    */
    mettreAJourUrl(ongletId: string, remplacer = false) {
        const url = new URL(window.location.href);
        url.searchParams.set("onglet", ongletId);
        if (remplacer) {
            window.history.replaceState({}, "", url.toString());
        } else {
            window.history.pushState({}, "", url.toString());
        }
    }

    /**
     * @author Nathan Reyes
     * Gère la navigation via l'historique (retour/avance).
    */
    gestionRetourHistorique = () => {
        const ongletId = this.obtenirOngletDepuisUrl();
        const ongletTrouve = this.trouverOnglet(ongletId);

        this.setState({
            componentToDisplayInContentZone: ongletTrouve.componentToDisplayInContentZone,
            ongletActifId: ongletTrouve.id,
        });
    };
}
