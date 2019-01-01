import { redirect } from '../middleware';
import { 
    navigateBack,
    navigateTo
} from '../middleware/actions';

export default () => ({    
    config: {
        redux: {
            middleware: [redirect]
        },
    },
    onStoreCreated() {
        this.dispatch.nav = {}
        this.dispatch.nav.navigate = (nextUrl, params) => this.dispatch(navigateTo(nextUrl, params));
        this.dispatch.nav.back = () => this.dispatch(navigateBack());
    },
});
