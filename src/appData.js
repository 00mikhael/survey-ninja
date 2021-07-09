export const appData = {
    name: 'Survey Ninja',
    description: 'Survey, Like a ninja'
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
        title: 'Question',
        primaryButtonText: 'Next',
        secondaryButtonText: 'Leave'
    },
    result: {
        buttonText: 'Take me home'
    }
}

export const responsesData = {
    main: {
        title: 'Responses',
        subtitle: 'the secret is that i’m a ninja',
        buttonText: 'Let’s Go!'
    },
    responseList: {
        title: 'Responses',
        sorting: ['ranking', 'created']
    },
    responseItem: {
        buttonText: 'Go Back',
        ninjaResponses: {
            questionTitle: 'Question',
            responseTitle: 'Response',
            answerTitle: 'Correct answer'
        }
    }
}
