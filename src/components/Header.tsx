"use client"

import { Settings, User, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { Button } from './ui/button';

export default function Header() {
	const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  return (
	<header className="relative hidden md:block">
        <div className="absolute w-[100%] h-[2px] bg-gray-400  bottom-2"></div>
        {/* for tab */}
        <div className="md:hidden  pt-7 ">
          <div className="relative">
            <nav className="text-[15px] text-gray-500">
             
              <ul className="flex items-center justify-between  lg:hidden ">
                <div className=" font-extrabold pb-[2.5vh]">
                  
                  <h1 className="custom-text">ClearerPay</h1>
                  <p className="absolute  top-0 left-[110px] text-[5px] ">TM</p>
                  <p className="absolute  top-4 text-gray-50 left-[5.5px] ">
                    I
                  </p>
                </div>
                <div className=" flex items-center  cursor-pointer hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <div>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Dashboard</p>
                </div>
                <li className="cursor-pointer font-semibold  hover:border-b-4 hover:border-black  hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Wallet</Link>
                </li>

                <li className="cursor-pointer font-semibold  hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Merchants</Link>
                </li>
                <li className=" cursor-pointer font-semibold  hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Transactions</Link>
                </li>
                <li className=" cursor-pointer font-semibold  hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Beneficiaries</Link>
                </li>
              </ul>

              {/* for large screen */}
              <ul className="flex gap-5 items-center hidden  lg:flex ">
                <div className=" flex items-center gap-0.5 cursor-pointer hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <div>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Dashboard</p>
                </div>
                <li className="cursor-pointer font-semibold hover:border-b-4 hover:border-black  hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Wallet</Link>
                </li>

                <li className="cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Merchants</Link>
                </li>
                <li className=" cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Transactions</Link>
                </li>
                <li className=" cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                  <Link href="#">Beneficiaries</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* for bigger device */}
        <div className="hidden md:block">
          <div className="   pt-7 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="relative font-extrabold pb-[2.5vh]">
                <h1 className="custom-text text-[30px]">ClearerPay</h1>
                <p className="absolute  top-0  right-[-10px] text-[5px] ">TM</p>
                <p className="absolute  top-4 text-gray-50 left-[5.5px] ">I</p>
              </div>

              <nav className="text-[15px] text-gray-500">
                <ul className="flex items-center gap-[6vw] justify-between  lg:hidden ">
                  <div className=" flex items-center font-semibold  cursor-pointer hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <li className="cursor-pointer font-semibold hover:border-b-4 hover:border-black  hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Wallet</Link>
                  </li>

                  <li className="cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Merchants</Link>
                  </li>
                  <li className=" cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Transactions</Link>
                  </li>
                  <li className=" cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Beneficiaries</Link>
                  </li>
                </ul>

                <ul className="flex gap-5 items-center hidden  lg:flex ">
                  <div className=" flex items-center font-semibold gap-0.5 cursor-pointer hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <li className="cursor-pointer font-semibold hover:border-b-4 hover:border-black  hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Wallet</Link>
                  </li>

                  <li className="cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Merchants</Link>
                  </li>
                  <li className=" cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Transactions</Link>
                  </li>
                  <li className=" cursor-pointer font-semibold hover:border-b-4 hover:border-black hover:text-black hover:font-bold pb-[2.5vh]">
                    <Link href="#">Beneficiaries</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="pb-[3vh] text-[15px] flex items-center hidden lg:flex gap-7">
              <div className="flex items-center bg-gray-600 py-2 px-3  rounded-full text-white ">
                <CgProfile />
                <select className="outline-none bg-gray-600">
                  <option value="">Personal account</option>
                </select>
              </div>

              <div className="text-gray-500 flex items-center gap-2 font-bold">
                <CiSettings />
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-6 right-6 z-50 hidden md:block lg:hidden">
          <div className="relative">
            {/* Floating menu items (shown when open) */}
            {isFloatingMenuOpen && (
              <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64 space-y-4 border border-gray-200 transition-all duration-300">
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <div className="flex items-center bg-gray-600 py-2 px-3 rounded-full text-white">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1">
                      <path
                        d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                    <select className="outline-none bg-gray-600 text-sm">
                      <option value="">Personal account</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Settings size={15} className="text-gray-500" />
                  <p className="text-gray-500 font-bold">Settings</p>
                </div>
              </div>
            )}

            {/* Floating button */}
            <Button
              onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
              className="h-12 w-12 rounded-full bg-gray-600 hover:bg-gray-700 shadow-lg flex items-center justify-center">
              {isFloatingMenuOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <User size={20} className="text-white" />
              )}
            </Button>
          </div>
        </div>
      </header>
  )
}
