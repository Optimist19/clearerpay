import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io'
import { BiTransferAlt } from 'react-icons/bi'
import { ArrowRight, MoreVertical } from 'lucide-react'

function Transaction() {
  return (
	<Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Recent Transactions</h2>
                <Button variant="link" size="sm" className="text-gray-500">
                  See all
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    type: "sent",
                    currency: "GBP",
                    amount: "-₦1,000,000",
                    time: "Today, 13:30",
                    icon: <IoMdArrowUp />
                  },
                  {
                    type: "exchanged",
                    from: "GBP",
                    to: "NGN",
                    amount: "-£1,000",
                    received: "+₦200,000",
                    time: "Today, 13:30",
                    icon: <BiTransferAlt />
                  },
                  {
                    type: "receive",
                    from: "GBP",
                    to: "NGN",
                    amount: "+₦200,000",
                    time: "Today, 13:30",
                    icon: <IoMdArrowDown />
                  },
                  {
                    type: "withdraw",
                    currency: "GBP",
                    amount: "+₦200,000",
                    time: "Today, 13:30",
                    icon: <IoMdArrowDown />
                  }
                ].map((tx, i) => (
                  <div
                    key={i}
                    className="grid gap-1 md:gap-0 md:grid-cols-3 text-[13px] p-3 rounded-md bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === "sent"
                            ? "bg-red-100 text-red-500"
                            : tx.type === "exchanged"
                            ? "bg-yellow-100 text-yellow-500"
                            : "bg-green-100 text-green-500"
                        }`}>
                        <span>{tx.icon}</span>
                      </div>
                      <div className="">
                        <div className="flex items-center gap-2">
                          <span className="font-bold capitalize">
                            {tx.type}
                          </span>
                          <span className="font-bold">{tx.currency}</span>
                          {tx.from && tx.to && (
                            <div className="flex items-center gap-1 font-bold">
                              <span>{tx.from}</span>
                              <ArrowRight size={12} />
                              <span>{tx.to}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 md:leading-10 md:text-end">
                      Sent to John Doe · {tx.time}
                    </div>
                    <div className="flex items-center justify-end gap-2 ">
                      <span
                        className={
                          tx.amount.startsWith("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }>
                        {tx.amount}/
                      </span>
                      {tx.received && (
                        <span className="text-green-500">{tx.received}</span>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
  )
}

export default Transaction