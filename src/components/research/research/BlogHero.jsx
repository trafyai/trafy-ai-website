'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import share from '@public/assets/images/blog/social/share-white.svg';
import Twitter from '@public/assets/images/blog/social/twitter.png';
import Linkedin from '@public/assets/images/blog/social/linkedin.png';
import Facebook from '@public/assets/images/blog/social/facebook.png';
import { MdOutlineShare } from "react-icons/md";

const BlogHero = (props) => {
  const [open, setOpen] = useState(false);
  const shareRef = useRef(null); // Reference for the share container

  const currentPageUrl = `https://blog.trafyai.com/${props.id}`;

  const shareToLinkedIn = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const postTitle = encodeURIComponent(props.title);
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const postText = encodeURIComponent(`${props.title} - ${props.metaDescription}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${postText}&url=${postUrl}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  // Close the share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <section className="blog-page-hero-section">
        <div className="blog-page-hero-section-category">
          <p className="blog-page-hero-category">{props.category}           
            <MdOutlineShare
            className='blog-share-mobile'
            alt="share"
            style={{width:"16px",height:"16px",color:"#797979"}}
            onClick={() => setOpen(!open)}
          />
                    {open && (
            <div className="blog-page-hero-share-container-mobile" ref={shareRef}>
              <Image
                src={Linkedin}
                alt="Linkedin"
                onClick={shareToLinkedIn}
                className="blog-social-b"
                width={28}
                height={28}
              />
              <Image
                src={Facebook}
                alt="Facebook"
                onClick={shareToFacebook}
                className="blog-social-b"
                width={28}
                height={28}
              />
              <Image
                src={Twitter}
                alt="Twitter"
                onClick={shareToTwitter}
                className="blog-social-b"
                width={28}
                height={28}
              />
            </div>
          )}
          </p>
        </div>

        <div className="blog-page-hero-section-heading">
          <h1>{props.title}</h1>
        </div>

        <div className="blog-page-hero-section-para">
          <p>{props.metaDescription}</p>
        </div>

        <div className="blog-page-hero-section-seperate-content">
          <div className="blog-page-hero-section-author">
            <p>{props.author} </p>
            <span style={{ color: '#d1d1d1' }}>|</span>
            <p>{props.date}</p>
            <span style={{ color: '#d1d1d1' }}>|</span>
            <p >{props.read}</p>
          </div>
          <MdOutlineShare
            className='blog-share'
            alt="share"
            style={{width:"20px",height:"20px",color:"#797979"}}
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="blog-page-hero-share-container" ref={shareRef}>
              <Image
                src={Linkedin}
                alt="Linkedin"
                onClick={shareToLinkedIn}
                className="blog-social-b"
                width={28}
                height={28}
              />
              <Image
                src={Facebook}
                alt="Facebook"
                onClick={shareToFacebook}
                className="blog-social-b"
                width={28}
                height={28}
              />
              <Image
                src={Twitter}
                alt="Twitter"
                onClick={shareToTwitter}
                className="blog-social-b"
                width={28}
                height={28}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogHero;
