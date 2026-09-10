import FooterItem from "./FooterItem";


export default function Footer() {
    return (
        <>
            <footer
                id="footer"
                className="footer  max-w-6xl mx-auto px-6 p-8  rounded-lg flex flex-row lg:justify-between reveal"
            >
                <div className="">
                    <h2 className="text-lg lg:text-2xl primary-content">Get in Touch</h2>
                    <p className="mt-4 text-sm lg:text-md">
                        For business and partnership inquiry please contact me below!
                    </p>

                    <div className="flex  flex-col mt-4 gap-4">
                        <FooterItem
                            icon='<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"
            stroke="#14161c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </g>
      </svg>'
                            title="Phone"
                            value="083832020245"
                            link="https://wa.me/6283832020245"
                        />
                        <FooterItem
                            icon={`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g clip-path="url(#clip0_429_11225)">
        <path
          d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z"
          stroke="#14161c"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M3 5L12 14L21 5"
          stroke="#14161c"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
      </g>
      <defs>
        <clipPath id="clip0_429_11225">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </g>
  </svg>`}
                            title="Email"
                            value="muhammaddzulfiqar03@gmail.com"
                            link="mailto:muhammaddzulfiqar03@gmail.com"
                        />
                    </div>
                </div>


            </footer>
        </>
    )
}