import {
  Content,
  Footer,
  Header,
  List,
  Subtitle,
} from "@/components/molecules/PartialLegal";
import { TLists } from "@/types";
import { Button, Metric, Text, Title } from "@tremor/react";
import React from "react";

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
const Container = () => {
  return (
    <div className="flex px-5 justify-center items-start ">
      <div className="flex max-w-[1180px] py-5 flex-col items-center gap-14 flex-1">
        <Metric className="text-2xl not-italic font-bold leading-9 tracking-tighter">
          <span className="items-stretch  text-tremor-content-strong ">
            Terms and Conditions
          </span>
        </Metric>
        <div className="flex  flex-col items-start gap-5">
          <Title className="items-stretch">
            <span className="text-tremor-content-strong text-xl not-italic font-semibold leading-7 tracking-tighter">
              General Terms and Conditions
            </span>
          </Title>
          <div className="flex flex-col items-start gap-10">
            <Content title="1. Validity of General Terms and Conditions">
              <p>
                The following Terms and Conditions shall apply to all services
                rendered by GADGETKOREA INC., hereafter referred to as Supera
                Link, in connection with the prepaid eSIM reselling. The
                following Terms and Conditions are provided on the website
                <span className="text-tremor-brand">
                  {" "}
                  https://www.superalink.com.
                </span>
              </p>
              <br />
              <p>
                Supera Link may accept variant clauses only in the case of an
                explicit written agreement.
              </p>
            </Content>
            <Content title="2. Description of Services">
              <div className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Description e-SIM reselling" />
                  <p>
                    Supera Link resells prepaid eSIMs. The Customer registers
                    and buys its sim cards on https://www.superalink.com website
                    and/or Supera Link App. Our payments are operated by PayPal
                    (https://paypal.com) and Paymentwall
                    (https://paymentwall.com) with an alias of your credit card
                    (virtual Credit Card Imprint).
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Registration for Using SUPERA LINK Services" />
                  <p>
                    The Customer must accept the General Terms and Conditions to
                    use Supera Link services. The client gives directly or by
                    the intermediary of the service provider (Hotel, Travel
                    Agency…) on the web browser under https://www.superalink.com
                    the following information: First Name, Last Name, Address
                    (billing address), Email address.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Customer Engagements" />
                  <p>
                    In using the Equipment or Services provided by Supera Link,
                    the Customer must not engage in any action: that is abusive,
                    illegal, or fraudulent; that causes the Network to be
                    impaired or damaged.
                  </p>
                  <br />
                  <p>
                    When the Customer breaches its obligations under Sec. 2.4,
                    Supera Link may suspend the {`Customer's`} use of the
                    Service. During any period of suspension, the Customer shall
                    continue to pay all Charges due under this Agreement in
                    respect of the suspended Services.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Device Compatibility" />
                  <p>
                    The Customer is responsible for ensuring that their device
                    is eSIM compatible and network-unlocked. Device
                    compatibility may depend on the carrier and country of
                    origin, the Customer must check the list of eSIM-compatible
                    devices provided at the checkout. By checking the box that
                    confirms that the {`Customer's`} device is eSIM compatible,
                    the Customer is then held responsible for the accuracy of
                    the information they provide.
                  </p>
                  <br />
                  <p>
                    The eSIM compatibility list is not exhaustive, meaning newly
                    announced eSIM-compatible devices may still need to be
                    added.
                  </p>
                </div>
              </div>
            </Content>
            <Content title="3. Start, Duration, and Termination of The Contract">
              <p>
                The Customer is responsible for ensuring that their device is
                eSIM compatible and network-unlocked. Device compatibility may
                depend on the carrier and country of origin, the Customer must
                check the list of eSIM-compatible devices provided at the
                checkout. By checking the box that confirms that the{" "}
                {`Customer's`}
                device is eSIM compatible, the Customer is then held responsible
                for the accuracy of the information they provide.
              </p>
              <br />
              <p>
                The eSIM compatibility list is not exhaustive, meaning newly
                announced eSIM-compatible devices may still need to be added.
              </p>
            </Content>
            <Content title="4. Charges and Payment">
              <div className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Payment Conditions" />
                  <p>
                    The supported payment methods for Supera Link services are
                    Credit/Debit Card and PayPal.
                  </p>
                  <br />
                  <p>The currency of payment is in US Dollars($).</p>
                  <br />
                  <p>
                    The credit card transaction will be processed and secured by
                    Supera Link providers PayPal (https://paypal.com) and
                    Paymentwall (https://paymentwall.com/).
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Charges for Use" />
                  <p>
                    Supera Link states all Charges are inclusive of VAT unless
                    otherwise specified.
                  </p>
                  <br />
                  <p>
                    The Customer shall not be entitled to offset any of its
                    claims against claims of Supera Link, except where the
                    {`Customer's`} claims are undisputed or have been confirmed
                    by final court judgment.
                  </p>
                </div>
              </div>
            </Content>
            <Content title="5. Delivery">
              <p>
                The Customer will receive a confirmation email after the
                purchase. All the information for installing the eSIM will be
                available only in the email sent to the Customer.
              </p>
            </Content>
            <Content title="6. Refund / Cancellation / Modification Policy">
              <p>
                The Customer has the right to ask for a refund or
                eSIM-replacement if the eSIM cannot be installed and used due to
                a technical problem from Supera Link.
              </p>
              <br />
              <div className="flex flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Refund and Cancellation" />
                  <div className="flex flex-col items-start">
                    <span className="text-base font-bold leading-6 tracking-tighter">
                      Policies and Guidelines
                    </span>
                    <List lists={LIST_1.lists} />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Refund Process" />
                  <p>
                    To request a refund, contact Supera Link’s support team via
                    the Contact Us page or send a message to
                    support@superalink.com. Please be aware that our refund
                    policy above will apply.
                  </p>
                  <br />
                  <p>
                    Depending on the nature of the issue, Customers will be
                    asked for further information to support their refund
                    request, such as screenshots of the device settings for
                    technical issues or details of why the invoiced amount is
                    incorrect and, if possible, how much the Customer considers
                    is due, etc. Please refer to section Policies and Guidelines
                    (Point 1) in this same document for refunds related to
                    technical issues. Customers will have the option to credit
                    back via their original payment method.
                  </p>
                  <p>
                    <br />
                    Refund to the original method: Once a refund is approved and
                    issued, it can take up to thirty (30) business days to
                    appear on a statement depending on the bank.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Subtitle title="Modifications" />
                  <p>
                    The eSIM data packages from Supera Link are offered as-is,
                    and no further modifications or customization can be made
                    based on individual requests once purchased.
                  </p>
                </div>
              </div>
            </Content>
            <Content title="7. Liability and Warranty">
              <p>
                Supera Link is not responsible for detriments arising due to the
                proposed service not being constantly available. Supera Link
                provides no guarantee of constant availability of the network
                service. For any request, please write an email to
                support@superalink.com.
              </p>
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};
const TermsConditions = () => {
  return (
    <div className="bg-white flex w-full h-full p-0 flex-col gap-0">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default TermsConditions;
