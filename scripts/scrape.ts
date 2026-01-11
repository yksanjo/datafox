#!/usr/bin/env tsx
// Mock scraping script for demo
// In production, this would use Apify to scrape Crunchbase, LinkedIn, etc.

console.log('Mock scraping process started...')

// Mock data for demo
const mockSignals = [
  {
    id: '1',
    type: 'funding',
    title: 'Stripe raises $245M in Series I funding',
    description: 'Payment processor Stripe has raised $245 million in a Series I funding round led by existing investors.',
    source: 'crunchbase',
    company: {
      name: 'Stripe',
      domain: 'stripe.com',
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'hiring',
    title: 'Notion hires former Google VP as new CTO',
    description: 'Notion has hired a former Google VP as its new Chief Technology Officer to lead engineering expansion.',
    source: 'linkedin',
    company: {
      name: 'Notion',
      domain: 'notion.so',
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    type: 'expansion',
    title: 'Figma opening new Austin office',
    description: 'Design tool company Figma is expanding to Austin, Texas with a new engineering hub.',
    source: 'press',
    company: {
      name: 'Figma',
      domain: 'figma.com',
    },
    createdAt: new Date().toISOString(),
  },
]

async function main() {
  console.log('Starting mock scraping process...')
  
  console.log(`Found ${mockSignals.length} mock signals:`)
  
  mockSignals.forEach((signal, index) => {
    console.log(`${index + 1}. ${signal.type.toUpperCase()}: ${signal.title}`)
    console.log(`   Company: ${signal.company.name}`)
    console.log(`   Source: ${signal.source}`)
    console.log('---')
  })
  
  console.log('Mock scraping process completed')
  console.log('In production, this would:')
  console.log('1. Scrape Crunchbase, LinkedIn, press releases')
  console.log('2. Use OpenAI to classify signals')
  console.log('3. Store in database')
  console.log('4. Send notifications to users')
}

main().catch(console.error)