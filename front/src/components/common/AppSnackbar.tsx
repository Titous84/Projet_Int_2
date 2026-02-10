/**
 * @author Nathan Reyes
*/
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { MessagePosition, MessageTypes, SNACKBAR_EVENT_NAME } from "../../utils/utils";

interface EtatSnackbar {
    /**
     * @author Nathan Reyes
     * Indique si le Snackbar est visible.
    */
    ouvert: boolean;
    /**
     * @author Nathan Reyes
     * Texte affiché dans la notification.
    */
    message: string;
    /**
     * @author Nathan Reyes
     * Type visuel de la notification.
    */
    type: MessageTypes;
    /**
     * @author Nathan Reyes
     * Durée d'affichage en millisecondes.
    */
    duree: number;
    /**
     * @author Nathan Reyes
     * Position d'affichage.
    */
    position: MessagePosition;
}

/**
 * @author Nathan Reyes
 * Composant global qui écoute les notifications et affiche un Snackbar MUI.
*/
export default class AppSnackbar extends React.Component<{}, EtatSnackbar> {
    state: EtatSnackbar = {
        ouvert: false,
        message: "",
        type: "info",
        duree: 5000,
        position: "top-center",
    };

    componentDidMount() {
        window.addEventListener(SNACKBAR_EVENT_NAME, this.gererEvenement as EventListener);
    }

    componentWillUnmount() {
        window.removeEventListener(SNACKBAR_EVENT_NAME, this.gererEvenement as EventListener);
    }

    /**
     * @author Nathan Reyes
     * Reçoit un évènement global pour afficher un Snackbar.
    */
    gererEvenement = (event: Event) => {
        const detail = (event as CustomEvent).detail ?? {};

        this.setState({
            ouvert: true,
            message: detail.message ?? "",
            type: detail.type ?? "info",
            duree: detail.delay ?? 5000,
            position: detail.position ?? "top-center",
        });
    };

    /**
     * @author Nathan Reyes
     * Ferme le Snackbar.
    */
    fermerSnackbar = () => {
        this.setState({ ouvert: false });
    };

    /**
     * @author Nathan Reyes
     * Convertit la position en ancrage MUI.
    */
    obtenirAncrage(position: MessagePosition) {
        const [vertical, horizontal] = position.split("-");
        return {
            vertical: vertical as "top" | "bottom",
            horizontal: horizontal as "left" | "center" | "right",
        };
    }

    render() {
        return (
            <Snackbar
                open={this.state.ouvert}
                autoHideDuration={this.state.duree}
                onClose={this.fermerSnackbar}
                anchorOrigin={this.obtenirAncrage(this.state.position)}
            >
                <Alert onClose={this.fermerSnackbar} severity={this.state.type === "default" ? "info" : this.state.type} variant="filled">
                    {this.state.message}
                </Alert>
            </Snackbar>
        );
    }
}
