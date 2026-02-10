/**
 * @author Nathan Reyes
*/
/**
 * @author Nathan Reyes
 * Tristan Lafontaine
*/
import React from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator'
import TeamMember from '../../types/sign-up/team-member';
import { MAX_LENGTH_FIRST_NAME, MAX_LENGTH_LAST_NAME } from '../../utils/constants';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper } from '@mui/material';
import styles from "./../../pages/ParticipantRegistration/ParticipantRegistrationPage.module.css";
import { TextValidator } from 'react-material-ui-form-validator'
import { INPUT_VARIANT } from '../../utils/muiConstants';
import { TEXTS } from '../../lang/fr';
import { suffix } from '../../utils/utils';

/**
 * @author Nathan Reyes
 * Composant membre de l'équipe
*/
interface TeamMemberFormProps{
    teamMember:TeamMember;
    number:number;
    handleChangeTeamMember:(number:number,key:string,value:any) => void;
}

export default class TeamMemberForm extends React.Component<TeamMemberFormProps> {
    /**
     * @author Nathan Reyes
     * Vérification personnaliser
    */
     componentDidMount() {

        //  Vérfier la longeur du champs nom famille
        ValidatorForm.addValidationRule('maxLenghtLastName', (value) => {
        if (value.length > MAX_LENGTH_LAST_NAME) {
            return false;
        }
            return true;
        });
        //  Vérifier la longeur du champs prénom
        ValidatorForm.addValidationRule('maxLenghtFirstName', (value) => {
            if (value.length > MAX_LENGTH_FIRST_NAME) {
                return false;
            }
            return true;
        });
    }
        
    //Permet d'enlever l'erreur des champs quand il respecte les critères
    componentWillUnmount() {
        // Retir l'erreur pour le champs prénom
        ValidatorForm.removeValidationRule('maxLenghtFirstName');
        // Retir l'erreur pour le champs nom famille
        ValidatorForm.removeValidationRule('maxLenghtLastName');
    }

    render(){
        return (
            <Paper elevation={8} className={`${styles.paddingPaper} ${styles.paddingPaperTop} ${styles.member}`}>
            <Paper
                    className={`${styles.subhead} ${styles.stack}`}
                >
                    <h2>{this.props.number}<sup>{suffix(this.props.number)}</sup> membre</h2>
                </Paper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextValidator
                                required
                                variant={INPUT_VARIANT}
                                label={TEXTS.signup.firstName.label}
                                name={TEXTS.signup.firstName.label}
                                onChange={(event:any) => this.props.handleChangeTeamMember(this.props.number,"firstName",event.target.value)}
                                value={this.props.teamMember.firstName}
                                validators={['required', 'maxLenghtFirstName']}
                                errorMessages={[TEXTS.signup.firstName.error.required, TEXTS.signup.firstName.error.maximum]}
                                inputProps={{ maxLength: MAX_LENGTH_FIRST_NAME }}
                                fullWidth />
                            <p className={styles.alignRight}>{this.props.teamMember.firstName.length} / {MAX_LENGTH_FIRST_NAME}</p>
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <TextValidator
                                required
                                variant={INPUT_VARIANT}
                                label={TEXTS.signup.lastName.label}
                                name={TEXTS.signup.lastName.label}
                                onChange={(event:any) => this.props.handleChangeTeamMember(this.props.number,"lastName",event.target.value)}
                                value={this.props.teamMember.lastName}
                                validators={['required', 'maxLenghtLastName']}
                                errorMessages={[TEXTS.signup.lastName.error.required, TEXTS.signup.lastName.error.maximum]}
                                inputProps={{ maxLength: MAX_LENGTH_LAST_NAME }}
                                fullWidth />
                            <p className={styles.alignRight}>{this.props.teamMember.lastName.length} / {MAX_LENGTH_LAST_NAME}</p>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextValidator
                                required
                                variant={INPUT_VARIANT}
                                label="Numero DA"
                                onChange={(event:any) => this.props.handleChangeTeamMember(this.props.number, "numero_da",event.target.value)}
                                name="Numero DA"
                                value={this.props.teamMember.numero_da}
                                validators={['required']}
                                errorMessages={['Le numéro de DA est requis']}
                                inputProps={{ maxLength: 255 }}
                                fullWidth />
                            <p className={styles.alignRight}>{this.props.teamMember.numero_da.length} / 255</p>
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <FormControl>
                            <FormLabel>{TEXTS.signup.anonymous.label}</FormLabel>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.teamMember.isAnonymous}
                                        onChange={(event: any) => {
                                            // Active ou désactive le masquage des informations personnelles.
                                            this.props.handleChangeTeamMember(this.props.number, "isAnonymous", event.target.checked);
                                        }}
                                    />
                                }
                                label={TEXTS.signup.anonymous.helper}
                            />
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <FormControl>
                            <FormLabel>{TEXTS.signup.pictureConsent.label}</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.teamMember.photoConsentPublication}
                                            disabled={this.props.teamMember.photoConsentRefusal}
                                            onChange={(event:any) => {
                                                // Consentement pour un usage public.
                                                this.props.handleChangeTeamMember(this.props.number,"photoConsentPublication", event.target.checked)
                                            }}
                                        />
                                    }
                                    label={TEXTS.signup.pictureConsent.publication}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.teamMember.photoConsentInternal}
                                            disabled={this.props.teamMember.photoConsentRefusal}
                                            onChange={(event:any) => {
                                                // Consentement pour un usage interne.
                                                this.props.handleChangeTeamMember(this.props.number,"photoConsentInternal", event.target.checked)
                                            }}
                                        />
                                    }
                                    label={TEXTS.signup.pictureConsent.internal}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.teamMember.photoConsentRefusal}
                                            onChange={(event:any) => {
                                                // Refus total de la prise de photos.
                                                this.props.handleChangeTeamMember(this.props.number,"photoConsentRefusal", event.target.checked)
                                            }}
                                        />
                                    }
                                    label={TEXTS.signup.pictureConsent.refusal}
                                />
                            </FormGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
        );
    }
}
