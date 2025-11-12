const About = () => {
  const achievements = [
    {
      icon: "🎯",
      title: "Database Migration Expert",
      description: "Successfully migrated 630 tables/views, 533 functions, and 300 stored procedures from Sybase to PostgreSQL with zero downtime"
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Reduced query execution time from minutes to seconds on datasets with lakhs of records through advanced tuning techniques"
    },
    {
      icon: "🔧",
      title: "Database Internals",
      description: "Modified pgaudit extension source code at DLL level for cross-platform compatibility demonstrating senior-level expertise"
    },
    {
      icon: "☁️",
      title: "Cloud Implementation",
      description: "Successfully implemented PostgreSQL replication on Google Cloud Platform for high availability"
    },
    {
      icon: "🤖",
      title: "Automation Impact",
      description: "Reduced emergency patch deployment time by 70% through Python automation tools"
    },
    {
      icon: "🔒",
      title: "Security Compliance",
      description: "Implemented comprehensive audit logging system meeting all security and compliance requirements"
    }
  ];

  return (
    <section id="about" className="section-container bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a PostgreSQL Database Administrator with 2+ years of intensive production-level experience
            specializing in database internals, performance optimization, disaster recovery, and cloud deployments.
            I have a proven track record of leading complex database migrations and implementing high availability solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise includes advanced query tuning, replication strategies, security compliance, and automation.
            I've successfully led a complex Sybase-to-PostgreSQL migration involving 630+ database objects and have
            customized PostgreSQL extensions at the source code level.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-white pl-4 bg-surface p-4 rounded-r">
            "Ready to bring your ideas to life? Let's collaborate! Whether you're a startup or established company,
            or individual with a vision, I'm here to help from concept to execution. Let's create something amazing together!"
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
