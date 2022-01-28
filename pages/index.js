// Chakra UI imports
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link
} from '@chakra-ui/react'
// Next imports
import NextLink from 'next/link'
// Components imports
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// Layouts imports
import Layout from '../components/layouts/articles'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" varient="page-title">
              Phat Nguyen
            </Heading>
            <Paragraph>
              Application Engineer at {''}
              <Link href="https://global.rakuten.com/corp/about/company/fintech.html">
                Rakuten
              </Link>
            </Paragraph>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 5 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/PhatNg.jpg"
              alt="ProfilePicture"
            />
          </Box>
        </Box>
        Welcome to my Playground. I use this site mainly to learn and play
        around with web dev. Feel free to look around :)
      </Container>
    </Layout>
  )
}

export default Page
