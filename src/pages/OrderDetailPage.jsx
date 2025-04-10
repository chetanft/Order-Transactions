import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './OrderDetailPage.module.css';
import InvoiceDetailsModal from '../components/InvoiceDetailsModal';

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const displayOrderId = "SO: 78544";
  const [activeInvoiceTab, setActiveInvoiceTab] = useState(1);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

  const openInvoiceModal = () => setIsInvoiceModalOpen(true);
  const closeInvoiceModal = () => setIsInvoiceModalOpen(false);

  // These functions would navigate to previous/next orders in a real app
  const handlePrevOrder = () => console.log('Navigate to previous order');
  const handleNextOrder = () => console.log('Navigate to next order');

  // Get current date for realistic timestamps
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(currentDate);

  // Realistic data for this order
  const formattedETA = "09:34 AM, 20 May 2023";
  const formattedStartDate = "07:20 AM, 17 Apr 2023";

  // Order data
  const orderData = {
    soNumber: "78544",
    totalWeight: "70 Ton",
    numberOfDOs: "1",
    numberOfSKUs: "20",
    totalCost: "₹ 6,50,000",
    createdAt: "9:45 AM, 15 Apr 2023",
    transitStatus: "In Transit",
    isOnTime: false,
    eta: formattedETA,
    sta: formattedStartDate,
    nextMilestone: "At Destination",
    etaDestination: formattedETA,
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
  };
  return (
    <div className={styles.orderDetailPage}>
      {/* Header Navigation */}
      <div className={styles.headerNav}>
        <div className={styles.tabsContainer}>
          <button className={`${styles.tabButton} ${styles.active}`}>Order Data</button>
          <button className={styles.tabButton}>Order Details</button>
        </div>
      </div>

      {/* Order Header */}
      <div className={styles.orderHeader}>
        <div className={styles.backNavigation}>
          <button className={styles.backButton} onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1>{displayOrderId}</h1>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.actionButton} onClick={openInvoiceModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
          <button className={styles.navButton} onClick={handlePrevOrder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className={styles.navButton} onClick={handleNextOrder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Status Banner */}
      <div className={styles.statusBanner}>
        <div className={styles.statusInfo}>
          <div className={styles.statusLabel}>Delivering in 2 days 2 hr 20 min</div>
          <div className={styles.statusBadge}>On time</div>
        </div>
        <div className={styles.etaInfo}>
          <div className={styles.etaLabel}>ETA</div>
          <div className={styles.etaTime}>{formattedETA}</div>
        </div>
      </div>

      {/* Transit Info */}
      <div className={styles.transitInfo}>
        <div className={styles.transitStatus}>
          <div className={styles.transitLabel}>Transit</div>
          <div className={styles.transitBadge}>In Transit</div>
        </div>
        <div className={styles.transitTimes}>
          <div className={styles.timeBlock}>
            <div className={styles.timeLabel}>Start time</div>
            <div className={styles.timeValue}>{formattedStartDate}</div>
          </div>
          <div className={styles.timeBlock}>
            <div className={styles.timeLabel}>End time</div>
            <div className={styles.timeValue}>-</div>
          </div>
        </div>
        <div className={styles.milestoneInfo}>
          <div className={styles.milestoneLabel}>Next Milestone:</div>
          <div className={styles.milestoneValue}>At Destination</div>
        </div>
        <div className={styles.etlInfo}>
          <div className={styles.etlLabel}>ETL:</div>
          <div className={styles.etlValue}>{formattedStartDate}</div>
        </div>
      </div>

      {/* Planning and Indent IDs */}
      <div className={styles.idSection}>
        <div className={styles.idRow}>
          <div className={styles.idLabel}>Planning ID</div>
          <div className={styles.idValue}>
            PO-45678
            <button className={styles.copyButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.idRow}>
          <div className={styles.idLabel}>Indent ID</div>
          <div className={styles.idValue}>
            Indent: 875453
            <button className={styles.copyButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.idRow}>
          <div className={styles.idLabel}>Journey ID</div>
          <div className={styles.idValue}>
            Trip: 89147250
            <button className={styles.copyButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.idRow}>
          <div className={styles.idLabel}>ePOD ID</div>
          <div className={styles.idValue}>
            Pending
            <button className={styles.copyButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.idRow}>
          <div className={styles.idLabel}>Invoice Number</div>
          <div className={styles.idValue}>
            Pending
            <button className={styles.copyButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Order Timeline */}
        <div className={styles.orderTimelineSection}>
          <h2 className={styles.sectionTitle}>Order Timeline</h2>
          <div className={styles.timelineDate}>{formattedDate}</div>

          <div className={styles.timeline}>
            {/* Planning Stage */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIconActive}>
                <div className={styles.timelineDot}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>Planning</div>
                  <div className={styles.timelineDuration}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Time taken: 2 hrs
                  </div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>{displayOrderId}</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>In Process</div>
                  <div className={styles.timelineRuntime}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Runtime: 2 hr
                  </div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Distance travelled: 122 km</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Plan generated</div>
                  <div className={styles.timelineTime}>At {formattedStartDate.split(',')[0]}</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Plan ID: 32151235</div>
                </div>
              </div>
            </div>

            {/* Indent Stage */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIconActive}>
                <div className={styles.timelineDot}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>Indent</div>
                  <div className={styles.timelineDuration}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Time taken: 12 hrs
                  </div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Indent ID: 7383465</div>
                </div>
              </div>
            </div>

            {/* Published Stage */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIconActive}>
                <div className={styles.timelineDot}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>Published</div>
                  <div className={styles.timelineTime}>On: 09:34 AM</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Acceptance deadline: 09:45 AM, 26 April 2025</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Published to: Safe and Express Transporters</div>
                </div>
              </div>
            </div>

            {/* Pending Acceptance Stage */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIconActive}>
                <div className={styles.timelineDot}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>Pending Acceptance</div>
                  <div className={styles.timelineDuration}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Time taken: 2 hrs
                  </div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>MDC Labs Ltd, Amritsar, Punjab</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Start: 09:34 AM</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>End: 11:34 AM</div>
                </div>
              </div>
            </div>

            {/* In Assignment Stage */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIconActive}>
                <div className={styles.timelineDot}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>In Assignment</div>
                  <div className={styles.timelineDuration}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Time taken: 4 hrs
                  </div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>MDC Labs Ltd, Amritsar, Punjab</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>
                    <span className={styles.delayedText}>Detained by 30 min</span>
                  </div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>Start: 09:34 AM</div>
                </div>
                <div className={styles.timelineDetails}>
                  <div className={styles.timelineDetail}>End: 11:34 AM</div>
                </div>
              </div>
            </div>

            {/* Reporting Stage */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIconInactive}>
                <div className={styles.timelineDot}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>Reporting</div>
                  <div className={styles.timelineTime}>Reported On: 09:34 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className={styles.commentsSection}>
          <h2 className={styles.sectionTitle}>Comments</h2>

          <div className={styles.comment}>
            <div className={styles.commentHeader}>
              <div className={styles.commentTime}>{formattedStartDate}</div>
            </div>
            <div className={styles.commentContent}>
              <div className={styles.commentText}>Shipment has been dispatched from Salem Steel Plant. Tracking information updated.</div>
              <div className={styles.commentUser}>
                <div className={styles.userAvatar}>R</div>
                <div className={styles.userName}>Rajesh Kumar</div>
              </div>
            </div>
          </div>

          <div className={styles.comment}>
            <div className={styles.commentHeader}>
              <div className={styles.commentTime}>{formattedDate}</div>
            </div>
            <div className={styles.commentContent}>
              <div className={styles.commentText}>Vehicle is on route to Hyderabad. Expected to reach destination on time.</div>
              <div className={styles.commentUser}>
                <div className={styles.userAvatar}>A</div>
                <div className={styles.userName}>Amit Singh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Section */}
      <div className={styles.orderDetailsSection}>
        <h2 className={styles.sectionTitle}>Order Details</h2>

        <div className={styles.detailsTable}>
          <div className={styles.detailsRow}>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>Total weight</div>
              <div className={styles.cellValue}>25 Ton</div>
            </div>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>No. of DOs</div>
              <div className={styles.cellValue}>1</div>
            </div>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>Buyer name</div>
              <div className={styles.cellValue}>Godrej Construction</div>
            </div>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>Total Cost</div>
              <div className={styles.cellValue}>₹ 5,00,000</div>
            </div>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>Planned Quantity</div>
              <div className={styles.cellValue}>0 Ton</div>
            </div>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>Dispatched Quantity</div>
              <div className={styles.cellValue}>0 ton</div>
            </div>
            <div className={styles.detailsCell}>
              <div className={styles.cellLabel}>Created at</div>
              <div className={styles.cellValue}>3 PM, 10 Feb 24</div>
            </div>
          </div>
        </div>

        <div className={styles.detailsRow}>
          <div className={styles.detailsCell}>
            <div className={styles.cellLabel}>Load ID</div>
            <div className={styles.cellValue}>782349</div>
          </div>
          <div className={styles.detailsCell}>
            <div className={styles.cellLabel}>E way Bill Number</div>
            <div className={styles.cellValue}>243563978135</div>
          </div>
          <div className={styles.detailsCell}>
            <div className={styles.cellLabel}>E way expiry date</div>
            <div className={styles.cellValue}>12 Jan 2025</div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className={styles.complianceSection}>
          <div className={styles.complianceItem}>
            <h3 className={styles.complianceTitle}>Reporting Compliance</h3>
            <div className={styles.complianceRow}>
              <div className={styles.complianceCell}>
                <div className={styles.cellLabel}>Start time</div>
                <div className={styles.cellValue}>07:20 AM, 11 Mar 23</div>
              </div>
              <div className={styles.complianceCell}>
                <div className={styles.cellLabel}>End time</div>
                <div className={styles.cellValue}>07:20 AM, 11 Mar 23</div>
              </div>
              <div className={styles.complianceStatus}>
                <div className={styles.onTimeStatus}>On time</div>
              </div>
            </div>
          </div>

          <div className={styles.complianceItem}>
            <h3 className={styles.complianceTitle}>Dispatch Compliance</h3>
            <div className={styles.complianceRow}>
              <div className={styles.complianceCell}>
                <div className={styles.cellLabel}>Start time</div>
                <div className={styles.cellValue}>07:20 AM, 11 Mar 23</div>
              </div>
              <div className={styles.complianceCell}>
                <div className={styles.cellLabel}>End time</div>
                <div className={styles.cellValue}>07:20 AM, 11 Mar 23</div>
              </div>
              <div className={styles.complianceStatus}>
                <div className={styles.onTimeStatus}>On time</div>
              </div>
            </div>
          </div>

          <div className={styles.complianceItem}>
            <h3 className={styles.complianceTitle}>Transit Compliance</h3>
            <div className={styles.complianceRow}>
              <div className={styles.complianceCell}>
                <div className={styles.cellLabel}>Start time</div>
                <div className={styles.cellValue}>07:20 AM, 11 Mar 23</div>
              </div>
              <div className={styles.complianceCell}>
                <div className={styles.cellLabel}>End time</div>
                <div className={styles.cellValue}>07:20 AM, 11 Mar 23</div>
              </div>
              <div className={styles.complianceStatus}>
                <div className={styles.onTimeStatus}>On time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sender and Ship To Information */}
        <div className={styles.addressSection}>
          <div className={styles.addressColumn}>
            <h3 className={styles.addressTitle}>Sender</h3>
            <div className={styles.addressCompany}>JSW Steel - Salem</div>
            <div className={styles.addressDetails}>
              Salem Steel Plant, Pottaneri, Salem, Tamil Nadu - 636453
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>GSTIN: 12345678</div>
              <div className={styles.contactEmail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                someemailaddress@somemail.com
              </div>
              <div className={styles.contactPhone}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                84973-47593
              </div>
            </div>
          </div>

          <div className={styles.addressColumn}>
            <h3 className={styles.addressTitle}>Ship To</h3>
            <div className={styles.addressCompany}>Godrej Construction</div>
            <div className={styles.addressDetails}>
              Godrej Construction, Pirojshanagar, Vikhroli, Mumbai, Maharashtra - 400079
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>GSTIN: 12345789</div>
              <div className={styles.contactEmail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                someemailaddress@somemail.com
              </div>
              <div className={styles.contactPhone}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                84973-47593
              </div>
            </div>
          </div>

          <div className={styles.addressColumn}>
            <h3 className={styles.addressTitle}>Bill To</h3>
            <div className={styles.addressCompany}>Godrej Construction</div>
            <div className={styles.addressDetails}>
              Godrej Construction, Finance Department, Pirojshanagar, Vikhroli, Mumbai, Maharashtra - 400079
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>GSTIN: 12345789</div>
              <div className={styles.contactEmail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                someemailaddress@somemail.com
              </div>
              <div className={styles.contactPhone}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                84973-47593
              </div>
            </div>
          </div>
        </div>

        {/* Invoices Section */}
        <div className={styles.invoicesSection}>
          <h2 className={styles.sectionTitle}>Invoices(2)</h2>

          <div className={styles.invoiceTabs}>
            <button
              className={`${styles.invoiceTab} ${activeInvoiceTab === 1 ? styles.activeTab : ''}`}
              onClick={() => setActiveInvoiceTab(1)}
            >
              Invoice 1
            </button>
            <button
              className={`${styles.invoiceTab} ${activeInvoiceTab === 2 ? styles.activeTab : ''}`}
              onClick={() => setActiveInvoiceTab(2)}
            >
              Invoice 2
            </button>
          </div>

          <div className={styles.invoiceDetails}>
            <div className={styles.invoiceRow}>
              <div className={styles.invoiceCell}>
                <div className={styles.cellLabel}>Invoice</div>
                <div className={styles.cellValue}>INV-12345</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvoiceDetailsModal
        isOpen={isInvoiceModalOpen}
        onClose={closeInvoiceModal}
        onPrev={handlePrevOrder}
        onNext={handleNextOrder}
        orderData={orderData}
      />
    </div>
  );
};

export default OrderDetailPage;
