export class CommentsNumController {

    constructor(selector, commentsService) {
        this.elementNum = document.querySelector(selector);
        this.commentsService = commentsService;
    }

    showLoadingNumMessage() {
         this.elementNum.innerHTML = '<div class="loading">Cargando...</div>';
    }

    showErrorNumMessage() {
         this.elementNum.innerHTML = '<div class="error">Se ha producido un error al calcular el número de </div>';
    }

    showNoNumCommentsMessage() {
         this.elementNum.innerHTML = '<div class="info">No hay </div>';
    }

    
    renderNumComments(comments) {
         for (let comment of comments) {
             var num = comment.id;
         }
        let html = '<div class="card-text"><a href="/article.html#single-article__comments">Hay ' + num + ' comentarios</a></div>';

        this.elementNum.innerHTML = html;
    }

    loadNumComments() {
        this.showLoadingNumMessage();
        this.commentsService.list().then(comments => {
            if (comments.length == 0) {
                this.showNoNumCommentsMessage();
            } else {
                this.renderNumComments(comments);
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS NUMBER", error);
            this.showErrorNumMessage();
        });
    }

}
