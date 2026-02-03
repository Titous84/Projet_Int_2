/**
 * @author Nathan Reyes
 */
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { TEXTS } from '../../lang/fr';
import AdministratorsTable from "../../components/AdministratorsListPage/AdministrationTable/AdministratorsTable";
import UserService from "../../api/users/userService";
import { ShowToast } from "../../utils/utils";

/**
 * Page de gestion des administrateurs
 * 
 * Affiche la liste des administrateurs et permet l'ajout, la modification
 * et la suppression d'administrateurs.
 * 
 * @author Antoine Ouellette
 */
export default function AdministratorsListPage() {
    const [dialogOuvert, setDialogOuvert] = React.useState(false);
    const [reinitialisationEnCours, setReinitialisationEnCours] = React.useState(false);

    /**
     * Lance la réinitialisation annuelle après confirmation.
     */
    const confirmerReinitialisation = async () => {
        setReinitialisationEnCours(true);
        try {
            await UserService.resetAnnualData();
            ShowToast(TEXTS.administratorsListPage.resetSuccess, 5000, "success", "top-center", false);
        } catch (error) {
            const message = error instanceof Error ? error.message : TEXTS.administratorsListPage.resetError;
            ShowToast(message, 5000, "error", "top-center", false);
        } finally {
            setReinitialisationEnCours(false);
            setDialogOuvert(false);
        }
    };

    return (
        <div data-testid="administratorsListPage">
            <Box sx={{ mb: 4 }}>
                {/* Titre du contenu */}
                <Typography variant="h4" sx={{ mt:4, mb:2 }}>{TEXTS.administratorsListPage.title}</Typography>

                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Typography variant="body1">{TEXTS.administratorsListPage.resetDescription}</Typography>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => setDialogOuvert(true)}
                        disabled={reinitialisationEnCours}
                    >
                        {TEXTS.administratorsListPage.resetAction}
                    </Button>
                </Stack>

                {/* Tableau de la liste des administrateurs */}
                <AdministratorsTable />
            </Box>

            <Dialog open={dialogOuvert} onClose={() => setDialogOuvert(false)}>
                <DialogTitle>{TEXTS.administratorsListPage.resetTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {TEXTS.administratorsListPage.resetConfirmation}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOuvert(false)}>
                        {TEXTS.administratorsListPage.resetCancel}
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={confirmerReinitialisation}
                        disabled={reinitialisationEnCours}
                    >
                        {TEXTS.administratorsListPage.resetConfirm}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
