import React, { useState } from 'react';
import styles from './SummaryPage.module.css';
import { tripsData } from '../data/tripsData';
import InvoiceDetailsModal from '../components/InvoiceDetailsModal';

const SummaryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Summary');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    deliveryStatus: 'all',
    stage: 'all',
    tripType: 'all'
  });

  // Apply filters to trips
  const applyFilters = (trips) => {
    return trips.filter(trip => {
      // Apply delivery status filter
      if (filters.deliveryStatus !== 'all') {
        if (filters.deliveryStatus === 'delayed' && !trip.deliveryStatus.includes('Delayed')) {
          return false;
        }
        if (filters.deliveryStatus === 'ontime' && !trip.deliveryStatus.includes('On time')) {
          return false;
        }
      }

      // Apply stage filter
      if (filters.stage !== 'all' && trip.stage !== filters.stage) {
        return false;
      }

      // Apply trip type filter
      if (filters.tripType !== 'all' && trip.tripType !== filters.tripType) {
        return false;
      }

      return true;
    });
  };

  // Filter trips based on search query and other filters
  const filteredTrips = applyFilters(tripsData.filter(trip => {
    const searchLower = searchQuery.toLowerCase();
    return (
      trip.orderId.toLowerCase().includes(searchLower) ||
      trip.consignor.toLowerCase().includes(searchLower) ||
      trip.consignee.toLowerCase().includes(searchLower) ||
      (trip.route && trip.route.toLowerCase().includes(searchLower))
    );
  }));

  const getStatusClass = (status) => {
    switch (status) {
      case 'In Process':
      case 'In Assignment':
      case 'In Transit':
        return styles.statusBlue;
      case 'Pending':
      case 'Pending Approval':
      case 'Reconciliation Pending':
        return styles.statusPurple;
      default:
        return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Process':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case 'In Assignment':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
      case 'In Transit':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        );
      case 'Pending':
      case 'Pending Approval':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        );
      case 'Reconciliation Pending':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        );
    }
  };

  const getDeliveryStatusClass = (status) => {
    if (status.includes('Delayed')) {
      return styles.statusRed;
    } else if (status.includes('On time')) {
      return styles.statusGreen;
    } else if (status.match(/^\d{1,2}\s[A-Za-z]+,\s\d{4}$/)) {
      // If it's just a date format like "15 May, 2023"
      return styles.statusNeutral;
    }
    return '';
  };

  const navigateToOrderDetail = (trip) => {
    // Set the selected trip and open the invoice modal
    setSelectedTrip(trip);
    setIsInvoiceModalOpen(true);
  };

  const closeInvoiceModal = () => {
    setIsInvoiceModalOpen(false);
    // Don't reset selectedTrip immediately to allow for animation
    setTimeout(() => {
      setSelectedTrip(null);
    }, 300);
  };

  // These functions would navigate to previous/next orders in a real app
  const handlePrevOrder = () => console.log('Navigate to previous order');
  const handleNextOrder = () => console.log('Navigate to next order');

  return (
    <div className={styles.summaryPage}>
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h1>Order Shipment Summary</h1>
        </div>
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'Summary' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('Summary')}
            >
              Summary
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'Order Data' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('Order Data')}
            >
              Order Data
            </button>
          </div>
        </div>
      </div>

      <div className={styles.filtersContainer}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Delivery Status:</label>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${filters.deliveryStatus === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setFilters({...filters, deliveryStatus: 'all'})}
            >
              All
            </button>
            <button
              className={`${styles.filterButton} ${filters.deliveryStatus === 'ontime' ? styles.activeFilter : ''}`}
              onClick={() => setFilters({...filters, deliveryStatus: 'ontime'})}
            >
              On Time
            </button>
            <button
              className={`${styles.filterButton} ${filters.deliveryStatus === 'delayed' ? styles.activeFilter : ''}`}
              onClick={() => setFilters({...filters, deliveryStatus: 'delayed'})}
            >
              Delayed
            </button>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Stage:</label>
          <select
            className={styles.filterSelect}
            value={filters.stage}
            onChange={(e) => setFilters({...filters, stage: e.target.value})}
          >
            <option value="all">All Stages</option>
            <option value="Planning">Planning</option>
            <option value="Indent">Indent</option>
            <option value="Tracking">Tracking</option>
            <option value="ePOD">ePOD</option>
            <option value="Freight Invoicing">Freight Invoicing</option>
            <option value="Order Booking">Order Booking</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Trip Type:</label>
          <select
            className={styles.filterSelect}
            value={filters.tripType}
            onChange={(e) => setFilters({...filters, tripType: e.target.value})}
          >
            <option value="all">All Types</option>
            <option value="FTL">FTL</option>
            <option value="PTL">PTL</option>
          </select>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.tripsCount}>
            <span>{filteredTrips.length} Trips available</span>
          </div>
          <div className={styles.tableControls}>
            <button className={styles.controlButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </button>
            <button className={styles.controlButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </button>
            <button className={styles.controlButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
            <button className={styles.controlButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
            </button>
          </div>
          <div className={styles.pagination}>
            <button
              className={styles.paginationButton}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className={styles.pageNumber}>{currentPage}</div>
            <button
              className={styles.paginationButton}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Consignor</th>
                <th>Consignee</th>
                <th>Route</th>
                <th>Trip Type</th>
                <th>Stage</th>
                <th>Status</th>
                <th>ID</th>
                <th>Delivery status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrips.map((trip, index) => (
                <tr key={index} onClick={() => navigateToOrderDetail(trip)}>
                  <td>{trip.orderId}</td>
                  <td>{trip.consignor}</td>
                  <td>{trip.consignee}</td>
                  <td>{trip.route || '-'}</td>
                  <td>{trip.tripType || '-'}</td>
                  <td>{trip.stage}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${getStatusClass(trip.status)}`}>
                      <span className={styles.statusIcon}>{getStatusIcon(trip.status)}</span>
                      {trip.status}
                    </span>
                  </td>
                  <td>
                    {trip.id ? (
                      <span className={styles.idLink}>{trip.id}</span>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    <div className={styles.deliveryStatusContainer}>
                      <span className={`${styles.deliveryStatus} ${getDeliveryStatusClass(trip.deliveryStatus)}`}>
                        {trip.deliveryStatus}
                      </span>
                      <span className={styles.deliveryDate}>{trip.deliveryDate}</span>
                    </div>
                  </td>
                  <td>
                    <button className={styles.actionButton} onClick={(e) => { e.stopPropagation(); navigateToOrderDetail(trip); }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Old modal removed */}

      {/* Invoice Details Modal */}
      {selectedTrip && (
        <InvoiceDetailsModal
          isOpen={isInvoiceModalOpen}
          onClose={closeInvoiceModal}
          onPrev={handlePrevOrder}
          onNext={handleNextOrder}
          orderData={{
            soNumber: selectedTrip.orderId.replace('SO-', ''),
            totalWeight: selectedTrip.weight || '70 Ton',
            numberOfDOs: '1',
            numberOfSKUs: selectedTrip.skus || '20',
            totalCost: selectedTrip.cost || '₹ 5,00,000',
            createdAt: selectedTrip.createdAt || '3 PM, 10 Feb 24',
            transitStatus: selectedTrip.status,
            isOnTime: !selectedTrip.deliveryStatus.includes('Delayed'),
            eta: selectedTrip.deliveryDate.includes('ETA') ? selectedTrip.deliveryDate.replace('ETA: ', '') : selectedTrip.deliveryDate,
            sta: selectedTrip.deliveryDate,
            nextMilestone: 'At Destination',
            etaDestination: selectedTrip.deliveryDate,
            sender: selectedTrip.addresses?.sender || {
              name: selectedTrip.consignor,
              address: 'Consignor Address, 11th & 12th Floor, Hansalaya Building, 15 Barakhamba Road, Amritsar, Punjab',
              gstin: '12345678',
              email: 'someemailaddress@somemail.com',
              phone: '84973-47593'
            },
            shipTo: selectedTrip.addresses?.shipTo || {
              name: selectedTrip.consignee,
              address: 'Consignor Address, 11th & 12th Floor, Hansalaya Building, 15 Barakhamba Road, New Delhi 110001',
              gstin: '12345678',
              email: 'someemailaddress@somemail.com',
              phone: '84973-47593'
            },
            billTo: selectedTrip.addresses?.billTo || {
              name: selectedTrip.consignee,
              address: 'Consignor Address, 11th & 12th Floor, Hansalaya Building, 15 Barakhamba Road, New Delhi 110001',
              gstin: '12345678',
              email: 'someemailaddress@somemail.com',
              phone: '84973-47593'
            },
            ids: {
              planningId: selectedTrip.id,
              indentId: selectedTrip.id,
              journeyId: selectedTrip.id,
              epodId: '-',
              invoiceNumber: '-'
            },
            timeline: selectedTrip.timeline,
            comments: selectedTrip.comments
          }}
        />
      )}
    </div>
  );
};

export default SummaryPage;
