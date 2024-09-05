import type { Menu } from '@/authnz/interfaces/Menu'

export const menuDefaults: Menu[] = [
  { label: 'Accueil', to: '/welcome', type: 'item' },
  {
    label: 'Opérations',
    type: 'directory',
    content: [
      { label: 'Saisie opération', to: '/users', type: 'item' },
      { label: 'Compte courant', to: '/groups', type: 'item' },
      { label: 'Mise à jour des cours', to: '/privileges', type: 'item' },
      { label: 'Arrêtés', to: '/database', type: 'item' },
      { label: 'Changement dépositaire', to: '/database', type: 'item' },
      { label: "Copie d'historique titre", to: '/database', type: 'item' },
      { label: "Suppression d'historique", to: '/database', type: 'item' },
    ],
  },
  {
    label: 'Inventaire',
    type: 'directory',
    content: [
      { label: 'Etat de valorisation', to: '/users', type: 'item' },
      { label: 'Titre/Portefeuille', to: '/groups', type: 'item' },
      { label: 'Bottin des valeurs', to: '/privileges', type: 'item' },
      { label: 'Localisation des titres', to: '/database', type: 'item' },
      { label: 'Situations', to: '/database', type: 'item' },
    ],
  },
  {
    label: 'Comptabilité',
    type: 'directory',
    content: [
      { label: 'Journal', to: '/users', type: 'item' },
      { label: 'Grand livre', to: '/groups', type: 'item' },
      { label: 'Compte de résultat', to: '/privileges', type: 'item' },
      { label: 'Etat récapitulation opérations', to: '/database', type: 'item' },
      { label: 'Editions fiches titres', to: '/database', type: 'item' },
      { label: 'Récapitulation', to: '/database', type: 'item' },
      { label: 'Suivi comptable', to: '/database', type: 'item' },
      { label: 'Plus ou moins value', to: '/database', type: 'item' },
    ],
  },
  {
    label: 'Réglementation',
    type: 'directory',
    content: [
      { label: 'Affectations', to: '/users', type: 'item' },
      { label: 'Réserves capitalisation', to: '/groups', type: 'item' },
      { label: "Reprises d'amortissement", to: '/privileges', type: 'item' },
      { label: 'Etat trimistriel', to: '/database', type: 'item' },
      { label: 'Etat des placements', to: '/database', type: 'item' },
      { label: '+/- values fiscales', to: '/database', type: 'item' },
      { label: '+/- values lat. fiscales', to: '/database', type: 'item' },
      { label: '+/- values oblig. fiscales', to: '/database', type: 'item' },
      { label: 'Surcote/Décote fiscales', to: '/database', type: 'item' },
    ],
  },
  {
    label: 'Analyse',
    type: 'directory',
    content: [
      { label: 'Performances', to: '/users', type: 'item' },
      { label: 'Etats de risques', to: '/groups', type: 'item' },
      { label: 'Echéanciers coupons', to: '/privileges', type: 'item' },
      { label: 'Echéanciers remboursement', to: '/database', type: 'item' },
      { label: 'Obligataire à taux fixe', to: '/database', type: 'item' },
    ],
  },
  {
    label: 'Paramétrage',
    type: 'directory',
    content: [
      {
        label: 'Paramétrages généraux',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Environnement utilisateur',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Paramétrages éditions',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Paramétrages comptabilité',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Paramétrages gestion',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Environnement titre',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Classements',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
    ],
  },
  {
    label: 'Maintenance',
    type: 'directory',
    content: [
      { label: 'Sauvegarde', to: '/users', type: 'item' },
      { label: 'Restauration', to: '/groups', type: 'item' },
      { label: 'Vérification utilisation', to: '/privileges', type: 'item' },
      { label: 'Base de données', to: '/database', type: 'item' },
      { label: 'Intervention/fichiers', to: '/database', type: 'item' },
      { label: 'Epuration dépositaires', to: '/database', type: 'item' },
      { label: 'Inversion des classements', to: '/database', type: 'item' },
      { label: 'Editions', to: '/database', type: 'item' },
      { label: 'Mise à jour Wintit', to: '/database', type: 'item' },
    ],
  },
  {
    label: 'Documentations',
    type: 'directory',
    content: [
      { label: 'Menu', to: '/users', type: 'item' },
      {
        label: 'Paramétrages',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Analyse',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Réglementation',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
      {
        label: 'Comptabilité',
        type: 'directory',
        content: [{ label: 'A definir', to: '/users', type: 'item' }],
      },
    ],
  },
  {
    label: 'Aide',
    type: 'directory',
    content: [
      { label: 'Favoris', to: '/users', type: 'item' },
      { label: 'A propos', to: '/groups', type: 'item' },
    ],
  },
]
