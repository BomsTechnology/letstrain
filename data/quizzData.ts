import {ImageSourcePropType} from "react-native";
import {QuizzQuestionProps} from "@/types/QuizzProps";

export type pageTypeProps = 'Page1' | 'Page2' | 'Page3' | 'Page4';
export type questionTypeProps = 'Question1' | 'Question2' | 'Question3' | 'Question4' | 'Question5' | 'Question6' | 'Question7' | 'Question8';
export type QuizzDataProps = {
    id: string;
    pageType: pageTypeProps;
    questionType: questionTypeProps;
    title: string;
    questions: QuizzQuestionProps[];
    image?: ImageSourcePropType;
    quote?: string;
    quoteAuthor?: string;
    multiple: boolean;
    multipleAmount?: number,
}

const quizzData: QuizzDataProps[] = [
    {
        id: 'question1',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question1',
        title: 'Quel est ton principal objectif ?',
        questions: [
            {
                id: 'question1-resp-1',
                label: 'Perdre de la graisse',
                value: 'Perdre de la graisse',
            },
            {
                id: 'question1-resp-2',
                label: 'Perdre de la graisse et me renforcer musculairement',
                value: 'Perdre de la graisse et me renforcer musculairement',
            },
            {
                id: 'question1-resp-3',
                label: 'Perdre de la graisse et améliorer l’endurance',
                value: 'Perdre de la graisse et améliorer l’endurance',
            },
            {
                id: 'question1-resp-4',
                label: 'Perdre de la graisse et améliorer la flexibilité',
                value: 'Perdre de la graisse et améliorer la flexibilité',
            }
        ],
        image: require('@/assets/images/quizz/img_step_1.png'),
    },
    {
        id: 'question2',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question2',
        title: 'Au niveau de quelle partie de ton corps as-tu le plus de graisse ?',
        questions: [
            {
                id: 'question2-resp-1',
                label: 'Le haut du corps',
                value: 'Le haut du corps',
                description: '(ventre, bras,…)',
                icon: require('@/assets/images/quizz/img_step_2_1.png'),
            },
            {
                id: 'question2-resp-2',
                label: 'Le bas du corps',
                value: 'Le bas du corps',
                description: '(fesses, cuisses,…)',
                icon: require('@/assets/images/quizz/img_step_2_2.png'),
            },
            {
                id: 'question2-resp-3',
                label: 'L’ensemble de mon corps',
                value: 'L’ensemble de mon corps',
                description: '',
                icon: require('@/assets/images/quizz/img_step_2_3.png'),
            }
        ],
    },
    {
        id: 'question4',
        multiple: false,
        pageType: 'Page2',
        questionType: 'Question3',
        title: 'Quel est ton niveau sportif ?',
        questions: [
            {
                id: 'question4-resp-1',
                label: 'Débutant(e)',
                value: 'Débutant(e)',
                icon: require('@/assets/images/quizz/img_step_4_1.png')
            },
            {
                id: 'question4-resp-2',
                label: 'Intermédiaire',
                value: 'Intermédiaire',
                icon: require('@/assets/images/quizz/img_step_4_2.png')
            },
            {
                id: 'question4-resp-3',
                label: 'Avancé(e)',
                value: 'Avancé(e)',
                icon: require('@/assets/images/quizz/img_step_4_3.png')
            },
            {
                id: 'question4-resp-4',
                label: 'Expert(e)',
                value: 'Expert(e)',
                icon: require('@/assets/images/quizz/img_step_4_4.png')
            }
        ],
        image: require('@/assets/images/quizz/img_step_4.png'),
        quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.'
    },
    {
        id: 'question5',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question1',
        title: 'Combien de pas fais-tu environ chaque jour ?',
        questions: [
            {
                id: 'question5-resp-1',
                label: '- de 5 000',
                value: '- de 5 000',
            },
            {
                id: 'question5-resp-2',
                label: '5 000 - 10 000',
                value: '5 000 - 10 000',
            },
            {
                id: 'question5-resp-3',
                label: '10 000 - 15 000',
                value: '10 000 - 15 000',
            },
            {
                id: 'question5-resp-4',
                label: '+ de 15 000',
                value: '+ de 15 000',
            }
        ],
    },
    {
        id: 'question6',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question4',
        title: 'Où as-tu l’habitude de t’entraîner ?',
        questions: [
            {
                id: 'question6-resp-1',
                label: 'À la maison',
                value: 'À la maison',
                icon: require('@/assets/images/quizz/img_step_6_1.png'),
            },
            {
                id: 'question6-resp-2',
                label: 'En salle de sport',
                value: 'En salle de sport',
                icon: require('@/assets/images/quizz/img_step_6_2.png'),
            },
            {
                id: 'question6-resp-3',
                label: 'Dehors',
                value: 'Dehors',
                description: '',
                icon: require('@/assets/images/quizz/img_step_6_3.png'),
            }
        ],
    },
    {
        id: 'question7',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question5',
        title: 'Comment décrirais-tu tes habitudes alimentaires actuelles ?',
        questions: [
            {
                id: 'question7-resp-1',
                label: 'Je mange principalement des aliments transformés et des fast-food',
                value: 'Je mange principalement des aliments transformés et des fast-food',
            },
            {
                id: 'question7-resp-2',
                label: 'J’essaie de manger sainement, mais je fais souvent des écarts',
                value: 'J’essaie de manger sainement, mais je fais souvent des écarts',
            },
            {
                id: 'question7-resp-3',
                label: 'Je suis un plan alimentaire spécifique',
                value: 'Je suis un plan alimentaire spécifique',
                description: '(keto, végétalien, etc.)',
            },
            {
                id: 'question7-resp-4',
                label: 'J’ai une alimentation équilibrée avec quelques gourmandises occasionnelles',
                value: 'J’ai une alimentation équilibrée avec quelques gourmandises occasionnelles',
            }
        ],
    },
    {
        id: 'question8',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question6',
        title: 'Comment décrirais-tu ton niveau d’hydratation au quotidien ?',
        questions: [
            {
                id: 'question8-resp-1',
                label: 'Je bois rarement suffisamment d’eau',
                value: 'Je bois rarement suffisamment d’eau',
                icon: require('@/assets/images/quizz/img_step_8_1.png'),
            },
            {
                id: 'question8-resp-2',
                label: 'Je bois de l’eau, mais probablement pas assez',
                value: 'Je bois de l’eau, mais probablement pas assez',
                icon: require('@/assets/images/quizz/img_step_8_2.png'),
            },
            {
                id: 'question8-resp-3',
                label: 'Je reste assez bien hydraté(e)',
                value: 'Je reste assez bien hydraté(e)',
                icon: require('@/assets/images/quizz/img_step_8_3.png'),
            },
            {
                id: 'question8-resp-4',
                label: 'Je m’assure toujours d’être bien hydraté(e)',
                value: 'Je m’assure toujours d’être bien hydraté(e)',
                icon: require('@/assets/images/quizz/img_step_8_4.png'),
            }
        ],
    },
    {
        id: 'question9',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question2',
        title: 'Quel est ton plus grand obstacle lorsqu’il s’agit de perdre du gras ?',
        questions: [
            {
                id: 'question9-resp-1',
                label: 'L’alimentation',
                value: 'L’alimentation',
                icon: require('@/assets/images/quizz/img_step_9_1.png'),
            },
            {
                id: 'question9-resp-2',
                label: 'Le sport',
                value: 'Le sport',
                icon: require('@/assets/images/quizz/img_step_9_2.png'),
            },
            {
                id: 'question9-resp-3',
                label: 'Rester discipliné',
                value: 'Rester discipliné',
                icon: require('@/assets/images/quizz/img_step_9_3.png'),
            },
            {
                id: 'question9-resp-4',
                label: 'L’impatience',
                value: 'L’impatience',
                icon: require('@/assets/images/quizz/img_step_9_4.png'),
            }
        ],
    },
    {
        id: 'question10',
        multiple: false,
        pageType: 'Page2',
        questionType: 'Question1',
        title: 'Combien de fois par semaine peux-tu t’entraîner ?',
        questions: [
            {
                id: 'question10-resp-1',
                label: '3 jours',
                value: '3 jours',
            },
            {
                id: 'question10-resp-2',
                label: '4 jours',
                value: '4 jours',
            },
            {
                id: 'question10-resp-3',
                label: '5-6 jours',
                value: '5-6 jours',
            }
        ],
        image: require('@/assets/images/quizz/img_step_10.png'),
        quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.'
    },
    {
        id: 'question11',
        multiple: true,
        pageType: 'Page1',
        questionType: 'Question5',
        title: 'Quelles jours de la semaines préfères-tu t’entraîner ?',
        multipleAmount: 5,
        questions: [
            {
                id: 'question11-resp-1',
                label: 'Lundi',
                value: 'lundi',
            },
            {
                id: 'question11-resp-2',
                label: 'Mardi',
                value: 'mardi',
            },
            {
                id: 'question11-resp-3',
                label: 'Mercredi',
                value: 'mercredi',
            },
            {
                id: 'question11-resp-4',
                label: 'Jeudi',
                value: 'jeudi',
            },
            {
                id: 'question11-resp-5',
                label: 'Vendredi',
                value: 'Vendredi',
            },
            {
                id: 'question11-resp-6',
                label: 'Samedi',
                value: 'samedi',
            },
            {
                id: 'question11-resp-7',
                label: 'Dimanche',
                value: 'dimanche',
            }
        ],
    },
    {
        id: 'question12',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question6',
        title: 'Quel type d’entraînement te plaît davantage ?',
        questions: [
            {
                id: 'question12-resp-1',
                label: 'Axé sur le cardio',
                value: 'Axé sur le cardio',
                description: '(course à pied, vélo...)',
                icon: require('@/assets/images/quizz/img_step_12_1.png'),
            },
            {
                id: 'question12-resp-2',
                label: 'Entraînement en force',
                value: 'Entraînement en force',
                description: '(par exemple : musculation)',
                icon: require('@/assets/images/quizz/img_step_12_2.png'),
            },
            {
                id: 'question12-resp-3',
                label: 'Entraînement par intervalles à haute intensité',
                value: 'Entraînement par intervalles à haute intensité',
                description: '(HIIT)',
                icon: require('@/assets/images/quizz/img_step_12_3.png'),
            },
            {
                id: 'question12-resp-4',
                label: 'Mixte',
                value: 'Mixte',
                description: '(une combinaison de différents types)',
                icon: require('@/assets/images/quizz/img_step_12_4.png'),
            }
        ],
    },
    {
        id: 'question13',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question1',
        title: 'Dans combien de temps souhaites-tu atteindre tes résultats ?',
        questions: [
            {
                id: 'question13-resp-1',
                label: 'En quelques semaines',
                value: 'En quelques semaines',
            },
            {
                id: 'question13-resp-2',
                label: 'En quelques mois',
                value: 'En quelques mois',
            },
            {
                id: 'question13-resp-3',
                label: 'Je ne suis pas pressé(e)',
                value: 'Je ne suis pas pressé(e)',
                description: 'Je me concentre sur des changements de mode de vie à long terme'
            }
        ],
        image: require('@/assets/images/quizz/img_step_13.png'),
    },
    {
        id: 'question14',
        multiple: false,
        pageType: 'Page1',
        questionType: 'Question1',
        title: 'Qu’est-ce qui te motive le plus à atteindre tes objectifs de perte de masse grasse ?',
        questions: [
            {
                id: 'question14-resp-1',
                label: 'Santé et bien-être personne',
                value: 'Santé et bien-être personne',
            },
            {
                id: 'question14-resp-2',
                label: 'Apparence physique',
                value: 'Apparence physique',
            },
            {
                id: 'question14-resp-3',
                label: 'Atteindre des objectifs spécifiques',
                value: 'Atteindre des objectifs spécifiques',
            },
            {
                id: 'question14-resp-4',
                label: 'Engagement social ou communautaire',
                value: 'Engagement social ou communautaire',
            }
        ],
    },
    {
        id: 'question15',
        multiple: false,
        pageType: 'Page3',
        questionType: 'Question3',
        title: 'Te sens-tu seule dans ton parcours de perte de graisse ? Penses-tu qu’une communauté pourrait te motiver ?',
        questions: [
            {
                id: 'question15-resp-1',
                label: 'Oui',
                value: 'Oui',
                icon: require('@/assets/images/quizz/img_step_15_1.png')
            },
            {
                id: 'question15-resp-2',
                label: 'Non',
                value: 'Non',
                icon: require('@/assets/images/quizz/img_step_15_2.png')
            },
        ],
        quote: 'Je suis tellement heureuse car maintenant j\'arrive à reporter mes vêtements d\'avant-grossesse !! J\'ai réussi à perdre le poids et le gras que je voulais merci Let\'s Train.',
        quoteAuthor: 'LEILA',
    },
];

export default quizzData;