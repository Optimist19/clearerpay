"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { IoMdNotifications } from 'react-icons/io';
import { Alert, AlertDescription } from './ui/alert';
function WelcomeMessage() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
   

		const timeout = setTimeout(() => {
		  setVisible(false);
		}, 5000);
	
		return () => clearTimeout(timeout);
	  }, []);

  return (
	<div className="flex flex-col md:flex-row md:gap-[15vw] items-start md:items-center md:gap-4 mb-4 mt-2 text-gray-500">
          <h1 className="text-[18px] pb-3 md:pb-0 font-medium">
            Welcome Andy 👋
          </h1>

          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>
                <Alert className="bg-orange-50 border-orange-50 text-gray-500 w-full md:w-auto">
                  <AlertDescription className="flex items-center gap-2 text-center">
                    <IoMdNotifications className="text-red-500 text-[19px]" />
                    <p>
                      Your account has been setup for OTC trade, please
                      <span className="font-extrabold text-black">
                        {" "}
                        Contact OTC{" "}
                      </span>
                      to transact
                    </p>
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  )
}

export default WelcomeMessage