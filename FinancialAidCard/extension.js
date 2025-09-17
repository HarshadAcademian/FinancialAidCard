module.exports = {
    name: 'FinancialAidCard',
    publisher: 'Sample',
    cards: [{
        type: 'FinancialAidCardCard',
        source: './src/cards/FinancialAidCardCard',
        title: 'FinancialAidCard Card',
        displayCardType: 'FinancialAidCard Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        // pageRoute: {
        //     route: '/',
        //     excludeClickSelectors: ['a']
        // }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};