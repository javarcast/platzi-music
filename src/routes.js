import Search from '@/Pages/Search'
import RegisterStation from '@/Pages/RegisterStation'
import About from '@/Pages/About'
import TrackDetail from '@/Pages/TrackDetail'
const routes = [
  {
    path: '/',
    component: Search,
    name: 'search'
  },
  {
    path: '/register',
    component: RegisterStation,
    name: 'register'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/track/:id',
    component: TrackDetail,
    name: 'track'
  }
]

export default routes
