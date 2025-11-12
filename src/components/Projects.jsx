const Projects = () => {
  const projects = [
    {
      title: "Sybase to PostgreSQL Migration Project",
      scope: "Enterprise database migration with 630+ database objects",
      role: "Database Administrator",
      description: "Led a comprehensive migration from Sybase to PostgreSQL, handling complex stored procedures, functions, and ensuring zero downtime during the transition.",
      responsibilities: [
        "Migration planning and schema conversion",
        "Stored procedure migration and optimization",
        "Performance optimization and testing",
        "Post-migration support and documentation"
      ],
      technologies: ["PostgreSQL", "Sybase", "Python", "SQL"],
      outcome: "Successful zero-downtime migration with improved performance and reduced licensing costs",
      icon: "🔄"
    },
    {
      title: "Custom Audit Logging Solution",
      scope: "Security compliance requirement implementation",
      role: "Database Administrator",
      description: "Developed a custom audit logging solution by modifying the pgaudit extension at the source code level to ensure cross-platform compatibility and comprehensive security monitoring.",
      responsibilities: [
        "pgaudit extension modification at DLL level",
        "Cross-platform compilation (Linux to Windows)",
        "Custom logging implementation",
        "Security compliance testing and documentation"
      ],
      technologies: ["PostgreSQL", "pgaudit", "C/C++", "Windows", "Linux"],
      outcome: "Full compliance with security audit requirements and comprehensive database action monitoring",
      icon: "🔒"
    },
    {
      title: "PostgreSQL Disaster Recovery Implementation",
      scope: "Critical production database recovery",
      role: "Database Administrator",
      description: "Successfully recovered a production database from a critical disaster by analyzing transaction logs, reversing problematic actions, and restoring data integrity.",
      responsibilities: [
        "Transaction log analysis and investigation",
        "Database restoration and transaction reversal",
        "Data integrity verification",
        "Disaster recovery documentation and procedures"
      ],
      technologies: ["PostgreSQL", "WAL (Write-Ahead Logging)", "Transaction Logs", "Python"],
      outcome: "Zero data loss with full database recovery within SLA requirements",
      icon: "🚨"
    },
    {
      title: "Cloud High Availability Setup",
      scope: "Multi-region PostgreSQL replication on GCP",
      role: "Database Administrator",
      description: "Implemented logical and physical replication solutions on Google Cloud Platform to ensure high availability and data consistency across multiple regions.",
      responsibilities: [
        "Replication architecture design",
        "Logical replication setup using Publication/Subscription",
        "Physical replication to Supabase",
        "Monitoring and failover procedures"
      ],
      technologies: ["PostgreSQL", "Google Cloud Platform", "Supabase", "JavaScript"],
      outcome: "99.9% uptime with seamless failover capabilities and data synchronization",
      icon: "☁️"
    }
  ];

  return (
    <section id="projects" className="section-container bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-white">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-surface rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-800 group">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{project.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1 transition-colors duration-300">
                    <span className="font-semibold">Scope:</span> {project.scope}
                  </p>
                  <p className="text-sm text-gray-300 font-semibold transition-colors duration-300">
                    Role: {project.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2 transition-colors duration-300">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2 transition-colors duration-300">•</span>
                      <span className="text-gray-400 text-sm transition-colors duration-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2 transition-colors duration-300">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium border border-gray-700 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 transition-colors duration-300">
                <h4 className="font-semibold text-white mb-2 transition-colors duration-300">Outcome:</h4>
                <p className="text-gray-300 text-sm italic transition-colors duration-300">{project.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
