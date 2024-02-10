import React from "react";

function Chemical({ isDesktop }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={isDesktop ? "30px" : "20px"}
      height={isDesktop ? "30px" : "20px"}
      y={-16}
      viewBox="0 0 1080.000000 1080.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d64435" />
          <stop offset="100%" stopColor="#3f2995" />
        </linearGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        rx="600"
        ry="600"
        fill="url(#gradient)"
      />
      <g
        transform="translate(50.000000,1000.000000) scale(0.090000,-0.090000)"
        fill="#ffffff"
        stroke="none"
      >
        <path
          d="M4235 9673 c-30 -7 -73 -52 -80 -83 -3 -14 -1 -38 4 -53 6 -14 100
   -136 211 -270 l200 -245 -2 -904 -3 -903 -723 -443 -724 -443 -36 43 c-58 68
   -102 106 -179 158 -143 95 -297 136 -473 127 -131 -7 -200 -25 -315 -82 -484
   -239 -593 -881 -213 -1265 111 -112 235 -181 390 -218 l68 -16 0 -588 0 -588
   -27 -6 c-190 -41 -332 -119 -449 -248 -93 -102 -151 -210 -191 -357 -24 -88
   -23 -270 1 -364 62 -238 223 -434 439 -535 213 -100 468 -98 681 4 93 45 194
   122 254 195 l49 59 744 -440 744 -439 -3 -80 c-8 -197 71 -406 211 -556 220
   -235 539 -316 842 -214 316 106 534 410 535 745 l0 101 742 438 742 438 54
   -61 c146 -163 340 -257 553 -268 236 -11 439 67 605 232 94 95 151 186 196
   317 31 90 33 101 33 244 0 143 -2 154 -33 243 -94 272 -309 470 -574 529 l-78
   18 0 587 0 588 28 5 c90 19 127 32 217 76 161 78 282 196 360 354 57 117 75
   186 82 322 5 94 2 127 -16 206 -60 258 -232 461 -478 565 -132 56 -350 70
   -496 33 -151 -39 -320 -147 -413 -262 l-37 -47 -161 98 c-89 54 -417 256 -731
   448 l-570 349 -5 1200 c-5 1162 -6 1202 -24 1222 -10 11 -35 25 -55 31 -36 10
   -1855 13 -1896 3z m1765 -903 l0 -690 -610 0 -610 0 0 509 0 509 -42 56 c-24
   30 -89 111 -146 180 l-103 126 755 0 756 0 0 -690z m0 -1786 c0 -805 1 -878
   17 -905 34 -57 126 -65 171 -14 l22 26 0 435 c0 239 3 434 6 434 4 0 310 -186
   681 -412 638 -391 674 -414 669 -438 -3 -14 -13 -59 -22 -100 -19 -90 -14
   -262 11 -355 24 -91 98 -232 158 -302 110 -129 273 -230 435 -268 l72 -18 0
   -588 c0 -559 -1 -589 -18 -589 -37 0 -139 -32 -209 -65 -211 -99 -347 -252
   -425 -477 -31 -88 -32 -101 -33 -238 0 -114 4 -158 19 -208 16 -54 17 -65 5
   -76 -10 -10 -1336 -796 -1422 -843 -4 -2 -12 8 -18 24 -21 57 -121 194 -182
   248 -315 286 -793 280 -1095 -15 -60 -58 -154 -188 -167 -230 -4 -11 -10 -20
   -15 -20 -6 0 -1423 833 -1438 845 -2 2 4 27 12 56 80 269 3 570 -199 774 -117
   119 -253 192 -427 230 l-28 5 0 589 0 589 43 7 c23 4 77 20 120 36 245 88 429
   294 498 554 29 110 29 270 0 379 -12 44 -18 83 -14 87 10 10 1313 809 1330
   816 10 4 13 -290 15 -1384 l3 -1388 29 -85 c52 -156 117 -261 228 -366 157
   -151 339 -224 558 -224 316 0 594 172 735 455 83 167 85 184 85 787 l0 526
   -25 30 c-32 38 -72 48 -116 29 -67 -28 -63 3 -70 -581 -4 -474 -7 -537 -23
   -586 -87 -267 -325 -450 -586 -450 -142 0 -299 63 -405 161 -83 78 -132 153
   -169 259 -29 83 -29 90 -34 333 l-5 247 266 0 c148 0 277 4 291 10 68 26 83
   122 26 173 l-30 27 -275 0 -275 0 0 375 0 375 264 0 c148 0 276 4 290 10 65
   24 82 118 31 169 l-25 26 -278 5 -277 5 -3 373 -2 372 265 0 c294 0 311 3 341
   61 20 40 12 88 -22 120 -25 24 -27 24 -302 29 l-277 5 -3 503 -2 502 610 0
   610 0 0 -876z m-3355 -565 c174 -54 325 -207 381 -386 56 -181 4 -409 -126
   -555 -136 -152 -364 -225 -560 -179 -311 74 -513 401 -435 706 49 191 202 354
   389 415 102 33 243 33 351 -1z m5813 6 c200 -47 375 -216 427 -411 19 -69 21
   -217 5 -289 -33 -148 -166 -317 -303 -383 -234 -113 -487 -72 -668 109 -118
   117 -170 242 -170 409 0 104 13 162 58 259 67 142 223 267 381 305 76 19 193
   19 270 1z m-5799 -2765 c346 -122 495 -537 306 -850 -194 -321 -640 -374 -905
   -109 -76 76 -139 189 -159 287 -40 192 21 395 159 532 74 75 192 140 285 159
   81 16 240 6 314 -19z m5815 5 c194 -51 360 -216 411 -411 21 -79 21 -228 0
   -301 -39 -134 -119 -247 -228 -324 -152 -106 -345 -133 -519 -72 -187 65 -317
   204 -373 397 -23 78 -23 224 0 302 57 198 215 357 406 408 72 20 230 20 303 1z
   m-2890 -1443 c185 -67 332 -227 377 -412 19 -76 16 -222 -5 -295 -69 -235
   -278 -405 -522 -422 -272 -19 -529 166 -599 433 -19 75 -19 213 0 289 51 199
   213 363 416 420 79 22 255 15 333 -13z"
        />
        <path
          d="M4118 5971 c-29 -25 -32 -35 -36 -94 -6 -88 3 -129 34 -160 35 -35
   75 -42 118 -22 51 25 69 70 64 167 -3 75 -5 81 -36 109 -45 40 -99 40 -144 0z"
        />
        <path
          d="M4134 5481 c-17 -11 -36 -34 -43 -52 -7 -22 -11 -181 -11 -511 0
   -405 2 -483 15 -508 34 -67 111 -81 167 -31 l33 29 3 501 c3 551 3 544 -58
   576 -39 20 -68 19 -106 -4z"
        />
      </g>
    </svg>
  );
}

export default Chemical;
