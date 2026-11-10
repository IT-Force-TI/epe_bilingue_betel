// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'epe-bilingue-betel-kara',
  logo: '/logo-epe-bilingue-betel.png',
  settings: {
    name: 'EPE BILINGUE BETEL',
    shortName: 'EPE BILINGUE BETEL',
    slogan: 'GRANDIR DANS LA FOI ET LE SAVOIR',
    address: 'Lamatchamdè (Tchaloudè), Kozah Centre — Kara, Togo',
    email: 'contact@epe-betel-kara.tg',
    phone: '+228 90 24 35 54',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 60000,
    canteenFee: 300,
    badgeFee: 500,
    uniformFee: 3000,
    apeFee: 1500,
  },
  footerText:
    'Une école évangélique bilingue agréée par l’État, à Lamatchamdè (Kara), où chaque enfant apprend en français et en anglais dès la maternelle.',
  hero: {
    eyebrow: 'FOI - TRAVAIL - EXCELLENCE',
    titleLines: ['École Évangélique', 'Bilingue'],
    highlight: 'BETEL',
    intro:
      'Bienvenue sur le site officiel de l’EPE BILINGUE BETEL, école évangélique bilingue agréée par l’État, à Lamatchamdè (Kara) : un cadre bienveillant où les enfants apprennent en français et en anglais, de la maternelle au CM2.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur de l’EPE BILINGUE BETEL',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Grandir, apprendre,', 'réussir ensemble.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'À l’EPE BILINGUE BETEL, nous croyons au potentiel de chaque enfant. Notre ambition est de lui offrir, dès la maternelle, un cadre d’apprentissage stimulant et bienveillant, fondé sur les valeurs chrétiennes et ouvert sur le monde grâce au bilinguisme.',
      'Notre équipe éducative accompagne les élèves avec exigence et attention, en lien étroit avec les familles de Lamatchamdè et de toute la ville de Kara, pour leur donner des bases solides en français comme en anglais.',
    ],
    signature: 'KOZOLINE Tchamdja — Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'L’EPE BILINGUE BETEL est implantée à Lamatchamdè, dans le quartier Tchaloudè (Lama), commune de Kozah Centre, près de Kara. Elle est née de la volonté d’offrir aux familles une école chrétienne de qualité, ouverte sur l’anglais dès le plus jeune âge.',
      'Conscients des attentes des familles dans leur recherche d’un établissement scolaire de qualité, nous avons créé une école qui allie excellence académique et épanouissement personnel en offrant un cadre d’apprentissage stimulant, sécurisé et adapté aux besoins de chaque enfant.',
      'L’EPE BILINGUE BETEL est un établissement évangélique agréé par le Ministère de l’Éducation nationale du Togo. Elle suit le programme officiel togolais et propose un enseignement bilingue, avec une introduction précoce de l’anglais aux côtés du français, afin de former des enfants confiants et ouverts sur le monde.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Des bases solides en lecture, écriture et calcul pour chaque élève.' },
    { icon: 'heart', title: 'Valeurs chrétiennes', text: 'L’amour du prochain, le respect et l’honnêteté au quotidien.' },
    { icon: 'idea', title: 'Bilinguisme', text: 'Le français et l’anglais appris ensemble, dès la maternelle.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Kara.' },
  ],
  faq: [
    {
      q: 'L’école est-elle reconnue par l’État ?',
      a: 'Oui. L’EPE BILINGUE BETEL est un établissement évangélique agréé par le Ministère de l’Éducation nationale du Togo. Elle suit le programme officiel, avec un enseignement bilingue français-anglais dès la maternelle.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Kara desservis.',
    },
    {
      q: 'Les frais de scolarité à l’EPE BILINGUE BETEL s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle constitue la première étape du parcours scolaire. Elle favorise l’éveil, la socialisation, l’autonomie et les premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Découverte des nombres et des formes',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Musique et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Découvrir, expérimenter et apprendre en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      slug: 'primaire',
      age: '6 à 11 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux et développe la curiosité. Chaque élève progresse dans un cadre structuré, bilingue et bienveillant.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Ouverture aux sciences et au monde',
        'Pratique progressive du français et de l’anglais',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et mathématiques au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'users',
          title: 'Sport et coopération',
          text: 'Apprendre le respect, l’esprit d’équipe et l’autonomie.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (sauf pour enfant entrant en Maternelle 1)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
