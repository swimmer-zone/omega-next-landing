import { JSX } from 'react';
import { Metadata } from 'next';
import { Header, Music, Travels, Whisky, DIY, Resume, Footer } from '@/sections';
import Nav from '@/components/nav';
import './_scss/_page.scss';
import './_scss/landing.scss';

export const metadata: Metadata = {
    title: 'Ω - Omega',
    description: 'Ω - My landing page including all of my hobbies and my resume',
    keywords: 'omega,water,phlegmatic,music,techno,ambient,minimal,lounge,psytrance,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,swimmer,yupsie',
    authors: [{name: 'Omega'}],
};

export default async function Home(): Promise<JSX.Element> {
    return (<>
        <Header/>
        <Nav/>
        <Music/>
        <Travels/>
        <Whisky/>
        <DIY/>
        <Resume/>
        <Footer/>
    </>);
}
