import {OnSourceClick} from './index.js';
import noImage from '../src/image/no-image.jpg';

let SourcesList = [];
let news;

function GetSourses() {
    let url = "https://newsapi.org/v2/sources?" +
        "language=en&" +
        "category=technology&" +
        "apiKey=8691f399d3c64658b9477f3e9e448a78";
    var request = new Request(url);
    fetch(request)
        .then(function(response) {
            response.json().then (data => {
                ShowSources(data.sources); 
            });
        });
}

function ShowSources (list) {
    let outputHTML = "";
    let sources = list;
    
    for(let i in sources) {
        outputHTML += `<li>
                ${sources[i].name}
            </li>`;
        SourcesList.push(sources[i].id);
    }

    outputHTML = `<li> All </li>` + outputHTML;
    document.getElementsByClassName('sourses')[0].innerHTML = outputHTML;
    
    document.getElementsByClassName('sourses')[0].firstElementChild.classList.add('active');
    let buttons = document.getElementsByClassName('sourses')[0].children;
    for (let i in buttons) {
        buttons[i].onclick = OnSourceClick;
    }
    //document.getElementById("main").style.minHieght = 43*(SourcesList.length + 1) + 'px';
    //alert(document.getElementById("main")/*.style.minHieght*/);
}

function GetNews(index) {
    let category = 'technology';
    let source = '';
    if (index > 0) {
        source = SourcesList[index - 1];
        category = '';
    }

    let query = document.getElementsByName('search')[0].value;
    if (query !== "") {
        query = 'q=' + query + '&';
    }

    let newsCount = 40;

    let url = "https://newsapi.org/v2/top-headlines?" +
        query +
        "language=en&" +
        "sources=" + source + "&" +
        "category=" + category + "&" +
        "sortBy=relevancy&" + //popularity
        "pageSize=" + newsCount + "&" +
        "apiKey=8691f399d3c64658b9477f3e9e448a78";
    let request = new Request(url);
    fetch(request)
        .then(function(response) {
            response.json().then (data => {
                news = data.articles;
                ShowNews(0); 
            });
        });
}

function ShowNews (startNewsCount) {
    let outputHTML = "";
    let lastNewsNum = Math.min(startNewsCount + 5, news.length); 
    for(let i = startNewsCount; i < lastNewsNum; i++) {
        outputHTML += `
            <li>
                <div class="news-foto">
                    <a href="${news[i].url}">
                        <img src="${ !news[i].urlToImage ? noImage : news[i].urlToImage }">
                    </a>
                </div>
                <div class="news-data">
                    <a href="${news[i].url}"><h5>${news[i].title}</h5></a>
                    <h6>${news[i].publishedAt}</h6>
                    <p>${ !news[i].description ? "" : news[i].description }</p>
                </div>
            </li>`;
    }
    
    if (startNewsCount == 0) {
        if(outputHTML !== "") {
            outputHTML = `<ul class="news-list">` + outputHTML + `</ul>`;
            document.getElementsByClassName('news')[0].children[1].innerHTML = outputHTML;
        }
        else {
            let noNews = `
                <p class="no-news-text">
                    There are no articles matching your request
                </p>`;
            document.getElementsByClassName('news')[0].children[1].innerHTML = noNews;
        }
        const newsTitle = document.getElementsByClassName('news-tags')[0].firstElementChild;
        const currSource = document.getElementsByClassName('sourses')[0].getElementsByClassName('active')[0];
        newsTitle.innerHTML = currSource.innerHTML + ' news';
    }
    else {
        document.getElementsByClassName('news-list')[0].innerHTML += outputHTML;
    }

    if (lastNewsNum >= news.length) {
        document.getElementsByClassName('news')[0].lastElementChild.style.visibility = "hidden";
    }
    else {
        document.getElementsByClassName('news')[0].lastElementChild.style.visibility = "visible";
    }
}

function GetMainNews() {
    let url = 'https://newsapi.org/v2/top-headlines?' +
        'language=ru&en&' +
        'category=technology&' +
        'sortBy=popularity&' +
        'pageSize=3&' +
        'apiKey=8691f399d3c64658b9477f3e9e448a78';
    let request = new Request(url);
    fetch(request)
        .then(function(response) {
            response.json().then (data => {
                ShowMainNews(data.articles); 
            });
        });
}

function ShowMainNews (articles) {
    let outputHTML;
    let news = articles;
    
    outputHTML = `
        <div class="foto-news">
            <div class="foto">
                <img src="${ !news[0].urlToImage ? noImage : news[0].urlToImage }">
            </div>
            <a href="${news[0].url}">
                <div class="foto-news-text">
                    <h3>${news[0].title}</h3>
                    <h6>${news[0].publishedAt}</h6>
                    <p>${ !news[0].description ? "" : news[0].description }</p>
                </div>
            </a>
        </div>
    `;
    document.getElementsByClassName('main-news')[0].getElementsByClassName('left-column')[0].innerHTML = outputHTML;

    outputHTML = ``;

    for (let i = 1; i < 3; i++) {
        outputHTML += `
            <div class="foto-news">
                <div class="foto">
                    <img src="${ !news[i].urlToImage ? noImage : news[i].urlToImage }">
                </div>
                <a href="${news[i].url}">
                    <div class="foto-news-text">
                        <h3>${news[i].title}</h3>
                        <h6>${news[i].publishedAt}</h6>
                        <p>${ !news[i].description ? "" : news[i].description }</p>
                    </div>
                </a>
            </div>
        `;
    }
    document.getElementsByClassName('main-news')[0].getElementsByClassName('right-column')[0].innerHTML = outputHTML;
}

export { GetNews, GetMainNews, GetSourses, ShowNews };