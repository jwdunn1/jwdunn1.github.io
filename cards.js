  // The following code dynamically loads portfolio cards into the DOM
  var category = [
    '01 Autonomous vehicles',
    '02 Software research',
    '03 Client/front-end systems',
    '04 Server/back-end systems',
  ];
  var portfolio = [ 
  {
  id:13,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/13.png",
  desc:'<span class="boldDesc">System integration:</span><br> In this project, I developed code to safely control an autonomous Lincoln MKZ around a closed-circuit test track. The software correctly identified a stop light under harsh lighting conditions. I assembled, led, and collaborated with an international team (level5-engineers). Tools: ROS, OpenCV, Tensorflow, Unity, C++, Python, Excel, GitHub, and Slack.<br><a href="https://github.com/level5-engineers/system-integration?files=1" target="_blank">View code</a> | <a href="https://github.com/level5-engineers/system-integration#level5-engineers" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:15,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/15.png",
  desc:'<span class="boldDesc">3D motion planning:</span><br> This project plans a path through an urban environment. I implemented a bi-level A* path planning algorithm - operating with a fine grid and with a coarse graph. The program can follow an itinerary of coordinates to simulate a pickup/delivery drone. Tools: Python, Unity, and Excel.<br><a href="https://github.com/jwdunn1/FCND-Motion-Planning?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/FCND-Motion-Planning#fcnd---3d-motion-planning" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:17,
  year: 2019,
  agency: "kynamatrix Research Network",
  client: "kynamatrix Research Network",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/17.png",
  desc:'<span class="boldDesc">3D position estimation:</span><br> In this study, I track the position and attitude of a quadrotor moving in three dimensions using eight scenarios to refine the estimator. The simulated quad is operated with the custom controller developed earlier. Tools: C++ and Kalman filter.<br><a href="https://github.com/jwdunn1/FCND-Estimation-CPP?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/FCND-Estimation-CPP#fcnd---estimation-project" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:16,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/16.png",
  desc:'<span class="boldDesc">3D motion control:</span><br> Here, I implement a basic flight controller and tune across three scenarios: body rate and roll/pitch, position/velocity and yaw angle, and non-idealities for robustness. Tools: Python, C++, and Excel.<br><a href="https://github.com/jwdunn1/FCND-Controls?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/FCND-Controls#fcnd---controls-project" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:14,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/14.png",
  desc:'<span class="boldDesc">3D autonomous flight:</span><br> Demonstrating the phases of flight, I implemented a simple flight plan within an event-driven programming paradigm and experimented with stepping waypoint accuracy analysis using telemetry data. Tools: Python and Excel.<br><a href="https://github.com/jwdunn1/FCND-Backyard-Flyer?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/FCND-Backyard-Flyer#fcnd---backyard-flyer-project" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:12,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/segment.png",
  desc:'<span class="boldDesc">Advanced deep learning:</span><br> This project addresses labeling the pixels of a road in images using a Fully Convolutional Network (FCN). I implemented semantic segmentation with an encoder, decoder, skip connections, 1x1 convolution, and inference optimization. Tools: Python, TensorFlow, and Excel.<br><a href="https://github.com/jwdunn1/CarND-Semantic-Segmentation?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-Semantic-Segmentation#semantic-segmentation" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:11,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/2dpath.png",
  desc:'<span class="boldDesc">2D path planning:</span><br> In this study, I generate a smooth, safe trajectory for a vehicle to navigate through traffic on a 3-lane highway. To avoid other vehicles, I utilize localization, sensor fusion, map data, environmental prediction, and behavioral planning. Tools: C++, Unity, and Excel.<br><a href="https://github.com/jwdunn1/CarND-Path-Planning-Project?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-Path-Planning-Project#path-planning-project" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:10,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/TimingFactors.png",
  desc:'<span class="boldDesc">Model predictive controller:</span><br> Here, I implemented a model predictive controller using Ipopt and CppAD to drive a vehicle around the track even with additional latency between commands. Tools: C++, Unity, and Excel.<br><a href="https://github.com/jwdunn1/CarND-MPC-Project?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-MPC-Project#model-predictive-control-mpc-project" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:9,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/pid.png",
  desc:'<span class="boldDesc">PID controller:</span><br> In this project, I implemented a PID (proportional-integral-derivative) controller to maneuver a vehicle around a virtual track.  Tools: C++ and Unity.<br><a href="https://github.com/jwdunn1/CarND-PID-Control-Project?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-PID-Control-Project#carnd-controls-pid" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:8,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/sense.png",
  desc:'<span class="boldDesc">Localization: particle filter:</span><br> With sensor data and a map, I determine the probabilistic location of a vehicle using the principles of Markov localization. Tools: C++.<br><a href="https://github.com/jwdunn1/CarND-Localization/blob/master/src/particle_filter.cpp" target="_blank">View code</a> | <a href="https://vimeo.com/217426713" target="_blank">View results</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:7,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/ukf.png",
  desc:'<span class="boldDesc">Tracking motion:</span><br> I implemented Kalman filters in C++, fusing measurements over time from LIDAR and radar sensors. I visualized results with Excel. The extended version tracks linear motion:<br><a href="https://github.com/jwdunn1/CarND-Extended-Kalman-Filter-Project?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-Extended-Kalman-Filter-Project#extended-kalman-filter-project" target="_blank">View report</a><br>The unscented version tracks non-linear motion with sigma point prediction, using the CTRV model:<br><a href="https://github.com/jwdunn1/CarND-Unscented-Kalman-Filter-Project?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-Unscented-Kalman-Filter-Project#unscented-kalman-filter-project" target="_blank">View report</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:5,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/5.png",
  desc:'<span class="boldDesc">Vehicle detection and tracking:</span><br> In this project, I identify vehicles in a video from a front-facing camera utilizing histogram of gradients, support vector machine, heat map, data normalization, and shuffling. Tools: Python, OpenCV, Keras, Excel, and Illustrator.<br><a href="https://github.com/jwdunn1/CarND-Vehicle-Detection?code=1" target="_blank">View code</a> | <a href="http://kynamatrix.org/research/ProximityOutreach/p05.pdf" target="_blank">View report</a> ',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:4,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/4.png",
  desc:'<span class="boldDesc">Advanced lane detection:</span><br> The goal of this project is to identify the lane boundaries and curvature in a video from a front-facing camera on a car. This required calibration and distortion correction, image rectification, color transforms, and gradient thresholding. Tools: Python, OpenCV, Excel, and Illustrator.<br><a href="https://github.com/jwdunn1/CarND-Advanced-Lane-Lines?code=1" target="_blank">View code</a> | <a href="http://kynamatrix.org/research/ProximityOutreach/p04.pdf" target="_blank">View report</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:3,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/3.png",
  desc:'<span class="boldDesc">Behavioural cloning:</span><br> Here, I train a deep network to steer a vehicle using transfer learning and data augmentation. Tools: Python, OpenCV, Keras, Excel, Premiere Pro, and Illustrator.<br><a href="https://github.com/jwdunn1/CarND-Behavioral-Cloning?files=1" target="_blank">View code</a> | <a href="https://github.com/jwdunn1/CarND-Behavioral-Cloning#deep-learning-network-cloning-of-human-driving-behavior" target="_blank">View report</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:2,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/stop.png",
  desc:'<span class="boldDesc">Traffic sign classifier:</span><br> In this project, I classify traffic signs with logistic regression, neural networks, gradient descent, backpropagation, regularization, and convolutional networks. Tools: Python, OpenCV, TensorFlow.<br><a href="https://github.com/jwdunn1/CarND-Traffic-Sign-Classifier-Project?files=1" target="_blank">View code</a> | <a href="https://jwdunn1.github.io/CarND-Traffic-Sign-Classifier-Project/report.html" target="_blank">View report</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:1,
  year: 2019,
  agency: "Agency Name",
  client: "Client Name",
  category: 0,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/1.png",
  desc:'<span class="boldDesc">Lane line detection:</span><br> In this work, I identify lane lines on the road, first in an image, then in a video stream utilizing image analysis techniques including color channels, thresholding, region masking, Canny edge detection, and Hough transform. Tools: Python, OpenCV, and Jupyter.<br><a href="https://github.com/jwdunn1/CarND-LaneLines-Project?files=1" target="_blank">View code</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:0,
  year: 2019,
  agency: "kynamatrix",
  client: "Open source",
  category: 1,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/proximity.png",
  desc:'<span class="boldDesc">Improving logistics:</span><br> The current response system to natural disasters still leaves many people homeless and without basic needs. As a volunteer researcher at kynamatrix, I am assisting in the design and engineering of the Proximity Algorithm, a scalable method to rapidly deploy service and residential modules, so that our communities can more effectively support survivors during the rebuild process.<br><a href="http://kynamatrix.org/#Rcat0" target="_blank">Read more</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:0,
  year: 2019,
  agency: "kynamatrix",
  client: "Open source",
  category: 1,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/net.png",
  desc:'<span class="boldDesc">KnowledgeShare:</span><br> Automated categorization and indexing of existing knowledge solutions (such as forums, blogging, structured files, email, etc.) Simple utilities for linking, visualization, and conversation. Structured queries can be answered thereby amplifying expertise. Tools: Python, SQL.<br><a href="http://kynamatrix.org/#Rcat1" target="_blank">Read more</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:0,
  year: 2007,
  agency: "kynamatrix",
  client: "Open source",
  category: 1,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/hd.png",
  desc:'<span class="boldDesc">University collaborations:</span><br>At kynamatrix, I volunteered my engineering skills on the Researc<strong>HD</strong>iscovery project. The 2-way high definition experience opened virtual windows between university labs connecting researchers at Carnegie Mellon University, Georgia Institute of Technology, Harvard University, Massachusetts Institute of Technology, Stanford University, and University of Washington. Tools: LifeSize codec and H.264.<br><a href="http://kynamatrix.org/images/kRN-Newsletter07.pdf" target="_blank">View project</a> | <a href="https://web.archive.org/web/20060902004131/www.lifesize.com/downloads/pdf/datasheet_room.pdf" target="_blank">View specs</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:0,
  year: 2019,
  agency: "Motivara",
  client: "Open source",
  category: 1,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/verity.png",
  desc:'<span class="boldDesc">Interactive graphics:</span><br> I designed and implemented a browser-based framework to simplify the creation of interactive graphic sketches. The API includes a full set of drawing functionality, a built-in state manager, optimized mathematics routines, and customizable animation. Multiple canvases can be managed and rendered in 2D and 3D. Tools: JavaScript, PixiJS, and three.js',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:0,
  year: 1988,
  agency: "Honeywell",
  client: "Customers",
  category: 1,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/honeywell.png",
  desc:'<span class="boldDesc">Experimental interfaces:</span><br> While at Honeywell Bull, I researched alternative approaches to explore corporate repositories and expert system knowledge bases. I prototyped a visual database navigator and a menu-based natural language interface. These investigations were extensions of my artificial intelligence focus at Arizona State University. Tools: C, Windows, and SQL.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id:0,
  year: 2014,
  agency: "Motivara",
  client: "Experimental",
  category: 2,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/falls.png",
  desc:'<span class="boldDesc">Cross-platform app:</span><br> Collaborated with a designer to create a game application called BinaryFallz. I implemented the app in JavaScript using oCanvas and jQuery. Distributed cross-platform via PhoneGap Build.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 2019,
  agency: "Motivara",
  client: "Experimental",
  category: 2,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/nightflight.png",
  desc:'<span class="boldDesc">Motion graphics:</span><br> Collaborated with a designer to build, edit, and deliver a music video (Nightflight) and instructional guide. Tools: Adobe Premiere Pro, After Effects, Media Encoder, Processing, and JavaScript.<br><a href="https://vimeo.com/114341626" target="_blank">View work</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 4538,
  year: 2017,
  agency: "Motivara",
  client: "Various",
  category: 2,
  subCategory: [ "ux","ui","algorithms","web design" ],
  image: "images/websites.png",
  desc:'<span class="boldDesc">Responsive websites:</span><br> At Motivara, I implemented and delivered hand-crafted websites and interactive presentations to clients in the Seattle area. In all cases, I  collaborated with the principal designer to refine the user interface. Tools: HTML, CSS, JavaScript, jQuery, PHP, MySQL, Wordpress (CMS), and Adobe Illustrator.',
  tags: [ "CMS","JavaScript","HTML","CSS","responsive" ],
  tbd: [ "draft","edit","code","photos","find","Customers included Asemblon, BetterPhoto, Brant, ComPub, CSBellevue, Hodge-IA, King County, kRN, Microsoft, Microsoft Alumni Foundation, Redmond PD, RNSchultz, Tandax, and trifc.org." ]
  },
  {
  id: 6721,
  year: 1994,
  agency: "Microsoft",
  client: "Mirage",
  category: 2,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/yrm.png",
  desc:'<span class="boldDesc">Decision support tool:</span><br> At Microsoft, I lead a team of 5 developers to implement YRM 2.0. It provides forecasting and analysis for hotel room reservations at the Mirage to optimize pricing and maximize the yield. Tools: Microsoft Project, Visual Basic, and SQL Server.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 6720,
  year: 1993,
  agency: "Microsoft",
  client: "Intel",
  category: 2,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/intel.png",
  desc:'<span class="boldDesc">Supply chain planner:</span><br> At Microsoft, I implemented a global logistics planning wizard for Intel Corporation. Users schedule capacity and route output from microprocessor wafer factories (fabs) to assembly/test facilities. I captured and embodied expertise in the form of business rules to replace the legacy process of emails, spreadsheets, and phone calls. Tools: Visual Basic and SQL Server.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "ELVIS", "electronic", "logistics", "verification", "inventory", "scheduling" ]
  },
  {
  id: 0,
  year: 1992,
  agency: "Microsoft",
  client: "Mirage",
  category: 2,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/ras.png",
  desc:'<span class="boldDesc">Analysis system:</span><br> At Microsoft, I implemented RAS, a spreadsheet-based tool to help retail managers at the Mirage maximize profits through improved analysis of sales data. It also monitors vendor performance and assists in planning merchandise inventory levels. Tools: Microsoft Excel, macros, command shell scripts, SQL Server stored procedures, and C.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 1991,
  agency: "MicroAge",
  client: "Franchisees",
  category: 2,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/zdata.png",
  desc:'<span class="boldDesc">Order/inquiry system:</span><br> At MicroAge, I designed, developed, and released the first and second major versions of ZDATA, a distributed inventory database and order creation system for franchisees. Tools: C, Btrieve, Greenleaf, ZMODEM, Unix, and LU6.2.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 2002,
  agency: "Microsoft",
  client: "Customers",
  category: 3,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/idc.png",
  desc:'<span class="boldDesc">Data center architecture:</span><br> At Microsoft, I drove the editing and shipment of the Reference Architecture Guide in Internet Data Center v1.5. This product provided customers with guidance on planning, building, and operating a complete Internet-facing data center.<br><a href="https://web.archive.org/web/20030221082921/http://www.microsoft.com:80/technet/itsolutions/idc/rag/ragc01.asp" target="_blank">View guide</a> | <a href="https://web.archive.org/web/20030418090845if_/http://www.microsoft.com:80/TechNet/itsolutions/idc/rag/images/RAGN0203.GIF" target="_blank">View diagram</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 2000,
  agency: "Microsoft",
  client: "Customers",
  category: 3,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/dna1.png",
  desc:'<span class="boldDesc">Scalable architecture:</span><br> Based on learnings from the BN.com project, I authored and published a whitepaper at Microsoft on the subject of designing scalable, highly-available systems using Windows DNA technologies. This paper is referenced by nine technical articles and two patents (6542902 and 7114158).<br><a href="http://www.motivara.com/Archives/WinDNA.pdf" target="_blank">View paper</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 2000,
  agency: "Microsoft",
  client: "BN.com",
  category: 3,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/bn.png",
  desc:'<span class="boldDesc">eCommerce optimization:</span><br> At Microsoft, I collaborated with Barnes &amp; Noble to aid their early adoption of updated server technology. In a lab on the Redmond campus, we replicated the order processing component of the BN.com datacenter in New Jersey. The scaled version included 32 multi-way servers and 15 storage arrays. Working with customer developers, I optimized the order processing workflow and with engineers from Cluster Server, Message Queuing, and SQL Server, I improved product quality.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 1998,
  agency: "Microsoft",
  client: "Various",
  category: 3,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/consulting.png",
  desc:'<span class="boldDesc">Database optimization:</span><br> At Microsoft, I provided consulting services to clients in the Southwest region who needed custom assistance with various Microsoft technologies including SQL Server installation, administration, programming, and performance optimization. Customers included Intel, Allied Signal, American Express, and Mirage Resorts.',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find", "Other clients: DataFlex, Digital Sciences, Tucson Unified School District, PenUltimate, U-Haul, Los Alamos National Labs, SkyMall, Quality Care Solutions, America West Airlines, Scottdale Insurance, Motorola, Sandia National Laboratories, and First Interstate Bank"]
  },
  {
  id: 0,
  year: 1986,
  agency: "Arizona State University",
  client: "ASU Bookstore",
  category: 3,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/servers.png",
  desc:'<span class="boldDesc">POS optimization:</span><br> During my studies at Arizona State University, I provided support for daily operations of a Honeywell Level 6 computer at ASU Bookstore. To handle peak point-of-sale loads during rush week at the beginning of each semester, I optimized the system to more reliably process higher volumes of data. Tools: BASIC, TCL, and Pick operating system.<br><a href="https://en.wikipedia.org/wiki/Honeywell_Level_6" target="_blank">Wiki: Level 6</a> | <a href="https://en.wikipedia.org/wiki/Pick_operating_system" target="_blank">Wiki: Pick OS</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  },
  {
  id: 0,
  year: 1977,
  agency: "Stuyvesant High School",
  client: "Client Name",
  category: 3,
  subCategory: [ "ui","ux","algorithms","logo","product design","video design", "web design"],
  image: "images/bits.png",
  desc:'<span class="boldDesc">Computer operations:</span><br> My first direct interaction with a computer was at Stuyvesant High School on an IBM 1130 system. I learned to program in Fortran and then taught other students. Fascinated by the technology, I volunteered as a computer operator, running jobs and performing supervisory functions. Tools: Assembly language, Fortran, BASIC, Hollerith cards, and keypunch machines!<br><a href="https://en.wikipedia.org/wiki/IBM_1130" target="_blank">Wiki: 1130</a>',
  tags: [ "black","white","identity","research" ],
  tbd: [ "draft", "edit", "vectors", "code", "photos", "find"]
  }
  ];

  // Define the steps to create and append cards
  function appendCards() {
    var lastCat = -1;
    for(var i=0;i<portfolio.length;i++){
      if(portfolio[i].category != lastCat) {
        lastCat = portfolio[i].category;
        var cat = document.createElement("div");
        cat.className = "titleBox";
        cat.id = "cat"+lastCat;
        cat.innerHTML = category[lastCat];
        wrapper.appendChild(cat);
      }
      var node = document.createElement("div");
      node.className = "card";
      node.innerHTML = '<img src="' + portfolio[i].image + '"><p>' + portfolio[i].desc + '</p>';
      wrapper.appendChild(node);
    }
  }

  // Run the routine to add the cards
  appendCards();
