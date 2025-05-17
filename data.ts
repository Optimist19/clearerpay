interface ExchangeRateType {
	from: string;
	to: string;
	rate: string;
	value: string;
	fromCur: string;
	toCur: string;
}

export const exchangeRate: ExchangeRateType[] = [
	{
	  from: "NGN",
	  to: "USD",
	  rate: "₦1,640",
	  value: "$1",
	  fromCur: "/nig.jpg",
	  toCur: "/USA.png"
	},
	{
	  from: "NGN",
	  to: "USD",
	  rate: "₦1,640",
	  value: "$1",
	  fromCur: "/nig.jpg",
	  toCur: "/USA.png"
	},
	{
	  from: "NGN",
	  to: "GBP",
	  rate: "₦1,640",
	  value: "€1",
	  fromCur: "/nig.jpg",
	  toCur: "/GBP.png"
	},
	{
	  from: "NGN",
	  to: "EUR",
	  rate: "₦1,640",
	  value: "£1",
	  fromCur: "/nig.jpg",
	  toCur: "/EUR.jpeg"
	},
	{
	  from: "NGN",
	  to: "EUR",
	  rate: "₦1,640",
	  value: "£1",
	  fromCur: "/nig.jpg",
	  toCur: "/EUR.jpeg"
	},
	{
	  from: "NGN",
	  to: "YEN",
	  rate: "₦1,640",
	  value: "¥1",
	  fromCur: "/nig.jpg",
	  toCur: "/yen.jpg"
	},
	{
	  from: "NGN",
	  to: "YEN",
	  rate: "₦1,640",
	  value: "¥1",
	  fromCur: "/nig.jpg",
	  toCur: "/yen.jpg"
	}
  ];


interface DataPointType {
	day: number;
	"Money in": string;
	"Money out": string;
}

export const data: DataPointType[] = [
	{ day: 1, "Money in": "40", "Money out": "24" },
	{ day: 8, "Money in": "30", "Money out": "45" },
	{ day: 15, "Money in": "50", "Money out": "65" },
	{ day: 22, "Money in": "40", "Money out": "70" },
	{ day: 31, "Money in": "20", "Money out": "40" }
];
