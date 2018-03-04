

export class FormController {

    constructor(selector, commentsService, pubSub) {
        this.element = document.querySelector(selector);
        this.commentsService = commentsService;
        this.pubSub = pubSub;
        this.loading = false;
        this.addEventListeners();
    }

    setLoading(loading) {
        this.loading = loading;
        this.element.querySelectorAll('input, send-comment-button').forEach(item => { item.disabled = loading });
    }

    addEventListeners() {
        this.addInputListeners();
        this.addFormSubmitListener();
    }

    addFormSubmitListener() {
        this.element.addEventListener('submit', event => {
            event.preventDefault();
            if (this.loading) {
                return;  // si se está cargando, no hacemos nada más
            }
            this.setLoading(true);
            let comment = this.buildCommentData();
            this.commentsService.save(comment).then(createdComment => {
                console.log("COMENTARIO CREADO", createdComment);
                this.element.reset();
                this.pubSub.publish('comment:created', createdComment);
            }).catch(error => {
                console.error("SE HA PRODUCIDO UN ERROR");
                alert(`Se ha producido un error ${error}`);
            }).finally(() => {
                this.setLoading(false);
            })
        });
    }

    buildCommentData() {
        return {
            author: this.element.querySelector('#input__name').value,
            email: this.element.querySelector('#input__email').value,
            text: this.element.querySelector('#input__text').value
        }
    }

    addInputListeners() {
        // en todos los input que hay en el formulario, los valido cuando se pierde el foco
        this.element.querySelectorAll('input').forEach(input => {

            input.addEventListener('blur', event => {
                // event.target sería lo mismo que input en este caso
                if (input.checkValidity() == false) {
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
                this.checkFormValidity();
            });

        });
    }

    checkFormValidity() {
        let button = this.element.querySelector('send-comment-button');
        if (this.element.checkValidity()) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

}
