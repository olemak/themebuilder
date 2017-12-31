import AspectContainer from '../components/AspectContainer.js'
import BreakpointContainer from '../components/BreakpointContainer.js';
import ColorContainer from '../components/ColorContainer.js'
import DashboardContainer from '../components/DashboardContainer.js';
import FontContainer from '../components/FontContainer.js'
import SpacingContainer from '../components/SpacingContainer.js';

//import Typography from '../components/Typography.jsx';

const routes = () => {
    const components = { 
        Dashboard: DashboardContainer,
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