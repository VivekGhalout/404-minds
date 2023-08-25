import React from 'react'

function RightMenu() {
    return (
        <div className='rightMenu'>
            <div className='rightMenu-top-div'>
                <div className='timeline'>
                    Timeline
                    <span>
                        For review
                    </span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#007AFF" />
                            <path d="M7.17127 14H8.79334V6.24951H7.17664L5.17322 7.64062V9.10156L7.07459 7.78027H7.17127V14ZM12.5602 14H14.1822V6.24951H12.5655L10.5621 7.64062V9.10156L12.4635 7.78027H12.5602V14Z" fill="white" />
                        </svg>
                    </span>
                </div>
                <div>
                    Manage accounts
                </div>
            </div>

            <div className='search-div'>
                <div>
                    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="42" height="40" rx="5" fill="white" />
                        <rect x="0.5" y="0.5" width="41" height="39" rx="4.5" stroke="black" stroke-opacity="0.25" />
                    </svg>
                </div>
                <div>
                    <input className="nosubmit" type="search" placeholder="Search" />
                </div>
            </div>

            <div className='data-div'>
                <div>
                    <table>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Date</th>
                            <th>Name or Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td style={{ padding: "5px 0px 5px 0px", fontSize: "14px", fontWeight:"500"} }>This month</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px 0px 10px 0px" }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white" />
                                    <rect x="0.75" y="0.75" width="18.5" height="18.5" stroke="#030033" stroke-opacity="0.15" stroke-width="1.5" />
                                </svg>
                            </td>
                            <td className='name'>Jul 9</td>
                            <td className='name'>Lorem ipsum dolor sit amet,</td>
                            <td className='price'>$ 100.20</td>
                            <td style={{ color: "red" }} className='category'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#F46436" />
                                </svg> &nbsp;
                                Categorise
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px 0px 10px 0px" }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white" />
                                    <rect x="0.75" y="0.75" width="18.5" height="18.5" stroke="#030033" stroke-opacity="0.15" stroke-width="1.5" />
                                </svg>
                            </td>
                            <td className='name'>Jul 8</td>
                            <td className='name'>Image Relay</td>
                            <td className='price'>$ 110.00</td>
                            <td className='category'>
                                Technology
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px 0px 10px 0px" }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white" />
                                    <rect x="0.75" y="0.75" width="18.5" height="18.5" stroke="#030033" stroke-opacity="0.15" stroke-width="1.5" />
                                </svg>
                            </td>
                            <td className='name'>Jul 7</td>
                            <td className='name'>Drawn on cheque no. 1409</td>
                            <td className='price'>$ 25.50</td>
                            <td style={{ color: "#007AFF" }} className='category'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#007AFF" />
                                </svg>&nbsp;
                                Categorise
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px 0px 10px 0px" }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white" />
                                    <rect x="0.75" y="0.75" width="18.5" height="18.5" stroke="#030033" stroke-opacity="0.15" stroke-width="1.5" />
                                </svg>
                            </td>
                            <td className='name'>Jul 7</td>
                            <td className='name'>Lilian Mathew</td>
                            <td className='price'>$ 250</td>
                            <td style={{ color: "#007AFF" }} className='category'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#007AFF" />
                                </svg>&nbsp;
                                2 Suggestions
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default RightMenu