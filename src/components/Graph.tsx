"use client"
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

import { ChevronDown } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from '../../data'
function Graph() {
  return (
	<Card className="">
	<CardContent className="p-6">
	  <div className="flex justify-between items-center mb-6">
		<h2 className="text-lg font-bold">Money out/Money in</h2>
		<Button variant="outline" className="gap-1">
		  Date Range
		  <ChevronDown size={16} />
		</Button>
	  </div>

	  <div className="flex text-[15px] items-center gap-6 mb-4">
		<div className="flex items-center gap-2">
		  <span className="w-3 h-3 rounded-full bg-[#FDAB9E]"></span>
		  <span className="">Money in ₦1,000,000</span>
		</div>
		<div className="flex items-center gap-2">
		  <span className="w-3 h-3 rounded-full bg-[#FFF0BD]"></span>
		  <span className="">Money out ₦1,000,000</span>
		</div>
	  </div>

	  <div className="h-64">
		<ResponsiveContainer width="100%" height="100%">
		  <AreaChart data={data}>
			<Tooltip />
			<XAxis dataKey="day" />
			<YAxis orientation="right" />
			<CartesianGrid strokeDasharray="5 5" />
			<Area
			  type="monotone"
			  dataKey="Money in"
			  stroke="red"
			  fillOpacity={1}
			  fill="rgba(253, 171, 158, 0.6)"
			/>
			<Area
			  type="monotone"
			  dataKey="Money out"
			  stroke="#F2C078"
			  fillOpacity={1}
			  fill="rgba(255, 240, 189, 0.5)
"
			/>
		  </AreaChart>
		</ResponsiveContainer>
	  </div>
	</CardContent>
  </Card>  )
}

export default Graph