import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import Section_1 from '../components/PageSections/Home/Section_1'
import Section_2 from '../components/PageSections/Home/Section_2'
import Section_3 from '../components/PageSections/Home/Section_3'
import Section_4 from '../components/PageSections/Home/Section_4'
import Section_5 from '../components/PageSections/Home/Section_5'
import Section_6 from '../components/PageSections/Home/Section_6'
import Section_7 from '../components/PageSections/Home/Section_7'
import Footer from '../components/Footer/Footer'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { useLayoutEffect, useRef } from 'react'

export default function Home() {

  const rootElement = useRef<HTMLElement | null>(null);
  const tl_1 = useRef<GSAPTimeline | null>(null);
  const tl_2 = useRef<GSAPTimeline | null>(null);
  const tl_3 = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl_1.current = gsap.timeline({
        paused: true,
        scrollTrigger: {
          markers: false,
          pin: true,
          pinSpacing: false,
          trigger: ".section_one_container",
          start: "-90px top",
          end: "bottom bottom",
          scrub: true
        }
      })

      tl_1.current!
        .fromTo(
          ".section_one_heading",
          {
            yPercent: 0,
          },
          {
            yPercent: -200
          })
        .fromTo(
          ".section_one_image_one",
          {
            yPercent: 0,
          },
          {
            yPercent: -100
          })
        .fromTo(
          ".section_one_image_two",
          {
            yPercent: 0,
          },
          {
            yPercent: -120
          })


      tl_2.current = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
        },
        scrollTrigger: {
          trigger: ".section_two_container",
          markers: false,
          start: "top center",
          end: "bottom bottom",
        }
      })

      tl_2.current!
        .fromTo(
          ".section_two_image_1",
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
          },
        )
        .fromTo(
          ".section_two_image_2",
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
          },
          "<0.25"
        )
        .fromTo(
          ".section_two_heading > div",
          {
            xPercent: -10,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            stagger: 0.2
          }
        )
        .fromTo(
          ".section_two_paragraph",
          {
            xPercent: -50,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
          }
        )
        .fromTo(
          ".section_two_tag",
          {
            yPercent: 10,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.2,
          }
        )

      tl_3.current = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
        },
        scrollTrigger: {
          trigger: ".section_three_container",
          markers: false,
          start: "top center",
          end: "bottom bottom"
        }
      })

      tl_3.current!
        .fromTo(
          ".section_three_heading > div",
          {
            xPercent: -10,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            stagger: 0.25
          },
        )
        .fromTo(
          ".section_three_text",
          {
            xPercent: -10,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
          },
        )
        .fromTo(
          ".section_three_card_1",
          {
            scale: 0.8,
            yPercent: 10,
            opacity: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
          },
          "<0.25"
        )
        .fromTo(
          ".section_three_card_2",
          {
            scale: 0.8,
            yPercent: 10,
            opacity: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
          },
          "<0.25"
        )
        .fromTo(
          ".section_three_card_3",
          {
            scale: 0.8,
            yPercent: 10,
            opacity: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
          },
          "<0.25"
        )
        .fromTo(
          ".section_three_card_4",
          {
            scale: 0.8,
            yPercent: 10,
            opacity: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
          },
          "<0.25"
        )
        .fromTo(
          ".section_three_card_5",
          {
            scale: 0.8,
            yPercent: 10,
            opacity: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
          },
          "<0.25"
        )
        .fromTo(
          ".section_three_card_6",
          {
            scale: 0.8,
            yPercent: 10,
            opacity: 0,
          },
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
          },
          "<0.25"
        )

    }, rootElement)


    return () => {
      gctx.revert()
      tl_1.current!.clear()
      tl_2.current!.clear()

    };
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation classes={ `fixed top-0 left-0 right-0 z-50` } />
      </header>
      <main ref={ rootElement } className={ `w-full h-fit mt-12 flex flex-col gap-48` }>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Section_7 />
      </main>
      <Footer />
    </>
  )
}
