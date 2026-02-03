/**
 * @author Nathan Reyes
 */
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { MessagePosition, MessageTypes, SNACKBAR_EVENT_NAME } from "../../utils/utils";

interface EtatSnackbar {
    /**
     * Indique si le Snackbar est visible.
     */
    ouvert: boolean;
    /**
     * Texte affiché dans la notification.
     */
    message: string;
    /**
     * Type visuel de la notification.
     */
    type: MessageTypes;
    /**
     * Durée d'affichage en millisecondes.
     */
    duree: number;
    /**
     * Position d'affichage.
     */
    position: MessagePosition;
}

/**
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
     * Ferme le Snackbar.
     */
    fermerSnackbar = () => {
        this.setState({ ouvert: false });
    };

    /**
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
