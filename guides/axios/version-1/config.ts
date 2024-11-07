// This is the config for the a version
// We currently only support a single version

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
                    pages: []
                },
                {
                    type: "page",
                    path: "./getting-started/examples.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./getting-started/examples/get-requests.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/examples/post-requests.mdx",
                        },
                        {
                            type: "page",
                            path: "./getting-started/examples/put-requests.mdx",
                        }
                    ]
                },
            ],
        },
        {
            type: "section",
            label: "Axios API",
            visibility: "PUBLIC",
            pages: [
                {
                    type: "page",
                    path: "./axios-api/axios-api.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/axios-instance.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/request-config.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/response-schema.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/config-defaults.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/interceptors.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/handling-errors.mdx",
                },
                {
                    type: "page",
                    path: "./axios-api/cancellation.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./axios-api/cancellation/cancelling-requests.mdx",
                        },
                        {
                            type: "page",
                            path: "./axios-api/cancellation/cancel-token.mdx",
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./axios-api/url-encoding-bodies.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./axios-api/url-encoding-bodies/browser.mdx",
                        },
                        {
                            type: "page",
                            path: "./axios-api/url-encoding-bodies/nodejs.mdx",
                        },
                        {
                            type: "page",
                            path: "./axios-api/url-encoding-bodies/automatic-serialization.mdx",
                        }
                    ]
                },
                {
                    type: "page",
                    path: "./axios-api/multipart-bodies.mdx",
                }
            ]
        }
    ],
};
