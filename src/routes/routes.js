import Aspect from '../components/Aspect.jsx';
import Breakpoints from '../components/Breakpoints.jsx';
import Dashboard from '../components/Dashboard.jsx';
import Fonts from '../components/Fonts.jsx';
//import Palette from '../components/Palette.jsx';
import Spacing from '../components/Spacing.jsx';
import Typography from '../components/Typography.jsx';
import ColorContainer from '../components/ColorContainer.jsx'

const routes = () => {
    const components = { 
        Dashboard,
        ColorContainer,
        Spacing, 
        Aspect, 
        Breakpoints, 
        Fonts, 
        Typography 
    };

    return Object.keys( components ).map( component => {
            return { 
                path: (component !== "Dashboard" ? `/${component.toLowerCase()}` : "/"),
                exact : true,
                name: component,
                component: ()=>components[component]
            }                
        } 
    );
}

export default routes;