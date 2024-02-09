interface ServiceInfo {
    Provider: string;
    Network: string;
    Supported: string;
    "eKYC (Identity Verification)": string;
    Description: string[];
  }
  
  interface ServiceData {
    content: ServiceInfo | any;
    label: string;
  }

interface PolicyTabProp{
    policy: ServiceData
}

const PolicyTab = ({policy}: PolicyTabProp) => {
    return ( 

        Array.isArray(policy.content) &&
          policy.label == "Policy" && (
            <div className="flex w-full flex-col gap-4">
              <ul>
                {policy.content.map(
                  (text: string, i: number) => {
                    return (
                      <li key={i} className="flex w-full gap-2">
                        <span>&#8226;</span>
                        <span>{text}</span>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )
     );
}
 
export default PolicyTab;