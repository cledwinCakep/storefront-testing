"use client";
import { TLists } from "@/app/types";
import {
  Content,
  Footer,
  Header,
  List,
  Subtitle,
} from "@/app/[locale]/components/PartialLegal";
import React from "react";
import Link from "next/link";

const LIST_1: TLists = {
  lists: [
    " A refund request can be made within thirty (30) days from the date of purchase when the activation is no longer possible following extensive collaborative troubleshooting.",
    "Cooperation with the Customer to resolve the issue promptly is required for a refund to be granted",
    "Each data package has its own validity period. No refund of any form will be offered for the remaining data when the validity period expires.",
    " Compensation: No refund or remuneration of any kind will be issued due to charges from alternate phones, alternate SIM cards, alternate providers, hotel phones, or other charges that are not directly linked to the Customer's Supera Link eSIM purchase. (See section 7. LIABILITY AND WARRANTY in our Terms and Conditions)",
    "Fraudulent purchases: Supera Link reserves the right to refuse any form of refund if there is evidence of abuse, violation of our Terms and Conditions, or any fraudulent activity connected with using Supera  Link products and services.",
    "Unauthorized purchases: The case will be subject to investigation and approval before processing any refund. Supera Link reserves the right to suspend any account associated with fraudulent activity.",
    "Accidental purchases: Once Customers install the eSIM, it will be considered used. No refunds will be offered.",
    "Incorrect charges: If the Customer reasonably and in good faith disputes an invoice or part of it, the Customer shall notify Supera Link of such a dispute within twelve (12) days of receipt of the invoice, providing details of why the invoiced amount is incorrect and, if possible, how much the Customer considers due. (See details in section 4.2 CHARGES FOR USE under Terms and Conditions)",
    "  Other Reasons: If the refund request is not within the above, we will investigate the request on a case-by-case basis. If the refund is    approved, a processing fee may apply. The maximum refund of credit a Customer can apply for must be equal to or less than the total amount they paid.",
  ],
};

const P = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-gray-400">{children}</div>;
};
const Link2 = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="text-[#F47325]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

const TextWithLink = ({ text }: { text: string }) => {
  const urlRegex = /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*)/gi;

  const parts = text.split(urlRegex);
  return (
    <P>
      {parts.map((part, index) =>
        urlRegex.test(part) ? (
          <a
            href={part}
            key={index}
            className="text-[#F47325]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </P>
  );
};
const Container = () => {
  return (
    <div className="flex items-start justify-center px-5 ">
      <div className="flex max-w-[1180px] flex-1 flex-col items-center gap-14 py-5">
        <h1 className="text-3xl font-semibold leading-10 text-white">
          Terms and Conditions
        </h1>
        <div className="flex  flex-col items-start gap-5">
          <span className=" text-xl font-semibold not-italic leading-7 tracking-tighter text-white">
            General Terms and Conditions
          </span>
          <div className="flex flex-col items-start gap-10">
            <Content title="1. Validity of General Terms and Conditions">
              <P>
                The following Terms and Conditions shall apply to all services
                rendered by GADGETKOREA INC., hereafter referred to as Supera
                Link, in connection with the prepaid eSIM reselling. The
                following Terms and Conditions are provided on the website
                <Link2 href="https://www.superalink.com">
                  {" "}
                  https://www.superalink.com.
                </Link2>
              </P>
              <br />
              <P>
                Supera Link may accept variant clauses only in the case of an
                explicit written agreement.
              </P>
            </Content>
            <Content title="2. Description of Services">
              <div className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Description e-SIM reselling" />
                  <P>
                    Supera Link resells prepaid eSIMs. The Customer registers
                    and buys its sim cards on{" "}
                    <Link2 href="https://www.superalink.com">
                      https://www.superalink.com
                    </Link2>{" "}
                    website and/or Supera Link App. Our payments are operated by
                    PayPal{" "}
                    <Link2 href="https://paypal.com">
                      (https://paypal.com){" "}
                    </Link2>
                    and Paymentwall with an alias of your credit card{" "}
                    <Link2 href="https://paymentwall.com">
                      (https://paymentwall.com)
                    </Link2>{" "}
                    (virtual Credit Card Imprint).
                  </P>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Registration for Using SUPERA LINK Services" />
                  <P>
                    The Customer must accept the General Terms and Conditions to
                    use Supera Link services. The client gives directly or by
                    the intermediary of the service provider (Hotel, Travel
                    Agency…) on the web browser under https://www.superalink.com
                    the following information: First Name, Last Name, Address
                    (billing address), Email address.
                  </P>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Customer Engagements" />
                  <P>
                    In using the Equipment or Services provided by Supera Link,
                    the Customer must not engage in any action: that is abusive,
                    illegal, or fraudulent; that causes the Network to be
                    impaired or damaged.
                  </P>
                  <br />
                  <P>
                    When the Customer breaches its obligations under Sec. 2.4,
                    Supera Link may suspend the {`Customer's`} use of the
                    Service. During any period of suspension, the Customer shall
                    continue to pay all Charges due under this Agreement in
                    respect of the suspended Services.
                  </P>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Device Compatibility" />
                  <P>
                    The Customer is responsible for ensuring that their device
                    is eSIM compatible and network-unlocked. Device
                    compatibility may depend on the carrier and country of
                    origin, the Customer must check the list of eSIM-compatible
                    devices provided at the checkout. By checking the box that
                    confirms that the {`Customer's`} device is eSIM compatible,
                    the Customer is then held responsible for the accuracy of
                    the information they provide.
                  </P>
                  <br />
                  <P>
                    The eSIM compatibility list is not exhaustive, meaning newly
                    announced eSIM-compatible devices may still need to be
                    added.
                  </P>
                </div>
              </div>
            </Content>
            <Content title="3. Start, Duration, and Termination of The Contract">
              <P>
                The Customer is responsible for ensuring that their device is
                eSIM compatible and network-unlocked. Device compatibility may
                depend on the carrier and country of origin, the Customer must
                check the list of eSIM-compatible devices provided at the
                checkout. By checking the box that confirms that the{" "}
                {`Customer's`}
                device is eSIM compatible, the Customer is then held responsible
                for the accuracy of the information they provide.
              </P>
              <br />
              <P>
                The eSIM compatibility list is not exhaustive, meaning newly
                announced eSIM-compatible devices may still need to be added.
              </P>
            </Content>
            <Content title="4. Charges and Payment">
              <div className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Payment Conditions" />
                  <P>
                    The supported payment methods for Supera Link services are
                    Credit/Debit Card and PayPal.
                  </P>
                  <br />
                  <P>The currency of payment is in US Dollars($).</P>
                  <br />
                  <TextWithLink
                    text="The credit card transaction will be processed and secured by
                    Supera Link providers PayPal (https://paypal.com) and
                    Paymentwall (https://paymentwall.com/)."
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Charges for Use" />
                  <P>
                    Supera Link states all Charges are inclusive of VAT unless
                    otherwise specified.
                  </P>
                  <br />
                  <P>
                    The Customer shall not be entitled to offset any of its
                    claims against claims of Supera Link, except where the
                    {`Customer's`} claims are undisputed or have been confirmed
                    by final court judgment.
                  </P>
                </div>
              </div>
            </Content>
            <Content title="5. Delivery">
              <P>
                The Customer will receive a confirmation email after the
                purchase. All the information for installing the eSIM will be
                available only in the email sent to the Customer.
              </P>
            </Content>
            <Content title="6. Refund / Cancellation / Modification Policy">
              <P>
                The Customer has the right to ask for a refund or
                eSIM-replacement if the eSIM cannot be installed and used due to
                a technical problem from Supera Link.
              </P>
              <br />
              <div className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Refund and Cancellation" />
                  <div className="flex flex-col items-start">
                    <span className="text-base font-bold leading-6 tracking-tighter">
                      Policies and Guidelines
                    </span>
                    <div className="pl-6">
                      <ul className="list-disc">
                        <P>
                          <li>
                            <span className="text-white"></span>A refund request
                            can be made within thirty (30) days from the date of
                            purchase when the activation is no longer possible
                            following extensive collaborative troubleshooting.
                          </li>
                          <li>
                            <span className="text-white"></span>Cooperation with
                            the Customer to resolve the issue promptly is
                            required for a refund to be granted
                          </li>
                          <li>
                            <span className="text-white"></span>Each data
                            package has its own validity period. No refund of
                            any form will be offered for the remaining data when
                            the validity period expires.
                          </li>
                          <li>
                            <span className="text-white">Compensation:</span> No
                            refund or remuneration of any kind will be issued
                            due to charges from alternate phones, alternate SIM
                            cards, alternate providers, hotel phones, or other
                            charges that are not directly linked to the
                            {`Customer's`} Supera Link eSIM purchase (
                            <span className="text-white">
                              {" "}
                              See section 7. LIABILITY AND WARRANTY{" "}
                            </span>
                            in our Terms and Conditions)
                          </li>
                          <li>
                            <span className="text-white">
                              Fraudulent purchases:
                            </span>{" "}
                            Fraudulent purchases: Supera Link reserves the right
                            to refuse any form of refund if there is evidence of
                            abuse, violation of our Terms and Conditions, or any
                            fraudulent activity connected with using Supera Link
                            products and services.
                          </li>
                          <li>
                            <span className="text-white">
                              Unauthorized purchases:
                            </span>{" "}
                            The case will be subject to investigation and
                            approval before processing any refund. Supera Link
                            reserves the right to suspend any account associated
                            with fraudulent activity.
                          </li>
                          <li>
                            <span className="text-white">
                              Accidental purchases:
                            </span>{" "}
                            Once Customers install the eSIM, it will be
                            considered used. No refunds will be offered.
                          </li>
                          <li>
                            <span className="text-white">
                              Incorrect charges:
                            </span>{" "}
                            If the Customer reasonably and in good faith
                            disputes an invoice or part of it, the Customer
                            shall notify Supera Link of such a dispute within
                            twelve (12) days of receipt of the invoice,
                            providing details of why the invoiced amount is
                            incorrect and, if possible, how much the Customer
                            considers due. (See details in section 4.2 CHARGES
                            FOR USE under Terms and Conditions)
                          </li>
                          <li>
                            <span className="text-white">Other Reasons:</span>{" "}
                            If the refund request is not within the above, we
                            will investigate the request on a case-by-case
                            basis. If the refund is approved, a processing fee
                            may apply. The maximum refund of credit a Customer
                            can apply for must be equal to or less than the
                            total amount they paid.
                          </li>
                        </P>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Refund Process" />
                  <P>
                    To request a refund, contact Supera Link’s support team via
                    the Contact Us page or send a message to
                    support@superalink.com. Please be aware that our refund
                    policy above will apply.
                  </P>
                  <br />
                  <P>
                    Depending on the nature of the issue, Customers will be
                    asked for further information to support their refund
                    request, such as screenshots of the device settings for
                    technical issues or details of why the invoiced amount is
                    incorrect and, if possible, how much the Customer considers
                    is due, etc. Please refer to section Policies and Guidelines
                    (Point 1) in this same document for refunds related to
                    technical issues. Customers will have the option to credit
                    back via their original payment method.
                  </P>
                  <P>
                    <br />
                    Refund to the original method: Once a refund is approved and
                    issued, it can take up to thirty (30) business days to
                    appear on a statement depending on the bank.
                  </P>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Modifications" />
                  <P>
                    The eSIM data packages from Supera Link are offered as-is,
                    and no further modifications or customization can be made
                    based on individual requests once purchased.
                  </P>
                </div>
              </div>
            </Content>
            <Content title="7. Liability and Warranty">
              <P>
                Supera Link is not responsible for detriments arising due to the
                proposed service not being constantly available. Supera Link
                provides no guarantee of constant availability of the network
                service. For any request, please write an email to
                support@superalink.com.
              </P>
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};
const TermsConditions = () => {
  return (
    <div className="flex h-full w-full flex-col gap-0 bg-black p-0">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default TermsConditions;
