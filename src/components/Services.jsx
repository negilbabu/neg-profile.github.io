import React from "react";

const serviceBlockHoverClass = "hover:bg-gray-200"; // You can customize the color

const Services = () => {
  return (
    <div id="services" className="max-w-[1140px] m-auto md:pl-20 p-0 py-1 ">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        My Services
      </h1>

      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Heading start */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Experience bespoke development solutions tailored to your unique
            needs, ensuring top-tier web development with the latest frameworks.
            Elevate your digital presence with our commitment to excellence.
          </p>
        </header>
        {/* End heading */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          <div
            // className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp ${serviceBlockHoverClass}"
            className={`flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp `}
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            {/* service block */}
            <div
              className={`py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-4 shadow-xl ${serviceBlockHoverClass}`}
            >
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-cast"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z" />
                  <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
                </svg>
              </div>

              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Custom Software Development
              </h3>
              <p className="text-gray-500">
                Offer bespoke software solutions tailored to meet clients
                specific needs.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            {/* service block */}
            <div
              className={`py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-4 shadow-xl ${serviceBlockHoverClass}`}
            >
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 35 C 2 36.644531 3.355469 38 5 38 L 19 38 L 19 40 L 10 40 C 9.96875 40 9.9375 40 9.90625 40 C 9.636719 40.027344 9.386719 40.160156 9.21875 40.375 L 4.21875 46.375 C 3.976563 46.675781 3.929688 47.085938 4.097656 47.433594 C 4.265625 47.78125 4.617188 48 5 48 L 45 48 C 45.382813 48 45.734375 47.78125 45.902344 47.433594 C 46.070313 47.085938 46.023438 46.675781 45.78125 46.375 L 40.78125 40.375 C 40.589844 40.136719 40.304688 40 40 40 L 31 40 L 31 38 L 45 38 C 46.644531 38 48 36.644531 48 35 L 48 5 C 48 3.355469 46.644531 2 45 2 Z M 5 4 L 45 4 C 45.554688 4 46 4.445313 46 5 L 46 35 C 46 35.554688 45.554688 36 45 36 L 5 36 C 4.445313 36 4 35.554688 4 35 L 4 5 C 4 4.445313 4.445313 4 5 4 Z M 6 6 L 6 34 L 44 34 L 44 6 Z M 8 8 L 42 8 L 42 32 L 8 32 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 21 38 L 29 38 L 29 42 L 21 42 Z M 10.46875 42 L 19 42 L 19 44 L 31 44 L 31 42 L 39.53125 42 L 42.875 46 L 7.125 46 Z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Web Development
              </h3>
              <p className="text-gray-500">
                Crafting dynamic and user-centric web experiences with
                cutting-edge development technologies.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            {/* service block */}
            <div
              className={`py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-4 shadow-xl ${serviceBlockHoverClass}`}
            >
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  height="2rem"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="laptop_setting_gear_cogwheel"
                    strokeWidth="39"
                    strokeLinejoin="round"
                  >
                    <g>
                      <g>
                        <g>
                          <g>
                            <path
                              d="M28.5,24c-0.276,0-0.5-0.224-0.5-0.5v-16C28,7.225,27.775,7,27.5,7h-23C4.225,7,4,7.225,4,7.5v16       C4,23.776,3.776,24,3.5,24S3,23.776,3,23.5v-16C3,6.673,3.673,6,4.5,6h23C28.327,6,29,6.673,29,7.5v16       C29,23.776,28.776,24,28.5,24z"
                              fill="#263238"
                            />
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M28.5,28h-25C2.121,28,1,26.879,1,25.5C1,25.224,1.224,25,1.5,25h11c0.276,0,0.5,0.224,0.5,0.5      S12.776,26,12.5,26H2.086c0.206,0.582,0.762,1,1.414,1h25c0.652,0,1.208-0.418,1.414-1H19.5c-0.276,0-0.5-0.224-0.5-0.5      s0.224-0.5,0.5-0.5h11c0.276,0,0.5,0.224,0.5,0.5C31,26.879,29.879,28,28.5,28z"
                            fill="#263238"
                          />
                        </g>
                      </g>
                    </g>
                    <g>
                      <path
                        d="M16.899,24h-1.799c-0.235,0-0.438-0.164-0.488-0.394l-0.296-1.353c-0.415-0.121-0.814-0.287-1.194-0.496    l-1.166,0.747c-0.198,0.126-0.457,0.099-0.623-0.067l-1.271-1.271C9.896,21,9.867,20.74,9.994,20.543l0.747-1.166    c-0.209-0.38-0.375-0.779-0.496-1.194l-1.352-0.296c-0.229-0.05-0.393-0.253-0.393-0.488V15.6c0-0.235,0.163-0.438,0.393-0.488    l1.351-0.296c0.123-0.416,0.289-0.815,0.497-1.194l-0.747-1.166c-0.127-0.197-0.099-0.457,0.067-0.623l1.271-1.271    c0.166-0.166,0.425-0.193,0.623-0.067l1.167,0.747c0.382-0.209,0.781-0.375,1.193-0.495l0.296-1.352    C14.662,9.163,14.865,9,15.101,9h1.799c0.235,0,0.438,0.163,0.488,0.394l0.296,1.352c0.413,0.12,0.813,0.286,1.193,0.495    l1.167-0.747c0.198-0.126,0.457-0.099,0.623,0.067l1.271,1.271c0.166,0.166,0.194,0.426,0.067,0.623l-0.747,1.167    c0.209,0.381,0.375,0.78,0.495,1.193l1.353,0.296c0.229,0.05,0.393,0.253,0.393,0.488v1.799c0,0.235-0.163,0.438-0.393,0.488    l-1.353,0.296c-0.12,0.412-0.286,0.812-0.495,1.193l0.747,1.167c0.127,0.197,0.099,0.457-0.067,0.623l-1.271,1.273    c-0.167,0.167-0.427,0.193-0.624,0.067l-1.166-0.749c-0.379,0.209-0.778,0.374-1.193,0.495l-0.296,1.354    C17.338,23.836,17.135,24,16.899,24z M15.503,23h0.994l0.275-1.259c0.041-0.188,0.187-0.337,0.374-0.381    c0.524-0.122,1.021-0.329,1.479-0.613c0.162-0.101,0.37-0.101,0.534,0.004l1.084,0.696l0.703-0.703l-0.695-1.086    c-0.104-0.162-0.105-0.369-0.005-0.532c0.287-0.464,0.494-0.962,0.614-1.479c0.044-0.188,0.192-0.334,0.381-0.375l1.257-0.275    v-0.994l-1.257-0.275c-0.188-0.041-0.337-0.187-0.381-0.374c-0.121-0.52-0.328-1.018-0.614-1.48    c-0.101-0.163-0.099-0.37,0.005-0.532l0.695-1.085l-0.703-0.703l-1.085,0.695c-0.161,0.104-0.369,0.105-0.532,0.005    c-0.463-0.286-0.961-0.493-1.48-0.614c-0.188-0.044-0.333-0.192-0.374-0.38L16.497,10h-0.994l-0.275,1.258    c-0.041,0.188-0.187,0.336-0.375,0.38c-0.518,0.12-1.016,0.327-1.479,0.614c-0.163,0.101-0.371,0.099-0.532-0.005l-1.085-0.695    l-0.703,0.703l0.695,1.085c0.104,0.162,0.105,0.37,0.004,0.533c-0.284,0.456-0.491,0.954-0.616,1.48    c-0.044,0.188-0.191,0.332-0.379,0.373l-1.256,0.275v0.994l1.257,0.275c0.188,0.041,0.337,0.187,0.381,0.375    c0.122,0.522,0.328,1.02,0.613,1.479c0.102,0.163,0.101,0.371-0.004,0.533l-0.695,1.085l0.703,0.703l1.085-0.695    c0.163-0.104,0.372-0.104,0.533-0.004c0.459,0.285,0.956,0.491,1.479,0.613c0.188,0.044,0.334,0.192,0.375,0.381L15.503,23z     M15.999,20c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5    c0-1.379-1.121-2.5-2.5-2.5s-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5c0.167,0,0.33-0.017,0.487-0.047    c0.268-0.058,0.534,0.122,0.587,0.394c0.054,0.271-0.123,0.534-0.394,0.587C16.46,19.978,16.232,20,15.999,20z"
                        fill="#263238"
                      />
                      <circle cx="18.501" cy="18.572" fill="#263238" r="0.5" />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Backend Development
              </h3>
              <p className="text-gray-500">
                Expert in Crafting robust server-side solutions with expertise
                in backend development.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            {/* service block */}
            <div
              className={`py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-4 shadow-xl ${serviceBlockHoverClass}`}
            >
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  height="2rem"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="monitor">
                    <path
                      d="M27,4.996L5,5C4.447,5,4,5.443,4,5.996v14c0,0.553,0.447,1,1,1h22c0.553,0,1-0.447,1-1v-14   C28,5.443,27.553,4.996,27,4.996z M27,20H5V5.996h22V20z"
                      fill="#333333"
                    />
                    <path
                      d="M29,1H3C1.343,1,0,2.342,0,4v20c0,1.654,1.338,2.994,2.99,2.998H13v1.217l-6.242,0.811   C6.312,29.137,6,29.537,6,29.996c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1c0-0.459-0.312-0.859-0.758-0.971L19,28.215v-1.217   h10.01C30.662,26.994,32,25.654,32,24V4C32,2.342,30.656,1,29,1z M30,24c0,0.551-0.449,1-1,1h-9h-8H3c-0.552,0-1-0.449-1-1V4   c0-0.552,0.448-1,1-1h26c0.551,0,1,0.448,1,1V24z"
                      fill="#333333"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Frontend Development
              </h3>
              <p className="text-gray-500">
                Expert in creating responsive and user-friendly interfaces that
                seamlessly enhance the user experience.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            {/* service block */}
            <div
              className={`py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-4 shadow-xl ${serviceBlockHoverClass}`}
            >
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  fill="none"
                  height="2rem"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 21C4 21 4 18 4 18V12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C18.6357 17 18.2942 17.0974 18 17.2676C17.4022 17.6134 17 18.2597 17 19C17 19.7403 17.4022 20.3866 18 20.7324C18.2942 20.9026 18.6357 21 19 21Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
                    stroke="currentColor"
                    strokeDasharray="0.3 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Database Design and Management
              </h3>
              <p className="text-gray-500">
                Expert in designing and managing databases for optimal
                performance and scalability.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            {/* service block */}
            <div
              className={`py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-4 shadow-xl ${serviceBlockHoverClass}`}
            >
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  height="2.2rem"
                  width="3rem"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="39" strokeLinejoin="round">
                    <polygon
                      fill="#37474F"
                      points="24,29 27,29 27,32 28,32 28,23 28,22 24,22 24,23 27,23 27,28 24,28 24,23 23,23 23,32 24,32  "
                    />
                    <polygon
                      fill="#37474F"
                      points="31,29 35,29 35,23 34,23 34,28 31,28 31,23 34,23 34,22 30,22 30,32 31,32  "
                    />
                    <polygon
                      fill="#37474F"
                      points="40,31 39,31 39,23 40,23 40,22 37,22 37,23 38,23 38,31 37,31 37,32 40,32  "
                    />
                    <path
                      d="M19,8.429v3.811l5,4V19h-4v3h-4.763l-2.671-3.271C12.834,18.389,13,17.966,13,17.5c0-1.104-0.896-2-2-2   s-2,0.896-2,2s0.896,2,2,2c0.275,0,0.538-0.056,0.776-0.157L14.763,23H20v2h-6.207l-1.783,1.783C11.712,26.607,11.37,26.5,11,26.5   c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2c0-0.37-0.107-0.712-0.283-1.01l1.49-1.49H20v5h-6.207l-1.783,1.783   C11.712,32.607,11.37,32.5,11,32.5c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2c0-0.37-0.107-0.712-0.283-1.01l1.49-1.49H20v3h4   v1c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v1   c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v1   c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v1   c-0.861,0.223-1.5,0.999-1.5,1.929c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.93-0.639-1.706-1.5-1.929v-1h4v-3h5.793l1.49,1.49   C51.107,33.788,51,34.13,51,34.5c0,1.104,0.896,2,2,2s2-0.896,2-2s-0.896-2-2-2c-0.37,0-0.712,0.107-1.01,0.283L50.207,31H44v-2   h6.203l1.517-1.476C52.067,27.817,52.51,28,53,28c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2c0,0.247,0.051,0.481,0.133,0.7   L49.797,28H44v-5h5.237l2.986-3.657C52.462,19.444,52.725,19.5,53,19.5c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2   c0,0.466,0.166,0.889,0.434,1.229L48.763,22H44v-3h-4v-2.76l5-4V8.429c0.861-0.223,1.5-0.999,1.5-1.929c0-1.104-0.896-2-2-2   s-2,0.896-2,2c0,0.93,0.639,1.706,1.5,1.929v3.331l-5,4V19h-4v-4.756l5-3.917V8.429c0.861-0.223,1.5-0.999,1.5-1.929   c0-1.104-0.896-2-2-2s-2,0.896-2,2c0,0.93,0.639,1.706,1.5,1.929V9.84l-5,3.917V19h-4v-5.244L25,9.84V8.429   c0.861-0.223,1.5-0.999,1.5-1.929c0-1.104-0.896-2-2-2s-2,0.896-2,2c0,0.93,0.639,1.706,1.5,1.929v1.898l5,3.917V19h-4v-3.24l-5-4   V8.429c0.861-0.223,1.5-0.999,1.5-1.929c0-1.104-0.896-2-2-2s-2,0.896-2,2C17.5,7.43,18.139,8.206,19,8.429z M11,18.5   c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S11.552,18.5,11,18.5z M11,29.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1   S11.552,29.5,11,29.5z M11,35.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S11.552,35.5,11,35.5z M53,33.5c0.552,0,1,0.448,1,1   s-0.448,1-1,1s-1-0.448-1-1S52.448,33.5,53,33.5z M53,25c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S52.448,25,53,25z M53,16.5   c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S52.448,16.5,53,16.5z M43.5,6.5c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1   S43.5,7.052,43.5,6.5z M38.5,6.5c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S38.5,7.052,38.5,6.5z M23.5,6.5   c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S23.5,7.052,23.5,6.5z M25.5,37.929c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1   S25.5,37.377,25.5,37.929z M30.5,37.929c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1S30.5,37.377,30.5,37.929z M35.5,37.929   c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1S35.5,37.377,35.5,37.929z M40.5,37.929c0,0.552-0.448,1-1,1s-1-0.448-1-1   s0.448-1,1-1S40.5,37.377,40.5,37.929z M43,20v2v1v5v1v2v1v2H21v-2v-1v-5v-1v-2v-1v-2H43z M19.5,5.5c0.552,0,1,0.448,1,1   s-0.448,1-1,1s-1-0.448-1-1S18.948,5.5,19.5,5.5z"
                      fill="#37474F"
                    />
                    <path
                      d="M57,10H46v1h11c0.551,0,1,0.449,1,1v32H6V12c0-0.551,0.449-1,1-1h11v-1H7c-1.1,0-2,0.9-2,2v32v0.288V47   c0,1.1,0.9,2,2,2h18.714l-1.429,5H21c-1.104,0-2,0.896-2,2v1h26v-1c0-1.104-0.896-2-2-2h-3.286l-1.429-5H57c1.1,0,2-0.9,2-2v-2.175   V44V12C59,10.9,58.1,10,57,10z M40,55h3c0.551,0,1,0.449,1,1H20c0-0.551,0.449-1,1-1h3H40z M38.674,54H25.326l1.429-5h10.491   L38.674,54z M58,47c0,0.551-0.449,1-1,1H38H26H7c-0.551,0-1-0.449-1-1v-2h52V47z"
                      fill="#37474F"
                    />
                    <polygon
                      fill="#37474F"
                      points="21,10 21,11 23.237,11 23,10.814 23,10  "
                    />
                    <polygon
                      fill="#37474F"
                      points="35.897,11 37.174,10 26.826,10 28.103,11  "
                    />
                    <polygon
                      fill="#37474F"
                      points="43,10 41,10 41,10.814 40.763,11 43,11  "
                    />
                    <polygon
                      fill="#37474F"
                      points="33.344,13 34.621,12 29.379,12 30.656,13  "
                    />
                    <polygon
                      fill="#37474F"
                      points="7,12 7,42 57,42 57,12 46,12 46,12.721 45.651,13 56,13 56,41 8,41 8,13 18.349,13 18,12.721    18,12  "
                    />
                    <polygon
                      fill="#37474F"
                      points="25.791,13 24.514,12 21.901,12 23.151,13  "
                    />
                    <polygon
                      fill="#37474F"
                      points="38.209,13 40.849,13 42.099,12 39.486,12  "
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                API Development
              </h3>
              <p className="text-gray-500">
                Design and deploy scalable APIs for efficient communication and
                integration in software systems.
              </p>
            </div>
            {/* end service block */}
          </div>
        </div>
        {/* end row */}
      </div>
      {/* </div> */}
    </div>
  );
};
export default Services;
