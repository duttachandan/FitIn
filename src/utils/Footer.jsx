import React from 'react'
import FooterCSS from "@/styles/footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={`${FooterCSS.FooterRow} row`}>
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
