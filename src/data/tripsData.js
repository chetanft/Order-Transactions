export const tripsData = [
  {
    orderId: "SO-78542",
    consignor: "JSW Steel - Vijayanagar",
    consignee: "Tata Projects Ltd",
    route: "VJN-BLR",
    tripType: "FTL",
    stage: "Planning",
    status: "In Process",
    id: "PO-45678",
    deliveryStatus: "On time delivery",
    deliveryDate: "15 May, 2023",
    weight: "85 Ton",
    skus: "24",
    cost: "₹ 7,25,000",
    createdAt: "10:15 AM, 12 Apr 2023",
    addresses: {
      sender: {
        name: "JSW Steel - Vijayanagar",
        address: "JSW Centre, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra - 400051",
        gstin: "27AAACJ4323N1ZF",
        email: "logistics@jsw.in",
        phone: "022-4286-1000"
      },
      shipTo: {
        name: "Tata Projects Ltd",
        address: "One Boulevard, Lake Boulevard Road, Powai, Mumbai, Maharashtra - 400076",
        gstin: "27AAACT2727Q1ZW",
        email: "procurement@tataprojects.com",
        phone: "022-6282-9500"
      },
      billTo: {
        name: "Tata Projects Ltd - Finance",
        address: "One Boulevard, Lake Boulevard Road, Powai, Mumbai, Maharashtra - 400076",
        gstin: "27AAACT2727Q1ZW",
        email: "finance@tataprojects.com",
        phone: "022-6282-9500"
      }
    }
  },
  {
    orderId: "SO-78543",
    consignor: "JSW Steel - Dolvi",
    consignee: "L&T Construction",
    route: "DLV-MUM",
    tripType: "FTL",
    stage: "Indent",
    status: "In Assignment",
    id: "Indent: 875453",
    deliveryStatus: "On time delivery",
    deliveryDate: "18 May, 2023",
    weight: "62 Ton",
    skus: "18",
    cost: "₹ 5,80,000",
    createdAt: "2:30 PM, 14 Apr 2023",
    addresses: {
      sender: {
        name: "JSW Steel - Dolvi",
        address: "Dolvi Works, Village Dolvi, Taluka Pen, Raigad, Maharashtra - 402107",
        gstin: "27AAACJ4323N2ZE",
        email: "dolvi.logistics@jsw.in",
        phone: "02143-277-501"
      },
      shipTo: {
        name: "L&T Construction",
        address: "L&T Construction Headquarters, Mount Poonamallee Road, Manapakkam, Chennai, Tamil Nadu - 600089",
        gstin: "33AAACL0140K1Z8",
        email: "materials@lntecc.com",
        phone: "044-2252-6000"
      },
      billTo: {
        name: "L&T Construction - Finance",
        address: "L&T Construction Headquarters, Mount Poonamallee Road, Manapakkam, Chennai, Tamil Nadu - 600089",
        gstin: "33AAACL0140K1Z8",
        email: "finance@lntecc.com",
        phone: "044-2252-6000"
      }
    }
  },
  {
    orderId: "SO-78544",
    consignor: "JSW Steel - Salem",
    consignee: "Godrej Construction",
    route: "SLM-HYD",
    tripType: "FTL",
    stage: "Tracking",
    status: "In Transit",
    id: "Trip: 89147250",
    deliveryStatus: "Delayed by 1 day",
    deliveryDate: "ETA: 20 May, 2023",
    weight: "70 Ton",
    skus: "20",
    cost: "₹ 6,50,000",
    createdAt: "9:45 AM, 15 Apr 2023",
    addresses: {
      sender: {
        name: "JSW Steel - Salem",
        address: "Salem Steel Plant, Pottaneri, Salem, Tamil Nadu - 636453",
        gstin: "33AAACJ4323N1ZH",
        email: "salem.logistics@jsw.in",
        phone: "0427-240-1000"
      },
      shipTo: {
        name: "Godrej Construction",
        address: "Godrej Construction, Pirojshanagar, Vikhroli, Mumbai, Maharashtra - 400079",
        gstin: "27AAACG2426K1ZV",
        email: "procurement@godrejconstruction.com",
        phone: "022-2518-8010"
      },
      billTo: {
        name: "Godrej Construction - Finance",
        address: "Godrej Construction, Finance Department, Pirojshanagar, Vikhroli, Mumbai, Maharashtra - 400079",
        gstin: "27AAACG2426K1ZV",
        email: "finance@godrejconstruction.com",
        phone: "022-2518-8010"
      }
    },
    timeline: [
      {
        date: "15 April 2023",
        events: [
          {
            type: "SO Generated",
            time: "09:45 AM",
            details: "SO: 78544"
          },
          {
            type: "Planning",
            timeTaken: "3 hrs",
            details: "SO: 78544",
            subEvents: [
              {
                type: "In Process",
                runtime: "2 hr",
                details: "Weight: 70 Ton"
              },
              {
                type: "Plan generated",
                time: "12:45 PM",
                details: "Plan ID: 32151235"
              }
            ]
          }
        ]
      },
      {
        date: "16 April 2023",
        events: [
          {
            type: "Indent",
            timeTaken: "8 hrs",
            details: "Indent ID: 875454",
            subEvents: [
              {
                type: "Published",
                time: "10:30 AM",
                details: [
                  "Acceptance deadline: 12:00 PM, 17 April 2023",
                  "Published to: Safe and Express Transporters"
                ]
              },
              {
                type: "Pending Acceptance",
                timeTaken: "3 hrs",
                details: [
                  "Start: 10:30 AM",
                  "End: 1:30 PM"
                ]
              },
              {
                type: "In Assignment",
                timeTaken: "5 hrs",
                details: [
                  "Start: 1:30 PM",
                  "End: 6:30 PM"
                ]
              }
            ]
          }
        ]
      },
      {
        date: "17 April 2023",
        events: [
          {
            type: "Reporting",
            time: "08:15 AM",
            details: "Vehicle No: TN 04 AK 1234"
          },
          {
            type: "Transit",
            timeTaken: "Ongoing",
            details: "Trip ID: 89147250"
          }
        ]
      }
    ],
    comments: [
      {
        id: 1,
        time: "10:30 AM, 17 Apr 2023",
        text: "Vehicle has been loaded and departed from Salem plant. All documentation complete.",
        user: {
          initial: "R",
          name: "Rajesh Kumar"
        }
      },
      {
        id: 2,
        time: "6:45 PM, 17 Apr 2023",
        text: "Vehicle crossed Krishnagiri toll. Expected delay due to highway construction between Krishnagiri and Bangalore.",
        user: {
          initial: "S",
          name: "Suresh Menon"
        }
      },
      {
        id: 3,
        time: "9:15 AM, 18 Apr 2023",
        text: "Vehicle reached Bangalore. Will be delayed by approximately 1 day due to traffic restrictions in Hyderabad city limits.",
        user: {
          initial: "A",
          name: "Amit Singh"
        }
      }
    ]
  },
  {
    orderId: "SO-78545",
    consignor: "JSW Cement - Nandyal",
    consignee: "Prestige Group",
    route: "NDL-BLR",
    tripType: "FTL",
    stage: "ePOD",
    status: "Pending",
    id: "EPOD: 823746",
    deliveryStatus: "Delayed delivery",
    deliveryDate: "22 May, 2023"
  },
  {
    orderId: "SO-78546",
    consignor: "JSW Cement - Dolvi",
    consignee: "Shapoorji Pallonji",
    route: "DLV-PUN",
    tripType: "FTL",
    stage: "Freight Invoicing",
    status: "Pending Approval",
    id: "INV: 12635",
    deliveryStatus: "On time delivery",
    deliveryDate: "16 May, 2023"
  },
  {
    orderId: "SO-78547",
    consignor: "JSW Steel - Vijayanagar",
    consignee: "Sobha Developers",
    route: "VJN-CHN",
    tripType: "PTL",
    stage: "Order Booking",
    status: "In Assignment",
    id: "Ref: 723895",
    deliveryStatus: "On time delivery",
    deliveryDate: "19 May, 2023"
  },
  {
    orderId: "SO-78548",
    consignor: "JSW Paints - Vijayanagar",
    consignee: "Brigade Enterprises",
    route: "VJN-BLR",
    tripType: "PTL",
    stage: "Tracking",
    status: "In Transit",
    id: "AWB: 872356",
    deliveryStatus: "Delayed by 2 days",
    deliveryDate: "ETA: 23 May, 2023"
  },
  {
    orderId: "SO-78549",
    consignor: "JSW Steel - Dolvi",
    consignee: "DLF Limited",
    route: "DLV-DEL",
    tripType: "PTL",
    stage: "Freight Invoicing",
    status: "Reconciliation Pending",
    id: "AWB: 312567",
    deliveryStatus: "On time delivery",
    deliveryDate: "17 May, 2023"
  },
  {
    orderId: "SO-78550",
    consignor: "JSW Steel - Salem",
    consignee: "Lodha Group",
    route: "SLM-MUM",
    tripType: "FTL",
    stage: "Freight Invoicing",
    status: "In Transit",
    id: "AWB: 876345",
    deliveryStatus: "On time delivery",
    deliveryDate: "21 May, 2023"
  },
  {
    orderId: "SO-78551",
    consignor: "JSW Cement - Nandyal",
    consignee: "Raheja Developers",
    route: "NDL-HYD",
    tripType: "FTL",
    stage: "Planning",
    status: "In Process",
    id: "PO-45679",
    deliveryStatus: "On time delivery",
    deliveryDate: "24 May, 2023"
  },
  {
    orderId: "SO-78552",
    consignor: "JSW Steel - Vijayanagar",
    consignee: "Hiranandani Group",
    route: "VJN-MUM",
    tripType: "FTL",
    stage: "Indent",
    status: "In Assignment",
    id: "Indent: 875454",
    deliveryStatus: "On time delivery",
    deliveryDate: "25 May, 2023"
  },
  {
    orderId: "SO-78553",
    consignor: "JSW Paints - Vasind",
    consignee: "Puravankara Limited",
    route: "VSN-BLR",
    tripType: "PTL",
    stage: "Tracking",
    status: "In Transit",
    id: "Trip: 89147251",
    deliveryStatus: "Delayed by 3 days",
    deliveryDate: "ETA: 28 May, 2023"
  },
  {
    orderId: "SO-78554",
    consignor: "JSW Steel - Dolvi",
    consignee: "Godrej Properties",
    route: "DLV-PUN",
    tripType: "FTL",
    stage: "ePOD",
    status: "Pending",
    id: "EPOD: 823747",
    deliveryStatus: "Delayed delivery",
    deliveryDate: "26 May, 2023"
  },
  {
    orderId: "SO-78555",
    consignor: "JSW Cement - Salboni",
    consignee: "Oberoi Realty",
    route: "SLB-KOL",
    tripType: "FTL",
    stage: "Freight Invoicing",
    status: "Pending Approval",
    id: "INV: 12636",
    deliveryStatus: "On time delivery",
    deliveryDate: "22 May, 2023"
  },
  {
    orderId: "SO-78556",
    consignor: "JSW Steel - Salem",
    consignee: "Prestige Group",
    route: "SLM-BLR",
    tripType: "PTL",
    stage: "Order Booking",
    status: "In Assignment",
    id: "Ref: 723896",
    deliveryStatus: "On time delivery",
    deliveryDate: "27 May, 2023"
  }
];
