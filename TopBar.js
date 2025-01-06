import React from 'react'
import './TopBar.css'

function TopBar() {
  return (
    <div>
    {/* Top Bar */}
    <div className="top-bar">
      <div className="top-bar-left">
        <p>
          Due to the <span className="highlight">COVID-19</span> epidemic, orders may be processed with a slight delay.
        </p>
      </div>
      <div className="top-bar-right">
        <a href="#store-location">Store Location</a>
        <a href="#order-tracking">Order Tracking</a>
        <a href="#faqs">FAQs</a>
        <div className="selectors">
          <select id="language-selector" defaultValue="English">
            <option value="English">English</option>
            <option value="Australia">Australia</option>
            <option value="Spain">Spain</option>
            <option value="Brazil">Brazil</option>
            <option value="France">France</option>
            <option value="United States">United States</option>
          </select>
          <select id="currency-selector" defaultValue="USD">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
    </div>
</div>
  )
}

export default TopBar