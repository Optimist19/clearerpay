import React from 'react'
import { ArrowDown, ArrowUp, ChevronDown, MoreVertical, Plus } from 'lucide-react'
import { BiTransferAlt } from 'react-icons/bi'
import { Avatar } from './ui/avatar'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'


function BalanceMerchant() {
  return (
	<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold">NGN</p>
                  <p className="text-gray-500">. Naira</p>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                <Button variant="ghost" className="gap-1 font-bold text-[17px]">
                  <Plus size={16} />
                  Deposit
                </Button>
              </div>

              <div className="mb-8">
                <h2 className="text-[20px] md:text-3xl  font-bold">
                  ₦ 34,645,233
                </h2>
              </div>

              <div className="flex gap-2">
                {/* <BiTransfer  /> */}

                <Button
                  variant="ghost"
                  className="flex-1 text-[12px] md:text-[17px] gap-2 bg-gray-100 border-gray-200 font-bold">
                  <ArrowUp size={16} className="hidden md:block" />
                  Send
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 text-[12px] md:text-[17px] gap-2 bg-gray-100 border-gray-200 font-bold">
                  Receive
                  <ArrowDown size={16} className=" hidden md:block" />
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 text-[12px] md:text-[17px] gap-2 bg-gray-100 border-gray-200 font-bold">
                  <BiTransferAlt className="text-4xl hidden md:block" />
                  Swap
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-gray-100 border-gray-200 font-bold rounded-full">
                  <MoreVertical size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Merchants Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Merchants</h2>
                <Button variant="ghost" className="gap-1 font-bold">
                  <Plus size={16} />
                  Add Merchants
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <Avatar className="h-16 w-16 flex justify-center items-center bg-gray-100 text-gray-500">
                      <p className="text-sm font-bold">AD</p>
                    </Avatar>
                    <span className="text-xs bg-gray-100 py-1 px-3 rounded-full text-gray-500 font-semibold">
                      Adisa Debo...
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button variant="link" size="sm" className="text-gray-500">
                  See all
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
  )
}

export default BalanceMerchant