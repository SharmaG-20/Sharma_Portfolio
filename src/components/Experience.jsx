const Experience = () => {
  const experiences = [
    {
      title: "Database Migration and Transformation",
      items: [
        "Led end-to-end Sybase to PostgreSQL migration project involving 630 tables and views, 533 functions, and 300 stored procedures in production environment",
        "Partnered with application and development teams to design efficient schemas and optimize SQL performance during migration",
        "Successfully migrated complex stored procedures and functions with zero data loss",
        "Reduced database licensing costs while improving overall system performance"
      ]
    },
    {
      title: "Performance Optimization and Query Tuning",
      items: [
        "Performed SQL performance tuning and query optimization for complex functions and procedures handling lakhs of records",
        "Reduced execution time from minutes to seconds through indexing strategies and query rewrites",
        "Analyzed slow queries using EXPLAIN and EXPLAIN ANALYZE for performance improvements",
        "Implemented indexing strategies to optimize database performance"
      ]
    },
    {
      title: "Database Internals and Extension Development",
      items: [
        "Customized pgaudit extension at DLL level migrating from Linux to Windows by replacing platform-specific keywords",
        "Developed custom audit logging solution using pgaudit extension to monitor and track all database actions",
        "Demonstrated advanced knowledge of PostgreSQL internals including source code modification",
        "Compiled custom PostgreSQL extensions for security and compliance requirements"
      ]
    },
    {
      title: "Disaster Recovery and High Availability",
      items: [
        "Successfully performed database recovery from production disaster using PostgreSQL transaction logs",
        "Implemented logical replication using PostgreSQL Publication and Subscription methods to maintain live data synchronization",
        "Configured physical replication using JavaScript to Supabase ensuring data consistency and availability",
        "Implemented data replication solutions on Google Cloud Platform for cloud-based PostgreSQL deployments",
        "Designed and implemented backup strategies and disaster recovery procedures"
      ]
    },
    {
      title: "Database Administration and Maintenance",
      items: [
        "Installed, configured and maintained PostgreSQL databases across production and non-production environments",
        "Managed and monitored cloud-based PostgreSQL deployments on Google Cloud Platform",
        "Configured and maintained pgAgent for automated scheduled backups and routine database maintenance tasks",
        "Ensured database security, scalability, and performance through proactive monitoring"
      ]
    },
    {
      title: "Automation and Scripting",
      items: [
        "Developed Python-based automation tools to create executable packages for emergency database patch deployment",
        "Automated routine database maintenance tasks using Python and pgAgent",
        "Created custom monitoring solutions and alert systems for proactive database management",
        "Implemented automated backup and recovery procedures"
      ]
    },
    {
      title: "Security and Compliance",
      items: [
        "Developed custom audit logging solution using pgaudit extension for security and compliance",
        "Created customized logs to monitor database actions for regulatory compliance",
        "Implemented database security best practices including role management and access control",
        "Ensured compliance with security audit requirements"
      ]
    }
  ];

  return (
    <section id="experience" className="section-container bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>

        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            PostgreSQL Database Administrator
          </h3>
          <p className="text-lg text-white font-semibold mb-1">
            TBS Technologies Private Ltd
          </p>
          <p className="text-gray-400">
            Tiruppur, Tamil Nadu, India | September 2023 – Present
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="card group hover:bg-white transition-all duration-300">
              <h4 className="text-xl font-bold text-white group-hover:text-black mb-4 flex items-center transition-colors duration-300">
                <span className="w-2 h-2 bg-white group-hover:bg-black rounded-full mr-3 transition-colors duration-300"></span>
                {experience.title}
              </h4>
              <ul className="space-y-3">
                {experience.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-white group-hover:text-black mr-3 mt-1 flex-shrink-0 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 group-hover:text-black transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
