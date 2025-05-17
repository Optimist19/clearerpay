"use client"

import React, { useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';
import { BiTransferAlt } from 'react-icons/bi';
import { exchangeRate } from '../../data';

function FxRate() {
	const controls = useAnimation();

	useEffect(() => {
		const move = async () => {
		  while (true) {
			await controls.start({
			  x: "-100%",
			  transition: { duration: 100, ease: "linear" }
			});
			controls.set({ x: "0%" });
		  }
		};
		move();

	  }, [controls]);
	
  return (
	<Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">FX Rates</h2>
              <Button variant="link" size="sm" className="text-gray-500">
                See all
              </Button>
            </div>
            <div className="overflow-hidden w-full">
              <motion.div className="flex gap-4 w-max" animate={controls}>
                {[...exchangeRate, ...exchangeRate].map((rate, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 p-3  rounded-md bg-gray-50 shadow-sm">
                    <div className="flex items-center">
                      <Image
                        className="w-11 h-11 rounded-full"
                        src={rate.fromCur}
                        alt={`${rate.from} currency`}
                        height={50}
                        width={50}
                      />
                      <Image
                        className="w-8 h-8 rounded-full ml-[-24px]"
                        src={rate.toCur}
                        alt={`${rate.to} currency`}
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex   gap-[2vw] text-gray-500 font-semibold">
                        <p className="text-sm font-medium">{rate.from}</p>
                        <p className="text-sm font-medium">{rate.to}</p>
                      </div>
                      <BiTransferAlt className="text-gray-500 text-[18px]" />
                      <div className="flex   gap-[2vw] font-bold">
                        <p className="text-sm">{rate.rate}</p>
                        <p className="text-sm">{rate.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </CardContent>
        </Card>
  )
}

export default FxRate