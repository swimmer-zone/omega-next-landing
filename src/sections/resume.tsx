'use client';

import React, { JSX } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import Timeline from '@/components/timeline';

import './_scss/resume.scss';

const skills = [
    {
        image: 'alpine-js.svg',
        title: 'AlpineJS',
    },
    {
        image: 'apache.svg',
        title: 'Apache',
    },
    {
        image: 'composer.svg',
        title: 'Composer',
    },
    {
        image: 'css3.svg',
        title: 'CSS 3',
    },
    {
        image: 'docker.svg',
        title: 'Docker, including Lando',
    },
    {
        image: 'git.svg',
        title: 'Git, which also includes GitHub, GitLab, Bitbucket and CI/CD',
    },
    {
        image: 'jetbrains.svg',
        title: 'JetBrains PHPStorm, WebStorm etc.',
    },
    {
        image: 'jira.svg',
        title: 'Jira and other Atlassian tools, like Confluence',
    },
    {
        image: 'jquery.svg',
        title: 'jQuery',
    },
    {
        image: 'laravel.svg',
        title: 'Laravel',
    },
    {
        image: 'linux.svg',
        title: 'Linux',
    },
    {
        image: 'magento.svg',
        title: 'Magento / Adobe Commerce',
    },
    {
        image: 'mysql.svg',
        title: 'MySQL',
    },
    {
        image: 'next-js.svg',
        title: 'Next JS',
    },
    {
        image: 'nginx.svg',
        title: 'Nginx',
    },
    {
        image: 'node-js.svg',
        title: 'Node JS & NPM',
    },
    {
        image: 'photoshop.svg',
        title: 'Photoshop',
    },
    {
        image: 'php.svg',
        title: 'PHP',
    },
    {
        image: 'postgressql.svg',
        title: 'PostgreSQL',
    },
    {
        image: 'react.svg',
        title: 'React',
    },
    {
        image: 'slack.svg',
        title: 'Slack',
    },
    {
        image: 'ssh.svg',
        title: 'SSH',
    },
    {
        image: 'symfony.svg',
        title: 'Symfony',
    },
    {
        image: 'arduino.svg',
        title: 'Arduino',
    },
    {
        image: 'c-plus-plus.svg',
        title: 'C++',
    },
    {
        image: 'c-sharp.svg',
        title: 'C#',
    },
    {
        image: 'codeigniter.svg',
        title: 'Codeigniter',
    },
    {
        image: 'cypress.svg',
        title: 'Cypress',
    },
    {
        image: 'debian.svg',
        title: 'Debian',
    },
    {
        image: 'filezilla.svg',
        title: 'Filezilla',
    },
    {
        image: 'html5.svg',
        title: 'HTML 5',
    },
    {
        image: 'javascript.svg',
        title: 'JavaScript',
    },
    {
        image: 'json.svg',
        title: 'JSON',
    },
    {
        image: 'markdown.svg',
        title: 'Markdown',
    },
    {
        image: 'ms-dos.svg',
        title: 'MS DOS',
    },
    {
        image: 'nano.svg',
        title: 'Nano',
    },
    {
        image: 'oh-my-zsh.svg',
        title: 'Oh My zsh',
    },
    {
        image: 'powershell.svg',
        title: 'PowerShell',
    },
    {
        image: 'putty.svg',
        title: 'Putty',
    },
    {
        image: 'python.svg',
        title: 'Python',
    },
    {
        image: 'raspberry-pi.svg',
        title: 'Raspberry PI',
    },
    {
        image: 'sass.svg',
        title: 'SASS',
    },
    {
        image: 'stack-overflow.svg',
        title: 'Stack Overflow',
    },
    {
        image: 'swagger.svg',
        title: 'Swagger',
    },
    {
        image: 'tailwind-css.svg',
        title: 'Tailwind',
    },
    {
        image: 'ubuntu.svg',
        title: 'Ubuntu',
    },
    {
        image: 'vs-code.svg',
        title: 'VS Code',
    },
    {
        image: 'xml.svg',
        title: 'XML',
    },
    {
        image: 'yaml.svg',
        title: 'YAML',
    },
];

export default function Resume(): JSX.Element {
    return (<section id="resume">
        <h2>Resume</h2>
        <article>
            <div>
                <p>
                    About 20 years ago I wrote my first HTML and later on also CSS came by, these became HTML5 and
                    CSS3. But I wanted more than just a static website and when PHP 4.0 was released, I enrolled
                    into creating dynamic websites, some of which you can still find on my homepage.
                </p>
                <p>
                    I started programming procedurally and while PHP grew up, I got more into object oriented
                    programming (OOP). As of version 7.0, my website was built onto a Model-View-Controller (MVC)
                    architecture. After that, I moved on to using CodeIgniter as a framework and later on Laravel,
                    connecting to the SoundCloud API to show off my music productions.
                </p>
                <p>
                    Currently this is the 23rd version of my website, this includes major design overhauls,
                    migrating to other frameworks or platforms, also migrating from shared hosting to a VPS. The
                    previous version ran on React and currently it is running on Next.js using Typescript on
                    serverless hosting at Vercel.
                </p>
                <h3>Ambitions</h3>
                <p>
                    I would like to work on more React / NextJS projects, as well as Laravel projects. This can be
                    in a standalone setup, but also a headless / composable setup with React based frontend. The
                    backend could be Laravel or a web based database / CMS.
                </p>
                <h3>Hobbies</h3>
                <p>
                    My hobbies include web development, both front- and backend because I really like to deliver a
                    complete product. I like to get to know the latest technologies in development, including
                    hardware, frameworks, the newest trends in PHP and CSS, Typography. Furthermore I like
                    woodworking, creating music and I am volunteering as a swimming instructor, which I started
                    right after I got my swimming certificates for a total of around 20 years.
                </p>
                <h3>Portfolio</h3>
                <p>
                    Below are some additional websites I have created that are still online today.
                </p>
                <ul>
                    <li>
                        <a href="https://playground.ome.gs">Playground</a>: the previous version of my website, I kept it
                        online so it can serve as my playground for testing new features and to serve as my creative
                        outlet.
                    </li>
                    <li>
                        <a href="https://weerbaar.ome.gs">Weerbaar Worden</a>: a website that I made for a friend,
                        which was meant to be child friendly.
                    </li>
                    <li>
                        <a href="https://blackhole.ome.gs">Black Hole</a>: being a music project that I have had with a
                        couple of friends.
                    </li>
                    <li><a href="https://index.ome.gs">Index</a>: a band website of another couple of friends.</li>
                </ul>
            </div>
            <Timeline/>
        </article>
        <Marquee className="techniques" pauseOnHover={true} speed={150} direction="left" autoFill={true}>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.image}>
                        <Image
                            width={64}
                            height={64}
                            src={'/vector/logos/' + skill.image}
                            title={skill.title}
                            alt={skill.title}
                        />
                    </li>
                ))}
            </ul>
        </Marquee>
    </section>);
}