import './Services.css'

export default function Services() {
    return (
        <div id="services_holder">
            <div id="services_title">BOOKKEEPING SERVICES</div>
            <div id="services_list">
                <div className="services_item">
                    <div className="services_type">
                        Bookkeeping using computerised accounts package
                    </div>
                    <div className="services_description">
                        Service utilizing computerized accounts software for accurate financial tracking, reporting, and streamlined business operations.
                    </div>
                </div>
                <div className="services_item">
                    <div className="services_type">Bank Reconcilliations</div>
                    <div className="services_description">
                        Service reconciling bank statements, ensuring financial accuracy, identifying discrepancies, and facilitating informed decision-making for businesses.
                    </div>
                </div>
                <div className="services_item">
                    <div className="services_type">Accounts Receivable & Accounts Payable</div>
                    <div className="services_description">
                        Service managing accounts payable and receivable, ensuring timely payments, accurate invoicing, and optimized cash flow for streamlined financial operations.
                    </div>
                </div>
                <div className="services_item">
                    <div className="services_type">GST Returns</div>
                    <div className="services_description">
                        Handling GST returns, ensuring compliance, accurate filing, and maximizing refunds for businesses, alleviating tax-related burdens.
                    </div>
                </div>
                <div className="services_item">
                    <div className="services_type">Payroll & PAYE</div>
                    <div className="services_description">
                        Managing payroll and PAYE, ensuring accurate salary processing, compliance with tax regulations, and timely reporting for businesses.
                    </div>
                </div>
                <div className="services_item">
                    <div className="services_type">ACC Levies</div>
                    <div className="services_description">
                        Managing ACC levies, ensuring accurate calculations, compliance, and timely payments, optimizing cost-effectiveness for businesses.
                    </div>
                </div>
                <div className="services_item">
                    <div className="services_type">General Office Administration</div>
                    <div className="services_description">
                        Handling general office administritative work, enhancing productivity for streamlined business operations.
                    </div>
                </div>
            </div>
        </div>
    );
}
