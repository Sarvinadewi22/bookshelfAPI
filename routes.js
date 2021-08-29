const { menambahkanBuku, menampilkanBuku, menampilkandetailBuku, mengubahBuku, menghapusBuku } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: menambahkanBuku
  },
  {
    method: 'GET',
    path: '/books',
    handler: menampilkanBuku
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: menampilkandetailBuku
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: mengubahBuku
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: menghapusBuku
  }
]
module.exports = routes
