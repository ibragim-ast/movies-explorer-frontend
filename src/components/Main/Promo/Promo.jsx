import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <svg
          className="promo__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="722"
          height="244"
          viewBox="0 0 722 244"
          fill="none"
        >
          <path
            opacity="0.7"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M218.691 222.15C212.062 226.463 205.382 230.118 198.755 233.07C172.576 244.731 147.566 245.309 129.528 232.832C125.408 229.982 121.8 226.554 118.709 222.621C137.826 209.818 156.399 191.651 172.05 169.181C209.688 115.144 218.024 54.0225 194.764 21.8811C201.409 17.5544 208.105 13.8894 214.748 10.9303C240.927 -0.73091 265.937 -1.30897 283.975 11.1678C288.085 14.0104 291.684 17.4278 294.77 21.3477C275.637 34.1528 257.046 52.3309 241.382 74.819C203.732 128.873 195.403 190.017 218.691 222.15ZM193.561 20.2807C226.8 -1.3994 261.468 -6.8319 285.118 9.52681C289.452 12.5243 293.227 16.1229 296.448 20.2391C329.657 -1.40633 364.284 -6.82145 387.912 9.52681C392.258 12.5344 396.043 16.1471 399.27 20.2807C432.51 -1.3994 467.177 -6.8319 490.828 9.52681C495.161 12.5243 498.936 16.1229 502.158 20.2391C535.367 -1.40634 569.994 -6.82145 593.621 9.52681C597.968 12.5344 601.752 16.147 604.98 20.2805C638.219 -1.39942 672.887 -6.83187 696.537 9.52681C712.784 20.7645 721.178 40.4502 722 64.1898H719.997C719.178 40.8978 710.94 21.9208 695.394 11.1678C677.356 -1.30897 652.346 -0.73091 626.167 10.9303C619.524 13.8894 612.828 17.5543 606.183 21.8809C629.443 54.0223 621.107 115.144 583.469 169.181C567.818 191.651 549.244 209.818 530.128 222.621C533.219 226.554 536.826 229.982 540.947 232.832C558.985 245.309 583.995 244.731 610.174 233.07C621.609 227.976 633.2 220.791 644.419 211.74V214.299C607.465 243.586 566.575 252.991 539.803 234.473C535.459 231.468 531.676 227.859 528.45 223.731C495.227 245.401 460.579 250.829 436.94 234.473C432.604 231.473 428.828 227.871 425.605 223.75C392.38 245.404 357.734 250.824 334.094 234.473C329.75 231.468 325.967 227.859 322.74 223.73C289.517 245.401 254.869 250.829 231.231 234.473C226.895 231.473 223.118 227.871 219.896 223.75C186.67 245.404 152.024 250.824 128.385 234.473C124.04 231.468 120.258 227.859 117.031 223.73C83.8078 245.401 49.1597 250.829 25.5212 234.473C-12.1384 208.416 -7.59328 136.936 35.673 74.819C78.9392 12.7018 144.542 -16.5305 182.202 9.52681C186.549 12.5344 190.333 16.1471 193.561 20.2807ZM115.827 222.13C109.19 226.452 102.503 230.113 95.8677 233.069C69.6975 244.731 44.6961 245.309 26.6643 232.832C8.63248 220.356 0.435682 196.807 2.2488 168.293C4.05914 139.822 15.8577 106.767 37.3176 75.957C58.7775 45.147 85.7252 22.574 111.856 10.9306C138.026 -0.730646 163.027 -1.3086 181.059 11.1679C185.182 14.0207 188.791 17.4522 191.883 21.3896C172.766 34.1923 154.192 52.3553 138.54 74.819C100.885 128.862 92.5489 189.992 115.827 222.13ZM117.502 221.025C107.916 207.833 103.76 189.427 105.104 168.293C106.915 139.822 118.718 106.767 140.185 75.9567C155.738 53.6352 174.172 35.6371 193.089 22.9864C202.666 36.1777 206.818 54.5793 205.474 75.7073C203.664 104.178 191.866 137.233 170.406 168.043C154.853 190.371 136.419 208.374 117.502 221.025ZM220.367 221.045C210.774 207.852 206.614 189.438 207.958 168.293C209.769 139.822 221.567 106.767 243.027 75.957C258.592 53.61 277.045 35.5964 295.978 22.9435C303.792 33.6804 308.005 47.8768 308.578 64.1898H310.581C310.007 47.5897 305.729 32.9718 297.654 21.8385C304.275 17.5304 310.946 13.8799 317.565 10.9306C343.735 -0.730646 368.737 -1.3086 386.768 11.1679C390.891 14.0207 394.5 17.4522 397.593 21.3896C378.475 34.1923 359.901 52.3553 344.249 74.819C306.594 128.862 298.258 189.992 321.536 222.13C314.899 226.452 308.212 230.113 301.577 233.069C275.407 244.731 250.406 245.309 232.374 232.832C228.262 229.987 224.661 226.566 221.574 222.641C225.411 220.074 229.226 217.29 233 214.299V211.74C228.831 215.103 224.611 218.209 220.367 221.045ZM514.287 64.1898C513.714 47.8768 509.501 33.6804 501.688 22.9435C482.754 35.5963 464.302 53.61 448.737 75.957C427.277 106.767 415.478 139.822 413.668 168.293C412.323 189.438 416.483 207.852 426.076 221.045C430.321 218.209 434.541 215.103 438.71 211.74V214.299C434.936 217.29 431.12 220.074 427.283 222.641C430.37 226.566 433.971 229.987 438.083 232.832C456.115 245.309 481.116 244.731 507.287 233.069C513.921 230.113 520.609 226.452 527.246 222.13C503.968 189.992 512.304 128.862 549.959 74.819C565.61 52.3553 584.185 34.1922 603.302 21.3895C600.209 17.4521 596.601 14.0206 592.478 11.1679C574.446 -1.3086 549.445 -0.730646 523.274 10.9306C516.656 13.8799 509.984 17.5304 503.363 21.8385C511.439 32.9718 515.716 47.5897 516.291 64.1898H514.287ZM489.685 11.1678C493.794 14.0104 497.393 17.4278 500.48 21.3477C481.347 34.1527 462.755 52.3309 447.092 74.819C409.442 128.873 401.113 190.017 424.401 222.15C417.771 226.463 411.092 230.118 404.465 233.07C378.286 244.731 353.276 245.309 335.238 232.832C331.117 229.982 327.51 226.554 324.418 222.621C343.535 209.818 362.109 191.651 377.76 169.181C415.398 115.144 423.733 54.0225 400.473 21.8811C407.118 17.5544 413.814 13.8894 420.457 10.9303C446.636 -0.73091 471.646 -1.30897 489.685 11.1678ZM581.825 168.043C566.272 190.371 547.838 208.374 528.921 221.025C519.335 207.833 515.179 189.427 516.523 168.293C518.334 139.822 530.136 106.767 551.604 75.9567C567.156 53.6351 585.591 35.637 604.508 22.9863C614.085 36.1776 618.237 54.5792 616.893 75.7073C615.083 104.178 603.284 137.233 581.825 168.043ZM323.212 221.025C342.128 208.374 360.563 190.371 376.115 168.043C397.575 137.233 409.374 104.178 411.184 75.7073C412.527 54.5793 408.375 36.1777 398.798 22.9864C379.881 35.6371 361.447 53.6352 345.894 75.9567C324.427 106.767 312.625 139.822 310.814 168.293C309.469 189.427 313.626 207.833 323.212 221.025Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
