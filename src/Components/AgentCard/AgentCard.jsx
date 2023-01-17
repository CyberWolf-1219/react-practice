import React from 'react'
import dummyImg from './../../assets/agents/Mask Group.png'

function AgentCard({ image = dummyImg, facebookLink = "#", twitterLink = "#", linkedInLink = "#", name = "Some O. Here", tel = "+123 45 6789", profileLink = "#" }) {
    return (
        <div className="w-fit h-fit text-center shadow-md rounded-bl-3xl relative">
            <div className="w-full h-1/2">
                <img src={image} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="w-1/2 mx-auto h-fit flex flex-row items-center justify-between absolute top-[50%] left-[50%] transform translate-y-[0%] translate-x-[-50%]">
                <span className="w-fit h-fit p-1 rounded-full shadow-md bg-white">
                    <a href={facebookLink}>
                        <svg className='w-8 h-8 fill-teal-500' baseProfile="tiny" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z" />
                            </g>
                        </svg>
                    </a>
                </span>
                <span className="w-fit h-fit p-1 rounded-full shadow-md bg-white">
                    <a href={linkedInLink}>
                        <svg className='w-8 h-8 fill-teal-500' baseProfile="tiny" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" >
                            <g>
                                <path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z" />
                            </g>
                            <g>
                                <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
                            </g>
                        </svg>
                    </a>
                </span>
                <span className="w-fit h-fit p-1 rounded-full shadow-md bg-white">
                    <a href={twitterLink}>
                        <svg className='w-8 h-8 fill-teal-500' baseProfile="tiny" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" >
                            <g>
                                <path d="M18.89,7.012c0.808-0.496,1.343-1.173,1.605-2.034c-0.786,0.417-1.569,0.703-2.351,0.861   c-0.703-0.756-1.593-1.14-2.66-1.14c-1.043,0-1.924,0.366-2.643,1.078c-0.715,0.717-1.076,1.588-1.076,2.605   c0,0.309,0.039,0.585,0.117,0.819C8.806,9.096,6.26,7.82,4.254,5.364c-0.34,0.601-0.51,1.213-0.51,1.846   c0,1.301,0.549,2.332,1.645,3.089c-0.625-0.053-1.176-0.211-1.645-0.47c0,0.929,0.273,1.705,0.82,2.388   c0.549,0.676,1.254,1.107,2.115,1.291c-0.312,0.08-0.641,0.118-0.979,0.118c-0.312,0-0.533-0.026-0.664-0.083   c0.23,0.757,0.664,1.371,1.291,1.841c0.625,0.472,1.344,0.721,2.152,0.743c-1.332,1.045-2.855,1.562-4.578,1.562   c-0.422,0-0.721-0.006-0.902-0.038c1.697,1.102,3.586,1.649,5.676,1.649c2.139,0,4.029-0.542,5.674-1.626   c1.645-1.078,2.859-2.408,3.639-3.974c0.784-1.564,1.172-3.192,1.172-4.892V8.34c0.758-0.57,1.371-1.212,1.84-1.921   C20.32,6.712,19.617,6.911,18.89,7.012z" />
                            </g>
                        </svg>
                    </a>
                </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 text-center">
                <p className="font-light text-sm text-gray-500">
                    Seller
                </p>
                <div>
                    <p className="font-normal text-lg text-gray-500">{name}</p>
                    <p className="font-normal text-base text-gray-500">{tel}</p>
                </div>
                <button className="rounded-full px-4 py-3 text-white cursor-pointer hover:scale-105 transition-transform bg-teal-500">
                    View Profile
                </button>

            </div>
        </div>
    )
}

export default AgentCard