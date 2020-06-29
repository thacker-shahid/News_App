// 532b93c1a9eb4c6590d8c41cb9a6f2d3
// console.log("done")

// let clickBtn = document.querySelector("#click");
// clickBtn.addEventListener('click', addNews);

// function addNews() {


let newsAccordion = document.getElementById('newsAccordion');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&apiKey=532b93c1a9eb4c6590d8c41cb9a6f2d3', true);

xhr.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText));
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card container">
                                <div class="card-header" >

                                    <a data-toggle="collapse" href="#collapse${index}" role="button" aria-expanded="false"
                                        aria-controls="collapse${index}" style="text-decoration: none;">
                                        <h5><span class="badge badge-secondary">Breaking News ${index + 1}:</span></h5> ${element["title"]}
                                    </a>
   
                                </div>
    
                            <div id="collapse${index}" class="collapse container"  data-parent="#newsAccordion">
                                 <div class="card-body"> ${element["content"]}<a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
            
                        </div> `;
            newsHtml += news + `<br>`;
        });
        newsAccordion.innerHTML = newsHtml;
    }
}
xhr.send()

