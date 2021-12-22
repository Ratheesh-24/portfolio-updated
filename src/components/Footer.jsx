import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { data } from '../utils/data.json';

const Footer = () => {
  const { name } = data.main;
  const { pathname } = useLocation();
  const [btnText, setBtnText] = useState('Get In Touch');

  useEffect(() => {
    if (pathname === '/contact')
      setTimeout(() => {
        setBtnText('About');
      }, 1000);
    else
      setTimeout(() => {
        setBtnText('Get In Touch');
      }, 1000);
  }, [pathname]);

  return (
    <FooterStyle>
      <hr />
      <div className='footer__connect'>
        <p>Let's create your next experience together..</p>
        <Link to={pathname === '/contact' ? '/' : '/contact'}>
          <button>{btnText}</button>
        </Link>
       
      </div>
      <div className='footer__area'>
        <p>
          <i className='ri-copyright-line'></i> 2021 All Rights Reserved
        </p>
        <p>
          Created by <span>{name}</span>
        </p>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  hr {
    width: 20px;
  }
  .footer__connect {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:9px;
    p {
      padding: 1.5rem 0rem;
      text-align: center;
    }
    button {
      border-radius: 25px;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        margin: 16px;
        a {
          text-decoration: none;
        }
        &:hover {
          i {
            color: white;
          }
        }
      }
    }
  }
  .footer__area {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid cyan;
    align-items: center;
    p {
      font-size: 1.1rem;
      color: #fff;
      padding: 1.5rem 0rem;
      span {
        font-size: 16px;
      }
    }
    i {
      color: #fff;
      font-size: 12px;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
  .social__links {
    position: relative;
    padding-left:42%;
    font-size: 22px;
    text-align: center;
    width: 100%;
    display: flex;
  }

  .social__links li a {
    color: #fff;
    text-decoration: none;
  }
 

`;

export default Footer;
