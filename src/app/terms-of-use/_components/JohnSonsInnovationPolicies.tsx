import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// JOHN & SONS INNOVATION TECHNOLOGY SERVICES COMPANY LIMITED - Information Technology
const JohnSonsInnovationPolicies = () => {
  const searchParams = useSearchParams().toString();
  const search = searchParams.replace(/=$/, "");
  const [activeTab, setActiveTab] = useState<string>("termsOfUse");

  useEffect(() => {
    if (search === "terms-of-use") {
      setActiveTab("termsOfUse");
    } else if (search === "privacy-policy") {
      setActiveTab("privacyPolicy");
    } else if (search === "delivery-return") {
      setActiveTab("deliveryReturn");
    } else if (search === "refund-policy") {
      setActiveTab("refundPolicy");
    }
  }, [search]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="bg-background mx-auto pt-32 pb-24">
      <section className="flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center">
        <h4 className="text-white text-base sm:text-xl font-semibold leading-[120%]">
          Our Policies
        </h4>
        <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%] text-white">
          John & Sons Innovation Technology Services Policies
        </h3>
        <span className="text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl">
          At John & Sons Innovation Technology Services, we deliver cutting-edge
          information technology solutions and services while maintaining the
          highest standards of data security, privacy protection, and customer
          satisfaction.
        </span>
        <div className="flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition">
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "termsOfUse"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("termsOfUse")}>
            Terms of use
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "privacyPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("privacyPolicy")}>
            Privacy Policy
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "deliveryReturn"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("deliveryReturn")}>
            Delivery & Return
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "refundPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("refundPolicy")}>
            Refund Policy
          </button>
        </div>
      </section>

      <div className="flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20">
        {activeTab === "termsOfUse" && (
          <div id="termsOfUse" className="text-[#667085]">
            <h4 className="text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize">
              Terms of Use - John & Sons Innovation Technology Services
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              By engaging John & Sons Innovation Technology Services Company
              Limited for information technology solutions and services, you
              agree to the following comprehensive terms and conditions:
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">IT Service Portfolio:</span> John
                & Sons Innovation provides comprehensive information technology
                services including system integration, network infrastructure,
                cybersecurity solutions, cloud services, software development,
                IT consulting, and managed IT support services for businesses of
                all sizes.
              </li>
              <li>
                <span className="font-medium">Service Level Agreements:</span>{" "}
                All IT services are governed by specific Service Level
                Agreements (SLAs) that define response times, uptime guarantees,
                performance metrics, and resolution timeframes. SLAs vary by
                service tier and are documented in individual service contracts.
              </li>
              <li>
                <span className="font-medium">Data Security & Compliance:</span>{" "}
                We implement enterprise-grade security measures including
                encryption, access controls, and compliance with international
                IT security standards. Client data protection is paramount, and
                we maintain certifications for data handling and cybersecurity.
              </li>
              <li>
                <span className="font-medium">
                  System Access & Credentials:
                </span>{" "}
                Authorized personnel only access client systems with proper
                authentication and approval. Multi-factor authentication is
                required for all administrative access. Client credentials
                remain confidential and are never shared with unauthorized
                parties.
              </li>
              <li>
                <span className="font-medium">Project Management:</span> IT
                projects follow structured methodologies with defined phases,
                deliverables, and approval gates. Project timelines, resource
                allocation, and milestone payments are established in project
                charters. Change requests are managed through formal change
                control processes.
              </li>
              <li>
                <span className="font-medium">Technology Solutions:</span> We
                provide licensed software, hardware procurement, cloud
                infrastructure, and custom development services. All technology
                solutions include appropriate licensing, warranties, and
                technical support. Third-party software and hardware are subject
                to vendor terms.
              </li>
              <li>
                <span className="font-medium">Maintenance & Support:</span>{" "}
                Ongoing IT support includes preventive maintenance, system
                monitoring, troubleshooting, and user support. Emergency support
                available 24/7 for critical systems. Regular system updates and
                security patches included in maintenance contracts.
              </li>
              <li>
                <span className="font-medium">Intellectual Property:</span>{" "}
                Custom developed solutions and proprietary methodologies remain
                the intellectual property of John & Sons Innovation unless
                specifically transferred. Client data and business processes
                remain client property. Open-source components are governed by
                respective licenses.
              </li>
              <li>
                <span className="font-medium">Performance Standards:</span> IT
                services meet industry-standard performance benchmarks and best
                practices. System uptime, response times, and availability
                metrics are monitored and reported. Performance issues are
                addressed through systematic troubleshooting and optimization.
              </li>
            </ul>

            <p className="mt-4 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Technology Evolution:</span> We stay
              current with emerging technologies and continuously update our
              service offerings. Technology roadmaps are developed
              collaboratively with clients to ensure alignment with business
              objectives.
            </p>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Termination & Transition:</span>{" "}
              Service termination includes proper data migration, knowledge
              transfer, and system handover procedures. Transition support
              ensures business continuity during service changes or provider
              transitions.
            </p>
          </div>
        )}

        {activeTab === "privacyPolicy" && (
          <div id="privacyPolicy" className="text-[#667085]">
            <h4 className="text-sm sm:text-xl xl:text-2xl font-semibold text-black">
              PRIVACY POLICY - JOHN & SONS INNOVATION TECHNOLOGY SERVICES
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              John & Sons Innovation Technology Services Company Limited is
              committed to maintaining the highest standards of data privacy and
              security in all our information technology services and solutions.
              This policy outlines our comprehensive approach to protecting
              client and user data.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              IT SERVICES DATA COLLECTION
            </h4>

            <ul className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4">
              <li>
                Client business information (company details, IT infrastructure
                specifications, user accounts)
              </li>
              <li>
                System performance data and network monitoring information for
                optimization
              </li>
              <li>
                Security logs and incident reports for cybersecurity management
              </li>
              <li>
                User access patterns and system usage for capacity planning
              </li>
              <li>
                Technical support interactions and issue resolution
                documentation
              </li>
              <li>Backup and recovery data for business continuity services</li>
              <li>
                Software licensing and compliance information for asset
                management
              </li>
              <li>Project documentation and system configuration details</li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              DATA USAGE IN IT OPERATIONS
            </h4>

            <ul className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4">
              <li>
                To deliver comprehensive IT services and maintain system
                functionality
              </li>
              <li>
                To monitor system performance and proactively identify potential
                issues
              </li>
              <li>
                To provide cybersecurity protection and threat detection
                services
              </li>
              <li>
                To ensure compliance with IT regulations and industry standards
              </li>
              <li>To optimize system performance and resource utilization</li>
              <li>
                To provide technical support and resolve IT issues efficiently
              </li>
              <li>
                To plan capacity upgrades and technology roadmap development
              </li>
              <li>
                To maintain business continuity through backup and disaster
                recovery
              </li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              ENTERPRISE SECURITY MEASURES
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              We implement military-grade security protocols including
              end-to-end encryption, zero-trust network architecture, and
              advanced threat detection systems. All data is stored in ISO 27001
              certified data centers with 24/7 monitoring. Access controls use
              role-based permissions with multi-factor authentication. Regular
              security audits and penetration testing ensure ongoing protection
              effectiveness.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              VENDOR & PARTNER DATA SHARING
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Technology partners and vendors operate under strict data
              protection agreements. Client data is shared only when necessary
              for service delivery and with explicit client approval. Cloud
              service providers meet international security certifications. All
              third-party integrations maintain data sovereignty and compliance
              requirements.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CLIENT DATA RIGHTS & CONTROL
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Clients maintain full ownership and control of their business
              data. Data portability and export services available upon request.
              System access logs and data processing activities are transparent
              and auditable. Data retention policies align with business
              requirements and regulatory obligations. For IT privacy and
              security inquiries, contact security@johnsons-tech.com.ng.
            </p>
          </div>
        )}

        {activeTab === "deliveryReturn" && (
          <div id="deliveryReturn" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              IT SERVICE DELIVERY & SUPPORT POLICY - JOHN & SONS INNOVATION
              TECHNOLOGY SERVICES
            </h3>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              John & Sons Innovation Technology Services delivers comprehensive
              IT solutions with professional service standards, guaranteed
              performance levels, and continuous support to ensure your
              technology infrastructure operates at peak efficiency.
            </p>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                IT Project Delivery Framework
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Structured project methodology with defined phases and
                  deliverables
                </li>
                <li>
                  Project kickoff meetings within 48 hours of contract execution
                </li>
                <li>
                  Weekly progress reports and milestone achievement
                  notifications
                </li>
                <li>
                  Client approval required at each project gate before
                  proceeding
                </li>
                <li>
                  Comprehensive testing and quality assurance before deployment
                </li>
                <li>
                  User training and documentation provided with all
                  implementations
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Service Level Agreements (SLAs)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">
                    Critical Services
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>99.9% uptime guarantee for mission-critical systems</li>
                    <li>15-minute response time for critical incidents</li>
                    <li>24/7 emergency support and escalation procedures</li>
                    <li>4-hour resolution target for priority 1 issues</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">
                    Standard Services
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>99.5% uptime for standard business systems</li>
                    <li>2-hour response time during business hours</li>
                    <li>8AM-6PM support Monday through Friday</li>
                    <li>24-hour resolution target for standard issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Technical Support Services
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Dedicated technical account management for enterprise clients
                </li>
                <li>
                  Remote support capabilities with secure system access
                  protocols
                </li>
                <li>
                  On-site support available within Lagos metro area (4-hour
                  response)
                </li>
                <li>Preventive maintenance and system optimization services</li>
                <li>Security monitoring and threat response coordination</li>
                <li>Backup verification and disaster recovery testing</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Service Guarantees & Resolution
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-xs md:text-sm">
                    Performance Guarantees:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      System performance benchmarks maintained or exceeded
                    </li>
                    <li>
                      Service credits applied for SLA violations automatically
                    </li>
                    <li>
                      Free performance optimization if systems underperform
                    </li>
                    <li>Guaranteed project delivery within agreed timelines</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">
                    Service Recovery:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>Root cause analysis for all major incidents</li>
                    <li>Preventive measures implemented to avoid recurrence</li>
                    <li>Service improvement plans for chronic issues</li>
                    <li>
                      Client consultation for service enhancement opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Technology Deployment & Integration
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Phased deployment approach to minimize business disruption
                </li>
                <li>Parallel system operation during transition periods</li>
                <li>Data migration services with integrity verification</li>
                <li>
                  System integration testing and user acceptance procedures
                </li>
                <li>Rollback procedures available for all major deployments</li>
                <li>
                  Post-implementation monitoring and optimization services
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                IT Services Contact
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Technical Support: support@johnsons-tech.com.ng</li>
                <li>Project Management: projects@johnsons-tech.com.ng</li>
                <li>Emergency Hotline: +234-801-234-5006</li>
                <li>Website: www.johnsons-tech.com.ng</li>
                <li>Business Hours: 8 AM - 6 PM (Monday - Friday)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "refundPolicy" && (
          <div id="refundPolicy" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              REFUND POLICY - JOHN & SONS INNOVATION TECHNOLOGY SERVICES
            </h3>
            <p className="text-xs md:text-sm xl:text-base mb-4">
              Effective Date: {new Date().toLocaleDateString("en-GB")}
            </p>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              At John & Sons Innovation Technology Services Company Limited, we
              are committed to delivering exceptional IT services and solutions
              that drive business success. Our refund policy ensures fair
              treatment while maintaining service quality and protecting both
              client and company interests.
            </p>

            <ul className="list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">
                  1. IT Services Refund Eligibility
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Services that fail to meet documented performance
                    specifications
                  </li>
                  <li>
                    Project deliverables not completed within agreed timeline
                    due to our fault
                  </li>
                  <li>
                    System implementations that don&apos;t achieve functional
                    requirements
                  </li>
                  <li>
                    Service Level Agreement (SLA) violations exceeding allowable
                    thresholds
                  </li>
                  <li>
                    Technical solutions that prove incompatible despite proper
                    assessment
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  2. Project-Based Refund Terms
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Milestone-based refunds for incomplete project phases</li>
                  <li>
                    Full refund if project cannot commence due to technical
                    impossibility
                  </li>
                  <li>
                    Prorated refunds for scope reduction initiated by service
                    provider
                  </li>
                  <li>
                    Client-initiated changes subject to change order billing
                  </li>
                  <li>
                    Force majeure events handled according to contract force
                    majeure clauses
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">3. Ongoing Service Refunds</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Monthly service credits for SLA violations automatically
                    applied
                  </li>
                  <li>
                    Prorated refunds for early service termination due to
                    provider default
                  </li>
                  <li>Full month refund for services completely unavailable</li>
                  <li>
                    Performance-based refunds for chronic underperformance
                  </li>
                  <li>
                    Client-initiated termination subject to contract terms and
                    notice periods
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  4. Non-Refundable Services & Costs
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Completed services that met acceptance criteria</li>
                  <li>
                    Third-party software licenses and hardware already procured
                  </li>
                  <li>
                    Consultation services and assessments already delivered
                  </li>
                  <li>Training programs completed regardless of attendance</li>
                  <li>
                    Custom development accepted and deployed to production
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">5. Refund Request Process</span>
                <p className="mt-1">To request IT services refund:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Email: refunds@johnsons-tech.com.ng</li>
                  <li>
                    Project Manager Direct Line: +234-801-234-5006 (ext. 200)
                  </li>
                  <li>
                    Submit formal written notice with supporting documentation
                  </li>
                  <li>Include performance data and SLA compliance reports</li>
                  <li>
                    Provide detailed timeline of issues and resolution attempts
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  6. Refund Assessment Process
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Technical review conducted by senior engineering team</li>
                  <li>Independent assessment for complex disputes available</li>
                  <li>
                    Performance data analysis and SLA compliance verification
                  </li>
                  <li>
                    Client consultation to explore resolution alternatives
                  </li>
                  <li>Executive review for high-value refund requests</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  7. Alternative Resolution Options
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Service credits applied to future projects or monthly
                    billing
                  </li>
                  <li>
                    Additional services provided at no cost to remediate issues
                  </li>
                  <li>
                    System upgrades or optimizations to meet performance targets
                  </li>
                  <li>
                    Extended warranty and support periods for implemented
                    solutions
                  </li>
                  <li>
                    Technology refresh or migration services as compensation
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  8. Enterprise Client Protections
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Dedicated account management for large refund evaluations
                  </li>
                  <li>
                    Escalation to executive team for mission-critical service
                    issues
                  </li>
                  <li>Business impact assessment for service failures</li>
                  <li>Expedited refund processing for enterprise agreements</li>
                  <li>
                    Service level penalties and performance guarantees in
                    contracts
                  </li>
                </ul>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                Contact Information
              </h4>
              <p className="text-xs md:text-sm xl:text-base">
                For IT services refunds and resolution:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  John & Sons Innovation Technology Services Company Limited
                </li>
                <li>Email: refunds@johnsons-tech.com.ng</li>
                <li>Technical Support: support@johnsons-tech.com.ng</li>
                <li>Phone: +234-801-234-5006</li>
                <li>Website: www.johnsons-tech.com.ng</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default JohnSonsInnovationPolicies;
