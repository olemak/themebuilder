import BreakpointContainer from '../components/BreakpointContainer.js';
import SpacingContainer from '../components/SpacingContainer.js';
import ColorContainer from '../components/ColorContainer.js'
import AspectContainer from '../components/AspectContainer.js'
import FontContainer from '../components/FontContainer.js'

import Dashboard from '../components/Dashboard.jsx';
//import Typography from '../components/Typography.jsx';

const routes = () => {
    const components = { 
        Dashboard,
        Color: ColorContainer,
        Spacing: SpacingContainer, 
        Aspect: AspectContainer, 
        Breakpoints: BreakpointContainer, 
        Fonts: FontContainer, 
//        Typography 
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