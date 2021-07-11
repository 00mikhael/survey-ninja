import { ImArrowRight2, ImArrowLeft2, ImHeart } from 'react-icons/im'
import { GiNinjaHead } from 'react-icons/gi'

export const appData = {
    name: 'Survey Ninja',
    description: 'Survey, Like a ninja'
}

export const icons = {
    Logo: GiNinjaHead,
    Heart: ImHeart,
    LeftArrow: ImArrowLeft2,
    RightArrow: ImArrowRight2
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
        subtitle: 'Read the instructions carefully',
        message: 'Welcome',
        buttonText: 'Begin Survey',
        instruction:
            'Professionally engineer distributed experiences for frictionless action items. Conveniently customize front-end catalysts for change after intuitive web services. Continually integrate interdependent outsourcing through technically sound users. okay proceed.'
    }
}

export const quizData = {
    main: {
        prevButtonText: 'Prev',
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
        subtitle: "the secret is that i'm a ninja",
        inputPlaceholder: 'What’s the secret',
        theSecret: "i'm a ninja",
        theSecret2: "i’m a ninja",
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
