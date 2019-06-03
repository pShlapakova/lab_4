import './css/style.css';
import './css/news.css';
import './css/main_media.css';
import { GetNews, GetMainNews, GetSourses, ShowNews } from './news_api.js';
import Icon from '../src/image/icon.png';

function GetActiveSource() {
    const currSource = document.getElementsByClassName('sourses')[0].getElementsByClassName('active')[0];
    const list = currSource.parentElement.children;
    let index;
    for (let key in list) {
        if (list[key] === currSource)
            index = key;
    }
    return index;
}

function ShowActiveSource(choosenSource) {
    const currSource = document.getElementsByClassName('sourses')[0].getElementsByClassName('active')[0];
    currSource.classList.remove('active');
    choosenSource.classList.add('active');
}

function OnSourceClick(e) {
    ShowActiveSource(e.target);
    GetNews(GetActiveSource());
}

function OnSearchClick(e) {
    e.preventDefault();
    GetNews(GetActiveSource());
}

function OnLoadMore() {
    ShowNews(document.getElementsByClassName('news-list')[0].children.length);
}

function Start() {
    GetMainNews();
    GetSourses();
    GetNews(0);
    const formSearch = document.getElementsByClassName('search')[0];
    formSearch.addEventListener('submit', OnSearchClick);
    const btnMore = document.getElementsByClassName('news')[0].lastElementChild;
    btnMore.onclick = OnLoadMore;
}

function component() {
    const mIcon = new Image();
    mIcon.src = Icon;
    document.addEventListener("DOMContentLoaded", Start);
}

document.body.appendChild(component());

export { OnSourceClick };