const Pen = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_3828_12244)">
        <rect width="40" height="40" rx="20" fill="#0A0A0A" fillOpacity="0.2" />
        <g clipPath="url(#clip0_3828_12244)">
          <path
            d="M28.5547 8C29.0312 8 29.4766 8.08203 29.8906 8.24609C30.3047 8.41016 30.6719 8.64453 30.9922 8.94922C31.3125 9.25391 31.5586 9.60938 31.7305 10.0156C31.9023 10.4219 31.9922 10.8672 32 11.3516C32 11.7188 31.9609 12.0469 31.8828 12.3359C31.8047 12.625 31.6953 12.8945 31.5547 13.1445C31.4141 13.3945 31.2422 13.6367 31.0391 13.8711C30.8359 14.1055 30.6094 14.3438 30.3594 14.5859L25.3906 9.62891C25.6328 9.38672 25.8633 9.16406 26.082 8.96094C26.3008 8.75781 26.5352 8.58594 26.7852 8.44531C27.0352 8.30469 27.2969 8.19531 27.5703 8.11719C27.8438 8.03906 28.1719 8 28.5547 8ZM23.6328 11.3984L28.5781 16.3438L16.8242 28.0742L8 31.9766L12.0781 23.082L23.6328 11.3984Z"
            fill="#FDFDFF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_3828_12244"
          x="-4"
          y="-4"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_3828_12244"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_3828_12244"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_3828_12244">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Pen;
