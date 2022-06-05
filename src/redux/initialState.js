const inititalState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            mainContent: 'Main content of the article',
            publishedDate:  new Date('02-02-2022'),
            author: 'John Doe',
            category: 'sport',
        },
        {
            id: '2',
            title: 'Article title II',
            shortDescription: 'Short description of the article...',
            mainContent: 'Main content of the article',
            publishedDate: new Date('07-07-2022'),
            author: 'John Doe',
            category: 'news',
        },
        {
            id: '3',
            title: 'Article title III',
            shortDescription: 'Short description of the article...',
            mainContent: 'Main content of the article',
            publishedDate: new Date('06-03-2020'),
            author: 'John Doe',
            category: 'movies',
        },
    ],
    categories: [
        {},
        {
            id: '1',
            title: 'sport',
        },
        {
            id: '2',
            title: 'news',
        },
        {
            id: '3',
            title: 'movies',
        },
        {
            id: '4',
            title: 'games',
        },
    ],
};

export default inititalState;