interface iconProps {
  color: "black" | "white";
}

const Whatsapp = ({ color }: iconProps) => {
  const ICON_COLORS = {
    white: { stroke: "orange", fill: "white" },
    black: { stroke: "white", fill: "black" },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.194939 20.0368C7.73048 19.9268 7.49016 19.8889 7.25179 19.9453C6.44132 20.136 5.13368 20.462 4.18213 20.7013C3.64117 20.8375 3.14886 20.3559 3.27437 19.813C3.5108 18.7875 3.83868 17.3612 3.99435 16.648C4.043 16.4262 4.01284 16.1975 3.91652 15.9922C3.34637 14.7712 3 13.4198 3 12.0002C3 6.48846 8.02139 2.09267 13.7151 3.16097C17.2926 3.8323 20.1677 6.70834 20.839 10.2849C21.9073 15.9786 17.5115 21 11.9998 21C10.59 21 9.18115 20.6595 7.94939 20.0368Z"
        fill={ICON_COLORS[color as keyof typeof ICON_COLORS].fill}
        stroke={ICON_COLORS[color as keyof typeof ICON_COLORS].stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.60085 8.46082C7.2144 9.85408 8.26518 12.0675 10.1138 13.9161C11.9624 15.7648 14.1408 16.7805 15.5341 15.3941L15.6625 15.2656C16.221 14.7081 16.1393 13.7809 15.4923 13.3295C15.2831 13.1845 15.0642 13.0308 14.8316 12.8683C14.3286 12.5151 13.6407 12.5696 13.2058 13.0025L12.9704 13.2361C11.9575 12.6328 11.4438 12.0529 10.7598 11.0255L10.9933 10.7901C11.4253 10.3542 11.4798 9.6663 11.1276 9.16329C10.9641 8.93075 10.8114 8.71184 10.6655 8.50266C10.215 7.85565 9.28775 7.77489 8.72928 8.33239L8.60085 8.46082Z"
        fill={ICON_COLORS[color as keyof typeof ICON_COLORS].fill}
        stroke={ICON_COLORS[color as keyof typeof ICON_COLORS].stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Whatsapp;
