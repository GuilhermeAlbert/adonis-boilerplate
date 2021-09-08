import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.resource('', 'UsersController').apiOnly()
  })
  // .middleware('auth')

  Route.group(() => {
    //
  })
}).prefix('/users')
