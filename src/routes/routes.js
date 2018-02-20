import AspectContainer from '../components/AspectContainer.js'
import BreakpointContainer from '../components/BreakpointContainer.js';
import ColorContainer from '../components/ColorContainer.js'
import DashboardContainer from '../components/DashboardContainer.js';
import FontContainer from '../components/FontContainer.js'
import TypographyContainer from '../components/TypographyContainer.js'
import SpacingContainer from '../components/SpacingContainer.js';
import SizeContainer from '../components/SizeContainer.js';

//import Typography from '../components/Typography.jsx';

const root = (process.env.NODE_ENV === "production" ? "/themebuilder/" : "/");

const routes = () => {
    const components = { 
        Dashboard: DashboardContainer,
        Color: ColorContainer,
        Spacing: SpacingContainer, 
        Sizes: SizeContainer, 
        Aspect: AspectContainer, 
        Breakpoints: BreakpointContainer, 
        Fonts: FontContainer, 
        Typography: TypographyContainer
    };

    return Object.keys( components ).map( component => {
            return { 
                path: (component !== "Dashboard" ? `${root}${component.toLowerCase()}` : root),
                exact : true,
                name: component,
                component: ()=>components[component]
            }                
        } 
    );
}

export default routes;