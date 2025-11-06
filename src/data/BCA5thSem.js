export const BCAFifthSemesterNotesPDFs = {
    '6900ad49d3212038af1cd2c5': [
        {
            group: 'A',
            pdfs: ['BCA5thSemNotes1A.pdf'],
        },
        {
            group: 'B',
            pdfs: [''],
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