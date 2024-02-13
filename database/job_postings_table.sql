CREATE DATABASE referraldb;
use referraldb;
DROP TABLE IF EXISTS JOB_POSTINGS;
CREATE TABLE JOB_POSTINGS (
	JOB_ID VARCHAR(10) NOT NULL,
    LOCATION VARCHAR(20) NOT NULL,
    JOB_DESCRIPTION VARCHAR(1000) NOT NULL,
    SKILLS VARCHAR(500) NOT NULL,
    EXPERIENCE FLOAT NOT NULL,
    PRIMARY KEY (JOB_ID)
);

INSERT INTO JOB_POSTINGS (JOB_ID, LOCATION, JOB_DESCRIPTION, SKILLS, EXPERIENCE)
VALUE ("JD_202", "BENGALURU", "Data Analyst: Data analysts extract, clean, and organize data, utilizing automated tools. They analyze, interpret trends, prepare reports, and collaborate for process improvements, aiding informed decision-making based on data insights.", "Python, SqL, Power BI", 2),
("JD_403","GURUGRAM", "Senior Manager: Lead IT initiatives, supervise teams, ensure project success, and drive innovation. Strategic planning, strong leadership, and technical expertise required.","Strategic Leadership, Technical Expertise", 7 ),
("JD_509", "CANADA", "Business Analyst: rive IT solutions through insightful analysis, ensuring alignment with business goals and optimizing processes for sustained efficiency and innovation.", "PowerBI, Tableau, MS Excel adv.", 1),
("JD_908", "DALIAN", "Market Researcher: Conduct in-depth market research to inform strategic investment decisions for a finance firm, analyzing trends, and assessing market opportunities.", "Data Analysis, Statistical Analysis, Qualitative and Quantitative Research, Industry Knowledge, Market Trend Analysis, Competitor Analysis", 3); 
SELECT * FROM JOB_POSTINGS