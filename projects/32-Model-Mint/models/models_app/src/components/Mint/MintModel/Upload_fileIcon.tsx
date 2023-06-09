import { memo, SVGProps } from 'react';

const Upload_fileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.3}>
      <mask
        id='mask0_588_6504'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={27}
        height={26}
      >
        <rect x={0.5} width={26} height={26} fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_588_6504)'>
        <path
          d='M12.6875 19.9166H14.3124V15.1124L16.3166 17.1166L17.4583 15.9583L13.5 12L9.54166 15.9583L10.7 17.0999L12.6875 15.1124V19.9166ZM7.33334 23.2916C6.78611 23.2916 6.32292 23.102 5.94375 22.7229C5.56458 22.3437 5.375 21.8805 5.375 21.3333V4.66667C5.375 4.11945 5.56458 3.65625 5.94375 3.27708C6.32292 2.89792 6.78611 2.70833 7.33334 2.70833H15.9375L21.6249 8.39578V21.3333C21.6249 21.8805 21.4354 22.3437 21.0562 22.7229C20.677 23.102 20.2138 23.2916 19.6666 23.2916H7.33334ZM15.125 9.20828V4.33331H7.33334C7.25 4.33331 7.17359 4.36803 7.10413 4.43747C7.03469 4.50693 6.99997 4.58333 6.99997 4.66667V21.3333C6.99997 21.4166 7.03469 21.493 7.10413 21.5625C7.17359 21.6319 7.25 21.6666 7.33334 21.6666H19.6666C19.7499 21.6666 19.8263 21.6319 19.8958 21.5625C19.9652 21.493 20 21.4166 20 21.3333V9.20828H15.125Z'
          fill='#A4A4A4'
        />
      </g>
    </g>
  </svg>
);

const Memo = memo(Upload_fileIcon);
export { Memo as Upload_fileIcon };
