const axios = require('axios');
axios.defaults.baseURL = 'https://www.thedp.com';

const SECTIONS = ['news', 
                'academics', 
                'sports', 
                'opinion',
                'administration', 
                'admissions', 
                'crime', 
                'studentlife', 
                'identities', 
                'health', 
                'philadelphia', 
                'politics', 
                'housing-dining', 
                'breaking', 
                'centerpiece', 
                'greek-life'];

const cleanText = (text) => {
    text = text.replace(/(<([^>]+)>)/gi, '');
    text = text.replace(/&nbsp;/g, '');
    text = text.replace(/\r?\n|\r/g, '');
    return text;
}

async function getRecentArticles(callback) {
    articles = []; 
    for (let section of SECTIONS) {
        console.log(section)
        const query = await axios.get(`/section/${section}.json?page=${1}&per_page=${10}`)
        query.data.articles.map(article => {
            article.content = cleanText(article.content);
            articles.push(article.slug);
        })
    }
    console.log(articles)
    callback(articles);
}

var database = { 
    get_articles: getRecentArticles, 
}

module.exports = database