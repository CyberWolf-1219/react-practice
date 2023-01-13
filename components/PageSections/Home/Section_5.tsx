import React, { useLayoutEffect, useRef } from 'react'
import Section from '../../Section/Section'
import Container from '../../Container/Container'
import ReviewContentCard from '../../ReviewContentCard'
import ReviewSnippetCard from '../../ReviewSnippetCard/ReviewSnippetCard'

import gsap from "gsap"

function Section_5() {
    const rootElement = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        const reviewSnippetCard = rootElement.current!.querySelector<HTMLDivElement>(".review_snippet_card")

        reviewSnippetCard!.setAttribute('data-active', 'true')

        const reviewContentCards = rootElement.current?.querySelectorAll<HTMLDivElement>(".review_content_card");

        reviewContentCards!.forEach((card) => {
            if (card.id == `review_content_card_1`) {
                card.style.display = `flex`
            } else {
                card.style.display = `none`
            }
        })

    }, [])

    function reviewSnippetCardHover(event: React.MouseEvent<HTMLDivElement>) {
        const reviewSnippetCards = rootElement.current!.querySelectorAll<HTMLDivElement>(".review_snippet_card")

        reviewSnippetCards.forEach((card) => {
            card.setAttribute('data-active', 'false')
        })

        event.currentTarget.setAttribute('data-active', 'true')

        const contentCardIndex = event.currentTarget.getAttribute("data-review-card-index")
        const reviewContentCards = rootElement.current!.querySelectorAll<HTMLDivElement>(".review_content_card");

        reviewContentCards.forEach((card, index) => {
            card.style.display = "none"
        })

        reviewContentCards.forEach((card) => {
            if (card.id == `review_content_card_${contentCardIndex}`) {
                card.style.display = "flex";

                gsap.fromTo(card, { yPercent: 200, opacity: 0.5 }, { yPercent: 0, opacity: 1, duration: 1 })
            }
        })
    }

    return (
        <Section>
            <Container classes={ `h-[100vh]` }>
                <div ref={ rootElement } className={ `w-full h-full p-24 bg-secondary rounded-xl text-white` }>
                    <div className={ `relative w-full h-[90%]` }>
                        <ReviewContentCard id={ `1` } />
                        <ReviewContentCard id={ `2` } />
                        <ReviewContentCard id={ `3` } />
                        <ReviewContentCard id={ `4` } />
                        <ReviewContentCard id={ `5` } />
                    </div>
                    <div className={ `overflow-x-auto border-t-2 border-white pt-4` }>
                        <div className={ `h-full w-auto p-2 flex flex-row items-center justify-between` }>
                            <ReviewSnippetCard reviewCardIndex={ `1` } mouseEnterAction={ reviewSnippetCardHover } />
                            <ReviewSnippetCard reviewCardIndex={ `2` } mouseEnterAction={ reviewSnippetCardHover } />
                            <ReviewSnippetCard reviewCardIndex={ `3` } mouseEnterAction={ reviewSnippetCardHover } />
                            <ReviewSnippetCard reviewCardIndex={ `4` } mouseEnterAction={ reviewSnippetCardHover } />
                            <ReviewSnippetCard reviewCardIndex={ `5` } mouseEnterAction={ reviewSnippetCardHover } />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Section_5