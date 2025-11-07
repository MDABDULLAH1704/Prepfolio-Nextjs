export const BCAFifthSemesterNotesPDFs = {
    '6900ad49d3212038af1cd2c5': [
        {
            group: 'A',
            pdfs: ['BCA5thSemNotes1A.pdf'],
        },
        {
            group: 'B',
            pdfs: ['BCA5thSemNotes2A.pdf'],
        },
        {
            group: 'C',
            pdfs: ['BCA5thSemNotes3A.pdf'],
        },
        {
            group: 'D',
            pdfs: ['BCA5thSemNotes4A.pdf'],
        },
    ],
};


export const BCAFifthSemesterPracticeQuestions = {
    '6900ad49d3212038af1cd2c5': [
        {
            subject: 'Relational Database Management System',
            question: '1. What is RDBMS? Explain its main features.',
            answer: 'RDBMS stands for Relational Database Management System. It stores and manages data in the form of tables (rows and columns). Each table is related to another using keys.',
            point1: '● Data is stored in tables (rows and columns).',
            point2: '● Relationships between tables using keys (Primary, Foreign).',
            point3: '● Data redundancy is reduced.',
            point4: '● Supports SQL language for data operations.',
            point5: '● Provides data security and integrity.',
            point6: '● Ensures data consistency and accuracy.',
            point7: '● Supports multiple users and transactions.',
            codeLanguage: '',
            codeAnswer: ``,
            explanation: 'RDBMS ek aisa system hai jisme data ko table ke form me store kiya jata hai — jaise rows aur columns. Har table ek dusre se keys ke through connected hota hai. Example: Student aur Course table ek relation me ho sakte hain. Ye system data ko safe, accurate aur easily manage karne me madad karta hai.'
        },
        {
            question: '2. Explain the ACID properties of RDBMS with examples.',
            answer: 'ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and correct database transactions.',
            point1: '● Atomicity – All steps of a transaction must complete, or none at all.',
            point2: '● Consistency – Database must remain valid before and after a transaction.',
            point3: '● Isolation – Multiple transactions occur independently.',
            point4: '● Durability – Once a transaction is committed, data remains saved permanently.',
            codeLanguage: '',
            codeAnswer: ``,
            explanation: 'ACID properties database ko reliable banati hain. Atomicity ka matlab hai ya to poora kaam hoga ya kuch nahi. Consistency matlab system hamisha valid state me rahe. Isolation matlab ek transaction dusre me interfere na kare. Durability matlab system crash hone ke baad bhi data save rahega.'
        },
        {
            question: '3. Write and explain Dr. E.F. Codd’s 12 Rules for RDBMS.',
            answer: 'Dr. E.F. Codd ne 12 rules diye the jisse ek proper relational database system define hota hai.',
            point1: '● Information Rule – Data must be stored in tables.',
            point2: '● Guaranteed Access Rule – Each data should be accessible uniquely.',
            point3: '● Systematic Treatment of NULL Values – NULLs handled properly.',
            point4: '● Dynamic Online Catalog – Metadata stored as tables.',
            point5: '● Comprehensive Data Sub-language – One language (like SQL) should be used.',
            point6: '● View Updating Rule – All updatable views must be updated automatically.',
            point7: '● High-Level Insert, Update, Delete – Supported using SQL.',
            point8: '● Physical Data Independence – Storage changes not affect users.',
            point9: '● Logical Data Independence – Logical changes not affect programs.',
            point10: '● Integrity Independence – Integrity constraints stored in database.',
            codeLanguage: '',
            codeAnswer: ``,
            explanation: 'Codd ke rules basically ye batate hain ki ek proper RDBMS kaise kaam karega. Isme data tables me store hona chahiye, SQL language use honi chahiye, aur system secure aur independent hona chahiye. Ye rules RDBMS ke standards set karte hain.'
        },
        {
            question: '4. What is SQL Plus? Write its features and uses.',
            answer: 'SQL Plus is an Oracle command-line tool used to execute SQL and PL/SQL commands.',
            point1: '● Allows executing SQL and PL/SQL queries.',
            point2: '● Displays query results in tabular format.',
            point3: '● Provides formatting for reports.',
            point4: '● Allows saving and running SQL scripts.',
            point5: '● Helps manage users and connections.',
            codeLanguage: 'sql',
            codeAnswer: `
SQL> CONNECT system/password;
SQL> SELECT * FROM student;
SQL> EXIT;
    `,
            explanation: 'SQL Plus Oracle ka ek tool hai jisme hum directly SQL commands likh ke run kar sakte hain. Ye command line interface hota hai jaha user database se connect hokar query execute karta hai, jaise data dekhna, insert karna, ya update karna.'
        },
        {
            question: '5. Explain Data Manipulation Language (DML) commands in SQL with examples.',
            answer: 'DML commands are used to manipulate data in the tables like inserting, updating, deleting, and retrieving.',
            point1: '● SELECT – Retrieve data from tables.',
            point2: '● INSERT – Add new data.',
            point3: '● UPDATE – Modify existing data.',
            point4: '● DELETE – Remove data from tables.',
            codeLanguage: 'sql',
            codeAnswer: `
SELECT * FROM student;
INSERT INTO student VALUES (101, 'Ravi', 'BCA', 85);
UPDATE student SET marks = 90 WHERE rollno = 101;
DELETE FROM student WHERE rollno = 101;
    `,
            explanation: 'DML commands data ke upar operation karte hain. SELECT data show karta hai, INSERT new data add karta hai, UPDATE existing data change karta hai, aur DELETE data remove karta hai. Ye sab hum daily database use me karte hain.'
        },
        {
            question: '6. What are Oracle Data Types? List and describe the commonly used data types.',
            answer: 'Oracle data types define what type of values a column can hold.',
            point1: '● CHAR(size) – Fixed-length character data.',
            point2: '● VARCHAR2(size) – Variable-length character data.',
            point3: '● NUMBER(p,s) – Numeric values.',
            point4: '● DATE – Stores date and time.',
            point5: '● CLOB – Character large object (for long text).',
            point6: '● BLOB – Binary large object (for images, videos).',
            codeLanguage: '',
            codeAnswer: ``,
            explanation: 'Oracle data types batate hain ki column me kis type ka data store hoga. Jaise VARCHAR2 text ke liye, NUMBER numeric value ke liye, aur DATE time/date ke liye. Ye type data consistency maintain karte hain.'
        },
        {
            question: '7. Explain how to create a table in SQL with proper syntax and example.',
            answer: 'CREATE TABLE command is used to create a new table in the database.',
            point1: '● It defines table name and columns.',
            point2: '● Each column has a datatype.',
            point3: '● Can include constraints like PRIMARY KEY.',
            codeLanguage: 'sql',
            codeAnswer: `
CREATE TABLE student (
    rollno NUMBER(5) PRIMARY KEY,
    name VARCHAR2(30),
    course VARCHAR2(10),
    marks NUMBER(5)
);
    `,
            explanation: 'CREATE TABLE command se hum new table bana sakte hain jisme columns aur unke data type define hote hain. Jaise “student” table me rollno, name, course aur marks diye gaye hain. Ye table database me ek structure create karta hai jisme data store hoga.'
        },
        {
            question: '8. Write SQL commands for inserting, updating, and deleting records in a table.',
            answer: 'We use INSERT, UPDATE, and DELETE commands to manage records in a table.',
            point1: '● INSERT – Adds new record.',
            point2: '● UPDATE – Modifies existing record.',
            point3: '● DELETE – Removes record.',
            codeLanguage: 'sql',
            codeAnswer: `
INSERT INTO student (rollno, name, course, marks)
VALUES (102, 'Neha', 'BCA', 90);

UPDATE student SET marks = 95 WHERE rollno = 102;

DELETE FROM student WHERE rollno = 102;
    `,
            explanation: 'Ye commands table ke data ko change karne ke liye use hoti hain. INSERT new data add karta hai, UPDATE purane data ko modify karta hai, aur DELETE kisi specific record ko remove karta hai. Ye commands data management ke basic parts hain.'
        },
        {
            question: '9. What is the difference between DELETE, TRUNCATE, and DROP commands?',
            answer: 'All three are used to remove data but at different levels.',
            point1: '● DELETE – Removes specific rows using WHERE condition.',
            point2: '● TRUNCATE – Removes all rows but keeps table structure.',
            point3: '● DROP – Removes entire table with structure.',
            codeLanguage: 'sql',
            codeAnswer: `
DELETE FROM student WHERE rollno = 101;
TRUNCATE TABLE student;
DROP TABLE student;
    `,
            explanation: 'DELETE se hum kuch records hata sakte hain, TRUNCATE se saara data delete hota hai par table structure rehta hai, aur DROP se poora table database se hata diya jata hai. DROP sabse permanent action hota hai.'
        },
        {
            question: '10. Explain the SELECT command in SQL with examples of WHERE and ORDER BY clauses.',
            answer: 'SELECT command is used to retrieve data from a table.',
            point1: '● SELECT * FROM table_name – Displays all data.',
            point2: '● SELECT column1, column2 – Displays specific columns.',
            point3: '● WHERE clause – Used for filtering records.',
            point4: '● ORDER BY clause – Used for sorting data.',
            codeLanguage: 'sql',
            codeAnswer: `
SELECT * FROM student;
SELECT name, marks FROM student WHERE marks > 80;
SELECT * FROM student ORDER BY marks DESC;
    `,
            explanation: 'SELECT command se hum table ke data ko dekh sakte hain. WHERE se hum filter lagate hain (jaise marks > 80), aur ORDER BY se sorting karte hain (jaise highest marks pehle). Ye command sabse zyada use hoti hai SQL me.'
        },

        {
            subject: 'Artificial Intelligence through Python Programming',
            question: '1. What are the steps to install Python and how can we verify its installation?',
            answer: 'Steps to install and verify Python:',
            point1: '● Go to official website https://www.python.org',
            point2: '● Download the latest version of Python (like Python 3.x)',
            point3: '● Run the installer and tick the option “Add Python to PATH”',
            point4: '● Click on “Install Now” to start installation',
            point5: '● Open Command Prompt (CMD) and type python --version to check installation',
            explanation: 'Yahan pe simple step ye hai ki python install karne ke liye official site pe jao, download karo aur installation ke time "Add to PATH" zarur select karo. Fir CMD me python --version likhke check karo ki install sahi hua ya nahi. Agar version show kare to matlab Python ready hai use karne ke liye.'
        },
        {
            question: '2. Explain Python variables and write the rules for naming them.',
            answer: 'A variable is a name used to store data in memory. Rules for naming variables are:',
            point1: '● Must start with a letter or underscore (_) only',
            point2: '● Can contain letters, digits, underscores',
            point3: '● Cannot start with a number',
            point4: '● No spaces or special characters allowed',
            point5: '● Variable names are case-sensitive',
            codeLanguage: 'python',
            codeAnswer: `
x = 10
name = "AI"
_score = 99
    `,
            explanation: 'Variable ek box jaisa hota hai jisme data store karte hain. Python me variable declare karne ke liye datatype likhne ki zarurat nahi hoti (dynamic typing hoti hai). Jaise x = 10 me x ek variable hai jisme 10 store hai. Rules simple hai - naam letter se start karo, space mat do aur capital aur small letter alag hote hain (case sensitive).'
        },
        {
            question: '3. What are Python basic operators? Give examples of each type.',
            answer: 'Operators are special symbols used to perform operations on variables and values. Types are:',
            point1: '● Arithmetic Operators (+, -, *, /, %, **, //)',
            point2: '● Comparison Operators (==, !=, >, <, >=, <=)',
            point3: '● Logical Operators (and, or, not)',
            point4: '● Assignment Operators (=, +=, -=, *=, /=)',
            point5: '● Membership Operators (in, not in)',
            point6: '● Identity Operators (is, is not)',
            codeLanguage: 'python',
            codeAnswer: `
a = 10
b = 3
print(a + b)   # 13
print(a > b)   # True
print(a == b)  # False
    `,
            explanation: 'Operators simple symbols hote hain jisse calculation ya comparison karte hain. Jaise + addition ke liye, == comparison ke liye. Python me har operator ek specific kaam karta hai jaise logical condition check karna, assign karna ya compare karna.'
        },
        {
            question: '4. What is indentation in Python? How are blocks defined using indentation?',
            answer: 'Indentation means giving space before a statement. It defines blocks in Python.',
            point1: '● Python uses indentation instead of curly braces {}',
            point2: '● Same level of indentation = same block',
            point3: '● Wrong indentation gives IndentationError',
            codeLanguage: 'python',
            codeAnswer: `
if True:
    print("Inside block")
    x = 10
print("Outside block")
    `,
            explanation: 'Python me block banane ke liye space dena padta hai (indentation). Matlab jo line ek block me hai wo sab ek equal space se start honi chahiye. Agar galat spacing de di to Python error deta hai. Ye system code ko readable aur structured banata hai.'
        },
        {
            question: '5. Explain different numeric data types in Python with examples.',
            answer: 'Python has three main numeric data types:',
            point1: '● int – stores whole numbers (like 5, 100)',
            point2: '● float – stores decimal numbers (like 5.5, 10.75)',
            point3: '● complex – stores numbers with real and imaginary parts (like 3 + 4j)',
            codeLanguage: 'python',
            codeAnswer: `
x = 5
y = 5.5
z = 3 + 4j
print(type(x))
print(type(y))
print(type(z))
    `,
            explanation: 'Python me numeric data teen tarah ke hote hain - int, float aur complex. Int simple numbers ke liye, float decimal ke liye aur complex mathematical imaginary values ke liye use hota hai. Jaise 3+4j me 3 real part hai aur 4j imaginary part.'
        },
        {
            question: '6. What is a string in Python? Write any five string operations or methods.',
            answer: 'A string is a sequence of characters enclosed in quotes. Common string methods are:',
            point1: '● upper() – converts to uppercase',
            point2: '● lower() – converts to lowercase',
            point3: '● replace(old, new) – replaces text',
            point4: '● split() – splits string into list',
            point5: '● strip() – removes extra spaces',
            codeLanguage: 'python',
            codeAnswer: `
text = " Hello AI "
print(text.upper())
print(text.replace("AI", "Python"))
print(text.strip())
    `,
            explanation: 'String matlab letters, numbers ya symbols ka group. Jaise "Hello AI" ek string hai. Python me string pe bahut operations kar sakte hain jaise uppercase, lowercase, replace, split ya remove karna. Ye sab string manipulation me useful hota hai.'
        },
        {
            question: '7. What is the difference between list and tuple in Python?',
            answer: 'Main difference between list and tuple:',
            point1: '● List is mutable (can be changed)',
            point2: '● Tuple is immutable (cannot be changed)',
            point3: '● List uses square brackets [ ]',
            point4: '● Tuple uses round brackets ( )',
            point5: '● Lists are slower, tuples are faster',
            codeLanguage: 'python',
            codeAnswer: `
my_list = [10, 20, 30]
my_tuple = (10, 20, 30)
    `,
            explanation: 'List aur tuple dono data store karte hain par fark ye hai ki list badal sakti hai aur tuple nahi. Jaise list me elements add ya remove kar sakte ho, lekin tuple fix hota hai. List me [] aur tuple me () ka use hota hai.'
        },
        {
            question: '8. Write a Python program using if, elif, and else to display student grades based on marks.',
            answer: 'Program to find grade using if, elif, else:',
            codeLanguage: 'python',
            codeAnswer: `
marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
else:
    print("Fail")
    `,
            explanation: 'Yahan if-elif-else ka use decision lene ke liye hua hai. Program marks check karta hai aur condition ke hisaab se grade print karta hai. Agar 90 ya usse jyada ho to A, 75 ke aas-paas ho to B, aur 60 se niche to fail. Isse program me smart decision making hoti hai.'
        },
        {
            question: '9. What is the difference between for loop and while loop? Give one example of each.',
            answer: 'Difference between for and while loop:',
            point1: '● for loop is used when number of iterations is known',
            point2: '● while loop is used when condition-based repetition is required',
            point3: '● for loop works with sequence (range, list, string)',
            point4: '● while loop continues till condition is True',
            codeLanguage: 'python',
            codeAnswer: `
# for loop example
for i in range(5):
    print(i)

# while loop example
i = 0
while i < 5:
    print(i)
    i += 1
    `,
            explanation: 'For loop tab use karte hain jab pata ho kitni baar loop chalana hai, jaise 5 times. While loop tab use karte hain jab bas condition de rakhi ho aur wo true rahe tab tak code chale. Matlab for loop range-based hota hai, while loop condition-based.'
        },
        {
            question: '10. Explain the use of break, continue, pass, and else statements in Python loops with examples.',
            answer: 'Loop control statements are used to control loop flow:',
            point1: '● break – stops the loop completely',
            point2: '● continue – skips current iteration',
            point3: '● pass – does nothing (placeholder)',
            point4: '● else – runs when loop finishes normally',
            codeLanguage: 'python',
            codeAnswer: `
for i in range(5):
    if i == 2:
        continue
    if i == 4:
        break
    print(i)
else:
    print("Loop completed")
    `,
            explanation: 'Loop control statements loop ke flow ko control karte hain. Jaise break se loop band ho jata hai, continue current round skip karta hai, pass kuch nahi karta (future code ke liye blank space jaisa), aur else tab chalta hai jab loop normally finish hota hai. Ye sab coding logic ko flexible banate hain.'
        },

        {
            subject: 'Web Technology (HTML, CSS, JavaScript)',
            question: '1. What is the Internet? Explain its main components and uses.',
            answer: 'The Internet is a global network of interconnected computers that share information, data, and resources.',
            point1: '● Internet stands for Interconnected Network.',
            point2: '● It connects millions of computers globally.',
            point3: '● It uses TCP/IP protocol for communication.',
            point4: '● Main components – Clients, Servers, Routers, Media, Protocols.',
            point5: '● Used for communication, online shopping, education, and entertainment.',
            explanation:
                'Internet ek aisa global network hai jisme duniya bhar ke computer connected hote hain. Ye ek bridge ki tarah kaam karta hai jisse hum email bhej sakte hain, website dekh sakte hain, video dekh sakte hain aur online kaam kar sakte hain. TCP/IP protocol data ko safely ek computer se doosre tak bhejne mein madad karta hai. Internet ke bina WWW ya websites exist nahi karte.',
        },
        {
            question: '2. Define the World Wide Web (WWW). How does it work?',
            answer: 'WWW is a system of interlinked web pages accessed through the Internet using web browsers.',
            point1: '● Full form – World Wide Web.',
            point2: '● Created by Tim Berners-Lee in 1989.',
            point3: '● Uses HTTP/HTTPS protocol.',
            point4: '● Contains linked documents called web pages written in HTML.',
            point5: '● Browsers send requests to web servers and display results.',
            explanation:
                'WWW ek service hai jo Internet par chalta hai. Ye webpages ka collection hota hai jo link ke through ek dusre se connected hote hain. Jab hum browser me URL type karte hain to browser server se data mangta hai (HTTP request bhejta hai) aur server webpage wapas bhejta hai. Uske baad browser page ko display karta hai. WWW basically humare liye websites dekhne ka platform hai.',
        },
        {
            question: '3. Differentiate between the Internet and the World Wide Web.',
            answer: 'Internet and WWW are related but not the same — Internet is the network, while WWW is a service that runs on it.',
            point1: '● Internet is the physical network of computers.',
            point2: '● WWW is a collection of web pages accessed via the Internet.',
            point3: '● Internet uses protocols like TCP/IP, FTP, SMTP.',
            point4: '● WWW uses HTTP/HTTPS protocol.',
            point5: '● Internet was developed by ARPA, WWW by Tim Berners-Lee.',
            explanation:
                'Internet ko hum ek highway maan sakte hain jahan se data travel karta hai, aur WWW ek gaadi jaisi hai jo us highway par chalti hai. Internet hardware level par connection deta hai aur WWW us par websites aur webpages ke form me information provide karta hai.',
        },
        {
            question: '4. What is a Web Browser? Explain its functions and components.',
            answer: 'A Web Browser is a software application used to access and display web pages from the Internet.',
            point1: '● Examples – Google Chrome, Firefox, Edge, Safari.',
            point2: '● Functions – Access, display, navigate, and manage web pages.',
            point3: '● Components – User Interface, Browser Engine, Rendering Engine, JavaScript Engine, Networking.',
            point4: '● Uses HTTP/HTTPS to communicate with web servers.',
            explanation:
                'Web Browser ek program hota hai jisse hum website dekhte hain. Jab hum URL likhte hain, browser server se page mangta hai aur user ko dikhata hai. Jaise hum Chrome me www.google.com likhte hain, to Chrome Google ke server se data lekar uska webpage show karta hai. Browser ke andar rendering engine HTML aur CSS ko samajhta hai aur screen par dikhata hai.',
        },
        {
            question: '5. What is a Web Server? Describe its functions and working process.',
            answer: 'A Web Server is a computer system or software that stores, processes, and delivers web pages to browsers.',
            point1: '● Examples – Apache, Nginx, IIS, Node.js.',
            point2: '● Stores all website files like HTML, CSS, JS, images.',
            point3: '● Responds to client (browser) requests.',
            point4: '● Uses HTTP/HTTPS protocol for communication.',
            point5: '● Executes server-side scripts and manages data.',
            explanation:
                'Web Server ek powerful computer hota hai jisme websites store hoti hain. Jab user apne browser me koi URL likhta hai, to request server tak jaati hai. Server us page ko find karta hai aur HTML file browser ko bhej deta hai. Browser us file ko render karke user ko dikhata hai. Apache aur Nginx sabse famous web servers hain.',
        },
        {
            question: '6. Differentiate between a Web Browser and a Web Server.',
            answer: 'A Web Browser is used by users to view web pages, while a Web Server stores and delivers those pages.',
            point1: '● Browser is client-side software; server is server-side software.',
            point2: '● Browser sends requests; server responds to those requests.',
            point3: '● Browser displays pages; server delivers data/files.',
            point4: '● Examples: Chrome, Firefox (browsers); Apache, Nginx (servers).',
            explanation:
                'Browser aur Server ek doosre ke bina kaam nahi karte. Browser user ke taraf hota hai jahan se request jaati hai, aur Server us request ka jawab deta hai. Browser ek viewer ki tarah hota hai aur Server ek provider ki tarah. Example: Chrome (browser) Google ke web server se data leke humare screen par dikhata hai.',
        },
        {
            question: '7. What is a URL? Explain the different parts of a URL with an example.',
            answer: 'A URL (Uniform Resource Locator) is the address of a resource (like webpage or file) on the Internet.',
            point1: '● Full form – Uniform Resource Locator.',
            point2: '● Used to locate web pages on the WWW.',
            point3: '● Main parts – Protocol, Domain, Port, Path, Query, Fragment.',
            point4: '● Example – https://www.example.com:80/page.html?name=md#ab1',
            explanation:
                'URL ek website ka address hota hai jaise ghar ka address hota hai. Jab hum browser me URL likhte hain, wo bataata hai kis server par file hai aur kaise access karni hai. Example me “https” protocol hai, “www.example.com” domain name hai, “/page.html” file ka path hai. Isse browser ko exact jagah milti hai data lene ke liye.',
        },
        {
            question: '8. What is MIME? Mention its purpose and give examples of common MIME types.',
            answer: 'MIME (Multipurpose Internet Mail Extensions) defines how different file types are transferred and identified over the Internet.',
            point1: '● Tells browser what kind of file is being sent.',
            point2: '● Used in HTTP headers and emails.',
            point3: '● Examples: text/html, image/png, application/json, video/mp4.',
            point4: '● Helps browser handle files correctly.',
            explanation:
                'MIME ek tarah ka label hota hai jo browser ko batata hai ki ye file kis type ki hai — jaise HTML, image, ya video. Jab server file bhejta hai to uske sath “Content-Type: text/html” jaisa header aata hai. Browser use dekh kar samajh jaata hai file ko kaise open karna hai. Example: image/png ka matlab hai image file PNG format me hai.',
        },
        {
            question: '9. What is HTTP? Explain its working and different request methods.',
            answer: 'HTTP (HyperText Transfer Protocol) is a communication protocol used for transferring data between browser and web server.',
            point1: '● It defines how messages are sent and received over the web.',
            point2: '● Browser sends HTTP request; server replies with HTTP response.',
            point3: '● Common methods – GET, POST, PUT, DELETE, HEAD.',
            point4: '● Uses port 80 by default.',
            point5: '● Works on request-response model.',
            explanation:
                'HTTP ek rule set hai jisse browser aur server ek doosre se baat karte hain. Jab hum URL likhte hain to browser server ko “request” bhejta hai aur server “response” me HTML page bhejta hai. Example: GET page dekhne ke liye, POST data bhejne ke liye. Ye pura system hi websites ko run karne ka base hai.',
        },
        {
            question: '10. Differentiate between HTTP and HTTPS with suitable examples.',
            answer: 'HTTP and HTTPS are web communication protocols, but HTTPS is more secure because it uses encryption.',
            point1: '● HTTP = HyperText Transfer Protocol.',
            point2: '● HTTPS = HyperText Transfer Protocol Secure.',
            point3: '● HTTP data is not encrypted; HTTPS uses SSL/TLS encryption.',
            point4: '● HTTP uses port 80; HTTPS uses port 443.',
            point5: '● Example: http://example.com (normal), https://example.com (secure).',
            explanation:
                'HTTP aur HTTPS dono hi browser aur server ke beech connection banate hain. Farq bas itna hai ki HTTPS secure hota hai, kyunki ye SSL certificate use karta hai jisse data encrypt ho jaata hai. Matlab koi hacker data ko easily padh nahi sakta. Banking, login jaise secure websites me HTTPS jaruri hota hai.',
        },

        {
            subject: 'Computer Network, Security and Cyber Law',
            question: '1. What is a Computer Network? Explain its definition, uses, goals, and structure.',
            answer: 'A computer network is a system where multiple computers and devices are connected together to share data, resources, and communication.',
            point1: '● Definition: A computer network is a collection of interconnected computers and devices that communicate and share resources.',
            point2: '● Uses: It helps in data sharing, resource sharing (like printer, storage), communication (emails, chats), and remote access.',
            point3: '● Goals: Resource sharing, reliability, scalability, and cost efficiency.',
            point4: '● Structure: It consists of hardware (like routers, cables) and software (protocols, operating systems).',
            explanation: 'Simple words mein bolo toh computer network ek system hai jahan computers ek dusre se connected hote hain taaki wo data ya resources share kar saken. Jaise office mein sab computer ek printer se connected hote hain – yehi network ka kaam hai. Iske goals hain time bachana, data easily share karna, aur communication fast banana.'
        },
        {
            question: '2. Explain Network Architecture and its types.',
            answer: 'Network architecture defines the overall design and structure of a computer network.',
            point1: '● It shows how computers and devices are connected and how communication happens.',
            point2: '● It includes hardware, software, protocols, and transmission medium.',
            point3: '● Types of network architecture: Peer-to-Peer and Client-Server.',
            point4: '● Peer-to-Peer: All computers share equal responsibility (like LAN at home).',
            point5: '● Client-Server: One central server provides services to multiple clients.',
            explanation: 'Network architecture ek blueprint hota hai jisme likha hota hai network kaise design hoga, kaun kis se connect hoga aur data kaise flow karega. Jaise ghar ka map hota hai na – waise hi network ka bhi ek map hota hai. Client-server mein ek bada system (server) data provide karta hai aur dusre systems (clients) usko use karte hain.'
        },
        {
            question: '3. What is the ISO-OSI Reference Model? Describe its seven layers in detail.',
            answer: 'OSI (Open Systems Interconnection) model standardizes the functions of a communication system into seven layers.',
            point1: '● Layer 1 – Physical Layer: Deals with hardware, cables, and signals.',
            point2: '● Layer 2 – Data Link Layer: Ensures error-free transfer between two nodes.',
            point3: '● Layer 3 – Network Layer: Handles routing and addressing of data packets.',
            point4: '● Layer 4 – Transport Layer: Provides reliable data transfer using TCP/UDP.',
            point5: '● Layer 5 – Session Layer: Manages session establishment and termination.',
            point6: '● Layer 6 – Presentation Layer: Translates data formats (encryption, compression).',
            point7: '● Layer 7 – Application Layer: Provides network services to users (HTTP, FTP, etc.).',
            explanation: 'OSI model ek step-by-step system hai jisme data ek computer se doosre tak 7 layers ke through jata hai. Har layer ka apna kaam hota hai, jaise Physical layer signal bhejti hai, Network layer route find karti hai, aur Application layer user ko service deti hai (like browser or mail).'
        },
        {
            question: '4. What are Network Models? Compare OSI and TCP/IP models.',
            answer: 'Network models define the structure of communication between devices.',
            point1: '● OSI Model: Has 7 layers; theoretical model by ISO.',
            point2: '● TCP/IP Model: Has 4 layers; practical model used on the Internet.',
            point3: '● OSI focuses on standardization; TCP/IP focuses on implementation.',
            point4: '● OSI separates Presentation and Session layers; TCP/IP combines them into Application layer.',
            point5: '● TCP/IP is more reliable and widely used.',
            explanation: 'Network models data ko transfer karne ka rule-book hota hai. OSI model theory ke liye use hota hai aur TCP/IP actual internet pe kaam karta hai. OSI mein 7 steps hote hain, TCP/IP mein 4 main steps – Application, Transport, Internet, aur Network Access.'
        },
        {
            question: '5. What are Connecting Devices in a computer network? Explain their functions.',
            answer: 'Connecting devices are hardware components that link computers and networks.',
            point1: '● Repeater: Strengthens weak signals.',
            point2: '● Hub: Connects multiple computers in a LAN.',
            point3: '● Switch: Transfers data to the specific device (more efficient than hub).',
            point4: '● Router: Connects multiple networks (LAN to WAN).',
            point5: '● Bridge: Connects two LANs and filters traffic.',
            point6: '● Gateway: Connects networks using different protocols.',
            explanation: 'Connecting devices wo gadgets hote hain jo computers ke beech communication possible banate hain. Jaise router ghar mein internet connect karta hai, switch office mein multiple PCs ko connect karta hai. Har device ka apna role hota hai – jaise bridge traffic control karta hai, repeater signal boost karta hai.'
        },
        {
            question: '6. What is TCP/IP? Explain its layers and functions.',
            answer: 'TCP/IP (Transmission Control Protocol / Internet Protocol) is a communication protocol suite used for internet communication.',
            point1: '● Application Layer: Provides network services like HTTP, FTP, SMTP.',
            point2: '● Transport Layer: Provides reliable data transfer using TCP and UDP.',
            point3: '● Internet Layer: Handles routing using IP addresses.',
            point4: '● Network Access Layer: Deals with physical data transmission.',
            explanation: 'TCP/IP basically ek rule set hai jisse internet pe data travel karta hai. Jaise jab hum website open karte hain, toh TCP ensure karta hai data properly bheja jaye aur IP address ke through data ko route karta hai. Iske 4 layer milke ensure karte hain ki data sahi jagah aur sahi form mein पहुंचे.'
        },
        {
            question: '7. What is UDP? Differentiate between TCP and UDP.',
            answer: 'UDP (User Datagram Protocol) is a connectionless communication protocol used for fast data transfer.',
            point1: '● No connection setup needed (connectionless).',
            point2: '● Faster but less reliable.',
            point3: '● Used for video streaming, gaming, and real-time apps.',
            point4: '● TCP ensures reliability, UDP ensures speed.',
            point5: '● TCP has error checking; UDP does not guarantee delivery.',
            explanation: 'UDP ek lightweight protocol hai jisme data directly bhej diya jata hai bina connection banaye. Jaise live cricket match ka data – thoda delay ya data loss chalega, par speed zaruri hai. TCP reliable hai par thoda slow, UDP fast hai par risk hai ki data missing ho sakta hai.'
        },
        {
            question: '8. What is Network Topology? Explain the topology design process, connectivity analysis, and delay analysis.',
            answer: 'Network topology refers to the physical or logical arrangement of network devices.',
            point1: '● Topology Design Process: Deciding how nodes and cables will be arranged.',
            point2: '● Common Topologies: Bus, Star, Ring, Mesh, Tree, Hybrid.',
            point3: '● Connectivity Analysis: Ensures all nodes are properly connected.',
            point4: '● Delay Analysis: Calculates time taken by data to reach the destination.',
            explanation: 'Network topology matlab kaise computers ek dusre se connected hain – jaise ek ghar mein rooms wire se connected hote hain. Design process mein decide hota hai kaun kis se connect hoga. Connectivity analysis check karta hai sab connected hain ya nahi, aur delay analysis dekhata hai ki data bhejne mein kitna time lagta hai.'
        },
        {
            question: '9. What is Backbone Design? Explain its types and importance.',
            answer: 'Backbone design defines the main path that connects different parts of a network.',
            point1: '● It is the central part of a network structure.',
            point2: '● Types: Distributed Backbone, Collapsed Backbone, Parallel Backbone.',
            point3: '● Ensures efficient communication and scalability.',
            point4: '● Acts as a highway for data transfer between subnetworks.',
            explanation: 'Backbone network ek main road ki tarah hota hai jahan se chhoti chhoti galiyan (subnets) connected hoti hain. Ye poore network ka base hota hai jisse data ek jagah se doosri tak smoothly flow karta hai. Jaise city ke main road ke bina traffic control mushkil hota hai, waise backbone ke bina network slow ho jata hai.'
        },
        {
            question: '10. What is Logical Access Design? Describe its components and advantages.',
            answer: 'Logical access design focuses on how users and devices logically communicate in a network.',
            point1: '● Defines user access levels and permissions.',
            point2: '● Includes IP addressing, VLANs, and routing policies.',
            point3: '● Helps in security and efficient resource utilization.',
            point4: '● Ensures proper control and access management.',
            explanation: 'Logical access design matlab kis user ko kis data tak access milega aur kaise milega. Ye mainly software aur rules level pe hota hai, jaise har employee ko alag permission dena (admin, user, guest). Ye design ensure karta hai ki network secure aur organized rahe.'
        }

    ],
};