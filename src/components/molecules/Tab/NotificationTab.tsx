import Text from "@/components/atoms/Text/Text";

interface NotificationTabProp {
  text: string;
}

const NotificationTab = ({ text }: NotificationTabProp) => {
  return (
    <div className="mb-4 flex w-full gap-2 rounded-md bg-[#121417] p-4">
      <div className="w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-500"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <Text as="body1" className="text-gray-300">
        {text}
      </Text>
    </div>
  );
};

export default NotificationTab;
