// This is the config for the a version
// We currently only support a single version
// isDefault has to be set to true for the version which will be deployed. Meaning, there can be multiple version folders, but only one can be deployed
export default {
    // These settings are ignored on DB level for now 
    settings: {
        name: "V1",
        slug: "v1",
        isDefault: false,
    },
    // Sidebar configuration goes here
    // It is an array of pages, sections or links
    // Each page/section can have multiple pages
    // This is used to create a sidebar and link the content of a page to its corresponding sidebar item
    sidebar: [
        {
            type: "section",
            label: "Getting started with JavaScript",
            visibility: "PUBLIC",
            pages: [
                {
                    // Page can only have two attributes: type and path
                    type: "page",
                    // Relative to the version folder
                    path: "./getting-started/introduction-to-javascript.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/introduction-to-javascript/what-is-javascript.mdx",
                            pages: [],
                        },
                        {
                            type: "page",
                            path: "./getting-started/introduction-to-javascript/history-of-javascript.mdx",
                            pages: [],
                        },
                        {
                            type: "page",
                            path: "./getting-started/introduction-to-javascript/setting-up-your-environment.mdx",
                            pages: [
                                {
                                    type: "page",
                                    path: "./getting-started/introduction-to-javascript/setting-up-your-environment/installing-nodejs.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/introduction-to-javascript/setting-up-your-environment/choosing-code-editor.mdx",
                                }
                            ],
                        },
                    ],
                },
                {
                    type: "page",
                    path: "./getting-started/javascript-basics.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/javascript-basics/variables-and-data-types.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/javascript-basics/operators.mdx",
                            pages: [
                                {
                                    type: "page",
                                    path: "./getting-started/javascript-basics/operators/arithmetic.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/javascript-basics/operators/assignment.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/javascript-basics/operators/comparison.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/javascript-basics/operators/logical.mdx",
                                },
                            ],
                        }
                    ]
                }
            ],
        },
    ],
};