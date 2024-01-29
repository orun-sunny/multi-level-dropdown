import React, { useState } from 'react';
import { navItems } from "./NavItems";
import { Link } from "react-router-dom";




function NavLinks() {

    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return <>
        {
            navItems.map(link => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5 group' onClick={() => {
                            heading !== link.name ? setHeading(link.name) : setHeading('');
                            setSubHeading("");
                        }}>
                            {link.name}
                            <span className='text-xl md:hidden inline'>
                                <i className={`${heading === link.name ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                            </span>

                            <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                <i className="fa-solid fa-chevron-down" ></i>
                            </span>

                        </h1>


                        {link.submenu && (
                            <div>
                                <div className='absolute  z-50 top-20 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'> </div>
                                    </div>
                                    <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                                        {
                                            link.sublinks.map((mysublinks) => (
                                                <div>
                                                    <h1 className='text-lg font-semibold '>{mysublinks.Head}</h1>
                                                    {mysublinks.sublink.map(slink => (
                                                        <li className='text-sm text-gray-600 my-2.5'>
                                                            <Link to={slink.link} className='hover:text-primary hover:text-blue-500'>{slink.name}</Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>)

                        }
                    </div>

                    {/* Mobile Menus */}

                    <div className={` ${heading === link.name ? "md:hidden" : "hidden"} `}>
                        {
                            link.sublinks.map((slinks) => (
                                <div className=''>
                                    <div>
                                        <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")}
                                            className='py-4 pl-7 font-semibold md:pr-0 pr-5 pointer flex justify-between items-center '>{slinks.Head}

                                            <span className='text-xl md:mt-1 md:ml-2 inline'>
                                                <i className={`${subHeading === slinks.Head ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                                            </span>

                                        </h1>
                                    </div>
                                    <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                        }`}>
                                        {slinks.sublink.map(slink => (
                                            <li className='py-3 pl-14 '>
                                                <Link to={slink.link} className='hover:text-primary hover:text-blue-500'>
                                                    {slink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </>


}

export default NavLinks;