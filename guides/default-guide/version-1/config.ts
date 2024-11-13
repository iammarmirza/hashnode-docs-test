export default {
    settings: {
        name: "V1",
        slug: "v1",
        isDefault: true,
    },
    sidebar: [
        {
            type: "page",
            path: "./index.mdx",
        },
        {
            type: "page",
            path: "./get-started.mdx",
            pages: [
                {
                    type: "page",
                    path: "./get-started/binary-quick-start.mdx",
                },
                {
                    type: "page",
                    path: "./get-started/quick-start.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./key-concepts.mdx",
            pages: [
                {
                    type: "page",
                    path: "./key-concepts/basic-concepts.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/env-vars.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/ingestion.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/staging.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/partitioning.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/historical.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/query.mdx",
                },
                {
                    type: "page",
                    path: "./key-concepts/high-availability.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./installation.mdx",
            pages: [
                {
                    type: "page",
                    path: "./installation/standalone.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./installation/standalone/docker.mdx",
                        },
                        {
                            type: "page",
                            path: "./installation/standalone/systemd.mdx",
                        },
                        {
                            type: "page",
                            path: "./installation/standalone/kubernetes-helm.mdx",
                        },
                        {
                            type: "page",
                            path: "./installation/standalone/eks.mdx",
                        },
                        {
                            type: "page",
                            path: "./installation/standalone/ecs.mdx",
                        },
                    ],
                },
                {
                    type: "page",
                    path: "./installation/distributed.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./installation/distributed/docker.mdx",
                        },
                        {
                            type: "page",
                            path: "./installation/distributed/systemd.mdx",
                        },
                        {
                            type: "page",
                            path: "./installation/distributed/kubernetes-helm.mdx",
                        },
                    ],
                },
            ],
        },
        {
            type: "page",
            path: "./features.mdx",
            pages: [
                {
                    type: "page",
                    path: "./features/dashboards.mdx",
                },
                {
                    type: "page",
                    path: "./features/alerts.mdx",
                },
                {
                    type: "page",
                    path: "./features/retention.mdx",
                },
                {
                    type: "page",
                    path: "./features/stats.mdx",
                },
                {
                    type: "page",
                    path: "./features/rbac.mdx",
                },
                {
                    type: "page",
                    path: "./features/oidc.mdx",
                },
                {
                    type: "page",
                    path: "./features/tiering.mdx",
                },
                {
                    type: "page",
                    path: "./features/s3-ssec-support.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./log-ingestion.mdx",
            pages: [
                {
                    type: "page",
                    path: "./log-ingestion/agents.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./log-ingestion/agents/fluentbit.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/agents/vector.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/agents/otel-collector.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/agents/log-stash.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/agents/syslog-ng.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/agents/log4j2.mdx",
                        },
                    ],
                },
                {
                    type: "page",
                    path: "./log-ingestion/applications.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./log-ingestion/applications/go.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/applications/java.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/applications/javascript.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/applications/python.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/applications/rust.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/applications/csharp.mdx",
                        },
                    ],
                },
                {
                    type: "page",
                    path: "./log-ingestion/cdn.mdx",
                    pages: [
                        {
                            type: "page",
                            path: "./log-ingestion/cdn/cloudflare.mdx",
                        },
                        {
                            type: "page",
                            path: "./log-ingestion/cdn/fastly.mdx",
                        },
                    ],
                },
            ],
        },
        {
            type: "page",
            path: "./otel.mdx",
        },
        {
            type: "page",
            path: "./cli.mdx",
            pages: [
                {
                    type: "page",
                    path: "./cli/overview.mdx",
                },
                {
                    type: "page",
                    path: "./cli/get-started.mdx",
                },
                {
                    type: "page",
                    path: "./cli/query.mdx",
                },
                {
                    type: "page",
                    path: "./cli/user-management.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./integrations.mdx",
            pages: [
                {
                    type: "page",
                    path: "./integrations/grafana.mdx",
                },
                {
                    type: "page",
                    path: "./integrations/kafka.mdx",
                },
                {
                    type: "page",
                    path: "./integrations/redpanda.mdx",
                },
                {
                    type: "page",
                    path: "./integrations/tetragon-epbf.mdx",
                },
                {
                    type: "page",
                    path: "./integrations/prometheus.mdx",
                },
                {
                    type: "page",
                    path: "./integrations/alertmanager.mdx",
                },
                {
                    type: "page",
                    path: "./integrations/llm.mdx",
                },
                {
                    type: "page",
                    path: "./aws/lambda.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./api.mdx",
            pages: [
                {
                    type: "page",
                    path: "./api/overview.mdx",
                },
                {
                    type: "page",
                    path: "./api/log-stream.mdx",
                },
                {
                    type: "page",
                    path: "./api/log-ingestion.mdx",
                },
                {
                    type: "page",
                    path: "./api/retention.mdx",
                },
                {
                    type: "page",
                    path: "./api/log-query.mdx",
                },
                {
                    type: "page",
                    path: "./api/rbac.mdx",
                },
                {
                    type: "page",
                    path: "./api/alerts.mdx",
                },
                {
                    type: "page",
                    path: "./api/health.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./aws.mdx",
            pages: [
                {
                    type: "page",
                    path: "./aws/overview.mdx",
                },
                {
                    type: "page",
                    path: "./aws/kinesis.mdx",
                },
                {
                    type: "page",
                    path: "./aws/lambda.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./azure.mdx",
            pages: [
                {
                    type: "page",
                    path: "./azure/apim.mdx",
                },
                {
                    type: "page",
                    path: "./azure/service-bus.mdx",
                },
            ],
        },
        {
            type: "page",
            path: "./telemetry.mdx",
        },
        {
            type: "page",
            path: "./contributing.mdx",
        },
        {
            type: "page",
            path: "./faq.mdx",
        },
    ],
};