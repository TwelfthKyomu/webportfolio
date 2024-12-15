export type TechnologiesData = {
    frontend: {
        frameworks: string[];
        libraries: string[];
        styling: string[];
        templating: string[];
        languages: string[];
    };
    backend: {
        frameworks: string[];
        languages: string[];
    };
    databases: {
        sql: string[];
        nosql: string[];
        dataWarehousing: string[];
        searchEngines: string[];
    };
    devops: {
        containerization: string[];
        cloudProviders: string[];
        cicdTools: string[];
        configManagement: string[];
        monitoringLogging: string[];
        serviceMesh: string[];
        others: string[];
    };
}

export const technologiesData: TechnologiesData = {
    frontend: {
        frameworks: [
            "React",
            "Next.js",
            "Vue.js",
            "Angular",
            "Svelte",
            "Ember.js",
            "Backbone.js",
            "Preact",
            "Stencil",
            "Elm"
        ],
        libraries: [
            "jQuery",
            "LitElement",
            "Alpine.js"
        ],
        styling: [
            "Bootstrap",
            "Material-UI",
            "Tailwind CSS",
            "SCSS",
            "Styled Components",
            "Foundation",
            "Bulma",
            "Semantic UI"
        ],
        templating: [
            "Pug",
            "Handlebars"
        ],
        languages: [
			"PHP",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3"
        ]
    },
    backend: {
        frameworks: [
            "Express",
            "Django",
            "Flask",
            "FastAPI",
            "Spring Boot",
            "Ruby on Rails",
            "Laravel",
            "Koa",
            "Hapi",
            "Phoenix",
            "NestJS",
            "Symfony",
            "CakePHP",
            "Meteor",
            "Sails.js",
            "AdonisJS",
            "Mojolicious",
            "Grails",
            "Play Framework",
            "Fiber",
            "Beego",
            "Echo",
            "Gin",
            "Bottle",
            "Pyramid",
            "Tornado",
            "Falcon"
        ],
        languages: [
            "Node.js",
            "Python",
            "Java",
            "C#",
            "Go",
            "Rust",
            "ASP.NET"
        ]
    },
    databases: {
        sql: [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "MariaDB",
            "Oracle",
            "Amazon Aurora"
        ],
        nosql: [
            "MongoDB",
            "Cassandra",
            "CouchDB",
            "DynamoDB",
            "Firebase",
            "Neo4j",
            "ArangoDB",
            "RethinkDB",
            "InfluxDB"
        ],
        dataWarehousing: [
            "Amazon Redshift",
            "Google BigQuery",
            "IBM Db2",
            "Apache HBase",
            "Apache Hive"
        ],
        searchEngines: [
            "Elasticsearch"
        ]
    },
    devops: {
        containerization: [
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Rancher",
            "Nomad"
        ],
        cloudProviders: [
            "AWS",
            "Google Cloud",
            "Azure",
            "Heroku"
        ],
        cicdTools: [
            "Jenkins",
            "GitHub Actions",
            "GitLab CI/CD",
            "CircleCI",
            "Travis CI",
            "Bamboo",
            "TeamCity"
        ],
        configManagement: [
            "Terraform",
            "Ansible",
            "Puppet",
            "Chef",
            "SaltStack"
        ],
        monitoringLogging: [
            "Prometheus",
            "Grafana",
            "ELK Stack",
            "Splunk",
            "Datadog",
            "New Relic"
        ],
        serviceMesh: [
            "Istio",
            "Linkerd"
        ],
        others: [
            "Vagrant",
            "Consul"
        ]
    }
};
