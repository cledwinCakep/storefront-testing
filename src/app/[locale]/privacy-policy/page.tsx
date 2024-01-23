"use client";
import {
  Content,
  Footer,
  Header,
  List,
  Paragraph,
  Subtitle,
} from "@/app/[locale]/components/PartialLegal";
import { TLists } from "@/app/types";
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

const P = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-gray-400">{children}</div>;
};
const link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className="text-gray-400">
      {children}
    </Link>
  );
};

const Container = () => {
  return (
    <div className="flex items-start justify-center px-5 min-h-full">
      <div className="flex w-auto max-w-[1180px] flex-1 flex-col items-center gap-14 py-5">
        <h1 className="text-3xl font-semibold leading-10 text-white">
          Privacy Policy
        </h1>
      
        <div className="flex flex-col items-start gap-5">
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
              policy. Please read this policy carefully.
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
                  <span className="font-bold text-white">
                    A clear purpose:{" "}
                  </span>
                  the controller must specifically inform the customer of the
                  use he will make of his personal data by collecting them.
                </li>
                <li className="text-gray-400">
                  <span className="font-bold text-white">Relevant data:</span>
                  the controller must only collect data that is strictly
                  necessary for his treatment; this is the principle of
                  minimizing collection.
                </li>
                <li className="text-gray-400">
                  <span className="font-bold text-white">
                    The retention period:{" "}
                  </span>
                  the personal data must be kept enough time to the controller
                  to achieve its purpose; beyond that time, the data must be
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
                <>
                  <P>
                    We may collect personally identifiable information when you
                    specifically and knowingly provide it to us, for example
                    when you sign up for our newsletter or chat, create an
                    account, request more information on our contact us page,
                    respond to a survey or questionnaire and provide personal
                    information such as your email address, name, phone number
                    or other information. Where applicable, personally
                    identifiable information includes personal data as defined
                    in applicable law.
                  </P>
                  <br />
                  <P>
                    This Privacy Policy does not apply to the privacy practices
                    of third parties that we do not own or control, including
                    but not limited to any third party websites, services,
                    applications, online resources to which this Site may link
                    or otherwise reference (collectively Third Party Services or
                    TPS) that you may access through the Services. For example,
                    the Services utilize the Facebook API Services as a TPS, and
                    you are agreeing to be bound by the Facebook{"  "}
                    <Link
                      href="https://www.facebook.com/terms.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      Terms of Service,
                    </Link>
                    <Link
                      href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      Privacy Policy
                    </Link>
                    {"  "}
                    and{"  "}
                    <Link
                      href="https://developers.facebook.com/terms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      API Services Terms of Service
                    </Link>{" "}
                    when engaging Facebook content and services through the
                    Service. We take no responsibility for the content or
                    privacy practices of any TPS. We encourage you to carefully
                    review the privacy policies of any TPS you access.
                  </P>
                  <P>
                    SUPERA LINK does not consider personally identifiable
                    information to include information that has been anonymized
                    so that it does not allow a third party to identify a
                    specific individual. We collect and use your
                    personally-identifiable information to provide the services,
                    operate and improve our service, provide customer service,
                    perform research and analysis aimed at improving our
                    products, service and technology, and display content that
                    is customized to your interests and preferences.
                  </P>
                  <br />
                  <P>
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
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Sensitive Personal Data" />
                <>
                  <P>
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
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Non-Personally-Identifiable Information" />
                <>
                  <P>
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
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Cookies, Pixels and Local Storage" />
                <>
                  <P>
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
                  </P>
                </>
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
                <>
                  <P>
                    These cookies are essential to provide you with services
                    available through the Services and to enable you to use some
                    of its features. For example, they allow you to log in to
                    secure areas of the sites or applications and help the
                    content of the pages you request load quickly. Without these
                    cookies, the services that you have asked for cannot be
                    provided, and we only use these cookies to provide you with
                    those services.
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Functionality Cookies" />
                <>
                  <P>
                    These cookies allow the Services to remember choices you
                    make when you use a site or application, such as remembering
                    your language preferences, remembering your login details
                    and remembering the changes you make to other parts of your
                    account or preferences. The purpose of these cookies is to
                    provide you with a more personal experience and to avoid you
                    having to re-enter your preferences every time you use the
                    Services.
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Performance Cookies" />
                <>
                  <P>
                    These cookies allow the Services to remember choices you
                    make when you use a site or application, such as remembering
                    your language preferences, remembering your login details
                    and remembering the changes you make to other parts of your
                    account or preferences. The purpose of these cookies is to
                    provide you with a more personal experience and to avoid you
                    having to re-enter your preferences every time you use the
                    Services.
                  </P>
                  <br />
                  <P>
                    We use Google Analytics for this purpose. Google Analytics
                    uses its own cookies. It is only used to improve how the
                    services work. You can find out more information about
                    Google Analytics cookies here:{" "}
                    <Link
                      href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      <span className="">
                      https://developers.google.com/analytics/
                      </span>
                      <br className="blok sm:hidden"/>
                      <span className="">
                      resources/concepts/gaConceptsCookies
                      </span>
                    </Link>
                  </P>
                  <br />
                  <P>
                    You can find out more about how Google protects your data
                    here:{" "}
                    <a
                      href="https://www.google.com/analytics/learn/privacy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      www.google.com/analytics/learn/privacy.html
                    </a>
                  </P>
                  <br />
                  <P>
                    You can prevent the use of Google Analytics relating to your
                    use of the services by downloading and installing the
                    browser plugin available via this link:{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                      href="https://tools.google.com/dlpage/gaoptout?hl=en-GB"
                    >
                      https://tools.google.com/dlpage/gaoptout?hl=en-GB
                    </a>
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Targeting Cookies / Advertising Cookies" />
                <>
                  <P>
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
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Disabling Cookies" />
                <>
                  <P>
                    Google AdWords Conversion Tool : Privacy information of the
                    provider{" "}
                    <Link
                      href="https://goo.gl/CUUMgi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      (https://goo.gl/CUUMgi)
                    </Link>
                    , Link to Opt-Out{" "}
                    <Link
                      href="https://goo.gl/ghZWnt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      (https://goo.gl/ghZWnt)
                    </Link>
                    .
                    <p>
                      On{"  "}
                      <Link
                        href="https://www.youronlinechoices.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F47325]"
                      >
                        www.youronlinechoices.com{" "}
                      </Link>
                      you can read more about cookies and the individual
                      providers. There you can also opt out of usage-based
                      online advertising through one or more tools. To go
                      directly to the preference manager, please click{" "}
                      <Link
                        href="https://www.youronlinechoices.com/uk/your-ad-choices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F47325]"
                      >
                        here
                      </Link>
                      .
                    </p>
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Facebook Custom Audiences" />
                <>
                  <P>
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
                    privacy policy of Facebook, which you can see
                    <Link
                      href={
                        "https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      {" "}
                      here
                    </Link>
                    . If you want to object to the use of Facebook website
                    custom audiences, you can do so
                    <Link
                      href="https://www.facebook.com/adpreferences/?entry_product=ad_settings_screen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      {" "}
                      here
                    </Link>
                    .
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Pixel Tags" />
                <>
                  <P>
                    We may also use pixel tags (which are also known as web
                    beacons and clear GIFs) on the Services to track the actions
                    of users on our sites and applications. Unlike cookies,
                    which are stored on the hard drive of your computer or
                    mobile device by a website, pixel tags are embedded
                    invisibly on webpages. Pixel tags measure the success of our
                    marketing campaigns and compile statistics about usage of
                    the services, so that we can manage our content more
                    effectively. The information we collect using pixel tags is
                    not linked to our users personal data.
                  </P>
                </>
              </div>
              <div>
                <Subtitle title="Do Not Track Signals" />
                <>
                  <P>
                    Some Internet browsers may be configured to send “Do Not
                    Track” signals to the online services that you visit. We
                    currently do not respond to do not track signals. To find
                    out more about “Do Not Track,” please visit
                    <Link
                      href="https://allaboutdnt.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F47325]"
                    >
                      {" "}
                      https://allaboutdnt.com/
                    </Link>
                  </P>
                </>
              </div>
            </div>
          </Content>
          <Content title="3. What Do We Do With The Information That We Collect?">
            <p className="mb-2 text-lg font-semibold leading-7 tracking-tighter text-white">
              Information That We Collect
            </p>
            <div className="flex flex-col gap-3">
              <Paragraph>
                <P>
                  Except as disclosed in this privacy policy, SUPERA LINK does
                  not share your personal information with any outside parties.
                  SUPERA LINK will use the personally identifiable information
                  directly provided by you solely for the purpose for which you
                  have provided it, which may include:
                </P>
              </Paragraph>
              <P>
                <List lists={LISTS_2.lists} />
              </P>
              <P>
                <p>
                  We may share this information with service providers who
                  perform services on our behalf, such as those services listed
                  above, or other services like processing information requests,
                  displaying stored data you access, to assist us in marketing,
                  to conduct audits, etc. Those companies will be permitted to
                  obtain only the personal information they need to provide the
                  service they provide, will be required to maintain the
                  confidentiality of the information, and will be prohibited
                  from using it for any other purpose.
                </p>
                <br />
                <p>
                  We may also use information you provide to better serve you,
                  and, if you have given your consent for us to do so, to send
                  you email or text messages concerning offers from our partners
                  and other third parties that we think may be of interest to
                  you. If you do not wish to receive marketing emails, you may
                  adjust your Personal Information Preferences as described
                  below or follow the unsubscribe or stop instructions included
                  within each communication. We use MailChimp as our marketing
                  automation platform. By submitting the information you provide
                  us, you acknowledge that the information will be transferred
                  to MailChimp for processing in accordance with their{" "}
                  <Link
                    href={"https://www.intuit.com/privacy/statement/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F47325]"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  and
                  <Link
                    href={"https://mailchimp.com/legal/terms/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F47325]"
                  >
                    {" "}
                    Terms.
                  </Link>
                </p>
                <br />
                <p>
                  We will only retain your personally identifiable information
                  as long as reasonably required to provide you with the
                  Services unless a longer retention period is required or
                  permitted by law (for example, for regulatory purposes).
                  SUPERA LINK will provide you with information about SUPERA
                  LINK’ data and how it will be used upon request. Should your
                  data stored by SUPERA LINK be incorrect, SUPERA LINK will
                  correct it. In this regard, you can write to SUPERA LINK at
                  the address listed in section ‘7. How Does A User Change Or
                  Update Information’ or contact them in any other way. In
                  addition, customers can view the data in their account that
                  SUPERA LINK has stored about them and correct it if necessary.
                </p>
                <br />
                <p>
                  You may contact us anytime to opt-out of: (i) direct marketing
                  communications; (ii) our collection of sensitive personal
                  data; (iii) any new processing of your personal data that we
                  may carry out beyond the original purpose. Please note that
                  your use of some of the Services may be ineffective upon
                  opt-out. You may also: (A) access the data we hold about you
                  at any time via your account or by contacting us directly; (B)
                  update or correct any inaccuracies in your personal data by
                  contacting us; (C) in certain situations, for example when the
                  data we hold about you is no longer relevant or is incorrect,
                  you can request that we erase your data. You may contact us at
                  support@superalink.com anytime for any other questions you may
                  have about your personally identifiable information and our
                  use of it
                </p>
              </P>
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
              <P>
                <List lists={LISTS_3.lists} />
              </P>
            </div>
          </Content>
          <Content title="5. Children’s Policy">
            <Paragraph>
              <P>
                The Terms of service clearly provide that Users must be (i) 18
                or older, or (ii) 13 and older if either (a) an emancipated
                minor, or (b) he/she possess legal parental or guardian consent.
                SUPERA LINK does not knowingly collect personally identifiable
                information from users under 13. In the event that we learn that
                we have collected any personal information from a user under the
                age of 13, we will attempt to identify and delete that
                information from our database.
              </P>
            </Paragraph>
          </Content>
          <Content title="6. International Usage">
            <Paragraph>
              <P>
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
              </P>
            </Paragraph>
          </Content>
          <Content title="7. How Does A User Change Or Update Information?">
            <Paragraph>
              <P>
                If you have any questions or concerns about this privacy policy
                or would like the personally identifiable information that you
                have provided to be removed from our files, please contact
                SUPERA LINK via email at support@superalink.com.
              </P>
            </Paragraph>
          </Content>
          <Content title="8. Security and Encryption">
            <Paragraph>
              <P>
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
                keep your password secure. If you have reason to believe that
                your interaction with us is no longer secure (for example, if
                you feel that the security of any account you might have with us
                has been compromised), please immediately notify us of the
                problem by contacting us at support@superalink.com.
              </P>
            </Paragraph>
          </Content>
          <Content title="9. Changes to This Policy">
            <Paragraph>
              <P>
                We reserve the right to change the terms of this privacy policy
                at any time. When we make changes, we will revise the last
                updated date at the top of the policy. If there are material
                changes to this statement or in how we will use your personal
                information, we will notify you by prominently posting a notice
                of such changes here or on our home page, or by sending you an
                email. We encourage you to review this policy whenever you visit
                one of our websites or applications.
              </P>
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
    <div className="flex min-h-screen w-full flex-col gap-0 bg-black p-0">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
