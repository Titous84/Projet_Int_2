import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./PageSection.module.css";

interface PageSectionProps {
    /**
     * Titre affiché dans l'en-tête de la section.
     */
    titre: string;
    /**
     * Contenu principal de la section.
     */
    children: React.ReactNode;
    /**
     * Permet d'afficher la section en pleine largeur.
     */
    estPleineLargeur?: boolean;
}

/**
 * Composant commun pour afficher une section de page avec un en-tête uniforme.
 */
export default function PageSection({ titre, children, estPleineLargeur = false }: PageSectionProps) {
    return (
        <Container maxWidth={estPleineLargeur ? false : "md"} className={styles.conteneur}>
            <Paper elevation={8} className={styles.carte}>
                {/* En-tête uniforme pour garder la même présentation partout */}
                <Box className={styles.entete}>
                    <Typography variant="h5" component="h2">
                        {titre}
                    </Typography>
                </Box>
                {children}
            </Paper>
        </Container>
    );
}
