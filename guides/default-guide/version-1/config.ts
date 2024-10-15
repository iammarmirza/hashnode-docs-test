export default {
  settings: { name: "V1", slug: "v1", isDefault: true },
  sidebar: [
    {
      type: "section",
      label: "Home",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./home/introduction.mdx", pages: [] },
        {
          type: "page",
          path: "./home/quickstart.mdx",
          pages: [
            {
              type: "page",
              path: "./home/quickstart/create-an-account.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./home/quickstart/run-first-analysis.mdx",
              pages: [],
            },
            { type: "page", path: "./home/quickstart/fix-issues.mdx", pages: [] },
            {
              type: "page",
              path: "./home/quickstart/activate-new-repositories.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./home/quickstart/invite-team-members.mdx",
              pages: [],
            },
            { type: "page", path: "./home/quickstart/auto-onboard.mdx", pages: [] },
          ],
        },
        { type: "page", path: "./home/configuration.mdx", pages: [] },
        {
          type: "page",
          path: "./home/analyzers.mdx",
          pages: [
            { type: "page", path: "./home/analyzers/python.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/ansible.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/c.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/c-c.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/docker.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/java.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/javascript.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/php.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/ruby.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/rust.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/scala.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/secrets.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/shell.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/sql.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/terraform.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/test-coverage.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/go.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/swift.mdx", pages: [] },
            { type: "page", path: "./home/analyzers/kotlin.mdx", pages: [] },
          ],
        },
        { type: "page", path: "./home/community-analyzers.mdx", pages: [] },
        {
          type: "page",
          path: "./home/transformers.mdx",
          pages: [
            { type: "page", path: "./home/transformers/autopep8.mdx", pages: [] },
            { type: "page", path: "./home/transformers/black.mdx", pages: [] },
            { type: "page", path: "./home/transformers/isort.mdx", pages: [] },
            { type: "page", path: "./home/transformers/gofmt.mdx", pages: [] },
            { type: "page", path: "./home/transformers/gofumpt.mdx", pages: [] },
            { type: "page", path: "./home/transformers/rustfmt.mdx", pages: [] },
            { type: "page", path: "./home/transformers/prettier.mdx", pages: [] },
            { type: "page", path: "./home/transformers/rubocop.mdx", pages: [] },
            { type: "page", path: "./home/transformers/scalafmt.mdx", pages: [] },
            { type: "page", path: "./home/transformers/standardjs.mdx", pages: [] },
            { type: "page", path: "./home/transformers/standardrb.mdx", pages: [] },
            { type: "page", path: "./home/transformers/yapf.mdx", pages: [] },
            {
              type: "page",
              path: "./home/transformers/google-java-format.mdx",
            },
            {
              type: "page",
              path: "./home/transformers/dotnet-format.mdx",
            },
            {
              type: "page",
              path: "./home/transformers/clang-format.mdx",
            },
            {
              type: "page",
              path: "./home/transformers/php-cs-fixer.mdx",
            },
            { type: "page", path: "./home/transformers/ktlint.mdx", },
            {
              type: "page",
              path: "./home/transformers/swift-format.mdx",
            },
            {
              type: "page",
              path: "./home/transformers/ruff-formatter.mdx",
            },
          ],
        },
        {
          type: "page",
          path: "./home/issues.mdx",
          pages: [
            { type: "page", path: "./home/issues/ignore-rules.mdx", pages: [] },
          ],
        },
        { type: "page", path: "./home/metrics.mdx", pages: [] },
        { type: "page", path: "./home/autofix.mdx", pages: [] },
        {
          type: "page",
          path: "./home/access-control.mdx",
          pages: [
            {
              type: "page",
              path: "./home/access-control/managing-members-in-your-team.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./home/access-control/managing-peoples-access-to-team-with-roles.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./home/access-control/managing-access-to-your-teams-repositories.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Dashboard",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./dashboard/account-management.mdx", pages: [] },
        {
          type: "page",
          path: "./dashboard/team-view.mdx",
          pages: [
            { type: "page", path: "./dashboard/team-view/home.mdx", pages: [] },
            { type: "page", path: "./dashboard/team-view/repositories.mdx", pages: [] },
            { type: "page", path: "./dashboard/team-view/reports.mdx", pages: [] },
            { type: "page", path: "./dashboard/team-view/members.mdx", pages: [] },
            { type: "page", path: "./dashboard/team-view/settings.mdx", pages: [] },
          ],
        },
        {
          type: "page",
          path: "./dashboard/repository-view.mdx",
          pages: [
            { type: "page", path: "./dashboard/repository-view/overview.mdx", pages: [] },
            { type: "page", path: "./dashboard/repository-view/issues.mdx", pages: [] },
            { type: "page", path: "./dashboard/repository-view/metrics.mdx", pages: [] },
            { type: "page", path: "./dashboard/repository-view/reports.mdx", pages: [] },
            { type: "page", path: "./dashboard/repository-view/history.mdx", pages: [] },
            {
              type: "page",
              path: "./dashboard/repository-view/repository-settings.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./dashboard/repository-view/monorepos.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Integrations",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./integrations/slack.mdx", pages: [] },
        { type: "page", path: "./integrations/jira.mdx", pages: [] },
        { type: "page", path: "./integrations/vanta.mdx", pages: [] },
        {
          type: "page",
          path: "./integrations/sso.mdx",
          pages: [
            { type: "page", path: "./integrations/sso/saml-sso-scim-okta.mdx", pages: [] },
            {
              type: "page",
              path: "./integrations/sso/saml-sso-scim-onelogin.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./integrations/sso/saml-sso-scim-azure-ad.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./integrations/sso/saml-sso-scim-google-workspace.mdx",
              pages: [],
            },
          ],
        },
        { type: "page", path: "./integrations/vs-code.mdx", pages: [] },
      ],
    },
    {
      type: "section",
      label: "Enterprise Server",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./enterprise-server/overview.mdx", pages: [] },
        {
          type: "page",
          path: "./enterprise-server/requirements.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server/installation.mdx",
          pages: [
            {
              type: "page",
              path: "./enterprise-server/installation/standalone-cluster.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/installation/existing-kubernetes-cluster.mdx",
              pages: [],
            },
            { type: "page", path: "./enterprise-server/installation/airgapped-installation.mdx", pages: [] },
            { type: "page", path: "./enterprise-server/installation/helm.mdx", pages: [] },
          ],
        },
        {
          type: "page",
          path: "./enterprise-server/vcs-integrations.mdx",
          pages: [
            {
              type: "page",
              path: "./enterprise-server/vcs-integrations/github.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/vcs-integrations/gitlab.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/vcs-integrations/google-source-repositories.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/vcs-integrations/bitbucket-cloud.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/vcs-integrations/bitbucket-datacenter.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/vcs-integrations/azure-devops-services.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./enterprise-server/configuration.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server/enterprise-upgrade-guide.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server/control-panel.mdx",
          pages: [
            {
              type: "page",
              path: "./enterprise-server/control-panel/user-management.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/control-panel/scim-provisioning-on-okta.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server/control-panel/license.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./enterprise-server/integration-jira-cloud.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server/integration-slack.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server/troubleshooting.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server/frequently-asked-questions.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Developers",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./developers/cli.mdx", pages: [] },
        { type: "page", path: "./developers/webhooks.mdx", pages: [] },
        {
          type: "page",
          path: "./developers/api.mdx",
          pages: [
            {
              type: "page",
              path: "./developers/api/personal-access-token.mdx",
              pages: [],
            },
            { type: "page", path: "./developers/api/viewer.mdx", pages: [] },
            { type: "page", path: "./developers/api/account.mdx", pages: [] },
            { type: "page", path: "./developers/api/team.mdx", pages: [] },
            { type: "page", path: "./developers/api/repository.mdx", pages: [] },
            { type: "page", path: "./developers/api/check.mdx", pages: [] },
            { type: "page", path: "./developers/api/analysis-run.mdx", pages: [] },
            { type: "page", path: "./developers/api/analyzer.mdx", pages: [] },
            { type: "page", path: "./developers/api/transformer.mdx", pages: [] },
            { type: "page", path: "./developers/api/issue.mdx", pages: [] },
            { type: "page", path: "./developers/api/metric.mdx", pages: [] },
            { type: "page", path: "./developers/api/reference-enums.mdx", pages: [] },
            { type: "page", path: "./developers/api/reference-scalars.mdx", pages: [] },
            {
              type: "page",
              path: "./developers/api/reference-pagination.mdx",
              pages: [],
            },
            { type: "page", path: "./developers/api/reports.mdx", pages: [] },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Help",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./help/frequently-asked-questions.mdx",
          pages: [],
        },
        { type: "page", path: "./help/troubleshooting.mdx", pages: [] },
        { type: "page", path: "./help/support.mdx", pages: [] },
        { type: "page", path: "./help/permissions.mdx", pages: [] },
      ],
    },
  ],
};
