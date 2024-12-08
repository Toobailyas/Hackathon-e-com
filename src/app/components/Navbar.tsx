import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
  <nav className='flex justify-between items-center mt-10 mb-6 mx-7'>
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7499 19.6894L15.0859 14.0254C16.4469 12.3914 17.1256 10.2956 16.9808 8.17395C16.8359 6.05231 15.8787 4.06819 14.3082 2.63434C12.7378 1.20048 10.675 0.427288 8.54894 0.4756C6.42292 0.523912 4.39736 1.39001 2.89365 2.89372C1.38993 4.39744 0.523836 6.42299 0.475524 8.54902C0.427212 10.675 1.20041 12.7378 2.63426 14.3083C4.06812 15.8788 6.05224 16.836 8.17387 16.9808C10.2955 17.1257 12.3913 16.447 14.0253 15.0859L19.6894 20.75L20.7499 19.6894ZM1.99993 8.75001C1.99993 7.41499 2.39581 6.10994 3.13751 4.99991C3.87921 3.88988 4.93342 3.02471 6.16682 2.51382C7.40022 2.00293 8.75742 1.86926 10.0668 2.12971C11.3762 2.39016 12.5789 3.03303 13.5229 3.97704C14.4669 4.92104 15.1098 6.12378 15.3702 7.43315C15.6307 8.74252 15.497 10.0997 14.9861 11.3331C14.4752 12.5665 13.6101 13.6207 12.5 14.3624C11.39 15.1041 10.085 15.5 8.74993 15.5C6.96033 15.498 5.2446 14.7862 3.97916 13.5208C2.71371 12.2553 2.00192 10.5396 1.99993 8.75001Z" fill="#2A254B"/>
    </svg>
    <h2 className="text-#22202E text-[24px] font-normal leading-[29.52px]" style={{ fontFamily: 'Clash Display', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font', width: '65px',
height: '30px'
 }}>Avian</h2>
    <div className='flex justify-end gap-5'>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 21.5C8.32843 21.5 9 20.8285 9 20C9 19.1716 8.32843 18.5 7.5 18.5C6.67157 18.5 6 19.1716 6 20C6 20.8285 6.67157 21.5 7.5 21.5Z" fill="#2A254B"/>
        <path d="M18 21.5C18.8284 21.5 19.5 20.8285 19.5 20C19.5 19.1716 18.8284 18.5 18 18.5C17.1716 18.5 16.5 19.1716 16.5 20C16.5 20.8285 17.1716 21.5 18 21.5Z" fill="#2A254B"/>
        <path d="M21 4.25003H4.365L3.75 1.10003C3.71494 0.928074 3.62068 0.773857 3.48364 0.664226C3.3466 0.554595 3.17546 0.496492 3 0.500031H0V2.00003H2.385L5.25 16.4C5.28506 16.572 5.37932 16.7262 5.51636 16.8358C5.6534 16.9455 5.82454 17.0036 6 17H19.5V15.5H6.615L6 12.5H19.5C19.6734 12.5043 19.8429 12.4483 19.9796 12.3416C20.1163 12.235 20.2119 12.0842 20.25 11.915L21.75 5.16503C21.7751 5.05375 21.7745 4.9382 21.7483 4.82718C21.722 4.71616 21.6708 4.61259 21.5985 4.52436C21.5261 4.43613 21.4347 4.36556 21.3309 4.31802C21.2272 4.27048 21.114 4.24723 21 4.25003ZM18.9 11H5.715L4.665 5.75003H20.0625L18.9 11Z" fill="#2A254B"/>
      </svg>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 5C10.2583 5 9.5333 5.21993 8.91662 5.63199C8.29993 6.04404 7.81928 6.62971 7.53546 7.31494C7.25163 8.00016 7.17736 8.75416 7.32206 9.48159C7.46675 10.209 7.82391 10.8772 8.34835 11.4017C8.8728 11.9261 9.54099 12.2833 10.2684 12.4279C10.9958 12.5726 11.7498 12.4984 12.4351 12.2145C13.1203 11.9307 13.706 11.4501 14.118 10.8334C14.5301 10.2167 14.75 9.49168 14.75 8.75C14.75 7.75544 14.3549 6.80161 13.6517 6.09835C12.9484 5.39509 11.9946 5 11 5ZM11 11C10.555 11 10.12 10.868 9.74997 10.6208C9.37996 10.3736 9.09157 10.0222 8.92128 9.61104C8.75098 9.1999 8.70642 8.7475 8.79324 8.31105C8.88005 7.87459 9.09435 7.47368 9.40901 7.15901C9.72368 6.84434 10.1246 6.63005 10.5611 6.54323C10.9975 6.45642 11.4499 6.50097 11.861 6.67127C12.2722 6.84157 12.6236 7.12996 12.8708 7.49997C13.118 7.86998 13.25 8.30499 13.25 8.75C13.2493 9.34653 13.0121 9.91843 12.5903 10.3402C12.1684 10.7621 11.5965 10.9993 11 11Z" fill="#2A254B"/>
        <path d="M11 0.5C8.9233 0.5 6.89323 1.11581 5.16652 2.26957C3.4398 3.42332 2.09399 5.0632 1.29927 6.98182C0.504549 8.90045 0.296614 11.0116 0.701759 13.0484C1.1069 15.0852 2.10693 16.9562 3.57538 18.4246C5.04383 19.8931 6.91476 20.8931 8.95156 21.2982C10.9884 21.7034 13.0996 21.4955 15.0182 20.7007C16.9368 19.906 18.5767 18.5602 19.7304 16.8335C20.8842 15.1068 21.5 13.0767 21.5 11C21.4969 8.21619 20.3896 5.5473 18.4212 3.57884C16.4527 1.61039 13.7838 0.503136 11 0.5ZM6.5 18.7824V17.75C6.50066 17.1535 6.73792 16.5815 7.15974 16.1597C7.58155 15.7379 8.15347 15.5007 8.75 15.5H13.25C13.8465 15.5007 14.4185 15.7379 14.8403 16.1597C15.2621 16.5815 15.4993 17.1535 15.5 17.75V18.7824C14.1344 19.5798 12.5814 20 11 20C9.41862 20 7.86563 19.5798 6.5 18.7824ZM16.9944 17.6944C16.9795 16.7105 16.5786 15.772 15.8782 15.0809C15.1778 14.3899 14.2339 14.0017 13.25 14H8.75C7.76608 14.0017 6.8222 14.3899 6.1218 15.0809C5.42139 15.772 5.02054 16.7105 5.00563 17.6944C3.64555 16.4799 2.68643 14.881 2.25526 13.1093C1.82408 11.3377 1.9412 9.47686 2.59111 7.77324C3.24101 6.06963 4.39304 4.6036 5.89466 3.56927C7.39627 2.53495 9.17664 1.98112 11 1.98112C12.8234 1.98112 14.6037 2.53495 16.1054 3.56927C17.607 4.6036 18.759 6.06963 19.4089 7.77324C20.0588 9.47686 20.1759 11.3377 19.7448 13.1093C19.3136 14.881 18.3545 16.4799 16.9944 17.6944Z" fill="#2A254B"/>
      </svg>
    </div>
  </nav>
  <svg width="1386" height="1" viewBox="0 0 1386 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="-4.37114e-08" y1="0.500122" x2="1386" y2="0.500001" stroke="black" stroke-opacity="0.1"/>
  </svg>


<div className="flex flex-wrap justify-center gap-6 mt-7">
  <Link href="/plant-pots">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px] " style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Plant Pots
    </h4>
  </Link>
  <Link href="/ceramics">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Ceramics
    </h4>
  </Link>
  <Link href="/tables">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Tables
    </h4>
  </Link>
  <Link href="/chair">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px] " style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Chair
    </h4>
  </Link>
  <Link href="/crockery">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px] " style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Crockery
    </h4>
  </Link>
  <Link href="/tableware">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Tableware
    </h4>
  </Link>
  <Link href="/cutlery">
    <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
      Cutlery
    </h4>
  </Link>
</div>


</div>

  )
}

export default Navbar