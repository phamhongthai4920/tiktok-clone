import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout/HeaderOnlyLayout';
import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnlyLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

