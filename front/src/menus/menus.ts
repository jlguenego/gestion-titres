import type { Menu } from '@/authnz/interfaces/Menu'

export const menuDefaults: Menu[] = [
  { label: 'Accueil', name: 'welcome', type: 'item' },
  {
    label: 'Opérations',
    type: 'directory',
    content: [
      { label: 'Saisie opération', name: 'users', type: 'item' },
      { label: 'Compte courant', name: 'groups', type: 'item' },
      { label: 'Mise à jour des cours', name: 'privileges', type: 'item' },
      { label: 'Arrêtés', name: 'database', type: 'item' },
      { label: 'Changement dépositaire', name: 'database', type: 'item' },
      { label: "Copie d'historique titre", name: 'database', type: 'item' },
      { label: "Suppression d'historique", name: 'database', type: 'item' },
    ],
  },
  {
    label: 'Inventaire',
    type: 'directory',
    content: [
      { label: 'Etat de valorisation', name: 'users', type: 'item' },
      { label: 'Titre/Portefeuille', name: 'groups', type: 'item' },
      { label: 'Bottin des valeurs', name: 'privileges', type: 'item' },
      { label: 'Localisation des titres', name: 'database', type: 'item' },
      { label: 'Situations', name: 'database', type: 'item' },
    ],
  },
  {
    label: 'Comptabilité',
    type: 'directory',
    content: [
      { label: 'Journal', name: 'users', type: 'item' },
      { label: 'Grand livre', name: 'groups', type: 'item' },
      { label: 'Compte de résultat', name: 'privileges', type: 'item' },
      { label: 'Etat récapitulation opérations', name: 'database', type: 'item' },
      { label: 'Editions fiches titres', name: 'database', type: 'item' },
      { label: 'Récapitulation', name: 'database', type: 'item' },
      { label: 'Suivi comptable', name: 'database', type: 'item' },
      { label: 'Plus ou moins value', name: 'database', type: 'item' },
    ],
  },
  {
    label: 'Réglementation',
    type: 'directory',
    content: [
      { label: 'Affectations', name: 'users', type: 'item' },
      { label: 'Réserves capitalisation', name: 'groups', type: 'item' },
      { label: "Reprises d'amortissement", name: 'privileges', type: 'item' },
      { label: 'Etat trimistriel', name: 'database', type: 'item' },
      { label: 'Etat des placements', name: 'database', type: 'item' },
      { label: '+/- values fiscales', name: 'database', type: 'item' },
      { label: '+/- values lat. fiscales', name: 'database', type: 'item' },
      { label: '+/- values oblig. fiscales', name: 'database', type: 'item' },
      { label: 'Surcote/Décote fiscales', name: 'database', type: 'item' },
    ],
  },
  {
    label: 'Analyse',
    type: 'directory',
    content: [
      { label: 'Performances', name: 'users', type: 'item' },
      { label: 'Etats de risques', name: 'groups', type: 'item' },
      { label: 'Echéanciers coupons', name: 'privileges', type: 'item' },
      { label: 'Echéanciers remboursement', name: 'database', type: 'item' },
      { label: 'Obligataire à taux fixe', name: 'database', type: 'item' },
    ],
  },
  {
    label: 'Paramétrage',
    type: 'directory',
    content: [
      {
        label: 'Paramétrages généraux',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Environnement utilisateur',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Paramétrages éditions',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Paramétrages comptabilité',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Paramétrages gestion',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Environnement titre',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Classements',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
    ],
  },
  {
    label: 'Maintenance',
    type: 'directory',
    content: [
      { label: 'Sauvegarde', name: 'users', type: 'item' },
      { label: 'Restauration', name: 'groups', type: 'item' },
      { label: 'Vérification utilisation', name: 'privileges', type: 'item' },
      { label: 'Base de données', name: 'database', type: 'item' },
      { label: 'Intervention/fichiers', name: 'database', type: 'item' },
      { label: 'Epuration dépositaires', name: 'database', type: 'item' },
      { label: 'Inversion des classements', name: 'database', type: 'item' },
      { label: 'Editions', name: 'database', type: 'item' },
      { label: 'Mise à jour Wintit', name: 'database', type: 'item' },
    ],
  },
  {
    label: 'Documentations',
    type: 'directory',
    content: [
      { label: 'Menu', name: 'users', type: 'item' },
      {
        label: 'Paramétrages',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Analyse',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Réglementation',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
      {
        label: 'Comptabilité',
        type: 'directory',
        content: [{ label: 'A definir', name: 'users', type: 'item' }],
      },
    ],
  },
  {
    label: 'Aide',
    type: 'directory',
    content: [
      { label: 'Favoris', name: 'users', type: 'item' },
      { label: 'A propos', name: 'groups', type: 'item' },
    ],
  },
]
