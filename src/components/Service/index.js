import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FaqHomeOne from '../HomeOne/FaqHomeOne';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import Drawer from '../Mobile/Drawer';
import DetailsService from './DetailsService';
import HeaderService from './HeaderService';
import HeroService from './HeroService';

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroService />
            <FaqHomeOne />
            <TestimonialHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Service;
