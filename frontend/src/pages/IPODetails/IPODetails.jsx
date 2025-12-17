import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { ipoData } from '../../data/ipoData';
import './IPODetails.css';

export default function IPODetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const ipo = ipoData.find(item => item.id === parseInt(id));

    if (!ipo) {
        return (
            <div className="ipo-details-page">
                <div className="container">
                    <p>IPO not found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="ipo-details-page">
            <div className="container">
                {/* Breadcrumb - Desktop Only */}
                <div className="breadcrumb-desktop">
                    <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
                    <span className="breadcrumb-separator">&gt;</span>
                    <span className="breadcrumb-current">Market watch</span>
                </div>

                <h1 className="page-heading">IPO Details</h1>

                {/* Back Button - Mobile Only (outside card) */}
                <div className="mobile-back-button">
                    <button className="back-button-mobile" onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                    </button>
                </div>

                {/* Header Card */}
                <div className="ipo-header">
                    {/* Back Button - Desktop Only (inside card) */}
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                    </button>

                    {/* Company Info */}
                    <div className="company-header">
                        <div className="company-logo-large">{ipo.companyLogo}</div>
                        <div className="company-info-header">
                            <h1 className="company-title">{ipo.companyName}</h1>
                            <p className="company-subtitle">{ipo.companyName} Private Limited</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="header-actions">
                        <button className="download-button">
                            <Download size={20} />
                        </button>
                        <button className="apply-button">Apply now</button>
                    </div>
                </div>

                {/* IPO Details Card */}
                <div className="details-card">
                    <h2 className="section-title">IPO details</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="detail-label">Issue size</span>
                            <span className="detail-value">{ipo.issueSizeDetailed}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Price range</span>
                            <span className="detail-value">{ipo.priceRangeDetailed}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Minimum amount</span>
                            <span className="detail-value">{ipo.minAmount}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Lot size</span>
                            <span className="detail-value">{ipo.lotSizeDetailed}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Issue dates</span>
                            <span className="detail-value">{ipo.issueDates}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Listed on</span>
                            <span className="detail-value">{ipo.listedOn}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Listed price</span>
                            <span className="detail-value">{ipo.listedPrice}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Listing gains</span>
                            <span className={`detail-value ${ipo.listingGainsPercent > 0 ? 'positive' : 'negative'}`}>
                                {ipo.listingGains}
                            </span>
                        </div>
                    </div>
                </div>

                {/* IPO Timeline */}
                <div className="timeline-card">
                    <h2 className="section-title">IPO timeline</h2>
                    <div className="timeline">
                        {ipo.timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className={`timeline-indicator ${item.completed ? 'completed' : 'pending'}`}>
                                    {item.completed && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                {index < ipo.timeline.length - 1 && (
                                    <div className={`timeline-connector ${item.completed ? 'completed' : 'pending'}`}></div>
                                )}
                                <div className="timeline-content">
                                    <div className="timeline-stage">{item.stage}</div>
                                    <div className="timeline-date">{item.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Company */}
                <div className="about-card">
                    <h2 className="section-title">About the company</h2>
                    <p className="about-text">{ipo.about}</p>
                </div>
            </div>
        </div>
    );
}
