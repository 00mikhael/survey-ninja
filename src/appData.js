import { ImArrowRight2, ImArrowLeft2 } from 'react-icons/im'
import { CgMenuRight } from 'react-icons/cg'

export const appData = {
    name: 'Survey Ninja',
    description: 'Survey, Like a ninja'
}

export const icons = {
    LeftArrow: ImArrowLeft2,
    RightArrow: ImArrowRight2,
    Menu: CgMenuRight
}

export const rankings = [
    {
        minimum: 0,
        rank: 'Noob',
        color: '#FBBF24'
    },
    {
        minimum: 21,
        rank: 'Beginner',
        color: '#059669'
    },
    {
        minimum: 41,
        rank: 'Senior',
        color: '#2563EB'
    },
    {
        minimum: 81,
        rank: 'Expert',
        color: '#7C3AED'
    }
]

export const navigationData = {
    navItems: [
        {
            label: 'responses',
            path: '/responses'
        }
    ]
}

export const homeData = {
    home: {
        title: appData.description,
        subtitle: 'pick your ninja designation',
        inputPlaceholder: 'Designation',
        buttonText: 'Get Started'
    },
    instructions: {
        title: 'Instructions',
        subtitle: 'category:',
        message: 'Welcome',
        buttonText: 'Begin Survey'
    }
}

export const quizData = {
    main: {
        nextButtonText: 'Next',
        submitButtonText: 'Submit'
    },
    result: {
        buttonText: 'Take me home'
    }
}

export const responsesData = {
    main: {
        title: 'Responses',
        subtitle: 'the secret is that i’m a ninja',
        inputPlaceholder: 'What’s the secret',
        buttonText: 'Let’s Go!'
    },
    responseList: {
        title: 'Responses',
        sorting: ['ranking', 'created']
    },
    responseDetail: {
        buttonText: 'Go Back',
        ninjaResponses: {
            questionTitle: 'Question',
            responseTitle: 'Response',
            answerTitle: 'Correct answer'
        }
    }
}

export const mockQuizData = {
    results: [
        {
            category: 'Vehicles',
            type: 'multiple',
            difficulty: 'medium',
            question:
                'Which of the following is NOT a Russian car manufacturer?',
            correct_answer: 'BYD',
            incorrect_answers: ['Silant', 'Dragon', 'GAZ']
        },
        {
            category: 'Vehicles',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'Which of the following car manufacturers had a war named after it?',
            correct_answer: 'Toyota',
            incorrect_answers: ['Honda', 'Ford', 'Volkswagen']
        }
    ]
}

export const mockResponseData = [
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 61,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    },
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 91,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    },
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 61,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    },
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 61,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    },
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 61,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    },
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 61,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    },
    {
        '_id': '60e8127688f235049b4b610f',
        'designation': 'Ninja',
        'score': 61,
        'ninjaResponses': [
            {
                '_id': '60e8127688f235049b4b6110',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6111',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6112',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            },
            {
                '_id': '60e8127688f235049b4b6113',
                'question': 'what is who',
                'response': 'who is who',
                'correctAnswer': 'very good'
            }
        ],
        'createdAt': '2021-07-09T09:10:14.361Z',
        'updatedAt': '2021-07-09T09:10:14.361Z',
        '__v': 0
    }
]
