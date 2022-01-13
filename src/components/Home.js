import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
               title="Model S"
               description="Order Online for "
               d2="Touchless Delivery"
               backgroundImg="model-s.jpg"
               leftBtText="Custom order"
               rightBtText="Existing Inventory"
               downArrow = "yes"
            />

            <Section 
               title="Model 3"
               description="Order Online for "
               d2="Touchless Delivery"
               backgroundImg="model-3.jpg"
               leftBtText="Custom order"
               rightBtText="Existing Inventory"
               downArrow = "yes"
            />

            <Section 
               title="Model X"
               description="Order Online for "
               d2="Touchless Delivery"
               backgroundImg="model-x.jpg"
               leftBtText="Custom order"
               rightBtText="Existing Inventory"
               downArrow = "yes"
            />

            <Section 
               title="Model Y"
               description="Order Online for "
               d2="Touchless Delivery"
               backgroundImg="model-y.jpg"
               leftBtText="Custom order"
               rightBtText="Existing Inventory"
               downArrow = "yes"
            />

            <Section 
               title="Lowest Cost Solar Panels in America"
               d2=""
               description="Money-back guarantee"
               backgroundImg="solar-panel.jpg"
               leftBtText="Order now"
               rightBtText="Learn more"
               downArrow = "yes"
            />

            <Section 
               title="Solar for New Roofs"
               description="Solar Roof Costs Less Than a New Roof Plus Solar Panel"
               d2=""
               backgroundImg="solar-roof.jpg"
               leftBtText="Order now"
               rightBtText="Learn more"
               downArrow = "yes"
            />

            <Section 
               title="Accessories"
               description=""
               d2=""
               backgroundImg="accessories.jpg"
               rightBtText=""
               leftBtText="Shop now"
               downArrow = ""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`