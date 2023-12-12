"use client"
import {
  Content,
  Footer,
  Header,
  List,
  Paragraph,
  Subtitle,
} from "@/app/[locale]/components/PartialLegal";
import { TLists } from "@/app/types";
import { Button, Metric, Text, Title } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

const LISTS_2: TLists = {
  lists: [
    "To operate, maintain, and improve the Services;",
    "To manage your account, including to communicate with you regarding your account;",
    "To operate and administer any promotions you participate in on any site or application;",
    "To respond to your comments and questions and to provide customer service;",
    "To send information including technical notices, updates, security alerts, and support and administrative messages;",
    "With your consent, to send you marketing emails about upcoming promotions, and other news, including information about products and services offered by us and our affiliates. We retain information about your marketing preferences for a reasonable period of time from the date you last expressed interest in our content, products or services, such as when you last opened an email from us. We retain information derived from cookies and other tracking technologies for a reasonable period of time from the date such information was created.",
    "You may opt-out of receiving such information at any time: such marketing emails tell you how to opt-out. Please note, even if you opt out of receiving marketing emails, we may still send you non-marketing emails. Non-marketing emails include emails about your account with us (if you have one) and our business dealings with you;",
    "To process payments you make via the Services; and as we believe necessary or appropriate (a) to comply with applicable laws; (b) to comply with lawful requests and legal process, including to respond to requests from public and government authorities; (c) to enforce our Policy; and (d) to protect our rights, privacy, safety or property, and/or that of you or others.",
  ],
};
const LISTS_3: TLists = {
  lists: [
    "We have your permission, including the permission granted by your acceptance of this Privacy Policy;",
    "We determine in good faith that it is legally required to be revealed by any relevant statute, regulation, ordinance, rule, administrative or court order, decree, or subpoena;",
    "It is information that we determine must be disclosed to correct what we believe to be false or misleading information or to address activities that we believe to be manipulative, deceptive or otherwise a violation of law; where you are otherwise notified at the time we collect the data; ",
    "Where we need to share your information to provide the product or service you have requested;when such disclosure is made subject to confidentiality restrictions in connection with a sale, merger, transfer, exchange, or other disposition (whether of assets, stock, or otherwise) of all or a portion of the business conducted by SUPERA LINK. SUPERA LINK may share the non-personally identifiable information that SUPERA LINK gathers, in aggregate form only, with advertisers and other partners.",
  ],
};

const Container = () => {
  return (
    <div className="flex px-5 justify-center items-start ">
      <div className="flex max-w-[1180px] py-5 flex-col items-center gap-14 flex-1">
        <Metric className="text-2xl not-italic font-bold leading-9 tracking-tighter">
          <span className="items-stretch  text-tremor-content-strong text-white">
            Privacy and Policy
          </span>
        </Metric>
        <div className="flex  flex-col items-start gap-5">
          <Paragraph>
            <p>
              GADGETKOREA INC., doing business as SUPERA LINK
              (www.SUPERALINK.com), recognizes the importance of your privacy. 
              This privacy policy tells you what personal information we collect
              and how we use it. SUPERA LINK may change this privacy policy from
              time to time, in its sole discretion, as discussed in section ‘9.
              Changes to This Policy’ below. By registering an account or
              otherwise using or visiting any SUPERA LINK website, application,
              product, software, tool, data feed, and/or service (collectively
              the “Service”), you understand and agree to the terms of this
              policy.  Please read this policy carefully.
            </p>
            <br />
            <p>
              If you have an unresolved privacy or data use concern that we have
              not addressed satisfactorily, please contact us directly at
              support@superalink.com or find more information under section ‘7.
              How Does A User Change Or Update Information’.
            </p>
            <br />
            <p>
              SUPERA LINK is committed to your privacy. This privacy notice
              explains how we collect, use, disclose, retain, and protect your
              personal information.
            </p>
            <br />
            <p>A few key principles regarding GDPR:</p>
            <div className="text-tremor-content-strong">
              <div className="list-disc pl-2">
                <li className="text-gray-400">
                  <span className="font-bold text-white">A clear purpose: </span>the
                  controller must specifically inform the customer of the use he
                  will make of his personal data by collecting them.
                </li>
                <li className="text-gray-400">
                  <span className="font-bold text-white">Relevant data: </span>
                  the controller must only collect data that is strictly
                  necessary for his treatment; this is the principle of
                  minimizing collection.
                </li>
                <li className="text-gray-400">
                  <span className="font-bold text-white">The retention period: </span>the
                  personal data must be kept enough time to the controller to
                  achieve its purpose; beyond that time, the data must be
                  deleted.
                </li>
              </div>
            </div>
          </Paragraph>
          <Paragraph>
            <p>
              The rights of individuals: individuals can exercise their rights
              over the personal data held by the controller: access,
              rectification or deletion.
            </p>
          </Paragraph>
          <Content title="1. What information do we collect?">
            <div className="flex flex-col gap-3">
              <div>
                <Subtitle title="Personally-Identifiable Information" />
                <Paragraph>
                  <p>
                    We may collect personally identifiable information when you
                    specifically and knowingly provide it to us, for example
                    when you sign up for our newsletter or chat, create an
                    account, request more information on our contact us page,
                    respond to a survey or questionnaire and provide personal
                    information such as your email address, name, phone number
                    or other information. Where applicable, personally
                    identifiable information includes personal data as defined
                    in applicable law.
                  </p>
                  <br />
                  <p>
                    This Privacy Policy does not apply to the privacy practices
                    of third parties that we do not own or control, including
                    but not limited to any third party websites, services,
                    applications, online resources to which this Site may link
                    or otherwise reference (collectively Third Party Services or
                    TPS) that you may access through the Services. For example,
                    the Services utilize the Facebook API Services as a TPS, and
                    you are agreeing to be bound by the Facebook Terms of
                    Service,  Privacy Policy and API Services Terms of Service
                    when engaging Facebook content and services through the
                    Service. We take no responsibility for the content or
                    privacy practices of any TPS. We encourage you to carefully
                    review the privacy policies of any TPS you access.
                  </p>
                  <p>
                    SUPERA LINK does not consider personally identifiable
                    information to include information that has been anonymized
                    so that it does not allow a third party to identify a
                    specific individual. We collect and use your
                    personally-identifiable information to provide the services,
                    operate and improve our service, provide customer service,
                    perform research and analysis aimed at improving our
                    products, service and technology, and display content that
                    is customized to your interests and preferences.
                  </p>
                  <br />
                  <p>
                    You may always choose not to provide personally identifiable
                    information, but if you choose so, certain parts of the
                    Service may not be available to you. If you have registered
                    an account with us, you will have agreed to provide your
                    personally identifiable information in order to access the
                    services. This consent provides us with the legal basis we
                    require under applicable law to process your data. You
                    maintain the right to withdraw such consent at any time. If
                    you do not agree to our use of your personal data in line
                    with this policy, please do not use our Services.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Sensitive Personal Data" />
                <Paragraph>
                  <p>
                    Subject to the following paragraph, we ask that you do not
                    send us, and you do not disclose, any sensitive personal
                    data (e.g., social security numbers, information related to
                    racial or ethnic origin, political opinions, religion or
                    other beliefs, health, biometrics or genetic
                    characteristics, criminal background or trade union
                    membership) on or through the services or otherwise to us.
                    If you send or disclose any sensitive personal data to us
                    when you submit content to the services, you consent to our
                    processing and use of such sensitive personal data in
                    accordance with this policy. If you do not consent to our
                    processing and use of such sensitive personal data, you must
                    not submit such content to us. Please note that even if
                    these information are provided, we will not store them
                    anywhere on our side.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Non-Personally-Identifiable Information" />
                <Paragraph>
                  <p>
                    We may collect and aggregate non-personally identifiable
                    information which is information which does not permit you
                    to be identified or identifiable either by itself or in
                    combination with other information available to a third
                    party. This information may include information such as a
                    website that referred you to us, your IP address, browser
                    type and language, hardware types, geographic location, and
                    access times and durations. We also may collect navigational
                    information, including information about the service content
                    or pages you view, the links you click, and other actions
                    taken in connection with the service. We use this
                    information to analyze usage patterns as part of making
                    improvements to the Service.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Cookies, Pixels and Local Storage" />
                <Paragraph>
                  <p>
                    We may collect information using cookies, which are small
                    data files stored on the hard drive of your computer or
                    mobile device by a website. We may use both session cookies
                    (which expire once you close your web browser) and
                    persistent cookies (which stay on your computer or mobile
                    device until you delete them) to provide you with a more
                    personal and interactive experience when using the Services.
                    We use two broad categories of cookies: (1) first party
                    cookies, served directly by us to your computer or mobile
                    device, which are used only by us to recognize your computer
                    or mobile device when it revisits any site or application
                    that is party of the Services; and (2) third party cookies,
                    which are served by service providers on sites or
                    applications and can be used by such service providers to
                    recognize your computer or mobile device when it visits
                    other websites.
                  </p>
                </Paragraph>
              </div>
            </div>
          </Content>
          <Content title="2. Cookies We Use">
            <div className="flex flex-col gap-3">
              <div>
                <Subtitle title="Type of Cookies" />
                <Paragraph>
                  <p>
                    The Services use the following types of cookies for the
                    purposes set out below:
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Strictly Necessary Cookies" />
                <Paragraph>
                  <p>
                    These cookies are essential to provide you with services
                    available through the Services and to enable you to use some
                    of its features. For example, they allow you to log in to
                    secure areas of the sites or applications and help the
                    content of the pages you request load quickly.  Without
                    these cookies, the services that you have asked for cannot
                    be provided, and we only use these cookies to provide you
                    with those services.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Functionality Cookies" />
                <Paragraph>
                  <p>
                    These cookies allow the Services to remember choices you
                    make when you use a site or application, such as remembering
                    your language preferences, remembering your login details
                    and remembering the changes you make to other parts of your
                    account or preferences.  The purpose of these cookies is to
                    provide you with a more personal experience and to avoid you
                    having to re-enter your preferences every time you use the
                    Services.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Performance Cookies" />
                <Paragraph>
                  <p>
                    These cookies allow the Services to remember choices you
                    make when you use a site or application, such as remembering
                    your language preferences, remembering your login details
                    and remembering the changes you make to other parts of your
                    account or preferences.  The purpose of these cookies is to
                    provide you with a more personal experience and to avoid you
                    having to re-enter your preferences every time you use the
                    Services.
                  </p>
                  <br />
                  <p>
                    We use Google Analytics for this purpose. Google Analytics
                    uses its own cookies. It is only used to improve how the
                    services work. You can find out more information about
                    Google Analytics cookies here:
                    https://developers.google.com/analytics/resources
                    /concepts/gaConceptsCookies
                  </p>
                  <br />
                  <p>
                    You can find out more about how Google protects your data
                    here: www.google.com/analytics/learn/privacy.html
                  </p>
                  <br />
                  <p>
                    You can prevent the use of Google Analytics relating to your
                    use of the services by downloading and installing the
                    browser plugin available via this link:
                    http://tools.google.com/dlpage/gaoptout?hl=en-GB
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Targeting Cookies / Advertising Cookies" />
                <Paragraph>
                  <p>
                    These cookies are used to deliver adverts more relevant to
                    you and your interests They are also used to limit the
                    number of times you see an advertisement as well as help
                    measure the effectiveness of the advertising campaigns. They
                    are usually placed by advertising networks with the website
                    operator’s permission. They remember that you have visited a
                    website and this information is shared with other
                    organizations such as advertisers. Quite often targeting or
                    advertising cookies will be linked to site functionality
                    provided by the other organization.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Disabling Cookies" />
                <Paragraph>
                  <p>
                    Google AdWords Conversion Tool : Privacy information of the
                    provider(https://goo.gl/CUUMgi), Link to
                    Opt-Out(https://goo.gl/ghZWnt). On www.youronlinechoices.com
                    you can read more about cookies and the individual
                    providers. There you can also opt out of usage-based online
                    advertising through one or more tools. To go directly to the
                    preference manager, please click here.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Facebook Custom Audiences" />
                <Paragraph>
                  <p>
                    In the context of usage-based online advertising, we also
                    use communication tools of Facebook, in particular custom-
                    and website custom audiences. Basically, a non-reversible
                    and non-personal checksum (hash value) is generated from
                    your usage data, which can be transmitted to Facebook for
                    analysis and marketing purposes. For website custom
                    audiences the Facebook cookie is addressed. For more
                    information on the purpose and scope of the data collection
                    and further processing and use of the data by Facebook and
                    your options to protect your privacy, please refer to the
                    privacy policy of Facebook, which you can see here. If you
                    want to object to the use of Facebook website custom
                    audiences, you can do so here.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Pixel Tags" />
                <Paragraph>
                  <p>
                    We may also use pixel tags (which are also known as web
                    beacons and clear GIFs) on the Services to track the actions
                    of users on our sites and applications.  Unlike cookies,
                    which are stored on the hard drive of your computer or
                    mobile device by a website, pixel tags are embedded
                    invisibly on webpages. Pixel tags measure the success of our
                    marketing campaigns and compile statistics about usage of
                    the services, so that we can manage our content more
                    effectively. The information we collect using pixel tags is
                    not linked to our users personal data.
                  </p>
                </Paragraph>
              </div>
              <div>
                <Subtitle title="Do Not Track Signals" />
                <Paragraph>
                  <p>
                    Some Internet browsers may be configured to send “Do Not
                    Track” signals to the online services that you visit. We
                    currently do not respond to do not track signals. To find
                    out more about “Do Not Track,” please visit
                    http://www.allaboutdnt.com.
                  </p>
                </Paragraph>
              </div>
            </div>
          </Content>
          <Content title="3. What Do We Do With The Information That We Collect?">
            <div className="flex flex-col gap-3">
              <Paragraph>
                <p>
                  Except as disclosed in this privacy policy, SUPERA LINK does
                  not share your personal information with any outside parties.
                  SUPERA LINK will use the personally identifiable information
                  directly provided by you solely for the purpose for which you
                  have provided it, which may include:
                </p>
              </Paragraph>
              <List lists={LISTS_2.lists} />
            </div>
          </Content>
          <Content title="4. Disclosure">
            <div className="flex flex-col gap-3">
              <Paragraph>
                <p>
                  As a general rule, SUPERA LINK will not disclose any of your
                  personally identifiable information except under one of the
                  following circumstances:
                </p>
              </Paragraph>
              <List lists={LISTS_3.lists} />
            </div>
          </Content>
          <Content title="5. Children’s Policy">
            <Paragraph>
              <p>
                The Terms of service clearly provide that Users must be (i) 18
                or older, or (ii) 13 and older if either (a) an emancipated
                minor, or (b) he/she possess legal parental or guardian consent.
                SUPERA LINK does not knowingly collect personally identifiable
                information from users under 13.  In the event that we learn
                that we have collected any personal information from a user
                under the age of 13, we will attempt to identify and delete that
                information from our database.
              </p>
            </Paragraph>
          </Content>
          <Content title="6. International Usage">
            <Paragraph>
              <p>
                The Service is owned by SUPERA LINK and may be accessed in
                Europe and abroad. For data protection purposes, SUPERA LINK is
                the controller and, unless otherwise noted, is also the
                processor of data. Information collected may be retained, and
                may be stored, processed, accessed, and used in jurisdictions
                whose privacy laws may be different and less protective than
                those of your home jurisdiction. SUPERA LINK has also contracted
                with third party service providers to manage the logistics and
                customer support for an optimal 24/7 service. Some data needs to
                be disclosed and transferred to these third party to ensure the
                fulfillment of the service. All third party involved have been
                engaged under a binding confidentiality agreement and have a
                limited access to SUPERA LINK database for the purposes of
                providing support.
              </p>
            </Paragraph>
          </Content>
          <Content title="7. How Does A User Change Or Update Information?">
            <Paragraph>
              <p>
                If you have any questions or concerns about this privacy policy
                or would like the personally identifiable information that you
                have provided to be removed from our files, please contact
                SUPERA LINK via email at support@superalink.com.
              </p>
            </Paragraph>
          </Content>
          <Content title="8. Security and Encryption">
            <Paragraph>
              <p>
                We follow generally accepted industry standards to help protect
                your personal information. No method of transmission over the
                internet, mobile technology, or method of electronic storage, is
                completely secure. Therefore, while we endeavor to maintain
                physical, electronic, and procedural safeguards to protect the
                confidentiality of the information that we collect online, we
                cannot guarantee its absolute security. Our service has security
                measures in place designed to protect against the loss, misuse
                and alteration of the information under our control. We use
                standard Secure Socket Layer (SSL) encryption that encodes
                information for such transmissions. All service information is
                maintained on secure servers. Access to stored data is protected
                by multi-layered security controls including firewalls,
                role-based access controls and passwords. You are responsible to
                keep your password secure.  If you have reason to believe that
                your interaction with us is no longer secure (for example, if
                you feel that the security of any account you might have with us
                has been compromised), please immediately notify us of the
                problem by contacting us at support@superalink.com.
              </p>
            </Paragraph>
          </Content>
          <Content title="9. Changes to This Policy">
            <Paragraph>
              <p>
                We reserve the right to change the terms of this privacy policy
                at any time. When we make changes, we will revise the last
                updated date at the top of the policy. If there are material
                changes to this statement or in how we will use your personal
                information, we will notify you by prominently posting a notice
                of such changes here or on our home page, or by sending you an
                email. We encourage you to review this policy whenever you visit
                one of our websites or applications.
              </p>
            </Paragraph>
          </Content>
          <div className="mt-10">
            <Content title="2023 GADGETKOREA INC.">
              <Subtitle title="All rights reserved" />
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-black flex w-full h-full p-0 flex-col gap-0">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
