import HappyEmoji from '../assets/icons/happy_emoji.svg'
import PartyEmoji from '../assets/icons/party_emoji.svg'
import SmileEmoji from '../assets/icons/smile_emoji.svg'
import Step2MobileIcon from '../assets/images/whyLoveMarico/step2.svg'
import step1Image from '../assets/images/whyLoveMarico/step1.jpg'
import step2Image from '../assets/images/whyLoveMarico/step2.svg'
import step3Image from '../assets/images/whyLoveMarico/step3.jpg'
import expertsAgreeImg from '../assets/images/expertsAgree/image.jpg'
import LogoSvg from '../assets/icons/logo.svg'
import LogoBigSvg from '../assets/icons/logoBig.svg'
import LogoAbout from '../assets/icons/logoAbout.svg'
import ourTeamImage from '../assets/images/ourTeam/Image.png'
import ourTeamImage2 from '../assets/images/ourTeam/Image2.png'
import ourTeamImage3 from '../assets/images/ourTeam/Image3.png'

import {
  Avatar1,
  Avatar10,
  Avatar11,
  Avatar12,
  Avatar13,
  Avatar14,
  Avatar15,
  Avatar16,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
} from '../assets/images/helpers'
import { Anchor, Facebook, Instagram, Linkedin, Medium, Podcast, Spotify, Substack, Twitter, Wordpress1, Wordpress2, YouTube } from '../assets/images/blogSocialLinksIcons'

export const LogoComponent = LogoSvg

const navCasesOptions = [
  { id: 0, name: 'Starer' },
  { id: 1, name: 'Basic' },
  { id: 2, name: 'Complete' },
]
export const headerNavLinks = [
  // { id: 0, name: 'Use Cases', link: '#', options: navCasesOptions },
  { id: 1, name: 'About', link: '/about', options: [] },
  { id: 2, name: 'Pricing', link: '/pricing', options: [] },
  { id: 3, name: 'Blog', link: '/blog', options: [] },
]

export const homeTitleH1First = [
  'O',
  'w',
  'n',
  <>&nbsp;</>,
  'y',
  'o',
  'u',
  'r',
  <>&nbsp;</>,
  'a',
  'u',
  'd',
  'i',
  'e',
  'n',
  'c',
  'e',
  '.',
]

export const homeTitleH1Second = [
  'S',
  'o',
  <>&nbsp;</>,
  'y',
  'o',
  'u',
  <>&nbsp;</>,
  'd',
  'o',
  'n',
  "'",
  't',
  <>&nbsp;</>,
  'l',
  'o',
  's',
  'e',
  <>&nbsp;</>,
  't',
  'h',
  'e',
  'm',
  '.',
]

export const homeSubTitle = 'Turn your audience into email and text message subscribers.'
export const btnsHomeText = ['Get Started Now', 'View A Demo']

export const homeWhyLoveTitleH2 = 'Why Creators Love Marico'
export const homeWhyLoveSubTitleList = [
  { id: 0, IconComponent: SmileEmoji, name: 'Reduced Anxiety', description: 'Never worry about losing your audience.' },
  {
    id: 1,
    IconComponent: HappyEmoji,
    name: 'Lower Workload',
    description: "Just share one link. We'll handle the rest.",
  },
  { id: 2, IconComponent: PartyEmoji, name: 'More Time', description: 'Spend less time on marketing tools' },
]

export const homeWhyLoveStep1TitleH2 = 'Connect Your Content'
export const homeWhyLoveStep1SubTitleH2 =
  'Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.'
export const homeWhyLoveStep1ButtonText = 'View Avaliable Sources'
export const homeWhyLoveStep1SubTitleH3 = 'Your Homepage'
export const homeWhyLoveStep1TitleH3 = (
  <>
    Your Content. <br />
    All in
  </>
)
export const homeWhyLoveStep1TitleLinkH3 = 'One Spot'
export const homeWhyLoveStep1ListOfBenefits = [
  { id: 0, description: 'Bring all of your content together into one homepage.' },
  { id: 1, description: 'Your page automatically updates whenever you create.' },
]
export const homeWhyLoveStep1ImageLink = step1Image

export const homeWhyLoveStep2TitleH2 = 'Share Your Homepage'
export const homeWhyLoveStep2SubTitleH2 =
  "Share your Wavium homepage link with your followers, and we'll handle the rest."

export const homeWhyLoveStep2Cards = [
  { id: 0, subTitle: 'One Link', title: { first: 'ALL You Create.', second: 'One Link' }, Image: Step2MobileIcon },
  {
    id: 1,
    subTitle: 'Collect Subscribers',
    title: {
      first: (
        <>
          Emails. <br /> Phone #s.
        </>
      ),
      second: 'All Yours.',
    },
    Image: Step2MobileIcon,
  },
]

export const homeWhyLoveStep3TitleH2 = 'Send Emails & Text Messages'
export const homeWhyLoveStep3SubTitleH2 =
  'No more going through a social platform. Reach and engage your audience directly over email and text massage.'

export const homeWhyLoveStep3SubTitleH3 = 'Create & Share'
export const homeWhyLoveStep3TitleH3 = 'Reach Your \nAudience'
export const homeWhyLoveStep3TitleLinkH3 = 'Directly.'
export const homeWhyLoveStep3ListOfBenefits = [
  { id: 0, description: 'Embed content or create something new to share.' },
  { id: 1, description: 'Share content over email, text message or your homepage.' },
]
export const homeWhyLoveStep3ImageLink = step3Image

export const homeExpertsAgreeTitleH2 = 'Experts Agree'
export const homeExpertsAgreeList = [expertsAgreeImg, expertsAgreeImg, expertsAgreeImg]

export const homeExpertsAgreeHelpersTitleH2 = (
  <>
    We've helped over 1,000 creatorsre <br /> claim control of their audience.
  </>
)
export const homeExpertsAgreeHelpers = [
  Avatar1,
  Avatar10,
  Avatar11,
  Avatar12,
  Avatar13,
  Avatar14,
  Avatar15,
  Avatar16,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
]

export const LastSectionLogo = LogoBigSvg
export const lastSectionTitle = 'Get Started Now'
export const lastSectionSubTitle = 'Setup is easy and takes under 5 minutes.'

export const footerNavLinks = [
  { id: 0, name: 'About', link: '/about' },
  { id: 1, name: 'Pricing', link: '/pricing' },
  { id: 2, name: 'Blog', link: '/blog' },
  { id: 3, name: 'Sign in', link: '/signin' },
]

export const aboutDescriptionLogo = [LogoAbout, 'Marico']
export const aboutDescriptionSubTitle = 'OUR MISSION'
export const aboutDescriptionTitle = (
  <>
    We exist to help creators <br /> own their audience.
  </>
)
export const aboutDescriptionParagraph =
  'We believe that social platforms are taking advantage of creators. We want to change that and help creators fight back.'
export const aboutDescriptionText = (
  <>
    <p>
      Building a career on social platforms is like building a home on someone else's land. While social platforms are
      great for discovering and reaching your audience, your goal as a creator should be to convert your followers into
      email or text message subscribers. Why? Look no further than TikTok. Almost overnight, millions of creative people
      almost lost their careers.{' '}
    </p>
    <br />
    <br />
    <br />
    <p>
      If a platform removes your account, or their algorithm for distribution no longer favours you, are you prepared?{' '}
    </p>
    <br />
    <br />
    <br />
    <p>
      If you want to build a career as a creator, your focus should be on building durable distribution channels.
      Without distribution, you have no business. So how can you build an audience that you actually own? With emails
      and phone numbers. These distribution channels are direct. Instead of going through some algorithm, when you share
      over email and text message, you know that your audience will see your content. Even better is the fact that you
      own these lists. Instagram removes your acount, you're ok. YouTube changes their algorithm, you're ok. You own
      your audience.{' '}
    </p>
    <br />
    <br />
    <p>
      We built Marico to make this process easy, fast, and effective. The traditional solution to this problem involves
      spending days building a website or hiring someone expensive to do it for you. But those days are gone. With
      Marico, you get a portfolio that is always up-to-date and converts visitors into email or text message
      subscribers. The best thing? It takes under 5 minutes to setup, and it automatically updates whenever you post new
      content anywhere online. We believe the best tools are the ones you don't even notice. Marico helps you build your
      own audience, without any hassle or time commitment. All you have to do is share your portfolio link with your
      audience, and we'll handle the rest.{' '}
    </p>
    <br />
    <br />
    <p>
      You can also create posts from within Marico and share them in just a few clicks to your portfolio, and to your
      email and text message subscribers. Since all of your content is already in Marico, creating content takes
      minutes, not hours.{' '}
    </p>
    <br />
    <br />
    <br />
    <p>
      For too long, social platforms have taken advantage of creators. Fight back and build an audience that you own.{' '}
    </p>
    <br />
    <br />
    <br />
    <p>- The Team Marico (Olivia, William, and Noah) </p>
  </>
)

export const aboutOurTeamSubTitle = 'OUR TEAM'
export const aboutOurTeamTitle = 'We love creators'
export const aboutOurTeamList = [
  { id: 0, image: ourTeamImage, title: 'Jacob Mark', subTitle: 'CEO & Design', link: { text: 'Twitter', href: '#' } },
  { id: 1, image: ourTeamImage2, title: 'Daniel', subTitle: 'CTO & Development', link: { text: 'Twitter', href: '#' } },
  { id: 2, image: ourTeamImage3, title: 'Ryan Trump', subTitle: 'COO & Sales', link: { text: 'Twitter', href: '#' } },
]

export const pricingTitle = "Choose the plan that's right for you."
export const pricingCardsArray = [
  {
    id: 0,
    name: 'Starer',
    subTitle: 'Perfect for tying out Wavium',
    price: { price: 'Free', or: null },
    description: 'Collect Unlimited subscribers',
    subDescription: '500 monthly emails',
    benefits: 'Upgrade to send more emails',
    keyFeatures: { title: 'Key features', keys: ['Automatic updating home page', 'Unlimited sources + posts'] },
    btnText: 'Start For Free',
  },
  {
    id: 1,
    name: 'Basic',
    subTitle: 'Build your online home',
    price: { price: '$14', or: 'or $19/mo, billed monthly' },
    description: 'Collect Unlimited subscribers',
    subDescription: '2,000 free monthl emails',
    benefits: 'Purchase more for $0.002 per email',
    keyFeatures: {
      title: 'Everything in starter, plus',
      keys: ['Remove Wavium branding', 'Embed Wavium on your own domain'],
    },
    btnText: 'Start Free 14-day Trial',
  },
  {
    id: 2,
    name: 'Complete',
    subTitle: 'Enhanced engagement',
    price: { price: '$29', or: 'or $34/mo, billed monthly' },
    description: 'Collect Unlimited subscribers',
    subDescription: '10,000 free monthly emails',
    benefits: 'Purchase more for $0.002 per email',
    keyFeatures: {
      title: 'Everything in basic, plus ',
      keys: ['Collect text massage subscribers', 'Share posts over text massage'],
    },
    btnText: 'Start Free 14-day Trial',
  },
]

export const blogTitle = 'Content Sources'
export const blogSubTitle = 'Connect these sources to your Marico homepage.'
export const blogSocialListArray = [
  {
    id: 0,
    icon: Twitter,
    title: 'Twitter',
    subTitle: 'Connect your Twitter feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 1,
    icon: YouTube,
    title: 'YouTube',
    subTitle: 'Connect your YouTube feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 2,
    icon: Wordpress1 ,
    title: 'WordPress',
    subTitle: 'Connect your WordPress feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 3,
    icon: Substack,
    title: 'Substack',
    subTitle: 'Connect your Substack feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 4,
    icon: Medium,
    title: 'Medium',
    subTitle: 'Connect your Medium feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 5,
    icon: Wordpress2,
    title: 'RSS Feeds',
    subTitle: 'Connect your RSS Feeds feed to your Marico homepage.',
    comingSoon: true,
  },
  {
    id: 6,
    icon: Spotify,
    title: 'Spotify',
    subTitle: 'Connect your Spotify feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 7,
    icon: Anchor,
    title: 'Anchor',
    subTitle: 'Connect your Anchor feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 8,
    icon: Podcast,
    title: 'Apple Podcasts',
    subTitle: 'Connect your Apple Podcasts feed to your Marico homepage.',
    comingSoon: false,
  },
  {
    id: 9,
    icon: Instagram,
    title: 'Instagram',
    subTitle: 'Connect your Instagram feed to your Marico homepage.',
    comingSoon: true,
  },
  {
    id: 10,
    icon: Linkedin,
    title: 'Linkedin',
    subTitle: 'Connect your Linkedin feed to your Marico homepage.',
    comingSoon: true,
  },
  {
    id: 11,
    icon: Facebook,
    title: 'Fackbook',
    subTitle: 'Connect your Fackbook feed to your Marico homepage.',
    comingSoon: true,
  },
]
