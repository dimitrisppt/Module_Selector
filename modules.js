if ($.isFunction(console.log)) {
    if (window.moduleData !== void 0) {
        console.log("window.moduleData being overwritten; previous value is:\n", window.moduleData);
    }
    if (window.streamData !== void 0) {
        console.log("window.streamData being overwritten; previous value is:\n", window.streamData);
    }
}

window.moduleData = {
    core: {
        moduleList: [
            {
                id: "6CCS3PRJ",
                title: "6CCS3PRJ Individual Project",
                credits: 30,

                selected: true,
                lecturer: " Dr Natalia Criado-Pacheco",
                assessment: "100% final report. Attendance at an oral presentation is compulsory for passing the module",
                description: "The project provides you with an opportunity to engage in a self-managed and detailed investigation of an aspect of computer science. A substantial piece of written work will be produced and a significant piece of software."
            }
        ],
        
        isCore: true,
        term: "Both terms"
    },
    term1: {
        moduleList: [
            {
                id: "6CCS3AMS",
                title: "6CCS3AMS Agents and Multi-Agent Systems",
                credits: 15,
                lecturer: "Dr Elizabeth Black, Professor Michael Luck",
                assessment: "80% written examination, 20% coursework",
                description: "This module provides a critical introduction to theories and methods regarding multi-agent computer systems and their component agents, focussing particularly on mechanisms for coordination and agreement between self-interested agents."
            },
            {

                id: "6CCS3CFL",
                title: "6CCS3CFL Compiler and Formal Languages",
                credits: 15,
                lecturer: "Dr Christian Urban",
                assessment: "80% written examination, 20% coursework",
                description: "Learning aims & outcomes: To explain the techniques behind compilers, lexers and parsers. To introduce the mathematical formalisms ofregular expressions, context-free grammars, and to showtheir applications to computer languages. To illustrate low level machine languages and compiler techniques."
            },
            {
                id: "6CCS3COV",
                title: "6CCS3COV Computer Vision",
                credits: 15,
                lecturer: "Dr Michael Spratling",
                assessment: "65% written examination, 35% coursework",
                description: "Computer Vision is concerned with the automatic interpretation and analysis of images. The goal is to enable computers to understand visual information in a similar way to humans. Such an ability is fundamental for solving many problems in areas such as industrial inspection, medical image analysis, robot navigation, biometrics, surveillance and security. This module aims to provide a comprehensive introduction to the subject, covering the basic concepts, methodologies and tools of image analysis and interpretation. This module will also explore the biological visual system, which has solved the problem of vision far better than contemporary computer vision systems. This will highlight the limitations of computer vision and suggest approaches for building improved, biologically-inspired, vision systems."
            },
            {
                id: "6CCS3CSL",
                title: "6CCS3CSL Computer Science Logic",
                credits: 15,
                lecturer: "Dr Hana Chockler",
                assessment: "100% written examination",
                description: "This module intends to show the importance of formal, logical modelling in the development of hardware and software systems. The module introduces variouslogical formalisms and shows how they can be used as specification, design andvertification tools in Computer Science and IT. The module presents alsoformalisms for knowledge representation and reasoning used in AI systems."
            },
            {
                id: "6CCS3HCI",
                title: "6CCS3HCI Human-Computer Interaction",
                credits: 15,
                lecturer: "Dr Rita Borgo",
                assessment: "85% written examination, 15% coursework",
                description: ""
            },
            {
                id: "6CCS3VER",
                title: "6CCS3VER Formal Verification",
                credits: 15,
                lecturer: "Dr Hana Chockler, Professor Luca Vigano, Dr Daniele Magazzeni",
                assessment: "75% examination; 25% coursework",
                description: "This module covers the state-of-the art in Model Checking and Formal Verification, looking at formal models to represent systems, protocols, etc., and different formal techniques and tools for security verification and  model checking."
            },
            {
                id: "6CCS3WSN",
                title: "6CCS3WSN Algorithms for the World Wide Web and Social Networks",
                credits: 15,
                lecturer: "Professor Colin Cooper ",
                assessment: "100% written examination",
                description: "This module aims to provide students with a general introduction to algorithms for large online networks with a main focus on the www and social networks."
            },
            {
                id: "6CCS3SMT",
                title: "6CCS3SMT Software Measurement and Testing",
                credits: 15,
                lecturer: "Dr Hanna Chockler, Dr Jose Such",
                assessment: "100% written examination",
                description: "Module Aims: To convey an understanding of the basic elements of software design, development, and testing cycle. To be able to describe, apply and critique a number of well known software metrics for testing adequacy. To be able to describe and apply several techniques for checking software correctness that go beyond testing. "
            },
            {
                id: "6CCS3GRS",
                title: "6CCS3GRS Computer Graphics Systems",
                credits: 15,
                lecturer: "Dr Richard Overill",
                assessment: "100% written examination",
                description: "Module Aims: To introduce you to the computational, mathematical and physical principles underlying computer graphics systems. Upon following this module successfully you will be able to apply the computational, mathematical and physical principles that are introduced to create realistic 2D, 3D Wireframe and 3D rendered images and animations."
            },
            {
                id: "6CCS3PAL",
                title: "6CCS3PAL Parallel Algorithms",
                credits: 15,
                lecturer: "Professor Colin Cooper",
                assessment: "100% written examination",
                description: "Module Aims: To introduce classical results on parallel algorithmic design and to illustrate how they may be cleanly, concisely and efficiently expressed using the nested data-parallel paradigm. This module introduces the design principles and analysis techniques for parallel algorithms. On successful completion of this module you will understand the creation of efficient parallel algorithms in a range of application areas, including sorting, matrix and graph based problems."
            },
            {
                id: "6CCS3AIN",
                title: "6CCS3AIN Artificial Intelligence",
                credits: 15,
                lecturer: "Professor Simon Parsons and Dr Elizabeth Black",
                assessment: "80% written examination, 20% coursework",
                description: "Module Aims: To provide a grounding in artificial intelligence techniques used: to represent knowledge about theworld; to make decisions on the basis of that information; and to update what is known about the world."
            },
            {
                id: "6CCS3CIS",
                title: "6CCS3CIS Cryptography and Information Security",
                credits: 15,
                lecturer: "Professor Luca Vigano",
                assessment: "100% written examination",
                description: "Module aims: To introduce both theoretical and practical aspects of cryptography, authentication and information security. On successful completion of this module you should be able to understand the relevant mathematical techniques associated with cryptography; understand the principles of cryptographic techniques and perform implementations of selected algorithms in this area; appreciate the application of security techniques in solving real-life security problems in practical systems."
            },
            {
                id: "6CCS3AIP",
                title: "6CCS3AIP Artificial Intelligence Planning",
                credits: 15,
                lecturer: "Dr Amanda Coles and Dr Daniele Magazzeni",
                assessment: "75% written examination, 25% coursework",
                description: "This module covers the state-of-the-art in Artificial Intelligence planning, looking at the theoretical details behind planning; the implementation of planning techniques; and how planning can be used effectively in application."
            }
        ],
        isCore: false,
        term: "1st term"
    },
    term2: {
        moduleList: [
            {
                id: "6CCS3DSM",
                title: "6CCS3DSM Distributed Systems",
                credits: 15,
                lecturer: "Dr Simon Miles",
                assessment: "100% written examination",
                description: "Module Aims: To provide an overall understanding of the basic concepts and practical technology of distributed computing. To provide an in-depth understanding of the considerations applied in designing software for distributed systems. To give students knowledge of algorithmic and architectural techniques used to address these considerations. To provide means of assessing how well novel technologies are able to handle faults in distributed systems."
            },
            {
                id: "6CCS3COM",
                title: "6CCS3COM Computational Models",
                credits: 15,
                lecturer: "Professor Maribel Fernandez",
                assessment: "100% written examination",
                description: "The aim of this module is to describe formal languages and the main abstract models of computation, precisely and in enough detail to distinguish their essential aspects clearly."
            },
            {
                id: "6CCS3SAD",
                title: "6CCS3SAD Software Architecture and Design",
                credits: 15,
                lecturer: "Dr Hamza Hamza",
                assessment: "100% written examination",
                description: "Module Aims: To explore the practice of software architecting as applied to the development of enterprise software systems. To learn about software architecture, architecture patterns, frameworks, design patterns, pattern languages, layers of change, the architecting process and the practical process of software design and implementation. Ideas are put into practical perspective through an introduction to the UML2 superstructure and enterprise component middleware. To be able to function as a software architect; to have a broad knowledge of the issues, techniques and processes involved in architecture design; ability to design medium to large size software systems; proficiency in the UML2 superstructure to design architectures; to be able to work with and design metamodels and model transformations."
            },
            {
                id: "6CCS3SIA",
                title: "6CCS3SIA Software Engineering of Internet Applications",
                credits: 15,
                lecturer: "Professor Stefan Edelkamp",
                assessment: "100% written examination",
                description: "This module will cover different approaches for building internet applications and the choice of design techniques and technologies involved from a software engineering perspective, considering issues of efficiency, modularity and maintainability."
            },
            {
                id: "6CCS3NSE",
                title: "6CCS3NSE Network Security",
                credits: 15,
                lecturer: "Professor Luca Vigano, Dr Jose Such",
                assessment: "100% written examination",
                description: "Module Aims: To introduce the underlying concepts and practical applications of information security engineering at a level that reflects the current state-of-the-art."
            },
            {
                id: "6CCS3OME",
                title: "6CCS3OME Optimisation Methods",
                credits: 15,
                lecturer: "Dr Kathleen Steinhoefel",
                assessment: "100% written examination",
                description: "Module Aims: To introduce various discrete optimisation problems, efficient algorithms for solving these problems, and general algorithmic techniques which can be applied to a wide range of optimisation problems. The emphasis is put on network optimisation problems and on general optimisation techniques. To discuss applications of optimisation problems in communication systems, computer networks, manufacturing, scheduling, and resource allocation."
            },
            {
                id: "6CCS3PRE",
                title: "6CCS3PRE Pattern Recognition",
                credits: 15,
                lecturer: "Dr Michael Spratling, Dr Hak-Keung Lam",
                assessment: "65% written examination, 35% coursework",
                description: "Module Aims: To introduce both statistical and neural network theory and approaches for solving pattern recognition problems. To understand, analyse and assess material of direct relevance to the subject matter as described in advanced textbooks. To be aware of different methods, and be able to describe their main features and should have some awareness of the relative merits and appropriate applications for each method. Will be able to apply these methods competently to well-defined problems in standard contexts."
            },
            {
                id: "6CCS3TSP",
                title: "6CCS3TSP Text Searching and Processing",
                credits: 15,
                lecturer: "Professor Costas Iliopoulos, Dr Solon Pissis",
                assessment: "100% written examination",
                description: "This unit is devoted to algorithms processing strings and texts efficiently. These types of algorithms are used for software design in the domains of operating systems utilities, search engines on the Internet, data retrieval systems, analysis of genetic sequences, and natural language processing, for example."
            }
        ],
        isCore: false,
        term: "2nd term"
    }
};

window.streamData = {
    "PCCS": [
        "6CCS3PAL",
        "6CCS3CIS",
        "6CCS3CFL",
        "6CCS3OME"
    ],
    "IS": [
        "6CCS3INS",
        "6CCS3PAL",
        "6CCS3GRS",
        "6CCS3CIS",
        "6CCS3NSE",
        "6CCS3SAD",
        "6CCS3SIA"
    ],
    "SE": [
        "6CCS3SMT",
        "6CCS3PAL",
        "6CCS3DSM",
        "6CCS3SAD",
        "6CCS3SIA",
        "6CCS3VER",
        "6CCS3CFL",
        "6CCS3HCI"
    ],
    "AI": [
        "6CCS3AIN",
        "6CCS3AIP",
        "6CCS3OME",
        "6CCS3AMS",
        "6CCS3COV",
        "6CCS3PRE"
    ]
}
