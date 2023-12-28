import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/images/about-image.jpg'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>About Audiophile</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Audiophile, where sound becomes an experience. Born from
            a collective passion for transcendent audio, Sonic Reverie was
            founded with one goal: to redefine how we hear and feel music. Since
            2021, we've curated an exquisite collection of headphones, speakers,
            and earphones from the world's most innovative and revered brands.
            Our commitment goes beyond offering products; it's about elevating
            your sonic journey. From the clarity of each note to the immersive
            ambiance of every track, we're here to immerse you in the artistry
            of sound. Join us in exploring a world where music transcends
            boundaries and ignites the soul.
          </p>
          <h4>Our Purpose</h4>
          <p>
            The purpose of Audiophile is to redefine the way people experience
            and connect with sound. We aim to inspire and elevate the
            appreciation of music and audio by providing meticulously curated,
            high-quality headphones, speakers, and earphones. Through our
            dedication to offering exceptional products and fostering a vibrant
            community, we strive to create a space where enthusiasts and music
            lovers alike can explore, discover, and celebrate the transformative
            power of extraordinary sound experiences. At Audiophile, our purpose
            is to be the catalyst for moments of sonic transcendence that
            resonate deeply within each individual.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
