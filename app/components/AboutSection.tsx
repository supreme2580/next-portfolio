import React from "react";
import tslogo from "@/public/tslogo-resized.svg";
import tailwindlogo from "@/public/tailwindlogo-resized.svg";
import Link from "next/link";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      className="sm:pl-4 flex flex-col justify-center align-middle mb-24"
      id="about"
    >
      <div className="pb-4 pt-8 sm:pt-4  text-3xl">About me!</div>
      <div className="text-justify text-lg tracking-tight mb-4">
        Certainly, I am Victor Omorogbe, an ardent enthusiast of crafting digital entities that flourish within the dynamic landscape of the internet. My fascination with technology sprouted in my early years, partly inspired by my childhood experiences, such as watching Jimmy Neutron. This curiosity kindled my pursuit of a deeper understanding of Science and Technology, leading me to explore the realm of Software development. In 2019, during my final year in high school, I ventured into web and Android development. However, I later decided to exclusively focus on web development, as it offered a multitude of opportunities to explore and innovate. Today, I take immense pride in my role as a Software developer in the ever-evolving landscape of Web 3.0, driven by a commitment to continuous learning and innovation.
      </div>
      <div className="text-justify text-lg tracking-tight mb-4">
        I am mainly interested in developing{" "}
        <Link
          href="https://react.dev"
          target="_blank"
          className="border border-neutral-200  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900  no-underline"
        >
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex mr-1"
          >
            <path
              d="M12.3029 5.50126C12.3029 4.68299 11.2822 3.90753 9.71741 3.42664C10.0785 1.82536 9.91803 0.551385 9.21085 0.143511C9.04785 0.047837 8.85726 0.0025177 8.64912 0.0025177V0.563973C8.76447 0.563973 8.85726 0.586633 8.935 0.629435C9.27605 0.825818 9.42401 1.57359 9.30865 2.53536C9.28107 2.77203 9.23593 3.02129 9.18076 3.27558C8.68924 3.15473 8.15259 3.06157 7.58836 3.00114C7.24981 2.53536 6.89873 2.11238 6.54515 1.74227C7.36266 0.9794 8.13002 0.561456 8.65163 0.561456V0C7.96201 0 7.05923 0.493477 6.14642 1.34951C5.23361 0.498512 4.33083 0.010071 3.64121 0.010071V0.571527C4.16031 0.571527 4.93017 0.986953 5.74769 1.74479C5.39661 2.1149 5.04553 2.53536 4.712 3.00114C4.14526 3.06157 3.60861 3.15473 3.11709 3.2781C3.05942 3.02632 3.01679 2.7821 2.98669 2.54795C2.86883 1.58618 3.01428 0.838407 3.35282 0.639506C3.42805 0.594186 3.52585 0.574044 3.64121 0.574044V0.0125887C3.43056 0.0125887 3.23997 0.0579079 3.07446 0.153582C2.36979 0.561456 2.21181 1.83291 2.57543 3.42916C1.01563 3.91257 0 4.68551 0 5.50126C0 6.31952 1.02064 7.09499 2.58546 7.57587C2.22435 9.17716 2.38484 10.4511 3.09202 10.859C3.25502 10.9547 3.44561 11 3.65625 11C4.34588 11 5.24865 10.5065 6.16146 9.65049C7.07427 10.5015 7.97705 10.9899 8.66667 10.9899C8.87732 10.9899 9.06791 10.9446 9.23342 10.8489C9.93809 10.4411 10.0961 9.1696 9.73245 7.57336C11.2872 7.09247 12.3029 6.31701 12.3029 5.50126ZM9.03782 3.82193C8.94503 4.14672 8.82968 4.48157 8.69927 4.81643C8.59646 4.61501 8.48863 4.4136 8.37076 4.21218C8.25541 4.01076 8.13253 3.81437 8.00965 3.62303C8.36575 3.6759 8.70931 3.74136 9.03782 3.82193ZM7.88928 6.50332C7.69368 6.84321 7.49306 7.16548 7.28492 7.46509C6.91127 7.49782 6.53261 7.51545 6.15143 7.51545C5.77277 7.51545 5.3941 7.49783 5.02296 7.46761C4.81482 7.168 4.61169 6.84825 4.41609 6.51087C4.22551 6.18105 4.05247 5.84619 3.89449 5.50881C4.04997 5.17143 4.22551 4.83406 4.41358 4.50423C4.60919 4.16434 4.8098 3.84207 5.01794 3.54246C5.39159 3.50973 5.77026 3.4921 6.15143 3.4921C6.5301 3.4921 6.90876 3.50973 7.27991 3.53994C7.48805 3.83955 7.69117 4.1593 7.88677 4.49668C8.07736 4.8265 8.25039 5.16136 8.40838 5.49874C8.25039 5.83612 8.07736 6.17349 7.88928 6.50332ZM8.69927 6.17601C8.83469 6.51339 8.95005 6.85077 9.04534 7.17807C8.71683 7.25864 8.37076 7.32662 8.01216 7.37949C8.13504 7.18563 8.25792 6.98672 8.37327 6.78279C8.48863 6.58137 8.59646 6.37743 8.69927 6.17601ZM6.15645 8.86244C5.92323 8.62074 5.69001 8.35134 5.4593 8.05676C5.685 8.06683 5.91571 8.07439 6.14893 8.07439C6.38465 8.07439 6.61787 8.06935 6.84607 8.05676C6.62038 8.35134 6.38716 8.62074 6.15645 8.86244ZM4.29071 7.37949C3.93461 7.32662 3.59105 7.26116 3.26254 7.18059C3.35533 6.8558 3.47068 6.52094 3.60108 6.18608C3.7039 6.3875 3.81173 6.58892 3.92959 6.79034C4.04746 6.99176 4.16783 7.18814 4.29071 7.37949ZM6.14391 2.14008C6.37713 2.38178 6.61035 2.65118 6.84106 2.94575C6.61536 2.93568 6.38465 2.92813 6.15143 2.92813C5.91571 2.92813 5.68249 2.93317 5.45429 2.94575C5.67998 2.65118 5.9132 2.38178 6.14391 2.14008ZM4.2882 3.62303C4.16532 3.81689 4.04244 4.01579 3.92709 4.21973C3.81173 4.42115 3.7039 4.62257 3.60108 4.82399C3.46567 4.48661 3.35031 4.14923 3.25502 3.82193C3.58353 3.74388 3.9296 3.6759 4.2882 3.62303ZM2.01871 6.77523C1.13098 6.39506 0.556713 5.89654 0.556713 5.50126C0.556713 5.10597 1.13098 4.60494 2.01871 4.22728C2.23438 4.13413 2.4701 4.05104 2.71335 3.97299C2.85629 4.46647 3.04437 4.98009 3.27759 5.50629C3.04688 6.02998 2.86131 6.54108 2.72088 7.03204C2.47261 6.95399 2.23689 6.86839 2.01871 6.77523ZM3.36787 10.3731C3.02682 10.1767 2.87886 9.42893 2.99422 8.46715C3.0218 8.23049 3.06694 7.98123 3.12211 7.72694C3.61362 7.84779 4.15027 7.94095 4.71451 8.00137C5.05305 8.46715 5.40413 8.89013 5.75772 9.26024C4.94021 10.0231 4.17284 10.4411 3.65124 10.4411C3.53839 10.4385 3.4431 10.4159 3.36787 10.3731ZM9.31617 8.45457C9.43404 9.41634 9.28859 10.1641 8.95005 10.363C8.87481 10.4083 8.77701 10.4285 8.66166 10.4285C8.14256 10.4285 7.37269 10.013 6.55518 9.25521C6.90626 8.8851 7.25734 8.46464 7.59086 7.99886C8.15761 7.93843 8.69426 7.84527 9.18577 7.7219C9.24345 7.9762 9.28859 8.22042 9.31617 8.45457ZM10.2816 6.77523C10.066 6.86839 9.83026 6.95148 9.58701 7.02953C9.44407 6.53605 9.25599 6.02243 9.02277 5.49622C9.25348 4.97253 9.43905 4.46143 9.57948 3.97047C9.82775 4.04852 10.0635 4.13413 10.2842 4.22728C11.1719 4.60746 11.7462 5.10597 11.7462 5.50126C11.7436 5.89654 11.1694 6.39757 10.2816 6.77523Z"
              fill="#61DAFB"
            ></path>
            <path
              d="M6.13697 6.65389C6.77191 6.65389 7.28663 6.13725 7.28663 5.49994C7.28663 4.86263 6.77191 4.34599 6.13697 4.34599C5.50203 4.34599 4.9873 4.86263 4.9873 5.49994C4.9873 6.13725 5.50203 6.65389 6.13697 6.65389Z"
              fill="#61DAFB"
            ></path>
          </svg>
          React
        </Link>{" "}
        applications and I am currently using{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          className="border border-neutral-200  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900  no-underline"
        >
          <svg
            width="14"
            height="14"
            aria-label="Next.js logomark"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex mr-1"
          >
            <mask
              id="a"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="180"
              height="180"
            >
              <circle cx="90" cy="90" r="90" fill="#000"></circle>
            </mask>
            <g mask="url(#a)">
              <circle
                cx="90"
                cy="90"
                r="87"
                fill="#000"
                stroke="#fff"
                strokeWidth="6"
              ></circle>
              <path
                d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                fill="url(#paint0_linear_408_139)"
              ></path>
              <path
                fill="url(#paint1_linear_408_139)"
                d="M115 54H127V126H115z"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_408_139"
                x1="109"
                y1="116.5"
                x2="144.5"
                y2="160.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_408_139"
                x1="121"
                y1="54"
                x2="120.799"
                y2="106.875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="border border-neutral-200  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900  no-underline"
        >
          <Image
            src={tslogo}
            alt="tslogo"
            width={14}
            height={14}
            className="inline-flex mr-1"
          />
          Typescript
        </Link>{" "}
        in my projects (and have had an enjoyable experience thus far).{" "}
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          className="border border-neutral-200  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900  no-underline"
        >
          <Image
            src={tailwindlogo}
            alt="tailwindlogo"
            width={14}
            height={9}
            className="inline-flex mr-1"
          />
          Tailwind
        </Link>{" "}
        is my go-to styling solution and I use{" "}
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          className="border border-neutral-200  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900  no-underline"
        >
          shadcn/ui
        </Link>{" "}
        from time to time.
      </div>
      <div className="text-justify text-lg tracking-tight mb-4">
        When I&apos;m not infront of a screen, I enjoy listening to music, watching movies and the
        occasional workout. I also enjoy checking out memes.
      </div>
    </section>
  );
};
