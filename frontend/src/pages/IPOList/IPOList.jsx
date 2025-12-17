import { useNavigate } from 'react-router-dom';
import { ipoData } from '../../data/ipoData';
import './IPOList.css';

export default function IPOList() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/ipo/${id}`);
    };

    return (
        <div className="ipo-list-page">
            <div className="container">
                <h1 className="page-heading">IPO List</h1>
                <div className="ipo-list-container">
                    <table className="ipo-table">
                        <thead>
                            <tr>
                                <th>Company / Issue date</th>
                                <th>Issue size</th>
                                <th>Price range</th>
                                <th>Min invest/qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ipoData.map((ipo) => (
                                <tr
                                    key={ipo.id}
                                    onClick={() => handleRowClick(ipo.id)}
                                    className="ipo-row"
                                >
                                    <td>
                                        <div className="company-info">
                                            <div className="company-logo">{ipo.companyLogo}</div>
                                            <div className="company-details">
                                                <div className="company-name">{ipo.companyName}</div>
                                                <div className="issue-date">{ipo.issueDate}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="issue-size">{ipo.issueSize}</td>
                                    <td className="price-range">{ipo.priceRange}</td>
                                    <td>
                                        <div className="min-investment">
                                            <div className="amount">{ipo.minInvestment}</div>
                                            <div className="lot-size">{ipo.lotSize}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
