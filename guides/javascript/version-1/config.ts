// This is the config for the a version
// We currently only support a single version

import path from "path";

// isDefault has to be set to true for the version which will be deployed. Meaning, there can be multiple version folders, but only one can be deployed
export default {
    // These settings are ignored on DB level for now 
    settings: {
        name: "V1",
        slug: "v1",
        isDefault: true,
    },
    // Sidebar configuration goes here
    // It is an array of pages, sections or links
    // Each page/section can have multiple pages
    // This is used to create a sidebar and link the content of a page to its corresponding sidebar item
    sidebar: [
        {
            type: "section",
            label: "Getting Started",
            visibility: "PUBLIC",
            pages: [
                {
                    // Page can only have two attributes: type and path
                    type: "page",
                    // Relative to the version folder
                    path: "./getting-started/introduction.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/introduction/what-is-javascript.mdx",
                            pages: [],
                        },
                        {
                            type: "page",
                            path: "./getting-started/introduction/history.mdx",
                            pages: [],
                        },
                        {
                            type: "page",
                            path: "./getting-started/introduction/setting-up-your-environment.mdx",
                            pages: [
                                {
                                    type: "page",
                                    path: "./getting-started/introduction/setting-up-your-environment/installing-nodejs.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/introduction/setting-up-your-environment/choosing-code-editor.mdx",
                                }
                            ],
                        },
                    ],
                },
                {
                    type: "page",
                    path: "./getting-started/basics.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/basics/variables-and-data-types.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/basics/operators.mdx",
                            pages: [
                                {
                                    type: "page",
                                    path: "./getting-started/basics/operators/arithmetic.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/basics/operators/assignment.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/basics/operators/comparison.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/basics/operators/logical.mdx",
                                },
                            ],
                        },
                        {
                            type: "page",
                            path: "./getting-started/basics/control-flow.mdx",
                            pages: [
                                {
                                    type: "page",
                                    path: "./getting-started/basics/control-flow/conditional-statements.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/basics/control-flow/switch-case.mdx",
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./getting-started/functions.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/functions/declaration.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/functions/arrow-functions.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/functions/callback-functions.mdx",
                            pages: [
                                {
                                    type: "page",
                                    path: "./getting-started/functions/callback-functions/understanding.mdx",
                                },
                                {
                                    type: "page",
                                    path: "./getting-started/functions/callback-functions/examples.mdx",
                                }
                            ]
                        }
                    ]
                }
            ],
        },
        {
            type: "section",
            label: "Advanced Concepts",
            visibility: "PUBLIC",
            pages: [
                {
                    type: "page",
                    path: "./advanced-concepts/objects.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./advanced-concepts/objects/methods.mdx",
                        },
                        {
                            type: "page",
                            path: "./advanced-concepts/objects/destructuring.mdx",
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./advanced-concepts/arrays.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./advanced-concepts/arrays/methods.mdx",
                        },
                        {
                            type: "page",
                            path: "./advanced-concepts/arrays/destructuring.mdx",
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./advanced-concepts/loops.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./advanced-concepts/loops/for.mdx",
                        },
                        {
                            type: "page",
                            path: "./advanced-concepts/loops/for-of.mdx",
                        },
                        {
                            type: "page",
                            path: "./advanced-concepts/loops/for-in.mdx",
                        },
                        {
                            type: "page",
                            path: "./advanced-concepts/loops/while.mdx",
                        },
                        {
                            type: "page",
                            path: "./advanced-concepts/loops/do-while.mdx",
                        }
                    ]
                }
            ]
        }
    ],
};