const Skills = () => {
  const skillCategories = [
    {
      category: "Database Systems",
      icon: "💾",
      skills: ["PostgreSQL", "Sybase", "Database Administration", "Production DBA"]
    },
    {
      category: "Cloud Platforms",
      icon: "☁️",
      skills: ["Google Cloud Platform", "GCP", "Cloud SQL", "Cloud PostgreSQL", "Supabase"]
    },
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["Python", "JavaScript", "SQL", "PL/pgSQL", "Shell Scripting"]
    },
    {
      category: "Database Operations",
      icon: "⚙️",
      skills: ["Installation", "Configuration", "Maintenance", "Patching", "Upgrades"]
    },
    {
      category: "Performance Tuning",
      icon: "⚡",
      skills: ["Query Optimization", "Indexing", "EXPLAIN Analysis", "Execution Plans"]
    },
    {
      category: "Replication",
      icon: "🔄",
      skills: ["Logical Replication", "Physical Replication", "Publication", "Subscription", "Streaming Replication"]
    },
    {
      category: "Backup and Recovery",
      icon: "💿",
      skills: ["pg_dump", "pg_basebackup", "Point-in-Time Recovery", "PITR", "WAL Archiving"]
    },
    {
      category: "High Availability",
      icon: "🔝",
      skills: ["HA Setup", "Failover", "Disaster Recovery Planning", "DR"]
    },
    {
      category: "Security",
      icon: "🔒",
      skills: ["pgaudit", "Audit Logging", "Database Security", "Compliance Monitoring"]
    },
    {
      category: "Database Internals",
      icon: "🔧",
      skills: ["MVCC", "Write-Ahead Logging", "WAL", "Transaction Logs", "VACUUM"]
    },
    {
      category: "Automation Tools",
      icon: "🤖",
      skills: ["pgAgent", "Automated Backups", "Python Scripts", "Scheduled Tasks"]
    },
    {
      category: "Database Migration",
      icon: "📦",
      skills: ["Schema Design", "Data Migration", "Cross-Platform Migration"]
    },
    {
      category: "Monitoring",
      icon: "📊",
      skills: ["Database Monitoring", "Performance Monitoring", "Custom Logging", "pg_stat_statements"]
    },
    {
      category: "Operating Systems",
      icon: "🖥️",
      skills: ["Linux", "Windows"]
    },
    {
      category: "Version Control",
      icon: "🌿",
      skills: ["Git"]
    },
    {
      category: "Development",
      icon: "👨‍💻",
      skills: ["Database Schema Design", "SQL Development", "Stored Procedures", "Functions"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Strong expertise in SQL performance tuning and database internals</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Experience with mission-critical production environments requiring high availability</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Proven ability to work collaboratively with cross-functional development teams</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Excellent problem-solving skills with focus on root cause analysis</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Strong understanding of MVCC, WAL, VACUUM, and PostgreSQL architecture</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Continuous learner staying current with PostgreSQL community best practices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
