import Text from "@/components/atoms/Text/Text";
import Image from "next/image";

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

interface DescriptionTabProp {
  description: ServiceData;
  handleOpenModal: () => void;
}

const DescriptionTab = ({
  description,
  handleOpenModal,
}: DescriptionTabProp) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {typeof description.content === "object" &&
        Object.keys(description.content).map((key: string, i: number) => {
          return (
            <div key={i} className="flex h-full w-full gap-4">
              {key !== "Description" && (
                <>
                  <div className="w-8">
                    <Image
                      src={`/assets/${
                        key == "eKYC (Identity Verification)"
                          ? "ekyc"
                          : key.toLocaleLowerCase()
                      }-icon.png`}
                      alt={"provider-icon.png"}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="w-fit">
                    <Text as="body1">{key}</Text>
                    {description.content[key] == "See available provider" ? (
                      <button
                        onClick={handleOpenModal}
                        className="border-b border-[#F47325] bg-transparent text-[#F47325]"
                      >
                        {description.content[key]}
                      </button>
                    ) : (
                      <Text as="body1" className="text-[#BDBDBD]">
                        {description.content[key]}
                      </Text>
                    )}
                  </div>
                </>
              )}
              {key == "Description" && (
                <div className="ml-2.5 flex w-full flex-col gap-4">
                  <ul>
                    {description.content[key].map((text: string, i: number) => {
                      return (
                        <li key={i} className="flex w-full gap-2">
                          <span>&#8226;</span>
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default DescriptionTab;
