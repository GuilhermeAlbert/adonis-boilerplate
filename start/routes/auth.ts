import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('/user', 'AuthController.user')
    Route.post('/logout', 'AuthController.logout')
  })
  // .middleware('auth')

  Route.group(() => {
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.login')
  })
}).prefix('/auth')
