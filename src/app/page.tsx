"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart3, Building2, DollarSign, HelpCircle, MessageCircle, Plug, Rocket, Star, Workflow, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {"name":"Features","id":"features"},
            {"name":"Pricing","id":"pricing"},
            {"name":"Testimonials","id":"testimonials"},
            {"name":"FAQ","id":"faq"}
          ]}
          brandName="SaasFlow"
          button={{
            "text":"Get Started",
            "href":"contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SaasFlow"
          description="Streamline your workflow with powerful automation tools that scale with your business"
          buttons={[
            {"text":"Start Free Trial","href":"contact"},
            {"text":"View Demo","href":"features"}
          ]}
          imageSrc="https://pixabay.com/get/g53d429289225e4fb8d5415666cae4da1fcc53a3df274ed22671cd60b2a2f8175f4875343c0f3e43c6399819d075e30f0ad6359397df1b93469ce893b8abbe9ad_1280.jpg"
          imageAlt="SaaS dashboard interface"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features"
          description="Everything you need to automate and scale your business operations"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              "title":"Advanced Analytics",
              "description":"Get deep insights into your business performance with real-time analytics and custom dashboards",
              "icon":BarChart3
            },
            {
              "title":"Workflow Automation",
              "description":"Automate repetitive tasks and create seamless workflows that save time and reduce errors",
              "icon":Workflow
            },
            {
              "title":"Seamless Integrations",
              "description":"Connect with your favorite tools through our extensive library of integrations and APIs",
              "icon":Plug
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Plan"
          description="Start free and scale as you grow with our flexible pricing options"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              "id":"starter",
              "badge":"Perfect for Startups",
              "badgeIcon":Rocket,
              "price":"Free",
              "subtitle":"Get started with essential features",
              "buttons":[
                {"text":"Start Free","href":"contact"},
                {"text":"Learn More","href":"features"}
              ],
              "features":["Up to 5 team members","10GB storage","Basic analytics","Email support"]
            },
            {
              "id":"pro",
              "badge":"Most Popular",
              "badgeIcon":Star,
              "price":"$29/month",
              "subtitle":"Perfect for growing teams",
              "buttons":[
                {"text":"Start Trial","href":"contact"},
                {"text":"Contact Sales","href":"contact"}
              ],
              "features":["Up to 25 team members","100GB storage","Advanced analytics","Priority support","Custom integrations"]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="See how SaasFlow has transformed businesses worldwide"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              "id":"1",
              "name":"Sarah Mitchell",
              "role":"CEO, TechStart",
              "testimonial":"SaasFlow has completely revolutionized how we manage our workflows. The automation features have saved us countless hours each week.",
              "imageSrc":"https://pixabay.com/get/g8cd4cb5e44806b26715cd3e06ad540b7082664bfbb780fc89e514448c827e20efe54572554d721e91faff69edd13ee453692167c560ab65f48726aaf8fe926ff_1280.png",
              "imageAlt":"Sarah Mitchell portrait"
            },
            {
              "id":"2",
              "name":"Marcus Johnson",
              "role":"Operations Director, ScaleUp Inc",
              "testimonial":"The analytics dashboard gives us insights we never had before. It's helped us make data-driven decisions that boosted our efficiency by 40%.",
              "imageSrc":"https://pixabay.com/get/gde92a45af6f58f21cb2ad17bef4049ee9930820249bd0b8467b0f3fb47fa2df204a1f13eb63582c517d1cd0860161efa76640e62b2269eebfd890aa97d95d7d6_1280.jpg",
              "imageAlt":"Marcus Johnson portrait"
            },
            {
              "id":"3",
              "name":"Lisa Chen",
              "role":"Founder, InnovateLab",
              "testimonial":"From startup to scale-up, SaasFlow has grown with us. The integrations are seamless and the support team is incredibly responsive.",
              "imageSrc":"https://pixabay.com/get/gac1b826ad81cb1f98b3519f7cf289a5a5f7aad3b18af2dc3d8c21d5c3627f33f7b92041424d7efc6f9ca6336a2ececdc5c0cda2639694311fad9a4723c84fdf4_1280.jpg",
              "imageAlt":"Lisa Chen portrait"
            },
            {
              "id":"4",
              "name":"David Rodriguez",
              "role":"CTO, FutureWorks",
              "testimonial":"The workflow automation has eliminated manual processes that used to take our team hours. Now we focus on what matters most - innovation.",
              "imageSrc":"https://pixabay.com/get/gd23d2185ecc112cde22cb295aef864084595a087b54ad48c441c22cd26de80fdb8bd8bdea58f59e88504d28808db2f21efd1a6dc4141b74f8a3a060db25a7695_1280.jpg",
              "imageAlt":"David Rodriguez portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that trust SaasFlow to power their operations"
          tag="Partners"
          tagIcon={Building2}
          logos={[
            "https://pixabay.com/get/g10456a2cff4a3937da18fe4cab837975f9900986daa389b3f822ac08d0dec075992a9dab6983435abb5726f3dd0b79ca3328c9de531ae2920d54e032c4a4a2d4_1280.jpg",
            "https://pixabay.com/get/gf1e94620e092c351eb3c1385fe855606674ccbbb1f1eaca748b227ac1b126f6f60e0af42c1fe9cec4f7a2056324320f73654ba6b9659a0555b19489e0f9b1cb9_1280.jpg",
            "https://pixabay.com/get/gdb54b469b03979f138c2694901fea51f14a84f13dc98fc2a95cf5431693d98dfe6ba5b615e4928df208b6a8be888b5b4436f1a51f8817ffb5afb285ec5296771_1280.jpg",
            "https://pixabay.com/get/g6302df8ce4dc639275ba74ca3e8a70274e3e0740d8963eea295e1cfbc8e470b563ae80d1dc90b329e73906a89884bd6e16a615d6a6651e636e4fb781a330531a_1280.jpg",
            "https://pixabay.com/get/g98ed416542915a1b3379b39766ffcbdf2a20565e579cd1aefa654bd0544496fdd20e811abb3a8d62babdd073b126b55d145a51e50f6c1a31b2f7e13491e0d384_1280.jpg",
            "https://pixabay.com/get/g792e68406c39d9061eb7b6b90b1e508fa9f168405d88971ea672cae9c75d57ae5d4e72e30c1c57fb351d391e8d0d14932014fc1203860e61040bee5501fb2ec4_1280.jpg",
            "https://pixabay.com/get/gfe1927af643856933dfe3a2e61ed4028808e9b830393b94c903e555cdec2afc86d4e19e0974503b0e910e452226428e01d935f23725736fae9e4b2fa4ff52a8b_1280.jpg",
            "https://pixabay.com/get/g375942fc3a878a0651fe50dc6543db2a77dc7274ba7dfba660c028a5d9efed5b3ac0c41f6daaaadbf5fa8f904a2d09c0283033be9cdf04c8f9347e5d27e3461c_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about SaasFlow and how it can help your business"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              "id":"1",
              "title":"How quickly can I get started with SaasFlow?",
              "content":"You can sign up and start using SaasFlow immediately. Our setup wizard will have you up and running in under 5 minutes, and you can begin automating your first workflow right away."
            },
            {
              "id":"2",
              "title":"Do you offer integrations with popular tools?",
              "content":"Yes! We support over 500+ integrations including Slack, Salesforce, HubSpot, Shopify, and many more. Our API also allows for custom integrations to fit your specific needs."
            },
            {
              "id":"3",
              "title":"Is my data secure with SaasFlow?",
              "content":"Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is protected with the highest security standards."
            },
            {
              "id":"4",
              "title":"Can I cancel my subscription at any time?",
              "content":"Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access until the end of your current billing period."
            },
            {
              "id":"5",
              "title":"What kind of support do you offer?",
              "content":"We offer 24/7 email support for all plans, with priority support for Pro users. We also have extensive documentation, video tutorials, and a community forum."
            },
            {
              "id":"6",
              "title":"Is there a free trial available?",
              "content":"Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start, and you can upgrade anytime during or after your trial."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your Workflow?"
          description="Join thousands of teams already using SaasFlow to automate their processes and scale their business"
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="Start your 14-day free trial. No credit card required. Cancel anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SaasFlow"
          columns={[
            {
              "items":[
                {"label":"Features","href":"features"},
                {"label":"Pricing","href":"pricing"},
                {"label":"Integrations","href":"features"},
                {"label":"API Documentation","href":"https://docs.saasflow.com"}
              ]
            },
            {
              "items":[
                {"label":"About Us","href":"about"},
                {"label":"Careers","href":"https://careers.saasflow.com"},
                {"label":"Contact","href":"contact"},
                {"label":"Blog","href":"https://blog.saasflow.com"}
              ]
            },
            {
              "items":[
                {"label":"Help Center","href":"faq"},
                {"label":"Privacy Policy","href":"https://saasflow.com/privacy"},
                {"label":"Terms of Service","href":"https://saasflow.com/terms"},
                {"label":"Security","href":"https://saasflow.com/security"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}