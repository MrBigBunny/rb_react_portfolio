import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGift, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiAndroid, DiCodeBadge, DiCssdeck } from 'react-icons/di';
import { HiChip } from "react-icons/hi";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}> 
        <HiChip size="3rem" /> <Span> RB Nuqui</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
   <li>
     <Link href="#projects">
       <NavLink> Proyekto </NavLink>
     </Link>
   </li>
   <li>
     <Link href="#tech">
       <NavLink> Teknolohiya</NavLink>
     </Link>
   </li>
   <li>
     <Link href="#about">
       <NavLink> Patungkol</NavLink>
     </Link>
   </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
