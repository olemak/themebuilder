//import Aspect from '../components/Aspect.jsx';
//import Palette from '../components/Palette.jsx';
//import Breakpoints from '../components/Breakpoints.jsx';
import BreakpointContainer from '../components/BreakpointContainer.js';
import Dashboard from '../components/Dashboard.jsx';
//import Fonts from '../components/Fonts.jsx';
import Spacing from '../components/Spacing.jsx';
import Typography from '../components/Typography.jsx';

import ColorContainer from '../components/ColorContainer.js'
import AspectContainer from '../components/AspectContainer.js'
import FontContainer from '../components/FontContainer.js'

const routes = () => {
    const components = { 
        Dashboard,
        Color: ColorContainer,
        Spacing, 
        Aspect: AspectContainer, 
        Breakpoints: BreakpointContainer, 
        Fonts: FontContainer, 
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