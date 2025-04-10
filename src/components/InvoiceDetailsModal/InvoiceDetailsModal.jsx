import React, { useState, useEffect, useRef } from 'react';
import styles from './InvoiceDetailsModal.module.css';

const InvoiceDetailsModal = ({ isOpen, onClose, onPrev, onNext, orderData }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when component unmounts
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Match this with the CSS animation duration
  };

  if (!isOpen) return null;

  // Sample data (in a real app, this would come from props)
  const data = {
    soNumber: orderData?.soNumber || '21424',
    totalWeight: orderData?.totalWeight || '70 Ton',
    numberOfDOs: orderData?.numberOfDOs || '1',
    numberOfSKUs: orderData?.numberOfSKUs || '20',
    totalCost: orderData?.totalCost || '₹ 5,00,000',
    createdAt: orderData?.createdAt || '3 PM, 10 Feb 24',
    transitStatus: orderData?.transitStatus || 'In Transit',
    isOnTime: orderData?.isOnTime || true,
    eta: orderData?.eta || '09:34 AM, 12 Mar 23',
    sta: orderData?.sta || '06:14 AM, 11 Mar 23',
    nextMilestone: orderData?.nextMilestone || 'At Destination',
    etaDestination: orderData?.etaDestination || '07:20 AM, 11 Mar 23',
    sender: {
      name: orderData?.sender?.name || 'MDC Labs Ltd',
      address: orderData?.sender?.address || 'Consignor Address, 11th & 12th Floor, Hansalaya Building, 15 Barakhamba Road, Amritsar, Punjab',
      gstin: orderData?.sender?.gstin || '12345678',
      email: orderData?.sender?.email || 'someemailaddress@somemail.com',
      phone: orderData?.sender?.phone || '84973-47593'
    },
    shipTo: {
      name: orderData?.shipTo?.name || 'Sai Traders',
      address: orderData?.shipTo?.address || 'Consignor Address, 11th & 12th Floor, Hansalaya Building, 15 Barakhamba Road, New Delhi 110001',
      gstin: orderData?.shipTo?.gstin || '12345678',
      email: orderData?.shipTo?.email || 'someemailaddress@somemail.com',
      phone: orderData?.shipTo?.phone || '84973-47593'
    },
    billTo: {
      name: orderData?.billTo?.name || 'Sai Traders',
      address: orderData?.billTo?.address || 'Consignor Address, 11th & 12th Floor, Hansalaya Building, 15 Barakhamba Road, New Delhi 110001',
      gstin: orderData?.billTo?.gstin || '12345678',
      email: orderData?.billTo?.email || 'someemailaddress@somemail.com',
      phone: orderData?.billTo?.phone || '84973-47593'
    },
    ids: {
      planningId: orderData?.ids?.planningId || '84975345',
      indentId: orderData?.ids?.indentId || '84975345',
      journeyId: orderData?.ids?.journeyId || '84975345',
      epodId: orderData?.ids?.epodId || '-',
      invoiceNumber: orderData?.ids?.invoiceNumber || '-'
    },
    timeline: [
      {
        id: 1,
        date: '12 March 2023',
        events: [
          {
            type: 'SO Generated',
            time: '09:34 AM',
            details: 'SO: 7134895'
          },
          {
            type: 'Planning',
            timeTaken: '2 hrs',
            details: 'SO: 7134895',
            subEvents: [
              {
                type: 'In Process',
                runtime: '2 hr',
                details: 'Weight: 21 Ton'
              },
              {
                type: 'Plan generated',
                time: '09:34 AM',
                details: 'Plan ID: 32151235'
              }
            ]
          },
          {
            type: 'Indent',
            timeTaken: '12 hrs',
            details: 'Indent ID: 7283465',
            subEvents: [
              {
                type: 'Published',
                time: '09:34 AM',
                details: [
                  'Acceptance deadline: 09:45 AM, 26 April 2025',
                  'Published to: Safe and Express Transporters'
                ]
              },
              {
                type: 'Pending Acceptance',
                timeTaken: '2 hrs',
                details: [
                  'Start: 09:34 AM',
                  'End: 11:34 AM'
                ]
              },
              {
                type: 'In Assignment',
                timeTaken: '4 hrs',
                details: [
                  'Start: 09:34 AM',
                  'End: 11:34 AM'
                ]
              }
            ]
          },
          {
            type: 'Reporting',
            time: '09:34 AM',
            details: 'Vehicle No: AP 12K 1234'
          },
          {
            type: 'Transit',
            timeTaken: '3 days',
            details: 'Trip ID: 7283465'
          }
        ]
      }
    ],
    comments: [
      {
        id: 1,
        time: '11:20 AM, 12 Mar 24',
        text: 'Some comments done by some user on some time',
        user: {
          initial: 'S',
          name: 'Shastri'
        }
      },
      {
        id: 2,
        time: '11:20 AM, 12 Mar 24',
        text: 'Some comments done by some user on some time',
        user: {
          initial: 'S',
          name: 'Shastri'
        }
      }
    ]
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        ref={containerRef}
        className={`${styles.modalContainer} ${isClosing ? styles.closing : ''}`}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Invoice Details</h2>
          <div className={styles.modalActions}>
            <button className={styles.navButton} onClick={onPrev}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className={styles.navButton} onClick={onNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button className={styles.closeButton} onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'details' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'timeline' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'comments' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('comments')}
          >
            Comments
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'details' && (
            <div className={styles.detailsTab}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>SO Number</div>
                  <div className={styles.detailValue}>{data.soNumber}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Total weight</div>
                  <div className={styles.detailValue}>{data.totalWeight}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>No. of DOs</div>
                  <div className={styles.detailValue}>{data.numberOfDOs}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>No. of SKUs</div>
                  <div className={styles.detailValue}>{data.numberOfSKUs}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Total Cost</div>
                  <div className={styles.detailValue}>{data.totalCost}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Created at</div>
                  <div className={styles.detailValue}>{data.createdAt}</div>
                </div>
              </div>

              <div className={styles.transitStatusContainer}>
                <div className={styles.transitStatus}>
                  <div className={styles.transitLabel}>{data.transitStatus}</div>
                  {data.isOnTime && <div className={styles.onTimeTag}>On time</div>}
                </div>

                <div className={styles.transitTimes}>
                  <div className={styles.timeColumn}>
                    <div className={styles.timeLabel}>ETA</div>
                    <div className={styles.timeValue}>{data.eta}</div>
                  </div>
                  <div className={styles.timeColumn}>
                    <div className={styles.timeLabel}>STA</div>
                    <div className={styles.timeValue}>{data.sta}</div>
                  </div>
                  <div className={styles.timeColumn}>
                    <div className={styles.timeLabel}>Next Milestone:</div>
                    <div className={styles.timeValue}>{data.nextMilestone}</div>
                  </div>
                  <div className={styles.timeColumn}>
                    <div className={styles.timeLabel}>ETA:</div>
                    <div className={styles.timeValue}>{data.etaDestination}</div>
                  </div>
                </div>
              </div>

              <div className={styles.addressSection}>
                <div className={styles.addressCard}>
                  <h3 className={styles.addressTitle}>Sender</h3>
                  <div className={styles.addressName}>{data.sender.name}</div>
                  <div className={styles.addressText}>{data.sender.address}</div>
                  <div className={styles.addressDetail}>GSTIN: {data.sender.gstin}</div>
                  <div className={styles.addressDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    {data.sender.email}
                  </div>
                  <div className={styles.addressDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {data.sender.phone}
                  </div>
                </div>

                <div className={styles.addressCard}>
                  <h3 className={styles.addressTitle}>Ship To</h3>
                  <div className={styles.addressName}>{data.shipTo.name}</div>
                  <div className={styles.addressText}>{data.shipTo.address}</div>
                  <div className={styles.addressDetail}>GSTIN: {data.shipTo.gstin}</div>
                  <div className={styles.addressDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    {data.shipTo.email}
                  </div>
                  <div className={styles.addressDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {data.shipTo.phone}
                  </div>
                </div>

                <div className={styles.addressCard}>
                  <h3 className={styles.addressTitle}>Bill To</h3>
                  <div className={styles.addressName}>{data.billTo.name}</div>
                  <div className={styles.addressText}>{data.billTo.address}</div>
                  <div className={styles.addressDetail}>GSTIN: {data.billTo.gstin}</div>
                  <div className={styles.addressDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    {data.billTo.email}
                  </div>
                  <div className={styles.addressDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {data.billTo.phone}
                  </div>
                </div>
              </div>

              <div className={styles.idSection}>
                <div className={styles.idRow}>
                  <div className={styles.idLabel}>Planning ID</div>
                  <div className={styles.idValue}>
                    {data.ids.planningId}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <path d="M9 14l2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.idRow}>
                  <div className={styles.idLabel}>Indent ID</div>
                  <div className={styles.idValue}>
                    {data.ids.indentId}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <path d="M9 14l2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.idRow}>
                  <div className={styles.idLabel}>Journey ID</div>
                  <div className={styles.idValue}>
                    {data.ids.journeyId}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <path d="M9 14l2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.idRow}>
                  <div className={styles.idLabel}>ePOD ID</div>
                  <div className={styles.idValue}>
                    {data.ids.epodId}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <path d="M9 14l2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.idRow}>
                  <div className={styles.idLabel}>Invoice Number</div>
                  <div className={styles.idValue}>
                    {data.ids.invoiceNumber}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <path d="M9 14l2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className={styles.timelineTab}>
              {data.timeline.map((timelineDay) => (
                <div key={timelineDay.id} className={styles.timelineDay}>
                  <div className={styles.timelineDate}>{timelineDay.date}</div>
                  <div className={styles.timelineEvents}>
                    {timelineDay.events.map((event, index) => (
                      <div key={index} className={styles.timelineEvent}>
                        <div className={styles.timelineIcon}>
                          <div className={styles.timelineDot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineHeader}>
                            <div className={styles.timelineTitle}>{event.type}</div>
                            {event.timeTaken && (
                              <div className={styles.timelineMeta}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                Time taken: {event.timeTaken}
                              </div>
                            )}
                            {event.time && (
                              <div className={styles.timelineMeta}>
                                At {event.time}
                              </div>
                            )}
                          </div>
                          <div className={styles.timelineDetails}>
                            {typeof event.details === 'string' ? (
                              <div className={styles.timelineDetail}>{event.details}</div>
                            ) : (
                              event.details.map((detail, i) => (
                                <div key={i} className={styles.timelineDetail}>{detail}</div>
                              ))
                            )}
                          </div>

                          {event.subEvents && event.subEvents.map((subEvent, subIndex) => (
                            <div key={subIndex} className={styles.timelineSubEvent}>
                              <div className={styles.subEventHeader}>
                                <div className={styles.subEventTitle}>{subEvent.type}</div>
                                {subEvent.runtime && (
                                  <div className={styles.timelineMeta}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    Runtime: {subEvent.runtime}
                                  </div>
                                )}
                                {subEvent.timeTaken && (
                                  <div className={styles.timelineMeta}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    Time taken: {subEvent.timeTaken}
                                  </div>
                                )}
                                {subEvent.time && (
                                  <div className={styles.timelineMeta}>
                                    At {subEvent.time}
                                  </div>
                                )}
                              </div>
                              <div className={styles.timelineDetails}>
                                {typeof subEvent.details === 'string' ? (
                                  <div className={styles.timelineDetail}>{subEvent.details}</div>
                                ) : (
                                  subEvent.details.map((detail, i) => (
                                    <div key={i} className={styles.timelineDetail}>{detail}</div>
                                  ))
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'comments' && (
            <div className={styles.commentsTab}>
              {data.comments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                  <div className={styles.commentTime}>{comment.time}</div>
                  <div className={styles.commentText}>{comment.text}</div>
                  <div className={styles.commentUser}>
                    <div className={styles.userAvatar}>{comment.user.initial}</div>
                    <div className={styles.userName}>{comment.user.name}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsModal;
