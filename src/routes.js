

const { 
    addBookHandler, 
    getAllBooksHandler, 
    getBookByIdHandler, 
    deleteBookHandler, 
    updateBookHandler, 
} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,

    },

    {
        method: 'GET',
        path: '/books/{id}',     // from bookId to id
        handler: getBookByIdHandler,
    },

    {
        method: 'PUT',
        path: '/books/{id}',    // from bookId to id
        handler: updateBookHandler,
    },

    
    {
        method: 'DELETE',
        path: '/books/{id}',    // from bookId to id
        handler: deleteBookHandler,
    },

];

module.exports =  routes;