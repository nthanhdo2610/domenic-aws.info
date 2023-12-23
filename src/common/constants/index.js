import {code88, tinhvan, vnitt} from "../assets";

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

export const skills = [
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
];

export const experiences = [
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
                        text: "Analyzed system design, researched technology, and built microservices using the Spring boot application.",
                        link: "",
                    },
                    {
                        text: "Developed web apps, modules, and features from scratch to system completion.",
                        link: "",
                    },
                    {
                        text: "Analyzed requirements, designed, coded, tested, and documented solutions aligned with user needs.",
                        link: "",
                    },
                    {
                        text: "Assisted in reporting project status and estimates.",
                        link: "",
                    },
                    {
                        text: "Maintained, enhanced, and fixed existing modules.",
                        link: "",
                    },
                    {
                        text: "Reviewed code, supported colleagues, and trained juniors.",
                        link: "",
                    },
                    {
                        text: "Assisted in maintaining development environments for smooth progress.",
                        link: "",
                    },
                    {
                        text: "Assisted in maintaining development environments for smooth progress.",
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
                        text: "Build RESTful API for mobile applications.",
                        link: "",
                    },
                    {
                        text: "Analyzed, research, and develop applications.",
                        link: "",
                    },
                    {
                        text: "Conducted Unit Tests.",
                        link: "",
                    },
                    {
                        text: "Used JMeter to test API network requests.",
                        link: "",
                    },
                    {
                        text: "Reviewed code with team members.",
                        link: "",
                    },
                    {
                        text: "Strengthened teamwork, nurtured self-sufficiency, and contributed to user-friendly solutions through collaborative efforts and continuous learning",
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
                        text: "Develop and maintain software.",
                        link: "",
                    },
                    {
                        text: "Executed Unit Tests.",
                        link: "",
                    },
                    {
                        text: "Used JMeter to test API network requests.",
                        link: "",
                    },
                    {
                        text: "Gained initial real-world work experience.",
                        link: "",
                    },
                    {
                        text: "Improved teamwork and collaboration in cross-functional teams.",
                        link: "",
                    },
                    {
                        text: "Developed independent work skills and continuous self-study habits.",
                        link: "",
                    }
                ],
            }
        ],
    }
];