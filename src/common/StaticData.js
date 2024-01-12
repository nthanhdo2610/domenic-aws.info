import {
    spkt, maharishi, code88, tinhvan, vnitt, awsDev, hackerrank
} from "./assets";
import {
    SiAmazonaws,
    SiAmazondynamodb,
    SiApachehive,
    SiApachejmeter,
    SiApachekafka,
    SiApachemaven,
    SiApachespark,
    SiBootstrap,
    SiDocker,
    SiEclipseide,
    SiElasticsearch,
    SiFirebase,
    SiGit,
    SiHibernate,
    SiIntellijidea,
    SiJava,
    SiJavascript,
    SiJenkins,
    SiJquery,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiPostgresql,
    SiPostman,
    SiRabbitmq,
    SiReact,
    SiSpring,
    SiSpringboot,
    SiSubversion,
    SiSwagger,
    SiTypescript,
    SiVisualstudiocode
} from "react-icons/si";

import {AiFillGithub, AiOutlineGitlab,} from "react-icons/ai";

import {GrHadoop, GrMysql, GrServices} from "react-icons/gr";

import {DiCss3, DiHtml5} from "react-icons/di";

import {GiDatabase} from "react-icons/gi";

const StaticData = {
    getSkills: function () {
        return [
            {
                title: "Programming Languages",
                items: [
                    {
                        id: "pl-1",
                        icon: SiJava,
                        name: "Java",
                    },
                    {
                        id: "pl-2",
                        icon: SiJavascript,
                        name: "JavaScript",
                    },
                    {
                        id: "pl-3",
                        icon: DiHtml5,
                        name: "HTML5",
                    }
                ],
            },
            {
                title: "Frameworks/Libraries",
                items: [
                    {
                        id: "f-1",
                        icon: SiSpring,
                        name: "Spring Framework",
                    },
                    {
                        id: "f-2",
                        icon: SiSpringboot,
                        name: "SpringBoot",
                    },
                    {
                        id: "f-3",
                        icon: GrServices,
                        name: "MicroServices",
                    },
                    {
                        id: "f-4",
                        icon: SiReact,
                        name: "ReactJS",
                    },
                    {
                        id: "f-5",
                        icon: SiHibernate,
                        name: "Hibernate",
                    },
                    {
                        id: "f-6",
                        icon: SiBootstrap,
                        name: "Bootstrap",
                    },
                    {
                        id: "f-7",
                        icon: SiJquery,
                        name: "jQuery",
                    },
                    {
                        id: "f-8",
                        icon: DiCss3,
                        name: "CSS3",
                    },
                    {
                        id: "f-9",
                        icon: SiSwagger,
                        name: "Open API",
                    },
                    {
                        id: "f-10",
                        icon: SiApachekafka,
                        name: "Kafka",
                    },
                    {
                        id: "f-11",
                        icon: SiRabbitmq,
                        name: "RabbitMQ",
                    },
                    {
                        id: "f-12",
                        icon: SiTypescript,
                        name: "Typescript",
                    }
                ],
            },
            {
                title: "Cloud",
                items: [
                    {
                        id: "c-1",
                        icon: SiAmazonaws,
                        name: "Amazon Web Services",
                    },
                    {
                        id: "c-2",
                        icon: SiFirebase,
                        name: "Firebase",
                    }
                ],
            },
            {
                title: "Database",
                items: [
                    {
                        id: "db-1",
                        icon: GrMysql,
                        name: "MySQL",
                    },
                    {
                        id: "db-2",
                        icon: SiPostgresql,
                        name: "Postgresql",

                    },
                    {
                        id: "db-4",
                        icon: SiMicrosoftsqlserver,
                        name: "SQL Server",
                    },
                    {
                        id: "db-5",
                        icon: SiElasticsearch,
                        name: "Elasticsearch",
                    },
                    {
                        id: "db-6",
                        icon: SiMongodb,
                        name: "MongoDB",
                    }
                ],
            },
            {
                title: "Big Data",
                items: [
                    {
                        id: "bd-1",
                        icon: GrHadoop,
                        name: "Hadoop",
                    },
                    {
                        id: "bd-2",
                        icon: SiApachespark,
                        name: "Spark",

                    },
                    {
                        id: "bd-3",
                        icon: SiApachehive,
                        name: "Hive",
                    },
                    {
                        id: "bd-4",
                        icon: GiDatabase,
                        name: "HBase",
                    },
                    {
                        id: "bd-5",
                        icon: SiAmazondynamodb,
                        name: "DynamoDB",
                    }
                ],
            },
            {
                title: "Tools",
                items: [
                    {
                        id: "t-1",
                        icon: SiDocker,
                        name: "Docker",
                    },
                    {
                        id: "t-2",
                        icon: SiPostman,
                        name: "Postman",
                    },
                    {
                        id: "t-3",
                        icon: SiJenkins,
                        name: "Jenkins",
                    },
                    {
                        id: "t-4.0",
                        icon: SiSubversion,
                        name: "SVN",
                    },
                    {
                        id: "t-4.1",
                        icon: SiGit,
                        name: "Git",
                    },
                    {
                        id: "t-5",
                        icon: AiFillGithub,
                        name: "GitHub",
                    },
                    {
                        id: "t-6",
                        icon: AiOutlineGitlab,
                        name: "Gitlab",
                    },
                    {
                        id: "t-7",
                        icon: SiApachemaven,
                        name: "Maven",
                    },
                    {
                        id: "t-8",
                        icon: SiVisualstudiocode,
                        name: "VS Code",
                    },
                    {
                        id: "t-9",
                        icon: SiEclipseide,
                        name: "Eclipse",
                    },
                    {
                        id: "t-10",
                        icon: SiIntellijidea,
                        name: "Intellij",
                    },
                    {
                        id: "t-11",
                        icon: SiApachejmeter,
                        name: "JMeter",
                    },
                ],
            },
        ]
    },

    getExperience: function () {
        return [
            {
                organisation: "Code88 Company Limited, Ho Chi Minh, Vietnam",
                logo: code88,
                link: "https://www.code88.asia/v1/index.php",
                positions: [
                    {
                        title: "Software Engineer",
                        duration: "May 2020 – Dec 2022",
                        content: [
                            {
                                text: "Spearheaded the creation of web applications, including a translation tool and real-time alert modules designed for microservices architecture, demonstrating adept research and seamless integration of cutting-edge technologies.",
                                link: "",
                            },
                            {
                                text: "Implemented efficient development workflows with Git, resulting in an impressive 30% improvement in downstream productivity.",
                                link: "",
                            },
                            {
                                text: "Enhanced system performance and scalability by successfully migrating from monolithic projects to a cost-effective microservices architecture, leading to reduced maintenance and operational costs.",
                                link: "",
                            },
                            {
                                text: "Directed end-to-end software development aligned with user needs, actively contributing to project estimates, and playing a pivotal role in code reviews, support, and the training of junior team members.",
                                link: "",
                            },
                            {
                                text: "• Assisted the Infrastructure and DevOps teams in delivering, troubleshooting, and resolving urgent tasks that arose in the production environment.",
                                link: "",
                            },
                            {
                                text: "Cultivated cross-team collaboration, consistently pursued self-learning, and achieved mastery in Spring Boot and microservices, significantly improving system analysis and overall team capabilities.",
                                link: "",
                            },
                            {
                                text: "Promoted cross-team collaboration, self-learned and expanded skills, improved system analysis, kept current with evolving tech, and mastered Spring Boot and microservices for scalable applications",
                                link: "",
                            }
                        ],
                    },
                ],
            },
            {
                organisation: "Tinhvan Software JSC, Ho Chi Minh, Vietnam",
                logo: tinhvan,
                link: "https://tinhvan.vn/en/about-us/general-information/",
                positions: [
                    {
                        title: "Software Engineer",
                        duration: "Mar 2019 – Apr 2020",
                        content: [
                            {
                                text: "Thoroughly analyzed, researched, and crafted applications to deliver impactful results.",
                                link: "",
                            },
                            {
                                text: "Executed comprehensive unit tests to ensure the robustness of developed solutions.",
                                link: "",
                            },
                            {
                                text: "Leveraged JMeter to rigorously test API network requests, ensuring optimal performance and reliability.",
                                link: "",
                            },
                            {
                                text: "Engaged in code reviews alongside team members to uphold code quality and adherence to best practices.",
                                link: "",
                            },
                            {
                                text: "Actively fostered teamwork, cultivated self-sufficiency, and played a pivotal role in creating user-friendly solutions through collaborative efforts and a commitment to continuous learning.",
                                link: "",
                            }
                        ],
                    }
                ],
            },
            {
                organisation: "Vietnam Institute of Telecommunications Technology, Ho Chi Minh, Vietnam",
                logo: vnitt,
                link: "https://vietnamcompany.vn/vien-cong-nghe-vien-thong-c5327.html",
                positions: [
                    {
                        title: "Software Engineer",
                        duration: "Sep 2016 – Feb 2019",
                        content: [
                            {
                                text: "Engineered and sustained software solutions, ensuring ongoing performance and functionality.",
                                link: "",
                            },
                            {
                                text: "Conducted comprehensive Unit Tests to validate software integrity and reliability.",
                                link: "",
                            },
                            {
                                text: "Employed JMeter for thorough testing of API network requests, ensuring robust performance.",
                                link: "",
                            },
                            {
                                text: "Acquired valuable real-world work experience, contributing to professional growth.",
                                link: "",
                            },
                            {
                                text: "Enhanced teamwork and collaboration within cross-functional teams, fostering a synergistic work environment.",
                                link: "",
                            },
                            {
                                text: "Cultivated independent work skills and embraced a culture of continuous self-study, promoting ongoing skill development.",
                                link: "",
                            }
                        ],
                    }
                ],
            }
        ];
    },

    getEducation: function () {
        return [
            {
                "title": "Maharish International University",
                "contain": "1000 N 4th St, Fairfield, IA 52557",
                "years": "Jan 2023 - present",
                "logo": maharishi,
                "link": "https://www.miu.edu/",
                "mainBadges": ["Master of Science in Computer Science"],
                "badges": [
                    "Modern Programming Practices",
                    "Big Data Technology",
                    "Enterprise Architecture",
                    "Cloud Computing",
                    "Algorithms",
                    "Leadership for Tech Managers"
                ]
            },
            {
                "title": "Ho Chi Minh City University of Technology and Education",
                "contain": "Ho Chi Minh, Vietnam",
                "years": "Sep 2011 - Jul 2016",
                "logo": spkt,
                "link": "https://en.hcmute.edu.vn/",
                "mainBadges": ["Bachelors in Information Technology"],
                "badges": []
            }
        ]
    },

    getCertification: function () {
        return [
            {
                "title": "",
                "contain": "",
                "years": "Issued Jan 07, 2024",
                "logo": hackerrank,
                "link": "https://www.hackerrank.com/certificates/929334b6247d",
                "mainBadges": ["HackerRank Software Engineer Certificate"],
                "badges": [
                    "Problem solving",
                    "SQL",
                    "REST API"
                ]
            },
            {
                "title": "",
                "contain": "",
                "years": "Issued Dec 21, 2023 · Expires Dec 21, 2026",
                "logo": awsDev,
                "link": "https://drive.google.com/file/d/1rLs89S3Qb1y2KOhpnefp6taoUkU-8y7A/view",
                "mainBadges": ["AWS Certified Developer - Associate"],
                "badges": [
                    "Develop and optimize applications on AWS",
                    "Package and deploy by using CI/CD workflows",
                    "Secure application code and data",
                    "Identify and resolve application issues"
                ]
            }
        ]
    },

    // getSkills: function () {
    //     return [
    //         {id: "JAVA_skill", content: "JAVA", porcentage: "90%", value: "90"},
    //         {id: "AWS_skill", content: "AWS", porcentage: "80%", value: "80"},
    //         {id: "HTML5_skill", content: "HTML5/CSS/SCSS/BootStrap", porcentage: "90%", value: "90"},
    //         {id: "FrontEnd_skill", content: "JavaScript/jQuery/ReactJS", porcentage: "90%", value: "90"},
    //         {id: "ReactJS_skill", content: "Redis/Kafka/RabbitMQ/Nginx", porcentage: "80%", value: "80"},
    //         {id: "DB_skill", content: "MySQL/PostgreSQL", porcentage: "80%", value: "80"}
    //     ]
    // },
    //
    // getSkills1: function () {
    //     return [
    //         {id: "Microservices_skill", content: "Microservices", porcentage: "80%", value: "80"},
    //         {id: "HTML5_skill", content: "Docker/Kubernates", porcentage: "70%", value: "70"},
    //         {id: "DP_skill", content: "Design Patterns: MVC/Singleton/Factory..", porcentage: "80%", value: "80"},
    //         {id: "SDLC_skill", content: "Agile / Scrum, Waterfall", porcentage: "80%", value: "80"},
    //         {id: "BD_skill", content: "Spark, Hive, HBase", porcentage: "80%", value: "80"},
    //         {id: "Platforms_skill", content: "Windows/MacOS", porcentage: "90%", value: "90"}
    //     ]
    // },

    getAboutMe: function () {
        return [
            {
                id: "first-p-about",
                content: "Knowledgeable Software Engineer with 7 years of experience playing a key role in developing enterprise applications in challenging, deadline-driven, intensive environments. Hands-on experience spanning JavaScript, React.js, Java, Spring, Spring boot, Restful web services, AWS, DBMS, and other technologies, languages, and tools. Passionate team player with a solid commitment to client satisfaction."
            }
        ]
    }
}

export default StaticData;