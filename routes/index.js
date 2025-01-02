import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import Shop from '~/pages/Shop';
import TypeProduct from '~/pages/TypeProduct';

const routes = [
    //Main Component
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/store', component: Shop },
    { path: '/*', component: NotFound },

    //Component in Shop
    { path: '/store/:typeId', component: TypeProduct },
];

export { routes };