'use client';

import React, { JSX } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Timeline from '@/components/timeline';
import './_scss/resume.scss';

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
                        <a href="https://playground.ome.gs">Playground</a> the previous version of my website, I kept it
                        online so it can serve as my playground for testing new features and to serve as my creative
                        outlet.
                    </li>
                    <li>
                        <a href="https://weerbaar.ome.gs">Weerbaar Worden</a> a website that I made for a friend,
                        which was meant to be child friendly.
                    </li>
                    <li>
                        <a href="https://blackhole.ome.gs">Black Hole</a> being a music project that I have had with a
                        couple of friends.
                    </li>
                    <li><a href="https://index.ome.gs">Index is band</a> website of a couple of friends.</li>
                </ul>
            </div>
            <Timeline/>
        </article>
        <Marquee className="techniques" pauseOnHover={true} speed={200} direction="left" autoFill={true}>
            <ul>
                <li><Image width="64" height="64" src="/vector/logos/alpine-js.svg" title="AlpineJS"
                           alt="AlpineJS"/></li>
                <li><Image width="64" height="64" src="/vector/logos/apache.svg" title="Apache" alt="Apache"/></li>
                <li><Image width="64" height="64" src="/vector/logos/composer.svg" title="Composer" alt="Composer"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/css3.svg" title="CSS 3" alt="CSS 3"/></li>
                <li><Image width="64" height="64" src="/vector/logos/docker.svg" title="Docker, inlcuding Lando"
                           alt="Docker, inlcuding Lando"/></li>
                <li><Image width="64" height="64" src="/vector/logos/git.svg"
                           title="Git, which also includes GitHub, GitLab, Bitbucket and CI/CD"
                           alt="Git, which also includes GitHub, GitLab, Bitbucket and CI/CD"/></li>
                <li><Image width="64" height="64" src="/vector/logos/jetbrains.svg"
                           title="JetBrains PHPStorm, WebStorm etc." alt="JetBrains PHPStorm, WebStorm etc."/></li>
                <li><Image width="64" height="64" src="/vector/logos/jira.svg"
                           title="Jira and other Atlassian tools, like Confluence"
                           alt="Jira and other Atlassian tools, like Confluence"/></li>
                <li><Image width="64" height="64" src="/vector/logos/jquery.svg" title="jQuery" alt="jQuery"/></li>
                <li><Image width="64" height="64" src="/vector/logos/laravel.svg" title="Laravel" alt="Laravel"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/linux.svg" title="Linux" alt="Linux"/></li>
                <li><Image width="64" height="64" src="/vector/logos/magento.svg" title="Magento / Adobe Commerce"
                           alt="Magento / Adobe Commerce"/></li>
                <li><Image width="64" height="64" src="/vector/logos/mysql.svg" title="MySQL" alt="MySQL"/></li>
                <li><Image width="64" height="64" src="/vector/logos/next-js.svg" title="Next JS" alt="Next JS"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/nginx.svg" title="Nginx" alt="Nginx"/></li>
                <li><Image width="64" height="64" src="/vector/logos/node-js.svg" title="Node JS & NPM"
                           alt="Node JS & NPM"/></li>
                <li><Image width="64" height="64" src="/vector/logos/photoshop.svg" title="Photoshop"
                           alt="Photoshop"/></li>
                <li><Image width="64" height="64" src="/vector/logos/php.svg" title="PHP" alt="PHP"/></li>
                <li><Image width="64" height="64" src="/vector/logos/postgressql.svg" title="PostgreSQL"
                           alt="PostgreSQL"/></li>
                <li><Image width="64" height="64" src="/vector/logos/react.svg" title="React" alt="React"/></li>
                <li><Image width="64" height="64" src="/vector/logos/slack.svg" title="Slack" alt="Slack"/></li>
                <li><Image width="64" height="64" src="/vector/logos/ssh.svg" title="SSH" alt="SSH"/></li>
                <li><Image width="64" height="64" src="/vector/logos/symfony.svg" title="Symfony" alt="Symfony"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/arduino.svg" title="Arduino" alt="Arduino"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/c-plus-plus.svg" title="C++" alt="C++"/></li>
                <li><Image width="64" height="64" src="/vector/logos/c-sharp.svg" title="C#" alt="C#"/></li>
                <li><Image width="64" height="64" src="/vector/logos/codeigniter.svg" title="Codeigniter"
                           alt="Codeigniter"/></li>
                <li><Image width="64" height="64" src="/vector/logos/cypress.svg" title="Cypress" alt="Cypress"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/debian.svg" title="Debian" alt="Debian"/></li>
                <li><Image width="64" height="64" src="/vector/logos/filezilla.svg" title="Filezilla"
                           alt="Filezilla"/></li>
                <li><Image width="64" height="64" src="/vector/logos/html5.svg" title="HTML 5" alt="HTML 5"/></li>
                <li><Image width="64" height="64" src="/vector/logos/javascript.svg" title="JavaScript"
                           alt="JavaScript"/></li>
                <li><Image width="64" height="64" src="/vector/logos/json.svg" title="JSON" alt="JSON"/></li>
                <li><Image width="64" height="64" src="/vector/logos/markdown.svg" title="Markdown" alt="Markdown"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/ms-dos.svg" title="MS DOS" alt="MS DOS"/></li>
                <li><Image width="64" height="64" src="/vector/logos/nano.svg" title="Nano" alt="Nano"/></li>
                <li><Image width="64" height="64" src="/vector/logos/oh-my-zsh.svg" title="Oh My zsh"
                           alt="Oh My zsh"/></li>
                <li><Image width="64" height="64" src="/vector/logos/powershell.svg" title="PowerShell"
                           alt="PowerShell"/></li>
                <li><Image width="64" height="64" src="/vector/logos/putty.svg" title="Putty" alt="Putty"/></li>
                <li><Image width="64" height="64" src="/vector/logos/python.svg" title="Python" alt="Python"/></li>
                <li><Image width="64" height="64" src="/vector/logos/raspberry-pi.svg" title="Raspberry PI"
                           alt="Raspberry PI"/></li>
                <li><Image width="64" height="64" src="/vector/logos/sass.svg" title="SASS" alt="SASS"/></li>
                <li><Image width="64" height="64" src="/vector/logos/stack-overflow.svg" title="Stack Overflow"
                           alt="Stack Overflow"/></li>
                <li><Image width="64" height="64" src="/vector/logos/swagger.svg" title="Swagger" alt="Swagger"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/tailwind-css.svg" title="Tailwind"
                           alt="Tailwind"/></li>
                <li><Image width="64" height="64" src="/vector/logos/ubuntu.svg" title="Ubuntu" alt="Ubuntu"/></li>
                <li><Image width="64" height="64" src="/vector/logos/vs-code.svg" title="VS Code" alt="VS Code"/>
                </li>
                <li><Image width="64" height="64" src="/vector/logos/xml.svg" title="XML" alt="XML"/></li>
                <li><Image width="64" height="64" src="/vector/logos/yaml.svg" title="YAML" alt="YAML"/></li>
            </ul>
        </Marquee>
    </section>);
}