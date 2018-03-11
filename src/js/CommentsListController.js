export class CommentsListController {

    constructor(selector, commentsService, pubSub) {
        this.element = document.querySelector(selector);
        this.commentsService = commentsService;
        pubSub.subscribe('comment:created', (event, comment) => {
            console.log("CommentsListController", comment);
            this.loadComments();
        });
    }

    showLoadingMessage() {
        this.element.innerHTML = '<div class="loading">Cargando...</div>';
    }

    showErrorMessage() {
        this.element.innerHTML = '<div class="error">Se ha producido un error</div>';
    }

    showNoCommentsMessage() {
        this.element.innerHTML = '<div class="info">No hay ningún comentario</div>';
    }

    renderComments(comments) {
        let html = '<div class="comments__title">Comentarios</div>';
        for (let comment of comments) {
            html += `
                <aside class="comment">
                    <div class="comment__text">${comment.text}</div>
                    <div class="comment__info">
                        <div class="comment__author">Por ${comment.author}</div>
                        <div class="comment__date">${comment.date}</div>
                    </div>
                </aside>
            `;
        }
        this.element.innerHTML = html;
    }

    numComments() {
        for (let comment of comments) {
            var num = comment.id;
        }
    }

    renderNumComments(comments) {
        for (let comment of comments) {
            var num = comment.id;
        }
        let html = '<div class="card-text"><a href="/article.html#single-article__comments">Hay ' + num + ' comentarios</a></div>';

        this.element.innerHTML = html;
    }

    loadComments() {
        this.showLoadingMessage();
        this.commentsService.list().then(comments => {
            if (comments.length == 0) {
                this.showNoCommentsMessage();
            } else {
                this.renderComments(comments);
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS", error);
            this.showErrorMessage();
        });

    }

    loadNumComments() {
        this.showLoadingMessage();
        this.commentsService.list().then(comments => {
            if (comments.length == 0) {
                this.showNoCommentsMessage();
            } else {
                this.renderNumComments(comments);
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS", error);
            this.showErrorMessage();
        });
    }

}
