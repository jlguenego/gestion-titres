import type { MenuDirectory } from '@/interfaces/Menu'
import {
  BookOpenIcon,
  BuildingLibraryIcon,
  CircleStackIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilIcon,
  PlusIcon,
  ServerStackIcon,
  StopCircleIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'

export const emptyMenuDir: MenuDirectory = {
  content: [],
  label: '',
  type: 'directory',
}

export const defaultMenuDir: MenuDirectory = {
  label: 'Root',
  type: 'directory',
  content: [
    { label: 'Accueil', name: 'welcome', type: 'item', icon: HomeIcon },
    {
      label: 'Opérations',
      type: 'directory',
      content: [
        {
          label: 'Saisie opération',
          name: 'saisie_operation',
          type: 'item',
          icon: PlusIcon,
          favorite: 10,
        },
        {
          label: 'Compte courant',
          name: 'compte_courant',
          type: 'item',
          icon: BookOpenIcon,
          favorite: 2,
        },
        { label: 'Mise à jour des cours', name: 'maj_cours', type: 'item', icon: PencilIcon },
        { label: 'Arrêtés', name: 'arretes', type: 'item', icon: StopCircleIcon },
        { label: 'Changement dépositaire', name: 'changement_depositaire', type: 'item' },
        { label: "Copie d'historique titre", name: 'copie_historique_titre', type: 'item' },
        {
          label: "Suppression d'historique",
          name: 'suppression_historique',
          type: 'item',
          icon: TrashIcon,
        },
      ],
    },
    {
      label: 'Inventaire',
      type: 'directory',
      content: [
        { label: 'Etat de valorisation', name: 'etat_valorisation', type: 'item' },
        { label: 'Titre/Portefeuille', name: 'titre_portefeuille', type: 'item' },
        { label: 'Bottin des valeurs', name: 'bottin_valeurs', type: 'item' },
        { label: 'Localisation des titres', name: 'localisation_titres', type: 'item' },
        { label: 'Situations', name: 'situations', type: 'item' },
      ],
    },
    {
      label: 'Comptabilité',
      type: 'directory',
      content: [
        { label: 'Journal', name: 'journal', type: 'item' },
        { label: 'Grand livre', name: 'grand_livre', type: 'item' },
        { label: 'Compte de résultat', name: 'compte_resultat', type: 'item' },
        {
          label: 'Etat récapitulation opérations',
          name: 'etat_recapitulation_operations',
          type: 'item',
        },
        { label: 'Editions fiches titres', name: 'edition_fiches_titres', type: 'item' },
        { label: 'Récapitulation', name: 'recapitulation', type: 'item' },
        { label: 'Suivi comptable', name: 'suivi_comptable', type: 'item' },
        { label: 'Plus ou moins value', name: 'plus_moins_value', type: 'item' },
      ],
    },
    {
      label: 'Réglementation',
      type: 'directory',
      content: [
        { label: 'Affectations', name: 'affectations', type: 'item' },
        { label: 'Réserves capitalisation', name: 'reserves_capitalisation', type: 'item' },
        { label: "Reprises d'amortissement", name: 'reprises_amortissement', type: 'item' },
        { label: 'Etat trimestriel', name: 'etat_trimestriel', type: 'item' },
        { label: 'Etat des placements', name: 'etat_placements', type: 'item' },
        { label: '+/- values fiscales', name: 'pmvalues_fiscales', type: 'item' },
        { label: '+/- values lat. fiscales', name: 'pmvalues_lat_fiscales', type: 'item' },
        { label: '+/- values oblig. fiscales', name: 'pmvalues_oblig_fiscales', type: 'item' },
        { label: 'Surcote/Décote fiscales', name: 'surcode_decote_fiscales', type: 'item' },
      ],
    },
    {
      label: 'Analyse',
      type: 'directory',
      content: [
        { label: 'Performances', name: 'performances', type: 'item' },
        { label: 'Etats de risques', name: 'etats_risques', type: 'item' },
        { label: 'Echéanciers coupons', name: 'echeanciers_coupons', type: 'item' },
        { label: 'Echéanciers remboursement', name: 'echeanciers_remboursement', type: 'item' },
        { label: 'Obligataire à taux fixe', name: 'obligataire_taux_fixe', type: 'item' },
      ],
    },
    {
      label: 'Paramétrage',
      type: 'directory',
      permission: 'menu:parametrage',
      content: [
        {
          label: 'Paramétrages généraux',
          type: 'directory',
          content: [
            {
              label: 'Back-End',
              name: 'settings/general/backend',
              type: 'item',
              icon: ServerStackIcon,
            },
            { label: 'Contexte', name: 'contexte', type: 'item' },
            { label: 'Règles fonctionnement', name: 'regle_fonctionnement', type: 'item' },
            { label: 'Edition des contextes', name: 'edition_contextes', type: 'item' },
            { label: 'Edition des règles', name: 'regles', type: 'item' },
          ],
        },
        {
          label: 'Environnement utilisateur',
          type: 'directory',
          content: [
            { label: 'Utilisateurs', name: 'users', type: 'item' },
            { label: 'Groupes', name: 'groups', type: 'item' },
            { label: 'Privilèges', name: 'privileges', type: 'item' },
          ],
        },
        {
          label: 'Paramétrages éditions',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo123', type: 'item' }],
        },
        {
          label: 'Paramétrages comptabilité',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo124', type: 'item' }],
        },
        {
          label: 'Paramétrages gestion',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo125', type: 'item' }],
        },
        {
          label: 'Environnement titre',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo126', type: 'item' }],
        },
        {
          label: 'Classements',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo127', type: 'item' }],
        },
      ],
    },
    {
      label: 'Maintenance',
      permission: 'menu:maintenance',
      type: 'directory',
      content: [
        { label: 'Sauvegarde', name: 'sauvegarde', type: 'item' },
        { label: 'Restauration', name: 'restauration', type: 'item' },
        { label: 'Vérification utilisation', name: 'verification_utilisation', type: 'item' },
        {
          label: 'Base de données',
          name: 'database',
          type: 'item',
          icon: CircleStackIcon,
          favorite: 3,
        },
        { label: 'Intervention/fichiers', name: 'intervention_fichiers', type: 'item' },
        { label: 'Epuration dépositaires', name: 'epuration_depositaires', type: 'item' },
        { label: 'Inversion des classements', name: 'inversion_classements', type: 'item' },
        { label: 'Editions', name: 'editions', type: 'item' },
        { label: 'Mise à jour Wintit', name: 'maj_wintit', type: 'item' },
      ],
    },
    {
      label: 'Documentation',
      type: 'directory',
      content: [
        {
          label: 'Introduction',
          name: 'documentation/introduction',
          type: 'item',
          icon: BuildingLibraryIcon,
        },
        { label: 'Menu', name: 'documentation/menu', type: 'item', icon: InformationCircleIcon },
        {
          label: 'Paramétrages',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo222', type: 'item' }],
        },
        {
          label: 'Analyse',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo223', type: 'item' }],
        },
        {
          label: 'Réglementation',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo224', type: 'item' }],
        },
        {
          label: 'Comptabilité',
          type: 'directory',
          content: [{ label: 'A definir', name: 'todo225', type: 'item' }],
        },
      ],
    },
    {
      label: 'Aide',
      type: 'directory',
      content: [
        { label: 'Favoris', name: 'favorites', type: 'item' },
        { label: 'A propos', name: 'about', type: 'item' },
      ],
    },
  ],
}
