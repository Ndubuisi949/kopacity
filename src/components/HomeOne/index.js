import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import BlogHomeOne from './BlogHomeOne';
import FaqHomeOne from './FaqHomeOne';
import FunFactHomeThree from '../HomeThree/FunFactHomeThree';
import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
import PricingHomeOne from './PricingHomeOne';
import ProjectHomeOne from './ProjectHomeOne';
import ServicesHomeOne from './ServicesHomeOne';
import ServicesHomeTwo from '../HomeTwo/ServicesHomeTwo';
import TeamHomeOne from './TeamHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import TestimonialHomeOne2 from './TestimonialHomeOne2';
import TrafficHomeOne from './TrafficHomeOne';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <TestimonialHomeOne2 />
            <ServicesHomeOne />
            <TrafficHomeOne />
            <ServicesHomeTwo />
            <TeamHomeOne />
            <FaqHomeOne />
            <TestimonialHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
