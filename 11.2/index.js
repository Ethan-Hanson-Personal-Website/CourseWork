const BASE_URL = 'http://';
const username = "";
const token = "";
let repos = [];

async function fetchRepos(){
    const response = await fetch(`${BASE_URL}/${username}`)
    const data = await response.json()
    repos = data
}

const repoListEl = document.querySelector('#repos');
function renderRepos(){
    const template = repos.map(repo => `
    <li class=""card">
    <h3><a href="${repo.html_url}">${repo.name}</a></h3>
    <button data-name ="${repo.name}"> delete Repo</button>
    </li>
    `).join('')
    renderReposEl.innerHTML = template;
}

async function DeleteRepo(e) {
    const response = await fetch(`${BASE_URL}/${username}/repos`(
    method: 'DELETE',
    Headers:{
        'Authorization': `token ${token}`,
    })
    fetchRepos()
}