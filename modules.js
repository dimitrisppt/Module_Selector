if (window.moduleData !== void 0) {
    console.log("window.moduleData being overwritten; previous value is:\n", window.moduleData);
}

window.moduleData = {
    core: {
        moduleList: [
            {
                id: "6CCSCOMP",
                title: "6CCSCOMP Compulsory Module",
                credits: 30,
                selected: true
            }
        ],
        isCore: true,
        term: "Both terms"
    },
    term1: {
        moduleList: [
            {
                id: "6CCSOPT",
                title: "Optional module",
                credits: 15,
            },
            {
                id: "6CCSAI",
                title: "6CCSAI Some Sort of AI Module",
                credits: 15,
            }
        ],
        isCore: false,
        term: "1st term"
    },
    term2: {
        moduleList: [
            {
                id: "6CCSTEMP",
                title: "6CCSTEMP Temporary Placeholder Module",
                credits: 15
            }
        ],
        isCore: false,
        term: "2nd term"
    }
};
