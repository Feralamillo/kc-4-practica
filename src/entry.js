import 'bootstrap';
import css from './scss/style.scss';
import { CommentsListController } from './js/CommentsListController';
import { FormController } from './js/FormController';
import { CommentsService } from './js/CommentsService';
import { PubSub } from 'pubsub-js';

document.addEventListener("DOMContentLoaded", () => {

    // connect to the comments service on the selected data base
    let commentsService = new CommentsService('http://localhost:3001/comments/');

    // controls the display of the comments in the article
    let commentsListController = new CommentsListController(".single-article__comments", commentsService, PubSub);
    commentsListController.loadComments();

});