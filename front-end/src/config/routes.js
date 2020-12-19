// Layout
import LayoutAdmin from '../layouts/LayoutAdmin';

//Pages
import AdminHome from '../components/Admin';
import AdminSignIn from '../components/Admin/SingIn';

const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminSignIn,
                exact: true
            }
        ]
    }
]

export default routes;