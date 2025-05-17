"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Settings, User } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };



  return (
    <header className="fixed right-0 left-0 top-0 px-5 z-10 border-b-2 bg-white py-[2vh]">
      <div className="">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="relative font-extrabold ">
              <h1 className="custom-text ">ClearerPay</h1>
              <p className="absolute  top-0  right-[-10px] text-[5px] ">TM</p>
              <p className="absolute  top-3 text-white left-[5.5px] ">I</p>
            </div>

            {/* Hamburger Menu Button */}
            <motion.button
              className="md:hidden z-50"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}>
                    <X className="h-6 w-6 text-gray-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}>
                    <Menu className="h-6 w-6 text-gray-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}>
                  <motion.nav className="py-4 px-6">
                    <motion.ul className="space-y-4">
                      <motion.li
                        variants={itemVariants}
                        className="flex items-center gap-2 py-2">
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
                        <Link href="#" className="text-gray-700 font-medium">
                          Dashboard
                        </Link>
                      </motion.li>
                      <motion.li variants={itemVariants} className="py-2">
                        <Link href="#" className="text-gray-700 font-medium">
                          Wallet
                        </Link>
                      </motion.li>
                      <motion.li variants={itemVariants} className="py-2">
                        <Link href="#" className="text-gray-700 font-medium">
                          Merchants
                        </Link>
                      </motion.li>
                      <motion.li variants={itemVariants} className="py-2">
                        <Link href="#" className="text-gray-700 font-medium">
                          Transactions
                        </Link>
                      </motion.li>
                      <motion.li variants={itemVariants} className="py-2">
                        <Link href="#" className="text-gray-700 font-medium">
                          Beneficiaries
                        </Link>
                      </motion.li>
                      <motion.li
                        variants={itemVariants}
                        className="py-2 pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <User size={15} className="text-gray-600" />
                          <span className="text-gray-700 font-medium">
                            Personal account
                          </span>
                        </div>
                      </motion.li>
                      <motion.li variants={itemVariants} className="py-2">
                        <div className="flex items-center gap-2">
                          <Settings size={15} className="text-gray-600" />
                          <span className="text-gray-700 font-medium">
                            Settings
                          </span>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
