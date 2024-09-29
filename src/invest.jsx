import React from 'react';
import './styles/invest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Invest = () => {

    const investments = [
        
        {
            name: "SPY (S&P 500 ETF)",
            analysis: [
                { title: "Pros", text: ["Broad market exposure", "Low expense ratio"] },
                { title: "Cons", text: ["Market volatility affects returns"] }
            ],
            link: "https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-sp-500-etf-trust-spy"
        },
        {
            name: "QQQ (NASDAQ-100 ETF)",
            analysis: [
                { title: "Pros", text: ["High growth potential with tech focus", "Liquidity and popularity"] },
                { title: "Cons", text: ["Less diversification than broader ETFs"] }
            ],
            link: "https://www.invesco.com/us/financial-products/etfs/qqq"
        },
        {
            name: "VTI (Vanguard Total Stock Market ETF)",
            analysis: [
                { title: "Pros", text: ["Comprehensive market coverage", "Low cost"] },
                { title: "Cons", text: ["Sensitive to overall market downturns"] }
            ],
            link: "https://investor.vanguard.com/etf/profile/VTI"
        },
        {
            name: "ARKK (ARK Innovation ETF)",
            analysis: [
                { title: "Pros", text: ["Focus on disruptive innovation", "Potential for high returns"] },
                { title: "Cons", text: ["High volatility and risk"] }
            ],
            link: "https://ark-funds.com/arkk"
        },
        {
            name: "SCHD (Schwab U.S. Dividend Equity ETF)",
            analysis: [
                { title: "Pros", text: ["Reliable dividend income", "Strong companies"] },
                { title: "Cons", text: ["Less capital appreciation than growth stocks"] }
            ],
            link: "https://www.schwabassetmanagement.com/products/schd"
        },
        {
            name: "EFA (iShares MSCI EAFE ETF)",
            analysis: [
                { title: "Pros", text: ["Diversified international exposure", "Low expense ratio"] },
                { title: "Cons", text: ["Currency fluctuations may affect returns"] }
            ],
            link: "https://www.ishares.com/us/products/239726/ishares-msci-eafe-etf"
        }
    ];

    return (
        <div className='investment-page'>
        <div className="investment-options-container">
            <h1>Investment Options Breakdown</h1>
            <p className="description-text">Explore top ETFs to diversify your portfolio. Click "Learn More" to view each fund’s full details.</p>
            <div className="options-grid">
                {investments.map((option, index) => (
                    <div key={index} className="investment-option">
                        <div className="option-header">
                            <h2>{option.name}</h2>
                            <FontAwesomeIcon icon={faChartLine} className="icon" />
                        </div>
                        <div className="analysis-container">
                            {option.analysis.map((section, secIndex) => (
                                <div key={secIndex} className="analysis-section">
                                    <h3>
                                        <FontAwesomeIcon icon={faInfoCircle} /> {section.title}
                                    </h3>
                                    <ul>
                                        {section.text.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <a href={option.link} target="_blank" rel="noopener noreferrer">
                            <button className="invest-button">Learn More</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Invest;