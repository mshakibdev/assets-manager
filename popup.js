/* ============================
   Inline SVG icons (kept short & reusable)
   ============================ */
const ICON_DOWNLOAD = `<svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1v7m0 0l-3-3m3 3l3-3M2 9.5v.3c0 1.2 0 1.7.3 2 .3.2.7.2 1.7.2h6c1 0 1.4 0 1.7-.2.3-.3.3-.8.3-2v-.3" stroke="#0D0F0D" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_COPY = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0)"><path d="M3.33398 10C2.71273 10 2.4021 10 2.15707 9.89855C1.83037 9.76322 1.5708 9.50366 1.43548 9.17695C1.33398 8.93192 1.33398 8.6213 1.33398 8.00004V3.46671C1.33398 2.71997 1.33398 2.3466 1.47931 2.06139C1.60714 1.8105 1.81111 1.60653 2.062 1.4787C2.34721 1.33337 2.72058 1.33337 3.46732 1.33337H8.00065C8.62191 1.33337 8.93253 1.33337 9.17756 1.43487C9.50427 1.57019 9.76383 1.82976 9.89916 2.15646C10.0007 2.40149 10.0007 2.71212 10.0007 3.33337M8.13398 14.6667H12.534C13.2807 14.6667 13.6541 14.6667 13.9393 14.5214C14.1902 14.3936 14.3942 14.1896 14.522 13.9387C14.6673 13.6535 14.6673 13.2801 14.6673 12.5334V8.13337C14.6673 7.38664 14.6673 7.01327 14.522 6.72805C14.3942 6.47717 14.1902 6.2732 13.9393 6.14537C13.6541 6.00004 13.2807 6.00004 12.534 6.00004H8.13398C7.38725 6.00004 7.01388 6.00004 6.72866 6.14537C6.47778 6.2732 6.27381 6.47717 6.14598 6.72805C6.00065 7.01327 6.00065 7.38664 6.00065 8.13337V12.5334C6.00065 13.2801 6.00065 13.6535 6.14598 13.9387C6.27381 14.1896 6.47778 14.3936 6.72866 14.5214C7.01388 14.6667 7.38725 14.6667 8.13398 14.6667Z" stroke="#0D0F0D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`;
const ICON_CHECK = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#c)"><path d="M3.33337 10C2.71212 10 2.40149 10 2.15646 9.8985C1.82976 9.76318 1.57019 9.50361 1.43487 9.17691C1.33337 8.93188 1.33337 8.62125 1.33337 8V3.46666C1.33337 2.71992 1.33337 2.34656 1.4787 2.06134C1.60653 1.81046 1.8105 1.60648 2.06139 1.47865C2.3466 1.33333 2.71997 1.33333 3.46671 1.33333H8.00004C8.6213 1.33333 8.93192 1.33333 9.17695 1.43482C9.50366 1.57015 9.76322 1.82971 9.89855 2.15642C10 2.40145 10 2.71207 10 3.33333M8.13337 14.6667H12.5334C13.2801 14.6667 13.6535 14.6667 13.9387 14.5213C14.1896 14.3935 14.3936 14.1895 14.5214 13.9386C14.6667 13.6534 14.6667 13.2801 14.6667 12.5333V8.13333C14.6667 7.38659 14.6667 7.01322 14.5214 6.72801C14.3936 6.47713 14.1896 6.27315 13.9387 6.14532C13.6535 6 13.2801 6 12.5334 6H8.13337C7.38664 6 7.01327 6 6.72805 6.14532C6.47717 6.27315 6.2732 6.47713 6.14537 6.72801C6.00004 7.01322 6.00004 7.38659 6.00004 8.13333V12.5333C6.00004 13.2801 6.00004 13.6534 6.14537 13.9386C6.2732 14.1895 6.47717 14.3935 6.72805 14.5213C7.01327 14.6667 7.38664 14.6667 8.13337 14.6667Z" stroke="#0D0F0D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="c"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`;
const ICON_IMAGE_NOT_FOUND = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="150" height="103" viewBox="0 0 150 103" fill="none">
  <g clip-path="url(#clip0_48245_1769)">
    <path d="M61.4606 80.6413C55.5368 82.7899 44.9825 68.4227 37.7537 48.5995C30.5248 28.7763 29.9125 10.8031 35.2828 8.85519C40.6532 6.90731 51.2936 20.4861 58.5223 40.3093C65.7511 60.1325 68.502 78.0874 61.4606 80.6413Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M62.7066 79.9348C62.4778 79.9574 62.2435 79.9591 62.0039 79.9405" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M60.6415 79.6387C54.5762 77.4916 46.014 64.5715 39.861 47.6986C33.7731 31.004 32.378 15.6214 35.2971 10.0183" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M35.6523 9.41576C35.7884 9.2133 35.9319 9.02852 36.0829 8.86206M45.1007 15.0061C45.1007 15.0061 44.8369 15.0369 44.4096 15.1357" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M43.1788 15.502C42.6421 15.6974 42.0406 15.9653 41.4395 16.33" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M40.902 16.6837C40.7146 16.8175 40.529 16.9615 40.3477 17.1166M64.9749 67.5572C64.9749 67.5572 64.7111 67.588 64.2837 67.6868" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M63.05 68.053C62.5132 68.2484 61.9118 68.5164 61.3105 68.881" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M60.7743 69.2348C60.5869 69.3685 60.4014 69.5126 60.22 69.6677M49.9844 22.0781C49.9844 22.0781 49.724 22.0561 49.2812 22.0738" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M47.6838 22.2659C46.2636 22.547 44.3961 23.2112 42.707 24.7532" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M42.1335 25.3188C41.9765 25.4863 41.8218 25.6624 41.6699 25.8474M54.1988 30.7864C54.1988 30.7864 53.9385 30.7645 53.4957 30.7821" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M51.8987 30.9744C50.4784 31.2555 48.6109 31.9197 46.9219 33.4617" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M46.3502 34.0273C46.1933 34.1948 46.0385 34.3709 45.8867 34.5559M57.8134 39.4949C57.8134 39.4949 57.5536 39.4865 57.1108 39.5227" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M55.533 39.7659C54.1269 40.081 52.2727 40.7589 50.5703 42.2136" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M49.9838 42.7544C49.8202 42.9163 49.6587 43.0862 49.5 43.2645M61.1255 49.705C61.1255 49.705 60.8828 49.7155 60.4297 49.8027" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M58.9197 50.2043C57.7037 50.6064 56.0339 51.3303 54.0352 52.632" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M53.3848 53.0679C53.196 53.1983 53.0046 53.3337 52.8105 53.4744M63.8339 58.4134C63.8339 58.4134 63.5912 58.4239 63.138 58.5111" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M61.6286 58.9128C60.4126 59.3149 58.7428 60.0388 56.7441 61.3405" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M56.0957 61.7764C55.9069 61.9068 55.7155 62.0422 55.5215 62.1829" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M58.8535 40.879C58.9384 40.1258 58.8903 39.8897 58.9958 39.1707C60.9886 25.5905 65.9 23.9419 71.5392 24.765C77.1785 25.588 81.4102 28.5711 79.4174 42.1513C77.5492 54.8827 70.8735 72.4083 65.3997 73.8711" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M69.4153 24.5911L66.7656 15.6961L71.3941 15.3571L71.5398 24.7649L69.4153 24.5911Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M71.4688 20.1293L74.0371 12.9519L77.3051 14.9511L73.7971 21.5601L77.6817 19.3188L79.8255 21.3488L73.626 25.2057L71.5405 24.7648L71.4688 20.1293Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60.7251 31.8049L63.9531 34.8618L59.7969 34.9459" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M78.6409 46.4684L72.5664 47.2399L77.7519 50.2626" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58.2285 53.7217L63.1185 54.4353L58.3399 56.2963" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M72.7724 64.4703L67.0664 63.6373L71.4505 67.1061" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M78.8958 29.7854L73.3633 30.0666L79.6778 32.6657" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M97.3707 69.2832L77.3164 65.6075L85.4399 21.5249L97.0091 14.9954L105.494 25.2008L97.3707 69.2832Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M109.492 17.2834L117.977 27.4887L109.854 71.5713L97.3711 69.2833" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M77.3164 65.6075L88.7386 59.8752L97.3707 69.2832" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M109.491 17.2834L97.0088 14.9954L88.7383 59.8752" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M110.205 13.4057L97.7227 11.1177L97.0081 14.9952L109.491 17.2832L110.205 13.4057Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M117.977 27.4888L105.494 25.2009" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M113.803 39.8045L105.617 38.3042L102.533 55.0392L110.719 56.5396L113.803 39.8045Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M113.553 51.4092C113.553 52.2905 113.553 52.2138 113.553 53.0952C113.553 56.0628 113.553 59.0305 113.553 61.9982C113.553 64.3158 115.354 66.2374 117.672 66.3942C122.08 66.6922 126.502 66.6922 130.91 66.3942C133.228 66.2374 135.029 64.3158 135.029 61.9982V53.0112H135.054V31.6736M121.118 2.67796e-06H127.464C128.676 2.67796e-06 129.66 0.981551 129.66 2.19055V5.66297C129.66 6.08388 129.317 6.4256 128.895 6.4256H119.687C119.264 6.4256 118.922 6.08387 118.922 5.66296V2.19054C118.922 0.981551 119.906 2.67796e-06 121.118 2.67796e-06Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M113.553 22.1679C113.553 20.7932 113.553 19.4184 113.553 18.0436H135.029V32.3281C135.029 33.0687 134.463 33.6843 133.724 33.7557C128.094 34.2994 122.428 34.3553 116.791 33.9231" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M113.553 18.0436C115.198 13.901 117.464 11.2365 120.069 9.37878H128.513C131.118 11.2365 133.384 13.901 135.029 18.0436" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M128.512 6.42554H120.068V9.37872H128.512V6.42554Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M79.5679 41.0583H75.6465L79.2909 42.9775" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M71.4144 42.9417H144.883L133.441 103H59.9727L71.4144 42.9417Z" fill="#549EF2" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M132.237 42.9417H118.386L118.121 44.3573L131.707 45.7729L132.237 42.9417Z" fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M104.535 42.9417L109.654 60.0582H115.18L118.121 44.3573L104.535 42.9417Z" fill="#549EF2"/>
    <path d="M144.096 47.0638L131.705 45.7728L129.029 60.0582H141.269L144.096 47.0638Z" fill="#549EF2"/>
    <path d="M118.121 44.3573L115.18 60.0583H129.03L131.706 45.7729L118.121 44.3573Z" fill="#549EF2"/>
    <path d="M113.268 70.2683H127.118L129.031 60.0582H115.18L113.268 70.2683Z" fill="white"/>
    <path d="M110.256 86.1837H124.107L121.698 99.3966H107.848L110.256 86.1837Z" fill="white"/>
    <path d="M114.17 103L125.23 42.9417" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M104.535 42.9417H144.883L150.001 55.8543H109.654L104.535 42.9417Z" fill="white" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M31.0669 42.9417H104.535L93.0935 103H19.625L31.0669 42.9417Z" fill="#549EF2" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30.7645 46.8455L28.0547 60.0582H79.0315L82.5471 44.1052L30.7645 46.8455Z" fill="#549EF2"/>
    <path d="M99.8224 49.1723L104.535 42.9417L96.0234 43.3922H101.096L99.8224 49.1723Z" fill="#549EF2"/>
    <path d="M82.706 43.3922L82.5488 44.1053L96.0238 43.3922H82.706Z" fill="white"/>
    <path d="M91.5881 60.0583H79.0329L76.6836 70.7186L79.0925 69.8178L81.8024 70.7186L83.91 69.2172L86.4866 70.7186L88.7277 69.8178L90.4609 70.7186L92.6419 69.8178L95.0742 70.7186L99.8224 49.1724L91.5881 60.0583Z" fill="white"/>
    <path d="M99.8227 49.1724L101.097 43.3922H96.0238L82.5488 44.1053L79.0332 60.0583H91.5885L99.8227 49.1724Z" fill="#549EF2"/>
    <path d="M31.0665 42.9417H104.535L91.5876 55.8543H18.1191L31.0665 42.9417Z" fill="white" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M83.7585 86.1837H100.018L97.6092 99.3966H81.3496L83.7585 86.1837Z" fill="white"/>
    <path d="M96.2958 86.1837L93.4707 101.013" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M55.138 61.0103C49.4427 65.8383 42.1383 65.7993 39.2082 65.7377C39.1049 66.2763 39.0488 66.8316 39.0488 67.4003C39.0488 72.2626 43.0011 76.2043 47.8765 76.2043C51.7 76.2043 54.9548 73.7797 56.1818 70.3884C57.3686 73.8535 60.6589 76.3463 64.5353 76.3463C69.4107 76.3463 73.363 72.4046 73.363 67.5423C73.363 66.7192 73.2473 65.9236 73.0355 65.168C67.2193 67.0475 59.6943 66.1223 55.138 61.0103Z" fill="white" stroke="black" stroke-miterlimit="10"/>
    <path d="M42.6074 67.2282C42.6074 69.9265 44.8008 72.114 47.5064 72.114C50.212 72.114 52.4053 69.9265 52.4053 67.2282C52.4053 65.8357 51.8183 64.5823 50.8811 63.6924C48.0539 64.9791 45.189 65.4753 42.8719 65.6549C42.7032 66.1491 42.6074 66.677 42.6074 67.2282ZM60.4703 64.7579C59.9964 65.5084 59.7198 66.3947 59.7198 67.3473C59.7198 70.0457 61.9131 72.2331 64.6187 72.2331C67.3244 72.2331 69.5177 70.0457 69.5177 67.3473C69.5177 66.8617 69.4394 66.396 69.306 65.9537C66.3668 66.2695 63.2656 65.917 60.4703 64.7579Z" fill="black"/>
    <path d="M56.207 82.2237C54.3873 82.2237 53.2025 82.6007 52.4725 82.9778C51.7564 83.3477 50.9013 83.3279 50.2245 82.8905L50.1656 82.8524C48.705 81.9082 48.8238 79.7551 50.3672 78.9525C51.7013 78.2587 53.5966 77.6797 56.207 77.6797C58.9881 77.6797 60.984 78.3894 62.3589 79.2038C63.8337 80.0774 63.8432 82.2034 62.3801 83.0963C61.6613 83.535 60.7622 83.5397 60.0347 83.1155C59.2829 82.6772 58.0578 82.2237 56.207 82.2237Z" fill="black" stroke="black" stroke-miterlimit="10"/>
    <path d="M60.0342 83.1155C60.7617 83.5397 61.6608 83.535 62.3796 83.0963C63.7501 82.2599 63.8282 80.3417 62.6206 79.3842C57.2992 79.0411 52.4357 81.5034 50.1875 82.8669L50.224 82.8904C50.9007 83.3279 51.7559 83.3477 52.472 82.9777C53.2019 82.6007 54.3868 82.2237 56.2065 82.2237C58.0573 82.2237 59.2823 82.6772 60.0342 83.1155Z" fill="#03BD70" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M37.9102 65.6758C37.9102 65.6758 49.3888 66.7444 55.7079 60.4422C58.8404 57.3182 58.5556 54.4782 56.5622 53.6262C54.5689 52.7742 52.7179 58.3122 55.5656 61.4362C59.3387 65.5756 68.6647 68.2522 75.9262 63.8502" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.7862 72.9709L13.2462 72.9861C6.4316 73.3003 1 79.088 1 86.1838C1 93.2796 6.4316 99.0672 13.2462 99.3814L18.7862 99.3966V72.9709Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.7864 99.3966C25.8719 99.3966 31.6158 93.481 31.6158 86.1837C31.6158 78.8864 25.8719 72.9708 18.7864 72.9708C11.701 72.9708 5.95703 78.8864 5.95703 86.1837C5.95703 93.481 11.701 99.3966 18.7864 99.3966Z" fill="#2785EF" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.3257 85.4136C18.898 85.3403 19.6086 84.4362 19.6086 82.4326C19.6086 80.7467 19.2901 79.8916 18.6531 79.8916C17.7221 79.8916 17.6241 81.2355 17.7712 83.5811L14.4392 83.7032C13.9736 79.2563 15.3947 77.2283 18.9472 77.2283C21.8382 77.2283 23.1855 79.2318 23.1855 82.0173C23.1855 85.3159 21.8135 86.7819 19.6577 87.3928C19.6577 88.3946 19.6821 89.4697 19.6821 89.4697C17.7221 89.4452 16.3746 89.5184 16.3746 89.5184C16.3746 87.1728 16.3257 85.4136 16.3257 85.4136ZM15.8112 93.4492C15.8112 92.1053 16.7667 91.299 17.9917 91.299C19.4372 91.299 20.1722 92.1786 20.1722 93.5225C20.1722 94.8419 19.3392 95.6971 18.0653 95.6971C16.5462 95.6971 15.8112 94.7441 15.8112 93.4492Z" fill="white" stroke="black" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
  </g>
  <defs>
    <clipPath id="clip0_48245_1769">
      <rect width="150" height="103" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
const ICON_NO_INTERNET = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="150" height="151" viewBox="0 0 150 151" fill="none">
  <g clip-path="url(#clip0_48245_1852)">
    <path d="M76.7701 101.414L69.6896 101.432C60.9794 101.822 54.0371 109.008 54.0371 117.819C54.0371 126.629 60.9794 133.816 69.6896 134.205L76.7701 134.224V101.414Z" fill="#549EF2" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M76.7706 134.224C85.8267 134.224 93.1681 126.879 93.1681 117.819C93.1681 108.759 85.8267 101.414 76.7706 101.414C67.7144 101.414 60.373 108.759 60.373 117.819C60.373 126.879 67.7145 134.224 76.7706 134.224Z" fill="#2785EF" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M85.8378 90.5759L76.6579 69.817C58.1971 66.867 38.6326 72.4873 24.3909 86.7078L36.5895 98.9123H45.9065L45.2295 92.2271C57.6625 84.9103 72.9707 84.359 85.8378 90.5759ZM68.6911 51.8016L61.1361 34.7179C38.8786 36.1069 17.016 45.2981 0 62.3046L12.171 74.4815C12.1784 74.6085 21.5124 74.5059 21.5124 74.5059L22.2542 66.0323C36.1006 56.2138 52.4338 51.4662 68.6911 51.8016Z" fill="#549EF2" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.31641 62.3046L21.5124 74.5059C37.0799 58.9341 57.6109 51.3807 78.0075 51.8016L70.453 34.7179C48.195 36.1069 26.3329 45.2981 9.31641 62.3046Z" fill="#2785EF" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M150 62.3045C129.957 42.2731 103.191 33.0818 76.9746 34.7179L84.5296 51.8016C103.853 52.2005 123.056 59.7538 137.805 74.5064L150 62.3045Z" fill="#D4D4D4"/>
    <path d="M33.709 86.7077L45.9076 98.9122C59.2338 85.5892 79.0974 82.8173 95.1559 90.5758L85.976 69.8169C67.5146 66.867 47.9507 72.4873 33.709 86.7077Z" fill="#2785EF" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M124.673 86.7077C115.326 77.3729 103.682 71.7526 91.5645 69.8164L100.744 90.5753C104.983 92.6236 108.96 95.395 112.478 98.9117L124.673 86.7077Z" fill="#D4D4D4"/>
    <path d="M99.2165 150.978C95.6967 150.742 92.4245 148.605 90.9069 145.151L30.934 13.7304C28.7586 8.78198 31.0042 3.00675 35.9496 0.830671C40.8961 -1.34626 46.6689 0.902051 48.8427 5.84949L108.816 137.27C110.991 142.218 108.745 147.993 103.8 150.169C102.307 150.826 100.738 151.08 99.2165 150.978Z" fill="white" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M9.31634 62.3046H0.375M33.7077 86.7077H24.3907" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_48245_1852">
      <rect width="150" height="151" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

const ICON_RETRY = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M20.952 12.893C20.6742 15.5029 19.1954 17.9487 16.7484 19.3614C12.6829 21.7086 7.48442 20.3157 5.13721 16.2502L4.88721 15.8172M4.04515 11.107C4.32295 8.49711 5.80174 6.05138 8.24873 4.63862C12.3142 2.29141 17.5127 3.68434 19.8599 7.74983L20.1099 8.18285M3.99219 18.0661L4.72424 15.334L7.45629 16.0661M17.5414 7.93401L20.2735 8.66606L21.0055 5.93401" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* ============================
   Select elements
   ============================ */
const INTERACTIVE_SELECTOR =
  'button, input, select, textarea, [role="button"], [type="button"], [type="submit"]';

const loaderEl = document.getElementById("loader");
const overviewBtn = document.getElementById("tab-overview-btn");
const imagesBtn = document.getElementById("tab-images-btn");
const svgBtn = document.getElementById("tab-svg-btn");
const overviewTab = document.getElementById("overviewTab");
const imagesTab = document.getElementById("imagesTab");
const svgTab = document.getElementById("svgTab");
const imagesTableBody = document.getElementById("imagesTableBody");
const imagesTableBody2 = document.getElementById("imagesTableBody-2");
const fileTypeFilter = document.getElementById("fileTypeFilter");
const sortOrderEl = document.getElementById("sortOrder");
const downloadZipBtn = document.getElementById("downloadZipBtn");
const downloadAllSvgsBtn = document.getElementById("downloadAllSvgsBtn");
const viewGridBtn = document.getElementById("viewGridBtn");
const viewListBtn = document.getElementById("viewListBtn");
const searchInput = document.querySelector(".search-input");
const gridContainer = imagesTableBody; // used for view toggles
const fileSizeCount = document.querySelector(".file-size-count");
const svgFileSizeCount = document.querySelector(".svg-file-size-count");
const htmlSizeCount = document.querySelector(".html-size-count");

// In-memory image list (augmented with sizes/dimensions)
let imagesWithSize = [];

// Track whether we are currently showing "noInternet" (so we auto-retry when online)
let currentlyShowingNoInternet = false;

/* ============================
   Small utility helpers
   ============================ */
function debounce(fn, wait = 300) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function setBusy(isBusy) {
  const els = document.querySelectorAll(INTERACTIVE_SELECTOR);
  els.forEach((el) => {
    if (isBusy) {
      if (!el.disabled) el.dataset._wasEnabled = "1";
      el.disabled = true;
    } else {
      if (el.dataset._wasEnabled === "1") {
        el.disabled = false;
        delete el.dataset._wasEnabled;
      }
    }
  });
}

function showLoader() {
  loaderEl?.classList.add("show");
  setBusy(true);
}
function hideLoader() {
  loaderEl?.classList.remove("show");
  setBusy(false);
}

/* Format bytes into readable string */
function formatSize(bytes) {
  if (bytes === 0) return "0 B";
  if (!bytes) return "unknown";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/* Filename cleaning logic retained and made robust */
function cleanFilename(filename = "") {
  const s = (filename || "").trim();
  if (!s) return s;

  let m = s.match(/^[a-f0-9]{16,}_(.+)$/i);
  if (m) return m[1];

  m = s.match(/^[a-zA-Z0-9]{10,}_(.+)$/i);
  if (m) return m[1];

  m = s.match(
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}_(.+)$/i
  );
  if (m) return m[1];

  return s;
}

function getFileExtension(url = "") {
  try {
    const cleanUrl = url.split("?")[0].split("#")[0];
    const parts = cleanUrl.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : "";
  } catch {
    return "";
  }
}

function getFileName(url = "") {
  try {
    if (!url) return "(no file found)";
    if (url.startsWith("data:image")) {
      const mimeType = url.substring(5, url.indexOf(";")) || "image/png";
      const ext = mimeType.split("/")[1] || "png";
      return `inline-bg.${ext}`;
    }
    const cleanUrl = url.split("?")[0].split("#")[0];
    const raw = decodeURIComponent(
      cleanUrl.substring(cleanUrl.lastIndexOf("/") + 1) || ""
    );
    return cleanFilename(raw) || "(no file found)";
  } catch {
    return "(no file found)";
  }
}

/* Download helper that supports dataURI, Blob, and URL */
function downloadWithExactName(blobOrUrl, fileName) {
  // Data URI
  if (typeof blobOrUrl === "string" && blobOrUrl.startsWith("data:image")) {
    const [meta, base64] = blobOrUrl.split(",");
    const mime = (meta.match(/:(.*?);/) || [null, "image/png"])[1];
    const binary = atob(base64 || "");
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

    // Create Blob and trigger download
    const blob = new Blob([bytes], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName || `image.${mime.split("/")[1] || "png"}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    return;
  }

  // Blob
  if (blobOrUrl instanceof Blob) {
    const url = URL.createObjectURL(blobOrUrl);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName || "download";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return;
  }

  // Plain URL
  const a = document.createElement("a");
  a.href = blobOrUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* Try to get size via HEAD, fallback to GET blob */
async function getImageSize(url) {
  try {
    const head = await fetch(url, { method: "HEAD" });
    const size = head.headers.get("content-length");
    if (size) return parseInt(size, 10);
    const resp = await fetch(url);
    const blob = await resp.blob();
    return blob.size;
  } catch {
    return 0;
  }
}

/* Get natural image dims */
function getImageDims(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () =>
      resolve({ w: img.naturalWidth || 0, h: img.naturalHeight || 0 });
    img.onerror = () => resolve({ w: 0, h: 0 });
    img.src = url;
  });
}

function isSvgWhite(svgString) {
  if (!svgString) return false;

  const normalized = svgString.toLowerCase();

  // All acceptable "white" values
  const whiteValues = ["white", "#fff", "#ffffff", "rgb(255,255,255)"];

  // Regex to catch fill="", stroke="", color=""
  const attrRegex = /(fill|stroke|color)\s*=\s*"([^"]+)"/g;
  let match;
  while ((match = attrRegex.exec(normalized)) !== null) {
    const value = match[2].trim();
    if (whiteValues.includes(value)) return true;
  }

  // Regex for styles like: style="fill:white; stroke:#fff;"
  const styleRegex = /style\s*=\s*"([^"]+)"/g;
  let styleMatch;
  while ((styleMatch = styleRegex.exec(normalized)) !== null) {
    const style = styleMatch[1];

    // Extract CSS pairs: fill: white, stroke: #fff, color: #ffffff
    const cssPairs = style.split(";");
    for (const pair of cssPairs) {
      const [key, val] = pair.split(":").map((s) => s.trim());
      if (
        ["fill", "stroke", "color"].includes(key) &&
        whiteValues.includes(val)
      ) {
        return true;
      }
    }
  }

  return false;
}

/* ============================
   Size calculations
   ============================ */
function calculateTotalImageSize(images) {
  const total = images?.reduce((sum, img) => sum + (img.size || 0), 0);
  if (fileSizeCount) fileSizeCount.textContent = `(${formatSize(total)})`;
  return total;
}

async function calculateTotalSvgSize(svgs = []) {
  const total = svgs.reduce(
    (sum, svgCode) => sum + new Blob([svgCode]).size,
    0
  );
  if (svgFileSizeCount) svgFileSizeCount.textContent = `(${formatSize(total)})`;
  return total;
}

async function calculateHtmlPageSize() {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab?.url) return 0;

    const res = await fetch(tab.url);
    const text = await res.text();
    const size = new Blob([text]).size;

    if (htmlSizeCount)
      htmlSizeCount.textContent = `(HTML Size: ${formatSize(size)})`;

    return size;
  } catch (err) {
    console.warn("Failed to get HTML page size:", err);
    return 0;
  }
}

/* ============================
   State UI: No Images & No Internet
   ============================ */
function ensureEmptyStateElements() {
  if (!document.getElementById("noImagesState")) {
    const el = document.createElement("div");
    el.id = "noImagesState";
    el.className = "state no-images";
    el.style.display = "none";
    el.innerHTML = `
      <div class="state-icon">${ICON_IMAGE_NOT_FOUND}</div>
      <div class="state-title">No Image found!</div>
      <button type="button" class="state-btn">Try Again ${ICON_RETRY}</button>
    `;
    imagesTableBody?.parentNode?.appendChild(el);
  }
  if (!document.getElementById("noInternetState")) {
    const el = document.createElement("div");
    el.id = "noInternetState";
    el.className = "state no-internet";
    el.style.display = "none";
    el.innerHTML = `
      <div class="state-icon">${ICON_NO_INTERNET}</div>
      <div class="state-title">No internet connection</div>
      <div class="state-actions">
        <button type="button" id="retryFetchBtn" class="state-btn btn">Try Again ${ICON_RETRY}</button>
      </div>
    `;
    imagesTableBody?.parentNode?.appendChild(el);
    // attach retry handler
    document.getElementById("retryFetchBtn").addEventListener("click", () => {
      fetchAndShowImages();
    });
  }
}

function hideAllStates() {
  hideLoader();
  const noImagesEl = document.getElementById("noImagesState");
  const noInternetEl = document.getElementById("noInternetState");
  if (noImagesEl) noImagesEl.style.display = "none";
  if (noInternetEl) noInternetEl.style.display = "none";
  currentlyShowingNoInternet = false;
}

/* Show a particular UI state */
function showState(state) {
  ensureEmptyStateElements();
  hideAllStates();

  if (state === "loader") {
    showLoader();
  } else if (state === "noImages") {
    const el = document.getElementById("noImagesState");
    if (el) el.style.display = "";
  } else if (state === "noInternet") {
    const el = document.getElementById("noInternetState");
    if (el) el.style.display = "";
    currentlyShowingNoInternet = true;
  } else {
    // normal: nothing
  }
}

/* ============================
   Rendering: image item DOM
   ============================ */
function createImgItemDOM(item, isListView) {
  const { src, fileName, sizeText, w, h } = item;
  const updatedFileName = cleanFilename(fileName);

  const row = document.createElement("div");
  row.className = "img-item";

  const imgEl = document.createElement("img");
  imgEl.src = src;
  imgEl.alt = updatedFileName || "";
  imgEl.className = "img";
  row.appendChild(imgEl);

  const content = document.createElement("div");
  content.className = "img-content";

  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";

  const label = document.createElement("div");
  label.className = "img-label";
  label.textContent = updatedFileName;

  const sizeEl = document.createElement("div");
  sizeEl.className = "img-size";
  const sizeSpan = document.createElement("span");
  sizeSpan.className = "file-size";
  sizeSpan.textContent = sizeText || "unknown";
  sizeEl.append(sizeSpan);

  if (!isListView && w && h) {
    const sep = document.createElement("span");
    sep.className = "meta-sep";

    const dimsSpan = document.createElement("span");
    dimsSpan.className = "file-dims";
    dimsSpan.textContent = `${w}x${h}`;
    sizeEl.append(sep);
    sizeEl.append(dimsSpan);
  }

  contentContainer.append(label, sizeEl);

  // download button (using original SVG)
  const downloadBtn = document.createElement("button");
  downloadBtn.className = "download-btn";
  downloadBtn.title = "Download";
  downloadBtn.innerHTML = `${ICON_DOWNLOAD}`;
  downloadBtn.onclick = async (e) => {
    e.stopPropagation();
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      downloadWithExactName(blob, cleanFilename(updatedFileName));
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  if (isListView) {
    const actions = document.createElement("div");
    actions.className = "img-actions";

    const copyBtn = document.createElement("button");
    copyBtn.className = "download-btn copy-btn";
    copyBtn.title = "Copy image URL";
    copyBtn.setAttribute("aria-label", "Copy image URL");
    copyBtn.innerHTML = ICON_COPY;

    copyBtn.addEventListener("click", async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      try {
        await navigator.clipboard.writeText(src);
        const prev = copyBtn.innerHTML;
        copyBtn.innerHTML = ICON_CHECK;
        setTimeout(() => (copyBtn.innerHTML = prev), 900);
      } catch (err) {
        console.error("Copy URL failed:", err);
      }
    });

    actions.append(copyBtn, downloadBtn);
    content.append(contentContainer, actions);
  } else {
    // Grid view: keep your original single download button
    content.append(contentContainer, downloadBtn);
  }

  row.appendChild(content);
  return row;
}

/* ============================
   Overview render (grid / list) — supports search & filters
   ============================ */
function renderOverviewTab() {
  const fileType = fileTypeFilter?.value || "all";
  const sortOrder = sortOrderEl?.value || "desc";
  const search = (searchInput?.value || "").trim().toLowerCase();
  const isListView = gridContainer.classList.contains("view-list");

  let filtered = imagesWithSize.slice();

  // File type filter
  if (fileType !== "all") {
    filtered = filtered.filter((item) => {
      const ext = getFileExtension(item.src);
      if (fileType === "jpg") return ext === "jpg" || ext === "jpeg";
      return ext === fileType;
    });
  }

  // Search: filename, alt, title
  if (search) {
    filtered = filtered.filter((item) => {
      const candidate = `${item.fileName || ""} ${item.alt || ""} ${
        item.title || ""
      }`.toLowerCase();
      return candidate.includes(search);
    });
  }

  // Sort by size
  filtered.sort((a, b) =>
    sortOrder === "asc" ? a.size - b.size : b.size - a.size
  );

  // Clear container before rendering
  imagesTableBody.innerHTML = "";

  // Update total image size counter
  calculateTotalImageSize(filtered);

  if (!filtered.length) {
    // show friendly empty state (not loader)
    showState("noImages");
    return;
  }

  hideLoader();
  const noImagesEl = document.getElementById("noImagesState");
  if (noImagesEl) noImagesEl.remove();

  filtered.forEach((item) => {
    const dom = createImgItemDOM(item, isListView);
    imagesTableBody.appendChild(dom);
  });
}

/* ============================
   Render images table tab
   ============================ */
function renderImagesTab() {
  const tbody = imagesTableBody2;
  if (!tbody) return;

  const table = tbody.closest("table");
  if (table && !table.querySelector("colgroup")) {
    const cg = document.createElement("colgroup");
    cg.innerHTML = `
      <col class="preview-col">
      <col>
      <col>
      <col class="size-col">
    `;
    table.insertBefore(cg, table.firstChild);
    const sizeTh = table.querySelector("thead th:last-child");
    if (sizeTh) sizeTh.classList.add("size-col");
    const previewTh = table.querySelector("thead th:first-child");
    if (previewTh) previewTh.classList.add("preview-col");
  }

  tbody.innerHTML = "";

  if (!imagesWithSize.length) {
    showState("noImages");
    return;
  }

  imagesWithSize.forEach((item) => {
    const tr = document.createElement("tr");

    const tdPreview = document.createElement("td");
    tdPreview.className = "preview-col";
    const box = document.createElement("div");
    box.className = "preview-box";
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || "";
    img.title = item.title || "";
    box.appendChild(img);
    tdPreview.appendChild(box);
    tr.appendChild(tdPreview);

    // alt
    const tdAlt = document.createElement("td");
    const substrAlt =
      item.alt && item.alt.length > 30
        ? `${item.alt.substring(0, 30)}...`
        : item.alt;
    tdAlt.textContent = substrAlt || "(no alt)";
    tdAlt.classList.add("alt-text");
    if (tdAlt.textContent === "(no alt)") tdAlt.classList.add("danger");
    tr.appendChild(tdAlt);

    // title
    const tdTitle = document.createElement("td");
    tdTitle.textContent = item?.title || "(Missed)";
    if (tdTitle.textContent === "(Missed)" || item.title === "(no title)")
      tdTitle.classList.add("danger");
    tr.appendChild(tdTitle);

    // size
    const tdSize = document.createElement("td");
    tdSize.className = "size-col";
    tdSize.textContent = item.sizeText || "unknown";
    tr.appendChild(tdSize);

    tbody.appendChild(tr);
  });
}

/* ============================
   SVG tab: fetch inline svgs and allow download
   ============================ */
async function renderSvgTab() {
  const container = document.getElementById("svgGrid");
  if (!container) return;
  container.innerHTML = "";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  try {
    // inject content script (which should collect inline svgs)
    await new Promise((resolve, reject) => {
      chrome.scripting.executeScript(
        { target: { tabId: tab.id }, files: ["contentScript.js"] },
        () =>
          chrome.runtime.lastError
            ? reject(chrome.runtime.lastError)
            : resolve()
      );
    });

    const response = await new Promise((resolve) =>
      chrome.tabs.sendMessage(tab.id, { action: "getSvgData" }, (res) =>
        resolve(res)
      )
    );

    const svgs = response?.svgs || [];
    if (!svgs.length) {
      container.textContent = "No inline SVGs found.";
      return;
    }

    svgs.forEach((code, i) => {
      const item = document.createElement("div");
      item.className = "svg-item";

      const preview = document.createElement("div");
      preview.className = "svg-preview";
      preview.innerHTML = code;

      if (isSvgWhite(code)) {
        preview.style.background = "#231f2040";
      }

      const copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy";
      copyBtn.onclick = () => {
        navigator.clipboard
          .writeText(code)
          .then(() => (copyBtn.textContent = "Copied!"))
          .catch(() => (copyBtn.textContent = "Error"));
        setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
      };

      const downloadBtn = document.createElement("button");
      downloadBtn.textContent = "Download";
      downloadBtn.onclick = () => {
        const blob = new Blob([code], { type: "image/svg+xml" });
        downloadWithExactName(blob, `icon${i + 1}.svg`);
      };

      const svgBtnContainer = document.createElement("div");
      svgBtnContainer.className = "svg-btn-container";
      svgBtnContainer.append(copyBtn, downloadBtn);

      item.append(preview, svgBtnContainer);
      container.appendChild(item);
    });

    await calculateTotalSvgSize(svgs);
  } catch (err) {
    container.textContent = "Error fetching SVGs.";
  }
}

/* ============================
   Fetch images from content script and build imagesWithSize
   ============================ */
async function fetchAndShowImages() {
  // offline guard
  if (!navigator.onLine) {
    showState("noInternet");
    return;
  }

  showState("loader");
  imagesTableBody.innerHTML = ""; // clear so loader is visually centered

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab?.url?.startsWith?.("chrome-error://")) {
      showState("noImages");
      return;
    }

    // inject content script that collects images on the page
    await new Promise((resolve, reject) => {
      chrome.scripting.executeScript(
        { target: { tabId: tab.id }, files: ["contentScript.js"] },
        () =>
          chrome.runtime.lastError
            ? reject(chrome.runtime.lastError)
            : resolve()
      );
    });

    // Ask the content script for image data
    const response = await new Promise((resolve) =>
      chrome.tabs.sendMessage(tab.id, { action: "getImageData" }, (res) =>
        resolve(res)
      )
    );

    const images = (response && response.images) || [];

    if (!images.length) {
      // replace loader with friendly empty state
      showState("noImages");
      return;
    }

    // compute sizes and dims in parallel
    const sizes = await Promise.all(
      images.map((img) => getImageSize(img.src).catch(() => 0))
    );
    const dims = await Promise.all(images.map((img) => getImageDims(img.src)));

    imagesWithSize = images.map((imgObj, i) => ({
      src: imgObj.src,
      alt: imgObj.alt,
      title: imgObj.title,
      fileName: getFileName(imgObj.src),
      size: sizes[i] || 0,
      sizeText: formatSize(sizes[i]),
      w: dims[i].w,
      h: dims[i].h,
    }));

    hideLoader();
    renderOverviewTab();
    renderImagesTab();

    // Also update HTML page size after loading images
    // calculateHtmlPageSize();
  } catch (err) {
    if (!navigator.onLine) {
      showState("noInternet");
    } else {
      // fallback friendly message instead of loader
      showState("noImages");
    }
  }
}

downloadZipBtn?.addEventListener("click", async () => {
  if (!imagesWithSize.length) {
    alert("No images to download!");
    return;
  }

  showLoader();

  try {
    const zip = new JSZip();
    const folder = zip.folder("images") || zip;

    await Promise.all(
      imagesWithSize.map(async (item, idx) => {
        try {
          const res = await fetch(item.src);
          const blob = await res.blob();

          let fileName = item.fileName || `image${idx + 1}`;

          // ensure filename has extension
          let ext = getFileExtension(fileName);
          if (!ext) {
            ext = "jpg";
            fileName = `${fileName}.${ext}`;
          }

          // de-duplicate in ZIP
          let candidate = fileName;
          let attempt = 1;
          const folderPrefix = folder.root || folder.name; // e.g. "images/"

          while (folder.files && folder.files[folderPrefix + candidate]) {
            const base = fileName.replace(/\.[^/.]+$/, "");
            candidate = `${base}_${attempt}.${ext}`;
            attempt++;
          }

          // add to zip
          folder.file(candidate, blob);
        } catch (e) {
          // skip
        }
      })
    );

    const content = await zip.generateAsync({ type: "blob" });
    downloadWithExactName(content, "images.zip");
  } catch (err) {
    alert("Failed to create ZIP. Make sure JSZip is reachable.");
  } finally {
    hideLoader();
  }
});

/* Download all inline SVGs as ZIP */
downloadAllSvgsBtn?.addEventListener("click", async () => {
  showLoader();
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    // ensure content script present
    await new Promise((resolve, reject) => {
      chrome.scripting.executeScript(
        { target: { tabId: tab.id }, files: ["contentScript.js"] },
        () =>
          chrome.runtime.lastError
            ? reject(chrome.runtime.lastError)
            : resolve()
      );
    });

    // request svgs
    const response = await new Promise((resolve) =>
      chrome.tabs.sendMessage(tab.id, { action: "getSvgData" }, (res) =>
        resolve(res)
      )
    );

    const svgs = response?.svgs || [];
    if (!svgs.length) {
      alert("No inline SVGs found on the page.");
      hideLoader();
      return;
    }

    const zip = new JSZip();
    const folder = zip.folder("svgs") || zip;

    svgs.forEach((code, i) => {
      const filename = `icon${i + 1}.svg`;
      folder.file(filename, code);
    });

    const content = await zip.generateAsync({ type: "blob" });
    downloadWithExactName(content, "svgs.zip");
  } catch (err) {
    alert("Failed to download SVGs.");
  } finally {
    hideLoader();
  }
});

/* ============================
   View toggles & Tab logic
   ============================ */
function setView(mode) {
  const isGrid = mode === "grid";
  gridContainer.classList.toggle("view-grid", isGrid);
  gridContainer.classList.toggle("view-list", !isGrid);
  viewGridBtn?.classList.toggle("active", isGrid);
  viewListBtn?.classList.toggle("active", !isGrid);
  renderOverviewTab();
}
viewGridBtn?.addEventListener("click", () => setView("grid"));
viewListBtn?.addEventListener("click", () => setView("list"));
setView("grid");

// TAB LOGIC
const tabsObj = {
  overviewBtn,
  imagesBtn,
  svgBtn,
  overviewTab,
  imagesTab,
  svgTab,
};
function switchTab(to) {
  [tabsObj.overviewBtn, tabsObj.imagesBtn, tabsObj.svgBtn].forEach((b) =>
    b?.classList.remove("active")
  );
  [tabsObj.overviewTab, tabsObj.imagesTab, tabsObj.svgTab].forEach((d) =>
    d?.classList.remove("active")
  );

  if (to === "overview") {
    tabsObj.overviewBtn?.classList.add("active");
    tabsObj.overviewTab?.classList.add("active");
  } else if (to === "images") {
    tabsObj.imagesBtn?.classList.add("active");
    tabsObj.imagesTab?.classList.add("active");
    renderImagesTab();
  } else {
    tabsObj.svgBtn?.classList.add("active");
    tabsObj.svgTab?.classList.add("active");
    renderSvgTab();
  }
}

overviewBtn?.addEventListener("click", () => {
  switchTab("overview");
  // also trigger fetch
  fetchAndShowImages();
});
imagesBtn?.addEventListener("click", () => switchTab("images"));
svgBtn?.addEventListener("click", () => switchTab("svg"));

/* ============================
   Debounced filter/search handlers
   ============================ */
const debouncedRender = debounce(() => {
  // When user changes filters/search, re-render overview
  renderOverviewTab();
}, 250);

fileTypeFilter?.addEventListener("change", debouncedRender);
sortOrderEl?.addEventListener("change", debouncedRender);
searchInput?.addEventListener("input", debouncedRender);

/* ============================
   Online/offline handling & auto retry
   ============================ */
window.addEventListener("offline", () => {
  showState("noInternet");
});
window.addEventListener("online", () => {
  // If we were previously showing noInternet, attempt a fetch automatically
  if (currentlyShowingNoInternet) {
    // small delay to let network settle
    setTimeout(() => {
      fetchAndShowImages();
    }, 600);
  }
});

/* ============================
   Init on DOMContentLoaded
   ============================ */
document.addEventListener("DOMContentLoaded", () => {
  ensureEmptyStateElements();
  switchTab("overview"); // default
  // attach overview click to fetch
  overviewBtn?.addEventListener("click", fetchAndShowImages);

  // initial fetch if online
  if (navigator.onLine) {
    fetchAndShowImages();
  } else {
    showState("noInternet");
  }
});
