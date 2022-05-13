import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
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

