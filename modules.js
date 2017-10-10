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
                term: "1st term",
                selected: true
            }
        ],
        isCore: true
    },
    optional: {
        moduleList: [
            {
                id: "6CCSOPT",
                title: "Optional module",
                credits: 15,
                term: "2nd term"
            },
            {
                id: "6CCSAI",
                title: "6CCSAI Some Sort of AI Module",
                credits: 15,
                term: "1st term"
            }
        ],
        isCore: false
    }
};
